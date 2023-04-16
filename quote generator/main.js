const quoteText = document.getElementById("text");
const quoteAuthor = document.getElementById("author")
const newQuoteBtn = document.getElementById("newquote");
var count = 0;

async function getQuote(){
    count++
    const apiUrl = 'http://type.fit/api/quotes';
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data)
    quoteText.innerHTML = data[count].text
    quoteAuthor.innerHTML = data[count].author
}
getQuote();
 newQuoteBtn.addEventListener("click", getQuote)