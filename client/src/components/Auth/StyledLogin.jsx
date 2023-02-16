import styled from "styled-components";


export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 80vh;
    width: 30vw;
    background: rgb(255,255,255,0.15);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    backdrop-filter: blur(8.5px);
    border-radius: 10px;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
`

export const WelcomeText = styled.h2`
    margin: 3rem 0 2rem 0;
    align-items: center;
    display: flex;
    flex-direction: column;
    color: #FABA7E;
    
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 20%;
    width: 100%;
`
export const ButtonStyled = styled.button`
color: aliceblue;
margin-top: 30px;
width: 25vh;
height: 5vh;
box-shadow: 0 1px 2px 0px #161515e8;
border-radius: 2rem;
border: none;
background: #FABA7E;
text-transform: uppercase;
letter-spacing: 0.2rem;
&:hover{
    background: #f8b16e;
    box-shadow: 0 1px 4px 0px #ecebebe8;
}
`

