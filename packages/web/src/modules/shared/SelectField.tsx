import { FieldProps } from 'formik'
import * as React from 'react'
import Select, { ISelectProps } from './Select'

export const SelectField = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}: FieldProps & ISelectProps): JSX.Element => {
  const errorText = touched[field.name] && errors[field.name]

  return <Select {...field} {...props} errorText={errorText} />
}
