const quotes = ['The Pirate', 'An Apple','The DeepSea','A Cold Floor', 'Big Shin', 'Jacked Berry', 'Nothing Much', 'Still Writing', 'The Word Jumbo']

function  strip(quotesNa){
    return quotesNa.replace(/^a |an |the/i, '').trim()
    
}

const sortedQuotes= quotes.sort((a,b)=> strip(a) > strip(b) ? 1 : -1)

document.querySelector('#quotes').innerHTML = 
        sortedQuotes.map(quote => `<li>${quote}</li>`).join('')

console.log(sortedQuotes)