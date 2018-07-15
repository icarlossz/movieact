import React from 'react'
import { ButtonBack } from '../components/ButtonBack'
import styled from 'styled-components'

export const Error = () => (
  <div>
    <Title>The page doesn't exist!</Title>
    <ButtonBack />
  </div>
)

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
`