import { createRef, useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { CarouselItem } from "../CarouselItem";
import { Container, Buttons } from "./styles";
export function Carousel({children}) {
  const carousel = useRef(null)


  function handleItemRight(e) {
    e.preventDefault();
    carousel.current.scrollLeft += 266;
  }

  function handleItemLeft(e) {
    e.preventDefault();
    carousel.current.scrollLeft -= 266;
  }
  return (
    <>
    <Container ref={carousel}>
        {children}
    </Container>

    <Buttons>
      <button onClick={handleItemLeft}>
        <FiArrowLeft size={24}/>
      </button>
      <button onClick={handleItemRight}>
        <FiArrowRight size={24}/>
      </button>
    </Buttons>
    </>
  );
}
