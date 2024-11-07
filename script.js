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
        const jokeElement = document.getElementById("joke");
        const chrCountElement = document.getElementById("chr_count");

        // Determine if the joke has a "setup" and "delivery" (for two-part jokes)
        const jokeText = data.setup && data.delivery ? 
            `${data.setup} ${data.delivery}` : 
            data.joke; // For single-part jokes

        jokeElement.innerText = jokeText;
        
        // Update character count
        const charLength = jokeText.length;
        chrCountElement.innerText = charLength;
    } catch (error) {
        console.log("Error in displaying data:", error);
    }
};

const cleardata = () => {
    try {
        const jokeElement = document.getElementById("joke");
        const chrCountElement = document.getElementById("chr_count");

        jokeElement.innerText = "Press the Button for the Joke";
        chrCountElement.innerText = "0";
    } catch (error) {
        console.log("Error in clearing data:", error);
    }
};

// Event listeners for the buttons
document.getElementById("get").addEventListener("click", getdata);
document.getElementById("clear").addEventListener("click", cleardata);
