const quotes=[
    {
        quotes: "Rule No. 1: Never lose money. Rule No. 2: Never forget Rule No. 1",
        author: "WarrenBuffett"
    },
    {
        quotes : "i'm doge father",
        author : "Musk"
    },
    {
        quotes: "Shut up. Malfoy",
        author: "Harry"
    }
]


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const randomQuotes = quotes[Math.floor(Math.random()*quotes.length)];
console.log(randomQuotes);
quote.innerText= randomQuotes.quotes;
author.innerText= randomQuotes.author;