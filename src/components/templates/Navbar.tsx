import { FaSolidBars, FaBrandsSquareWhatsapp, FaBrandsSquareLinkedin, FaBrandsSquareInstagram } from "solid-icons/fa"
import { createSignal, onCleanup, onMount, Show, type Component } from "solid-js"
import { styled } from "solid-styled-components"
import { A } from "@solidjs/router"

//#region Desktop
const Desktop = styled("nav")`
    position: relative;
    width: 100%;
    height: 60px;
    background-color: var(--background1);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 20px;
    gap: 10px;
`
const DesktopBox = styled("div")`
    width: 33.33%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:first-child {
        justify-content: start;
    }

    &:last-child {
        justify-content: end;
    }
`
const DesktopItem = styled(A)`
    margin-left: 20px;
    color: var(--foreground1);
    cursor: pointer;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`
//#endregion
//#region Mobile
const Mobile = styled("nav")`
    position: relative;
    padding: 0 20px;
    width: 100%;
    height: auto;
    background-color: var(--background1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const MobileBox = styled("div")`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const MobileMenu = styled("div")`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 5px 0;
`
const MobileItem = styled(A)`
    width: 100%;
    text-align: center;
    padding: 10px 0;
    color: var(--foreground1);
    cursor: pointer;
    text-decoration: none;
    border: 1px solid var(--background2);

    &:hover {
        background-color: var(--background2);
    }
`
const MobileHamburger = styled(FaSolidBars)`
    display: none;
    color: var(--foreground1);
    width: 28px;
    height: 28px;
    cursor: pointer;

    @media (max-width: 1000px) {
        display: block;
        margin-left: 12px;
    }
`
const MobileContact = styled("div")`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
`
//#endregion

const Logo = styled(A)`
    color: var(--foreground1);
    font-size: clamp(16px, 10vw, 30px);
    font-weight: bold;
    left: 20px;
    text-decoration: none;
`

const Icon = styled("div")`
    transition: all 0.2s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        transform: scale(1.1);
        opacity: 0.8;
    }
`

type IconsProps = {
    size: number
    color: string
    component: Component<any>
}

const Contact: Component<IconsProps> = ({ size, color, component }) => {
    const Component = component
    return (
        <Icon>
            <Component style={{ width: `${size}px`, height: `${size}px`, color }} />
        </Icon>
    )
}

export default () => {

    const [open, setOpen] = createSignal<boolean>(false)
    const [size, setSize] = createSignal<number>(window.innerWidth)

    onMount(() => {
        const handleResize = () => setSize(window.innerWidth)
        window.addEventListener("resize", handleResize)
        onCleanup(() => window.removeEventListener("resize", handleResize))
    })

    return (
        <>
            <Show when={size() > 1000} >
                <Desktop>
                    <DesktopBox>
                        <Logo href="/">Madax Tech</Logo>
                    </DesktopBox>
                    <DesktopBox>
                        <DesktopItem href="/">Home</DesktopItem>
                        <DesktopItem href="/services">Services</DesktopItem>
                        <DesktopItem href="/projects">Projects</DesktopItem>
                        <DesktopItem href="/about">About</DesktopItem>
                    </DesktopBox>
                    <DesktopBox>
                        <Contact size={40} color="#25D366" component={FaBrandsSquareWhatsapp} />
                        <Contact size={40} color="#0077B5" component={FaBrandsSquareLinkedin} />
                        <Contact size={40} color="#E1306C" component={FaBrandsSquareInstagram} />
                    </DesktopBox>
                </Desktop>
            </Show>
            <Show when={size() <= 1000} >
                <Mobile>
                    <MobileBox>
                        <Logo href="/">Madax Tech</Logo>
                        <MobileHamburger onClick={() => setOpen(p => !p)} />
                    </MobileBox>
                    <Show when={open()}>
                        <MobileMenu>
                            <MobileItem href="/">Home</MobileItem>
                            <MobileItem href="/services">Services</MobileItem>
                            <MobileItem href="/projects">Projects</MobileItem>
                            <MobileItem href="/about">About</MobileItem>
                            <MobileContact>
                                <Contact size={35} color="#25D366" component={FaBrandsSquareWhatsapp} />
                                <Contact size={35} color="#0077B5" component={FaBrandsSquareLinkedin} />
                                <Contact size={35} color="#E1306C" component={FaBrandsSquareInstagram} />
                            </MobileContact>
                        </MobileMenu>
                    </Show>
                </Mobile>
            </Show >
        </>
    )
}