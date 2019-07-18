import is from 'ramda/es/is'
import map from 'ramda/es/map'
import * as React from 'react'

export interface ITable {
  columns: Array<{
    title: string
    component?: React.ComponentType<any> | React.ComponentType<any>
    key?: ((data: any) => string) | string
    className?: (data: any) => string
  }>
  data?: any[]
}

export default function Table({ columns, data = [] }: ITable) {
  const renderValue = (
    column: {
      component?: React.ComponentType<any> | React.ComponentType<any>
      title: string
      key?: ((data: any) => string) | string
      className?: (data: any) => string
    },
    value: any
  ) => {
    if (column.component) {
      return <column.component data={value} />
    }

    if (is(Function, column.key)) {
      // @ts-ignore
      return column.key && column.key(value)
    }

    // @ts-ignore
    return column.key && value[column.key]
  }

  return (
    <div className="bg-white shadow-md rounded my-6">
      <table className="text-left w-full border-collapse">
        <thead>
          <tr>
            {map(
              column => (
                <th
                  className="py-4 px-6 bg-gray-200 font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
                  key={`${column.key}`}
                >
                  {column.title}
                </th>
              ),
              columns
            )}
          </tr>
        </thead>
        <tbody>
          {map(
            user => (
              <tr className="hover:bg-gray-100" key={`${user.id}`}>
                {map(
                  column => (
                    <td
                      className="py-4 px-6 border-b border-grey-200"
                      key={`${column.key}-${user.id}`}
                    >
                      <span
                        className={column.className && column.className(user)}
                      >
                        {renderValue(column, user)}
                      </span>
                    </td>
                  ),
                  columns
                )}
              </tr>
            ),
            data
          )}
        </tbody>
      </table>
    </div>
  )
}
