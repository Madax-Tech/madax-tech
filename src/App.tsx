import { lazy, Suspense } from "solid-js"
import Loading from "./components/templates/Loading"

const HomePage = lazy(() => import("./pages/Home"))
const AboutPage = lazy(() => import("./pages/About"))
const ContactPage = lazy(() => import("./pages/Contact"))
const ProjectsPage = lazy(() => import("./pages/Projects"))
const ServicesPage = lazy(() => import("./pages/Services"))

const App = () => {
    return (
        <Suspense fallback={<Loading />}>
            <section id="home"><HomePage /></section>
            <section id="services"><ServicesPage /></section>
            <section id="projects"><ProjectsPage /></section>
            <section id="about"><AboutPage /></section>
            <section id="contact"><ContactPage /></section>
        </Suspense>
    )
}

export default App