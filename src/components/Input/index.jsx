import {Container } from './styles.js'
export function Input({id, type, title}) {
  return (
    <Container htmlFor={id}>
      <span>{title}</span>
      <input type={type}  id={id} />
    </Container>
  )
}