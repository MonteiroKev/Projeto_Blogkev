import { Box, Center, VStack } from "@chakra-ui/react";
import {
  cards,
  cards_carrousel,
  horizontal_cards
} from "./components-mock.json";
import { Card } from "./components/Card/Card";

import { HorizontalCard } from "./components/Card/HorizontalCard";
import { CardSlider } from "./components/carrousels/CardCarrousel";
import { Header } from "./components/commons/Header";

function App() {
  return (
    <div>
      <Header />
      <Center>
        <Box maxW="1280px">
          <VStack spacing="64px" marginY="64px">
            {horizontal_cards.map((horizontal_card, cards) => (
              <HorizontalCard
                key={horizontal_card.title}
                card={horizontal_card}
              />
            ))}
            {cards.map((card) => (
              <Card key={card.title} card={card} />
            ))}
          </VStack>
          {cards_carrousel && <CardSlider cards={cards_carrousel} />}
        </Box>
      </Center>
    </div>
  );
}

export default App;
