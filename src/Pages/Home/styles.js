import styled from 'styled-components';

export const Container = styled.section`
    width: 100vw;
    height: 100vh;
    position: relative;

    nav {
        position: absolute;
        top: 0;
        background-color: transparent;
        width: 100vw;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: 1rem 0;

        img {
            width: 60px;
        }

        ul {
            display: flex;
            justify-content: space-around;
            align-items: center;

            li {
                list-style-type: none;

                a {
                    text-decoration: none;
                    color: #FFF;
                    font-weight: 500;
                    text-transform: uppercase;
                    margin: 0 1rem;
                    cursor: pointer;
                    font-size: 1rem;
                }
            }
        }

    }
`

export const LiveButton = styled.button`
    padding: 0.5rem 1.5rem;
    background-color: #A00000;
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
    border-radius: 2rem;
    transition: all .5s;
    &:hover {
        background-color: #B02428;
    }
`

export const Banner = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('/images/banner-main.png');
    background-position: center;
    background-size: cover;
`

export const BannerOverlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`

export const WrapperMainContent = styled.div`
    position: absolute;
    top: 50%;
    left: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1, span {
        color: #fff;
        text-align: center;
    }

    h1 {
        font-weight: 500;
        font-size: 2rem;
        text-transform: uppercase;
    }

    span {
        font-size: 1.5rem;
    }

    div.live__buttons {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        margin-top: 5rem;

        a {
            background-color: transparent;
            color: #fff;
            border: 1px solid #fff;
            padding: 1rem 2rem;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.5s;
        }

        a:hover,
        a:focus {
            background-color: #f1f1f1;
            color: #000;
        }
    }
`