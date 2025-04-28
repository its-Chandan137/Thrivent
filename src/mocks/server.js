import { setupServer } from "msw/node";
import { rest } from "msw";

// Mock data
const mockStudentData = { id: 1, name: "John Doe", courses: ["Math", "Science"] };
const mockProfileData = { id: 1, email: "john@example.com", role: "student" };

// Define mock API endpoints
export const server = setupServer(
  rest.get("/dashboard/student", (req, res, ctx) => {
    return res(ctx.status(401), ctx.json({ message: "Unauthorized" }));
  }),
  rest.post("/dashboard/student", (req, res, ctx) => {
    return res(ctx.status(201), ctx.json({ ...mockStudentData, message: "Student data created" }));
  }),
  rest.put("/dashboard/student/1", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ ...mockStudentData, name: "Updated John Doe" }));
  }),
  rest.patch("/dashboard/student/1", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ ...mockStudentData, courses: ["Math", "Science", "History"] }));
  }),
  rest.delete("/dashboard/student/1", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: "Student data deleted" }));
  }),
  rest.get("/user/profile", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockProfileData));
  }),
  rest.put("/user/profile", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ ...mockProfileData, email: "john.updated@example.com" }));
  }),
  // Catch-all for invalid routes
  rest.get("*", (req, res, ctx) => {
    return res(ctx.status(404), ctx.json({ message: "Route not found" }));
  }),
  rest.post("*", (req, res, ctx) => {
    return res(ctx.status(404), ctx.json({ message: "Route not found" }));
  })
);

// Start the server
server.listen();

// Stop the server on cleanup
process.on("SIGTERM", () => server.close());
process.on("SIGINT", () => server.close());