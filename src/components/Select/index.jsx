import { Container } from "./styles.js";
import { useState } from "react";
const opts = [
  {value: 'XBOX'},
  {value: 'PS5'},
  {value: 'PC'},
  {value: 'TODAS'},
]
export function Select({ id, title, value, options = opts, ...rest }) {
  

  return (
    <Container htmlFor={id}>
      <span>{title}</span>
      <select id={id} value={value} {...rest} >
        {!value && <option disabled value=""></option>}
        {options.map(option => {
          return <option key={`id_${option.value}`} value={option.value}>{option.value}</option>
        })}
       
      </select>
    </Container>
  );
}
