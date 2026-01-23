import { render } from 'solid-js/web'
import App from './App'
import './index.css'
import { Router } from '@solidjs/router'
import Navbar from './components/templates/Navbar'
import type { Component, ParentProps } from 'solid-js'

const Layout: Component<ParentProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <footer>Footer</footer>
        </>
    )
}

render(() => {
    return (
        <Router root={Layout}>
            <App />
        </Router>
    )
}, document.getElementById('root')!)