import { type Component, JSX } from 'solid-js'
import { createStore } from 'solid-js/store'
import { logIn, createUser } from './backend/user'

const Login: Component = () => {
  // form credentials
  const [credentials, SetCredentials] = createStore({
    alias: '',
    password: '',
  })

  // handle inputs
  const onInput: JSX.EventHandler<HTMLInputElement, InputEvent> = event => {
    const input = event.currentTarget.name
    const value = event.currentTarget.value

    if (input in credentials) {
      SetCredentials({ ...credentials, [input]: value })
    }
  }

  return (
    <section>
      <label>
        <span>Username</span>
        <input type="text" name="alias" onInput={onInput} />
      </label>

      <label>
        <span>Password</span>
        <input type="password" name="password" onInput={onInput} />
      </label>

      <button onClick={() => logIn(credentials)}>Sign in</button>
      <button onClick={() => createUser(credentials)}>Sign up</button>
    </section>
  )
}

export default Login
