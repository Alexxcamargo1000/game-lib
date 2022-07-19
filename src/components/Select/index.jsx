import { Container } from "./styles.js";
import { useState } from "react";
const opts = [
  {value: 'XBOX'},
  {value: 'PS5'},
  {value: 'PC'},
  {value: 'TODAS'},
]
export function Select({ id, title, value, children, ...rest }) {
  

  return (
    <Container htmlFor={id}>
      <span>{title}</span>
      <select id={id} value={value} {...rest} >
        {children}
      </select>
    </Container>
  );
}
