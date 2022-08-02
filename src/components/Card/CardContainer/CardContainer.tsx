import { Center, Heading, Text } from "@chakra-ui/react";
import { memo } from "react";
import { CardContainerType } from "../../../helpers/prismic/types/Home/normalized";
import { CardSlider } from "../../carrousels/CardCarrousel";
import { Card } from "../Card/Card";

interface CardContainerProps {
  data?: CardContainerType[];
}

const CardContainer = ({ data }: CardContainerProps) => {
  return (
    <section>
      {data?.map((cardContainer) => {
        if (!cardContainer?.cards) return null;

        if (cardContainer?.showAsCarousel) {
          return (
            <div key={cardContainer?.title}>
              <Heading textAlign="center" size="lg" mb="10px">
                {cardContainer?.title}
              </Heading>
              <Text textAlign="center" fontSize="md">
                {cardContainer?.description}
              </Text>
              <CardSlider cards={cardContainer?.cards}></CardSlider>
            </div>
          );
        }
        return (
          <div>
            <Heading textAlign="center" size="lg" mb="10px">
              {cardContainer?.title}
            </Heading>
            <Text textAlign="center" fontSize="md">
              {cardContainer?.description}
            </Text>
            {cardContainer?.cards.map((card) => {
              if (!card?.title || !card?.content) return null;

              return (
                <div>
                  <Center>
                    <Card card={card} />
                  </Center>
                </div>
              );
            })}
          </div>
        );
      })}
    </section>
  );
};

export default memo(CardContainer);
