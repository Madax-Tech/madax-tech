import { render } from 'solid-js/web'
import { Router } from '@solidjs/router'
import { lazy, Suspense } from 'solid-js'
import type { Component, ParentProps } from 'solid-js'
import Loading from './components/templates/Loading'
import { styled } from 'solid-styled-components'
import './index.css'

const Page = styled('div')`
    width: 100%;
    height: calc(100dvh - 60px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    overflow-y: auto;
    scrollbar-gutter: stable both-edges;
    position: relative;
`

const Body = styled('main')`
    background-color: var(--color5);
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 20px;
    padding: 20px;
`

const Navbar: Component = lazy(() => import('./components/templates/Navbar'))
const App: Component = lazy(() => import('./App'))
const Footer: Component = lazy(() => import('./components/templates/Footer'))

const Layout: Component<ParentProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            <Page>
                <Body>
                    {children}
                </Body>
                <Footer />
            </Page>
        </>
    )
}

render(() => {
    return (
        <Suspense fallback={<Loading />}>
            <Router root={Layout}>
                <App />
            </Router>
        </Suspense>
    )
}, document.getElementById('root')!)