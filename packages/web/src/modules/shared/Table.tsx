import * as React from 'react'

export default function Table() {
  return (
    <div className="bg-white shadow-md rounded my-6">
      <table className="text-left w-full border-collapse">
        <thead>
          <tr>
            <th className="py-4 px-6 bg-gray-200 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
              Nombres
            </th>
            <th className="py-4 px-6 bg-gray-200 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
              Apellidos
            </th>
            <th className="py-4 px-6 bg-gray-200 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
              Numero
            </th>
            <th className="py-4 px-6 bg-gray-200 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
              Tipo
            </th>
            <th className="py-4 px-6 bg-gray-200 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
              Fecha
            </th>
            <th className="py-4 px-6 bg-gray-200 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
              Estado
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="py-4 px-6 border-b border-grey-200">Johan</td>
            <td className="py-4 px-6 border-b border-grey-200">Villamil</td>
            <td className="py-4 px-6 border-b border-grey-200">1013646891</td>
            <td className="py-4 px-6 border-b border-grey-200">CC</td>
            <td className="py-4 px-6 border-b border-grey-200">22/22/1994</td>
            <td className="py-4 px-6 border-b border-gray-200 text-teal-100">
              <span className="flex rounded-full bg-teal-500 uppercase px-2 py-1 text-xs font-bold mr-3 justify-center">
                Validate
              </span>
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-4 px-6 border-b border-grey-200">Johan</td>
            <td className="py-4 px-6 border-b border-grey-200">Villamil</td>
            <td className="py-4 px-6 border-b border-grey-200">1013646891</td>
            <td className="py-4 px-6 border-b border-grey-200">CC</td>
            <td className="py-4 px-6 border-b border-grey-200">22/22/1994</td>
            <td className="py-4 px-6 border-b border-gray-200 text-indigo-100">
              <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3 justify-center">
                Prospect
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
