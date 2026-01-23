import { styled } from "solid-styled-components"

const Container = styled("nav")`
    width: 100%;
    height: 60px;
    background-color: #333;
    display: flex;
    align-items: center;
    padding: 0 20px;
`

export default () => {
    return (
        <Container>
            <h1 style={{ color: "white", margin: 0, "font-size": "1.5rem" }}>My Website</h1>
        </Container>
    )
}