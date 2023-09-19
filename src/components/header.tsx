import type { Component } from 'solid-js'
import { A } from '@solidjs/router'

const Header: Component = () => {
  return (
    <header class="p-4 font-normal animate-fade-down">
      <nav class="flex items-center justify-between max-w-5xl mx-auto">
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
          <A href="/login">
            Log in
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="inline-block h-4"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </A>
        </div>
      </nav>
    </header>
  )
}

export default Header
