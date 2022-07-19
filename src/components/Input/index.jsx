import {Container } from './styles.js'
export function Input({id, type, title, value, ...rest}) {
  return (
    <Container htmlFor={id}>
      <span>{title}</span>
      <input type={type}  id={id} {...rest} value={value}/>
    </Container>
  )
}