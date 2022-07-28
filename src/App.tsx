import { Center, VStack } from "@chakra-ui/react"
import { HorizontalCard } from "./components/Card/HorizontalCard"
import { Header } from "./components/commons/Header"

import { cards, horizontal_cards } from "./components-mock.json"
import { Card } from "./components/Card/Card"

function App() {
  return (
    <div>
      <Header />
      <Center>
        <VStack spacing="64px" marginY="64px">
          {horizontal_cards.map((horizontal_card, cards) => (
            <HorizontalCard
              key={horizontal_card.title}
              card={horizontal_card}
            />
          ))}
          {cards.map((card) => (
            <Card
              key={card.title}
              card={card}
            />
          ))}
        </VStack>
      </Center>
    </div>

  )
}

export default App
