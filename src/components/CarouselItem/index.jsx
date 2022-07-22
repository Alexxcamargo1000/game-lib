import { Container } from "./styles";
export function CarouselItem({ img, link }) {
  return (
    <Container>
      <a href={link}>
        <img src={img} alt="" />
      </a>
    </Container>
  );
}
