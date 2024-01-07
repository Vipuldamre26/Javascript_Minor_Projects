function generateQuote(){
    
    var quotes = {
        '-- Jules Renard, The Journal of Jules Renard':
        '“The truly free man is the one who can turn down an invitation to dinner without giving an excuse.”',

        '― Albert Einstein':
        "“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty.”",
    
        "“Man cannot be freed by the same injustice that enslaved it.”":
        '― Pierce Brown, Red Rising'
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)]

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
    
}

document.addEventListener("click", generateQuote);

