import { createSignal } from 'solid-js'
import { db, user } from './gun'

// interface used in login functions
interface Credentials {
  alias: string
  password: string
}

// username state
export const [username, setUsername] = createSignal('')

// logged in state
export const isLoggedIn = () => (username() ? true : false)

// login functions
export function createUser(credentials: Credentials) {
  const { alias, password } = credentials

  user.create(alias, password, cb => {
    if ('err' in cb) {
      alert(cb.err)
    } else {
      logIn(credentials)
    }
  })
}

export function logIn(credentials: Credentials) {
  const { alias, password } = credentials

  user.auth(alias, password, cb => {
    if ('err' in cb) alert(cb.err)
  })
}

export function logOut() {
  user.leave()
  setUsername('')
  console.log('Signed out')
}

// on auth notification and username update
db.on('auth', () => {
  user.get('alias').once((alias: string) => {
    setUsername(alias)
    console.log(`Logged in as ${alias}`)
  })
})
