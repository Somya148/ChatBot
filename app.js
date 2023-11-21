function talk(){
    var know = {
    "Who are you ?" : "Hello, I am a ChatBot. ",
    "How are you ?" : "Good :)",
    "How was your day ?" : "My day was nice.",
    "What is your name ?" : "I have no name , maybe you can name me",
    "ok" : "Thank You So Much ",
    "Bye" : "Okay! Will meet soon.."
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }


