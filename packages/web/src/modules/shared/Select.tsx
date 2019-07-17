import { FormikErrors } from 'formik'
import * as React from 'react'

export interface ISelectProps extends React.HTMLProps<HTMLSelectElement> {
  label: string
  options: Array<{ name: string; id: string }>
  errorText?: string | false | FormikErrors<any> | undefined
}

export default function Select({
  label,
  options,
  errorText,
  ...rest
}: ISelectProps) {
  return (
    <>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {label}
      </label>
      <div className="relative mb-3">
        <select
          {...rest}
          className={`block outline-none appearance-none w-full bg-gray-200 border bg-gray-200 text-gray-700 py-3 px-4 pr-8 rounded ${
            errorText ? 'border-red-500' : ''
          }`}
        >
          {options.map((item: any) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute top-17 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      {errorText && <p className="text-red-500 text-xs italic">{errorText}</p>}
    </>
  )
}
