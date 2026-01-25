import { styled } from "solid-styled-components"
import { lazy } from "solid-js"

const HomePage = lazy(() => import("@/pages/Home"))
const AboutPage = lazy(() => import("@/pages/About"))
const ProjectsPage = lazy(() => import("@/pages/Projects"))

const Body = styled('main')`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`

const App = () => {
    return (
        <Body>
            <HomePage id="home" />
            <ProjectsPage id="projects" />
            <AboutPage id="about" />
        </Body >
    )
}

export default App