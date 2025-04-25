import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const createFormSchema = (fields) => {
  return yup.object().shape(
    fields.reduce((acc, field) => {
      let validator;
      if (field.type === 'email') {
        validator = yup.string().email(`${field.label} must be a valid email`);
      } else if (field.type === 'password') {
        validator = yup
          .string()
          .min(8, `${field.label} must be at least 8 characters`)
          .matches(/[a-zA-Z]/, `${field.label} must contain at least one letter`)
          .matches(/[0-9]/, `${field.label} must contain at least one number`);
      } else {
        validator = yup.string();
      }
      if (field.required) {
        validator = validator.required(`${field.label} is required`);
      }
      acc[field.label.toLowerCase().replace(' ', '-')] = validator;
      return acc;
    }, {})
  );
};

const useFormWithValidation = (fields) => {
  const schema = createFormSchema(fields);
  return useForm({
    resolver: yupResolver(schema),
    defaultValues: fields.reduce((acc, field) => {
      acc[field.label.toLowerCase().replace(' ', '-')] = field.value || '';
      return acc;
    }, {}),
  });
};

export { createFormSchema, useFormWithValidation };