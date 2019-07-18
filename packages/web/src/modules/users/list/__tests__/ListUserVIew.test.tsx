import React from 'react'
import ReactDOM from 'react-dom'
import { UserProvider } from '../../state'
import ListUsersView from '../ListUserView'

test('renders a number input with a label "Favorite Number"', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <UserProvider>
      <ListUsersView />
    </UserProvider>,
    div
  )

  expect(div.querySelector('h1')!.textContent).toBe('List users')
})
