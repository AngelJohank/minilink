import { createSignal } from 'solid-js'
import { db, user } from './gun'
import { notify } from '../utils/notify'

// interface used in login functions
interface Credentials {
  alias: string
  password: string
}

// username state
export const [username, setUsername] = createSignal('')

// logged in state
export const isLoggedIn = (): boolean => username().length > 0

// login functions
export const createUser = (credentials: Credentials): void => {
  const { alias, password } = credentials

  user.create(alias, password, (response) => {
    if ('err' in response) {
      notify({ status: 'error', title: 'Error al crear el usuario', text: response.err })
    } else {
      logIn(credentials)
    }
  })
}

export const logIn = (credentials: Credentials): void => {
  const { alias, password } = credentials

  user.auth(alias, password, (response) => {
    if ('err' in response) {
      notify({ status: 'error', title: 'Error al iniciar sesión', text: response.err })
    } else {
      notify({ status: 'success', title: `Bienvenido ${alias}`, text: 'Logueado exitosamente' })
    }
  })
}

export const logOut = (): void => {
  user.leave()
  setUsername('')
  notify({ status: 'success', title: 'Cerraste sesión exitosamente', text: 'Hasta pronto' })
}

// on auth notification and username update
db.on('auth', () => {
  user.get('alias').once((alias: string) => {
    setUsername(alias)
    console.log(`Logged in as ${alias}`)
  })
})
