import { systemState } from '../../front-end.js';
import { determineDeckData } from '../general/determine-deckdata.js';
import { getZone } from '../zones/get-zone.js';
import { Card } from './card.js';
import { Cover } from './cover.js';

export const buildDeck = (user) => {
    const deckData = determineDeckData(user);
    const deck = getZone(user, 'deck');
    for (const [quantity, name, imageURL, type] of deckData){
        for (let i = 0; i < quantity; i++){
            const card = new Card(user, name, imageURL, type);
            deck.array.push(card);
            deck.element.appendChild(card.image);
        };
    };
    const cover = new Cover(user, 'deckCover', systemState.cardBackSrc);
    deck.elementCover.appendChild(cover.image);
}