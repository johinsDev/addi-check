import concat from 'ramda/es/concat'
import find from 'ramda/es/find'
import findIndex from 'ramda/es/findIndex'
import propEq from 'ramda/es/propEq'
import update from 'ramda/es/update'

// INTERFACES
export interface IState {
  users: IUser[]
  judicials: IUser[]
  error?: string
  addNewContact: boolean
}

export interface IAction {
  type:
    | 'ADD_USER_TO_CONTACT'
    | 'ADD_PROSPECT'
    | 'LOAD_USERS'
    | 'LOADS_JUDICIALS'
    | 'ERROR'
    | 'CLEAN_ADD_NEW_CONTACT'
  data?: IUser[]
  error?: string
  userId?: number | string
  newUser?: IUser
}

export interface IUser {
  avatar: string
  email: string
  expeditionDate: string
  first_name: string
  id: number | string
  is_valid: boolean
  last_name: string
  number: number
  typeIdentification: string
}

// INITIAL STATE
export const initialState = {
  users: [],
  judicials: [],
  error: '',
  addNewContact: false,
}

export function usersReducer(state: IState = initialState, action: IAction) {
  switch (action.type) {
    case 'LOAD_USERS': {
      return {
        ...state,
        users: action.data,
      }
    }
    case 'LOADS_JUDICIALS': {
      return {
        ...state,
        judicials: action.data,
      }
    }
    case 'ADD_PROSPECT': {
      return {
        ...state,
        users: concat([action.newUser], state.users),
      }
    }
    case 'ADD_USER_TO_CONTACT': {
      const currentUser = find(propEq('id', action.userId))(state.users)

      const usersEdit = update(
        findIndex(propEq('id', action.userId))(state.users),
        {
          ...currentUser,
          is_valid: true,
        },
        state.users
      )

      return {
        ...state,
        users: usersEdit,
        addNewContact: true,
      }
    }
    case 'ERROR': {
      return {
        ...state,
        error: action.error,
      }
    }
    case 'CLEAN_ADD_NEW_CONTACT': {
      return {
        ...state,
        addNewContact: false,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
