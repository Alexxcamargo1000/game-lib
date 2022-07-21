import { Container } from "./styles";
export function CarouselItem({ img, alt, link }) {


  return (
    <Container>
      <a href={link}>
        <img src={img} alt="" />    
      </a>
    </Container>
  );
}
