import { quoteArr } from './quotes.js';

const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ");
const tweetMe = document.getElementById("tweetMe");
const whatsappMe = document.getElementById("whatsappMe");
let realData = "";
let quotesData = "";

const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text}`;
    window.open(tweetPost);
};

const whatsappNow = () => {
    let whatsappPost = `https://api.whatsapp.com/send?text=${quotesData.text}`;
    window.open(whatsappPost);
};
const getNewQuotes = () => {

    let rnum = Math.floor(Math.random() * quoteArr.length);
    quotesData = quoteArr[rnum];
    //quotesData = getQuote();
    //console.log(quotesData);
    quotes.innerText = `${quotesData.text}`;
    quotesData.author == null ?
        author.innerText = "Unknown"
        : author.innerText = `${quotesData.author}`;
};

/*
//This function is used to get the quotes from the API
const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        getNewQuotes();
    } catch (error) {
        console.error("Unable to fetch data though API", error);
    }
};

//This function is used to get the unique quotes from the quotes array

const getUniqueQuotes = () => {
    convertQuoteKeyToText();
    let uniqueQuotes = new Set();
    let arr = [];
    for(let i=0; i<quoteArr.length; i++){
        let quote = quoteArr[i].text;
        if(!uniqueQuotes.has(quote)){
            //console.log(JSON.stringify(quoteArr[i]));
            uniqueQuotes.add(quote);
            arr.push(quoteArr[i]);
        }

    }
    //console.log(uniqueQuotes);
    storeInFile(arr);
};

//This function is used to store the quotes in a file and download it as a json file
const storeInFile = (data) => {
    console.log(data);
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'AllQuotes.json';
    a.textContent = 'Download All Quotes';
    document.body.appendChild(a);

    
};

function convertQuoteKeyToText() {
    for (let i = 0; i < quoteArr.length; i++) {
      quoteArr[i]["text"] = quoteArr[i]["quote"];
      delete quoteArr[i]["quote"];
    }
    
  }
*/


tweetMe.addEventListener("click", tweetNow);
whatsappMe.addEventListener("click", whatsappNow);
newQ.addEventListener("click", getNewQuotes);
getNewQuotes();
//getUniqueQuotes();