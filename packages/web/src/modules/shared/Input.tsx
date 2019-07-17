import { FormikErrors } from 'formik'
import * as React from 'react'

export interface IInputProps extends React.HTMLProps<HTMLInputElement> {
  label: string
  errorText?: string | false | FormikErrors<any> | undefined
}

export default function Input({ label, errorText, ...rest }: IInputProps) {
  return (
    <>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {label}
      </label>
      <input
        {...rest}
        className={`outline-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 ${
          errorText ? 'border-red-500' : ''
        }`}
      />
      {errorText && <p className="text-red-500 text-xs italic">{errorText}</p>}
    </>
  )
}
