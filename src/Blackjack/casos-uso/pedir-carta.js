/**
 * Pedir una carta
 * @param {Array} deck 
 * @returns String
 */

export const pedirCarta = (deck) => {
    if (deck=== 0) {
      throw 'El mazo está vacío o no está definido';
    }
    return deck.pop();
  }