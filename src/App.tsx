import { lazy } from "solid-js"
import { Route, Router } from "@solidjs/router"

const Navbar = lazy(() => import("./components/templates/Navbar"))
const HomePage = lazy(() => import("./pages/Home"))
const AboutPage = lazy(() => import("./pages/About"))
const ContactPage = lazy(() => import("./pages/Contact"))
const ProjectsPage = lazy(() => import("./pages/Projects"))
const ServicesPage = lazy(() => import("./pages/Services"))

const App = () => {
    return (
        <>
            <Navbar />
            <Router>
                <Route path="/" component={HomePage} />
                <Route path="/services" component={ServicesPage} />
                <Route path="/projects" component={ProjectsPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/about" component={AboutPage} />
            </Router>
        </>
    )
}

export default App