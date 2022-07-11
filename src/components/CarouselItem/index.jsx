import { Container } from "./styles";
export function CarouselItem({
  img = "https://macmagazine.com.br/wp-content/uploads/2022/03/11-call-of-duty-warzone.jpg",
  alt = "",
  link = "#",
}) {
  return (
    <Container>
      <a href={link}>
        <img src={img} alt={alt} />
      </a>
    </Container>
  );
}
