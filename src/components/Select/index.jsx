import { Container } from "./styles.js";

export function Select({ id, title, value, children, ...rest }) {
  return (
    <Container htmlFor={id}>
      <span>{title}</span>
      <select id={id} value={value} {...rest} required>
        {children}
      </select>
    </Container>
  );
}
