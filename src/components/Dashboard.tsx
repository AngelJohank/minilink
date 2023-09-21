import type { Component } from 'solid-js'
import Bio from './Bio'

const Dashboard: Component = () => {
  return (
    <div class="h-full pb-4">
      <h1 class="text-2xl pb-4">Dashboard</h1>
      <div class="rounded-lg border bg-gray-800 border-gray-700 h-full">
        <Bio />
      </div>
    </div>
  )
}

export default Dashboard
