import { Center } from "@chakra-ui/react";
import { Card, CardType } from "../Card/Card";
import { Slide, Slider, SliderProps } from "../commons/Slider";

interface CardSliderProps {
  cards: CardType[];
}

export function CardSlider({ cards }: CardSliderProps) {
  if (cards.length === 1) {
    return (
      <Center>
        <Card card={cards[0]} />
      </Center>
    );
  }

  const settings: SliderProps = {
    spaceBetween: 50,
    slidesPerView: cards.length < 3 ? cards.length : 3,
    navigation: cards.length >= 3 && true,
    draggable: cards.length >= 3 && true,
    loop: cards.length >= 3 && true,
  };

  return (
    <Slider settings={settings}>
      {cards.map((card) => (
        <Slide key={card.title}>
          <Card card={card} />
        </Slide>
      ))}
    </Slider>
  );
}
