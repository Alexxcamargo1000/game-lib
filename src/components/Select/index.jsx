import { Container } from "./styles.js";
import { useState } from "react";
const values = [
  {value: 'XBOX'},
  {value: 'PS5'},
  {value: 'PC'},
  {value: 'TODAS'},
]
export function Select({ id, title, options = values }) {
  const [value, setValue] = useState('');
  const handleOptionChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <Container htmlFor={id}>
      <span>{title}</span>
      <select id={id} value={value} onChange={handleOptionChange } >
        {!value && <option disabled value=""></option>}
        {options.map(option => {
          return <option key={`id_${option.value}`} value={option.value}>{option.value}</option>
        })}
       
      </select>
    </Container>
  );
}
