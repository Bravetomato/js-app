const qoutes = [
    {
        quote: "You have to have confidence in your ability, and then be tough enough to follow through.",
        author: "Rosalynn Carter", 
    },
    {   
        quote: "Whenever you are asked if you can do a job, tell 'em, 'Certainly I can!' Then get busy and find out how to do it.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "I violated the Noah rule: Predicting rain doesn't count; building arks does.",
        author: "Warren Buffett",
    },
    {
        quote: "A good plan, violently executed now, is better than a perfect plan next week.",
        author: "George S. Patton",
    },
    {
        quote: "Weakness of attitude becomes weakness of character.",
        author: "Albert Einstein",
    },
    {
        quote: "Sometimes even to live is an act of courage.",
        author: "Seneca",
    },
    {
        quote: "While there's life, there's hope.",
        author: "Cicero",
    },
    {
        quote: "Dreams come true. Without that possibility, nature would not incite us to have them.",
        author: "John Updike",
    },
    {
        quote: "One must desire something to be alive.",
        author: "Margaret Deland",
    },
    {
        quote: "If you're never scared or embarrassed or hurt, it means you never take any chances.",
        author: "Julia Sorel"
    }
];

const qoute = document.querySelector("#qoute span:first-child");
const author = documnet.querySelector("#qoute span:last-child");
const todaysQoute = qoutes[Math.floor(Math.random() * qoutes.length)];

quote.innerText = todaysQoute.quote;
author.innerText = todaysQoute.author;
