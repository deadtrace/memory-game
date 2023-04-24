import { ICard } from "./types";

const cardsImagesPath = require.context("./images/cards", false, /\.png$/);
const cardsImages = cardsImagesPath.keys().map(cardsImagesPath);

export const createCardsOrder = (): ICard[] => {
  const cards: ICard[] = cardsImages.map((image, id) => ({
    image: String(image),
    id,
  }));
  return [...cards, ...cards].sort((a, b) => 0.5 - Math.random());
};
