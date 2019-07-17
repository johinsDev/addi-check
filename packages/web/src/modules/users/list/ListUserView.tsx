import * as React from 'react'
import Table from '../../shared/Table'

export default function ListUsersView() {
  return (
    <div className="flex items-center justify-start w-full h-full flex-col py-16">
      <h1 className="text-4xl font-thin">List users</h1>
      <Table />
    </div>
  )
}
