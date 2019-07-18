import split from 'ramda/es/split'
import * as React from 'react'
// @ts-ignore
import SweetAlert from 'sweetalert2-react'
import Table from '../../shared/Table'
import { formatDate } from '../../utils/formatDate'
import { useUser } from '../state'
import { IUser } from '../state/reducer'
import { validateUser } from '../state/services'

export default function ListUsersView() {
  const [state, dispatch] = useUser()

  return (
    <div className="flex items-center justify-start w-full h-full flex-col py-16">
      <h1 className="text-4xl font-thin">List users</h1>

      <SweetAlert
        show={!!state.error}
        title="Error validating user"
        type="error"
        text={state.error}
      />

      <SweetAlert
        show={state.addNewContact}
        title="User valid"
        type="success"
        text="User add to contacts list"
      />

      <Table
        data={state.users}
        columns={[
          {
            title: 'Nombres',
            key: (user: IUser) => `${user.first_name} ${user.last_name}`,
          },
          {
            title: 'Numero Documento',
            key: 'number',
          },
          {
            title: 'Tipo Documento',
            key: 'typeIdentification',
          },
          {
            title: 'Fecha',
            key: (user: IUser) =>
              formatDate(new Date(split('T', user.expeditionDate)[0])),
          },
          {
            title: 'Estado',
            className: (user: IUser) =>
              `flex rounded-full  uppercase px-2 py-1 text-xs font-bold mr-3 justify-center ${
                user.is_valid ? 'text-teal-100' : 'text-indigo-100'
              } ${user.is_valid ? 'bg-teal-500' : 'bg-indigo-500'}`,
            key: (user: IUser) => (user.is_valid ? 'Valid' : 'Prospect'),
          },
          {
            title: 'Accion',
            component: ({ data }: { data: IUser }) =>
              !data.is_valid ? (
                <button
                  onClick={() => validateUser(dispatch, data)}
                  className="px-2 py-2 text-white font-light tracking-wider bg-gray-900 rounded focus:outline-none"
                  type="submit"
                >
                  Validar
                </button>
              ) : (
                <span />
              ),
          },
        ]}
      />
    </div>
  )
}
