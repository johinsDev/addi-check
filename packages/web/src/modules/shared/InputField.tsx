import { FieldProps } from 'formik'
import * as React from 'react'
import Input, { IInputProps } from './Input'

export const InputField = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}: FieldProps & IInputProps): JSX.Element => {
  const errorText = touched[field.name] && errors[field.name]

  return <Input {...field} {...props} errorText={errorText} />
}
