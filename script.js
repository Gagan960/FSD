const getdata = async () => {
    try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any");
        const data = await response.json();
        display_data(data);
    } catch (error) {
        console.log("Error in fetching API:", error);
    }
};

const display_data = (data) => {
    try {
        const jokeElement = document.getElementById("press");
        const chrCountElement = document.getElementById("span");

        const jokeText = `${data.setup} ${data.delivery}`; 

        jokeElement.innerText = jokeText;
        
        const charLength = jokeText.length;
        chrCountElement.innerText = charLength;
    } catch (error) {
        console.log("Error in displaying data:", error);
    }
};

const cleardata = () => {
    try {
        const jokeElement = document.getElementById("press");
        const chrCountElement = document.getElementById("span");

        jokeElement.innerText = "Press the Button for the Joke";
        chrCountElement.innerText = "0";
    } catch (error) {
        console.log("Error in clearing data:", error);
    }
};

document.getElementById("get").addEventListener("click", getdata);
document.getElementById("clear").addEventListener("click", cleardata);
