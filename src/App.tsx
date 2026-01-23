import { lazy, Suspense } from "solid-js"
import { Route } from "@solidjs/router"
import Loading from "./components/templates/Loading"

const HomePage = lazy(() => import("./pages/Home"))
const AboutPage = lazy(() => import("./pages/About"))
const ContactPage = lazy(() => import("./pages/Contact"))
const ProjectsPage = lazy(() => import("./pages/Projects"))
const ServicesPage = lazy(() => import("./pages/Services"))

const App = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Route path="/" component={HomePage} />
            <Route path="/services" component={ServicesPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="*" component={HomePage} />
        </Suspense>
    )
}

export default App