let quoteElement = document.getElementById("quoteID");
let authorElement = document.getElementById("authorID");


async function getQuote() {

    try {

        quoteID.innerHTML = "Loading...";
        authorID.innerHTML = "Loading...";

        let result = await fetch("https://dummyjson.com/quotes/random");

        let data = await result.json();

        console.log(data);
        console.log(data.quote);

        quoteID.innerHTML = data.quote;
        authorID.innerHTML = data.author;

    } catch (error) {
        console.log("ERROR : " + error);
    }
}

