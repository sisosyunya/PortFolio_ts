import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'


const Container = styled.div`
background-color: black;
color: white;
height:100vh;
font-family:'Noto Sans JP', sans-serif;
`;

const Maintitle = styled.h1`
margin: 0%;
padding-top:20rem;
opacity: 70%;
`

const Home: NextPage = () => {
  return (
    <Container>
      <Maintitle>
      About Syunya Fujisawa
      </Maintitle>
    </Container>
  )
}

export default Home
