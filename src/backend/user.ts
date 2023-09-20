import { createSignal } from 'solid-js'
import { db, user } from './gun'
import { notify } from '../utils/notify'

// username and is LoggedIn state
export const [username, setUsername] = createSignal('')
export const isLoggedIn = (): boolean => username().length > 0

// data used in account functions
interface Credentials {
  alias: string
  password: string
}

// account functions
export const signup = (credentials: Credentials): void => {
  const { alias, password } = credentials

  user.create(alias, password, response => {
    if ('err' in response) {
      notify({
        status: 'error',
        title: 'Error al crear el usuario',
        text: response.err
      })
    } else {
      login(credentials)
    }
  })
}

export const login = (credentials: Credentials): void => {
  const { alias, password } = credentials

  user.auth(alias, password, response => {
    if ('err' in response) {
      notify({
        status: 'error',
        title: 'Error al iniciar sesión',
        text: response.err
      })
    }
  })
}

export const logout = (): void => {
  user.leave()
  setUsername('')
}

// on auth notification and username update
db.on('auth', () => {
  user.get('alias').once((alias: string) => {
    setUsername(alias)
    console.log(`Logged in as ${alias}`)
  })
})
