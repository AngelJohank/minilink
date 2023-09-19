import type { Component } from 'solid-js'
import heroImg from '../assets/hero.svg'

const Hero: Component = () => {
  return (
    <section
      class="flex items-center p-10 animate-fade-right"
      style="height: calc(100vh - 72px)"
    >
      <img src={heroImg} alt="minilink" class='w-1/2' />
    </section>
  )
}

export default Hero
