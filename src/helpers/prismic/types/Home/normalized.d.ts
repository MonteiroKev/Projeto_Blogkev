import { CardType } from "../../../../components/Card/Card";

export interface CardContainerType {
  type?: string;
  title?: string;
  description?: string;
  showAsCarousel?: boolean;
  cards?: CardType[];
}
