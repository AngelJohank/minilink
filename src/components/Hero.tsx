import { Show, type Component } from 'solid-js'
import { A } from '@solidjs/router'
import heroImg from '../assets/hero.svg'
import { isLoggedIn } from '../backend/user'
import Dashboard from './Dashboard'

const Hero: Component = () => {
  return (
    <div class="p-14 animate-fade-right" style="height: calc(100vh - 72px)">
      <Show when={!isLoggedIn()} fallback={<Dashboard />}>
        <section class="flex items-center justify-between md:justify-center h-full max-w-screen-lg mx-auto">
          <div>
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              Todos tus enlaces en un solo lugar
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl animate-fade-left animate-delay-100">
              ¡Bienvenido a Minilinks, el lugar perfecto para organizar todos
              tus enlaces a tus redes sociales de manera sencilla y
              descentralizada gracias a&nbsp
              <A
                href="https://gun.eco/"
                target="_blank"
                class="text-rose-600 underline"
              >
                gunjs
              </A>
            </p>
            <A
              href="/login"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Empezar
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </A>
            <A
              href="https://github.com/AngelJohank/minilink"
              target="_blank"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Github
            </A>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex lg:animate-fade-up">
            <img src={heroImg} alt="mockup" />
          </div>
        </section>
      </Show>
    </div>
  )
}

export default Hero
