import React from 'react'
import styled from 'styled-components'

function Top() {
    return (
        <Wrap>
            <Container>
                People
            </Container>
            <Container2>
                Screen
            </Container2>
        </Wrap>
    )
}

export default Top

const Container = styled.div`
  height: 90vh;
  width: 50vh;
  background-color:red;
  border-radius: 2%;
  text-align: center;
`
const Container2 = styled.div`
  height: 90vh;
  width: 200vh;
  background-color:blue;
  margin-left: 10px;
  border-radius: 2%;
  text-align: center;
`
const Wrap = styled.div`
  padding: 0;
  display: flex;

`