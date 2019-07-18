import equals from 'ramda/es/equals'
import find from 'ramda/es/find'
import propEq from 'ramda/es/propEq'
import { Dispatch } from '.'
import { IUser } from './reducer'

export function getUsers(dispatch: Dispatch) {
  fetch('/api/users.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status)
      }
      return response.json()
    })
    .then((json: IUser[]) => {
      dispatch({ type: 'LOAD_USERS', data: json })
    })
    .catch(err => {
      // tslint:disable-next-line
      console.log(err)
    })
}

export async function validateUser(dispatch: Dispatch, user: IUser) {
  try {
    const [usersApi, judicials] = await Promise.all([
      fetch('/api/users.json').then(response => {
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status)
        }
        return response.json()
      }),
      fetch('/api/judicial.json').then(response => {
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status)
        }
        return response.json()
      }),
    ])

    const currentUser = find(propEq('id', user.id))(usersApi)
    const userJudicial = find(propEq('id', user.id))(judicials)

    dispatch({ type: 'LOADS_JUDICIALS', data: judicials })

    //  Stub Validate User Exists
    if (!currentUser) {
      throw new Error('User not found in the government data')
    }

    //  Stub Validate User Has judicial background
    if (userJudicial) {
      throw new Error('User has judicial background')
    }

    //  Validate all data is correct for user
    if (!equals(currentUser, user)) {
      throw new Error('User`s information is not correct')
    }

    dispatch({ type: 'ADD_USER_TO_CONTACT', userId: user.id })

    setTimeout(() => {
      dispatch({ type: 'CLEAN_ADD_NEW_CONTACT' })
    }, 2000)
  } catch (error) {
    dispatch({ type: 'ERROR', error })
  }
}
