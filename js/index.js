const quotes = [
    {
        quote: "Be the change that you wish to see in the world.",
        author: "― Mahatma Gandhi"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "― Mae West"
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "― Mark Twain"
    },
    {
        quote: "A friend is someone who knows all about you and still loves you.",
        author: "― Elbert Hubbard"
    },
    {
        quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals",
        author: "― J.K. Rowling"
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "― Oscar Wilde"
    },
    {
        quote: "A room without books is like a body without a soul.",
        author: "― Marcus Tullius Cicero"
    },
    {
        quote: "So many books, so little time.",
        author: "― Frank Zappa"
    }
];

function generateQuote(){
    const randomIndex = Math.floor(Math.random()* quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex].quote;
    document.getElementById('author').innerText = quotes[randomIndex].author;
}