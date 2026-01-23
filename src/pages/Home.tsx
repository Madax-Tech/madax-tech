import { type Component } from 'solid-js'
import { styled } from 'solid-styled-components'

const Container = styled("div")`
    text-align: center;
`

const Home: Component = () => {
    return (
        <Container>
            A
        </Container>
    )
}

export default Home