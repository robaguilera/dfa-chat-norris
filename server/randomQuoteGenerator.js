const random = require('lodash.random');
const forEach = require('lodash.forEach');
const shuffle = require('lodash.shuffle');

const chuckNorrisJokes = require('./chuckNorrisJokes.json');
const swQuotes = require('./swQuotes.json');
const mikeTysonQuotes = require('./mikeTysonQuotes.json');
const bobMarleyQuotes = require('./bobMarleyQuotes.json');
const neilDegrasseTysonQuotes = require('./neilDegrasseTysonQuotes.json');


const createChatMessage = (personName, chatMessage) => {
  return { personName, chatMessage };
}

const getAllSWQuotes = () => {
  let quotes = [];
  forEach(swQuotes, (quotesOfCharacter, characterQuoting) => {
    forEach(quotesOfCharacter, (quote) => {
      quotes.push(createChatMessage(characterQuoting, quote))
    });
  });
  return quotes
}

const assignQuotesToPerson = (name, quoteList) => {
  return quoteList.map((quote) => {
    return createChatMessage(name, quote)
  })
}

const getAllRandomOrderedQuotes = () => {
  const orderedAndNamedQuotes = [].concat(
    getAllSWQuotes(),
    assignQuotesToPerson('Mike Tyson', mikeTysonQuotes),
    assignQuotesToPerson('Chuck Norris', chuckNorrisJokes),
    assignQuotesToPerson('Bob Marley', bobMarleyQuotes),
    assignQuotesToPerson('Neil deGrasse Tyson', neilDegrasseTysonQuotes)
  );
  return shuffle(orderedAndNamedQuotes);
}

const quotesToUse = getAllRandomOrderedQuotes()

module.exports = () => {
  const quoteToUse = quotesToUse[random(0, quotesToUse.length - 1)];
  quoteToUse.dateCreated = (new Date()).toString();
  return quoteToUse;
}