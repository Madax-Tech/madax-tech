import { styled } from "solid-styled-components"
import { FaBrandsSquareWhatsapp, FaBrandsSquareLinkedin, FaBrandsSquareInstagram } from "solid-icons/fa"
import Contact from "@/components/atoms/Contact"

const Container = styled("footer")`
    position: relative;
    width: 100%;
    height: 100px;
    background-color: var(--color1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 20px;
`

const Row = styled("div")`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
`

const Text = styled("p")`
    font-size: clamp(15px, 5vw, 30px);
    color: var(--color5);
`

export default () => {
    return (
        <Container>
            <Row>
                <Contact size={40} color="var(--color5)" component={FaBrandsSquareWhatsapp} />
                <Contact size={40} color="var(--color5)" component={FaBrandsSquareLinkedin} />
                <Contact size={40} color="var(--color5)" component={FaBrandsSquareInstagram} />
            </Row>
            <Text>© 2026 Madax Tech LTDA.</Text>
        </Container>
    )
}