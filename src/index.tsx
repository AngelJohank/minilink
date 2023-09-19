/* @refresh reload */
import { render } from 'solid-js/web'

// Check root element
const root = document.getElementById('root')

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  )
}

// tailwind setup
import './assets/index.css'

// app setup
import { Router, Routes, Route } from '@solidjs/router'
import { lazy } from 'solid-js'

const App = lazy(() => import('./App'))
const Login = lazy(() => import('./Login'))

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={App} />
        <Route path="/login" component={Login} />
      </Routes>
    </Router>
  ),

  root!,
)
