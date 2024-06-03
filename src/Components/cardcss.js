import styled from "styled-components";
export const CardContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
gap:.75rem
`
export const Card = styled.div`
padding: 1rem;
width: 230px;
background-color: #273c75;
border-radius: 0.5rem;
background: linear-gradient(45deg, #233669, #2a407d);
display: flex;
align-items:center;
justify-content: center;
flex-direction: column;
margin-bottom:1rem;
`
export const Title = styled.h2`
text-align: center;
color: #fff;
text-transform: uppercase;
font-weight: 500;
letter-spacing: 0.1rem;
`
export const Hr = styled.hr`
border-bottom:.1rem solid #8c7ae6;
border-top: .1rem #273c75;
border-radius: 1rem;
margin-top:2rem ;
margin-bottom: 2rem;
`
export const Container = styled.div`
width: 100%;
    display: flex;
    justify-content: space-between;
text-align: center;
`
export const Tempeture = styled.div`
font-size: 2rem;
color: #fff;
display: flex;

`
export const Item = styled.div`
margin-top: .8rem;
color: #fff;
font-size: .72rem;
text-transform: uppercase;
`
export const HeaderText = styled.h2`
text-align: center;
color: #fff;
padding-top: 1rem;
`