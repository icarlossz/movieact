import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ButtonBack = () => (
  <Button to='/'>Back</Button>
)

const Button = styled(Link)`
  background: #f55;
  padding: 10px 25px;
  border: none;
  color: #fff;
  font-size: 15px;
  text-transform: uppercase;
  margin: 10px 0;
  transition: .3s;
  &:hover {
    color: #fff;
  }
`;