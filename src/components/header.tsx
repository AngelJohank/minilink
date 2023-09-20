import { Show, type Component } from 'solid-js'
import { A } from '@solidjs/router'
import { isLoggedIn, logOut } from '../backend/user'

const Header: Component = () => {
  return (
    <header class="p-4 font-normal animate-fade-down">
      <nav class="flex items-center justify-between max-w-screen-lg mx-auto">
        <div>
          <A href="/">
            <img
              class="h-10 w-10"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="minilink"
            />
          </A>
        </div>

        <div class="flex gap-4">
          <A href="/">Productos</A>
          <A href="/">Características</A>
          <A href="/">Q&A</A>
        </div>

        <div class="p-2 px-4 rounded-xl bg-rose-600 hover:bg-rose-800">
          <Show when={isLoggedIn()}>
            <button onClick={logOut}>Cerrar sesión</button>
          </Show>

          <Show when={!isLoggedIn()}>
            <A href="/login">
              Iniciar Sesión
              <svg
                class="w-4 h-4 ml-1 inline-block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </A>
          </Show>
        </div>
      </nav>
    </header>
  )
}

export default Header
