import React from 'react';

import Banner from './banner/banner'
import Card from '../../components/cardCourse/card'
import styled from 'styled-components';




export default function Center() {
  return (

    <>
        <Banner />
        <Container>
            <Card />
            <Card />
            <Card />
        </Container>
    </>
  );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
`; 