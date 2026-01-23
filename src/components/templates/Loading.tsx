import { type Component } from "solid-js";
import { styled } from "solid-styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const Loader = styled.div`
    position: relative;
    width: 100px;
    height: 100px;

    div {
        position: absolute;
        width: 20px;
        height: 30px;
        background: currentColor;
        animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }

    div:nth-child(1) {
        left: 8%;
        animation-delay: -0.24s;
    }
    div:nth-child(2) {
        left: 32%;
        animation-delay: -0.12s;
    }
    div:nth-child(3) {
        left: 56%;
        animation-delay: 0s;
    }

    @keyframes lds-facebook {
        0% {
        top: 8px;
        height: 64px;
        }
        50%,
        100% {
        top: 24px;
        height: 32px;
        }
    }
`;

const Loading: Component = () => (
    <Container>
        <Loader role="status" aria-label="loading">
            <div></div>
            <div></div>
            <div></div>
        </Loader>
    </Container>
);

export default Loading;