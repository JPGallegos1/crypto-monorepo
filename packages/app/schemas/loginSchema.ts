import * as yup from 'yup'

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .email('The email is invalid')
      .required('Email is a required field'),
    password: yup
      .string()
      .required('Password is a required field')
      .min(3, 'Password should have at least 3 characters')
      .max(8, 'Password must be at most 8 characters'),
  })
  .required()
