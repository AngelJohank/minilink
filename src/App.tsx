import type { Component } from 'solid-js'
import Header from './components/header'
import Hero from './components/Hero'

const App: Component = () => {
  return (
    <div class="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
    </div>
  )
}

export default App
