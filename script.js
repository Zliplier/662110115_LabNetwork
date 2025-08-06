


const showGreeting = (name) => {
    alert(`Welcome, ${name}!`);
};

const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent default page reload
    const nameInput = document.getElementById("playerName");
    const playerName = nameInput.value.trim();
    if (playerName === "") {
        alert("Please enter your name.");
        return;
    }
    showGreeting(playerName);
};

const form = document.getElementById("player-form");
form.addEventListener("submit", handleFormSubmit);