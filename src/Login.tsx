import { type Component, type JSX, createEffect } from 'solid-js'
import { createStore } from 'solid-js/store'
import { login, signup, isLoggedIn } from './backend/user'
import { A, useNavigate } from '@solidjs/router'

const Login: Component = () => {
  // check if the user is logged in
  createEffect(() => {
    if (!isLoggedIn()) return

    const navigate = useNavigate()
    navigate('/')
  })

  // form credentials
  const [credentials, SetCredentials] = createStore({
    alias: '',
    password: ''
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
    <section class="h-screen overflow-hidden bg-gray-900">
      <div class="flex flex-col items-center justify-center h-full px-6 py-8">
        <A
          href="/"
          class="flex items-center mb-6 text-2xl font-semibold text-white"
        >
          <img
            class="w-8 h-8 mr-2"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="logo"
          />
          Minilink
        </A>
        <div class="rounded-lg border bg-gray-800 border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
              Inicia sesión
            </h1>
            <div class="space-y-4 md:space-y-6">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-white"
                >
                  Usuario
                </label>
                <input
                  type="text"
                  name="alias"
                  id="email"
                  onInput={onInput}
                  class="sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="usuario@random.com"
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-white"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  onInput={onInput}
                  class="border m:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div class="flex justify-between">
                <button
                  type="button"
                  onClick={() => {
                    login(credentials)
                  }}
                  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
                >
                  Iniciar Sesión
                </button>
                <button
                  type="button"
                  onClick={() => {
                    signup(credentials)
                  }}
                  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
                >
                  Registrarse
                </button>
              </div>

              <p class="text-red-400 text-sm text-center">
                * Por favor no use algun usuario ni contraseña comprometedora
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
