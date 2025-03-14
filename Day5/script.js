const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "Happiness depends upon ourselves. - Aristotle",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "The secret of getting ahead is getting started. - Mark Twain",
  "Opportunities don't happen. You create them. - Chris Grosser",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Act as if what you do makes a difference. It does. - William James",
  "Perfection is not attainable, but if we chase perfection we can catch excellence. - Vince Lombardi",
  "You miss 100% of the shots you don’t take. - Wayne Gretzky",
  "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
  "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
  "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
];

//console.log(quotes[Math.floor(Math.random() * quotes.length)]); // Logs a random quote

const displayQuote = document.getElementById("diaplayQuote");
const generateActuator = document.getElementById("generate");

generateActuator.addEventListener("click", () => {
  const len = quotes.length;
  const index = Math.floor(Math.random() * len);
  displayQuote.textContent = quotes[index];
});
