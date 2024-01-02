import _ from 'underscore'
/**
 * Esta funcion crea un nuevo deck
 * @param {Array} tiposCarta 
 * @param {Array} tiposEspeciales 
 * @returns Array 
 */

export const crearDeck = (tiposCarta, tiposEspeciales) => {
    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposEspeciales) {
        for (let esp of tiposCarta) {
            deck.push(esp + tipo);
        }
    }
    return _.shuffle(deck);
}
