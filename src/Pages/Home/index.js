import { Container, Banner, BannerOverlay, LiveButton, WrapperMainContent } from './styles';

const Home = () => {
    return (
        <Container>
            <nav>
                <img src="/images/brand.svg" alt="brand" aria-hidden />
                <ul>
                    <li>
                        <a href="www.google.com">Home</a>
                    </li>
                    <li>
                        <a href="www.google.com">Sobre</a>
                    </li>
                    <li>
                        <a href="www.google.com">Eventos</a>
                    </li>
                    <li>
                        <a href="www.google.com">Missões</a>
                    </li>
                    <li>
                        <a href="www.google.com">Programação</a>
                    </li>
                    <li>
                        <a href="www.google.com">Contato</a>
                    </li>
                </ul>
                <LiveButton>Live</LiveButton>
            </nav>
            <Banner>
                <BannerOverlay />
                <WrapperMainContent>
                    <h1>Onde cada membro é um discípulo</h1>
                    <span>Junte-se a nós para servir neste sábado.</span>
                    <div className="live__buttons">
                        <a href="www.google.com">Assistir no Youtube</a>
                        <a href="www.google.com">Assistir no Facebooke</a>
                    </div>
                </WrapperMainContent>
            </Banner>
        </Container>
    )
}

export default Home;