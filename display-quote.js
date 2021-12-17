//List of Famous People Quotes
const quotesAndAuthor = [
    {
        quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
        firstName: 'Mother',
        lastName: 'Teresa'
    },
    {
        quote: 'The future belongs to those who believe in the beauty of their dreams.',
        firstName: 'Eleanor',
        lastName: 'Roosevelt'
    },
    {
        quote: 'Always remember that you are absolutely unique. Just like everyone else.',
        firstName: 'Margaret',
        lastName: 'Mead'
    },
    {
        quote: 'You will face many defeats in life, but never let yourself be defeated.',
        firstName: 'Maya',
        lastName: 'Angelou'
    },
    {
        quote: 'Never let the fear of striking out keep you from playing the game.',
        firstName: 'Babe',
        lastName: 'Ruth'
    },
    {
        quote: 'Life is either a daring adventure or nothing at all.',
        firstName: 'Helen',
        lastName: 'Keller'
    },
    {
        quote: 'Love the life you live. Live the life you love.',
        firstName: 'Bob',
        lastName: 'Marley'
    },
    {
        quote: 'Life is made of ever so many partings welded together.',
        firstName: 'Charles',
        lastName: 'Dickens'
    },
    {
        quote: 'The way to get started is to quit talking and begin doing.',
        firstName: 'Walt',
        lastName: 'Disney'
    },
    {
        quote: 'If you really look closely, most overnight successes took a long time.',
        firstName: 'Steve',
        lastName: 'Jobs'
    },
    {
        quote: 'I find that the harder I work, the more luck I seem to have.',
        firstName: 'Thomas',
        lastName: 'Jefferson'
    }
]

const button = document.getElementById('btn')
const p = document.getElementById('quoteText')
const strong = document.getElementById('author')

// set some text in the button
const text = document.createTextNode('Display Quote')
    button.append(text)

// function which get random Quote and AuthorName
button.addEventListener('click', () => {
    const randomQuote = Math.floor(Math.random() * quotesAndAuthor.length)

    p.textContent = ` \"${quotesAndAuthor[randomQuote].quote}\" `
    strong.textContent = `- ${quotesAndAuthor[randomQuote].firstName} ${quotesAndAuthor[randomQuote].lastName}`
})
