import * as React from 'react'
import { IAction, initialState, IState, usersReducer } from './reducer'

export type Dispatch = (action: IAction) => void

// CONTEXT
const UserStateContext = React.createContext<IState | undefined>(undefined)

const UserDispatchContext = React.createContext<Dispatch | undefined>(undefined)

interface IUserProvider {
  children: React.ReactNode
}

function UserProvider({ children }: IUserProvider) {
  // @ts-ignore
  const [state, dispatch] = React.useReducer(usersReducer, initialState)

  const _state = React.useMemo(() => state, [state])
  const _dispatch = React.useMemo(() => dispatch, [state])

  return (
    <UserStateContext.Provider value={_state}>
      <UserDispatchContext.Provider value={_dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  )
}

function useUserState() {
  const context = React.useContext(UserStateContext)

  if (context === undefined) {
    throw new Error('useUserState must be used within a UserProvider')
  }

  return context
}

function useUserDispatch() {
  const context = React.useContext(UserDispatchContext)

  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider')
  }

  return context
}

function useUser(): [IState, Dispatch] {
  return [useUserState(), useUserDispatch()]
}

export { UserProvider, useUserState, useUserDispatch, useUser }
