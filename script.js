// let http = 'http';
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type' : 'text/html'});
//     res.end('Hello World');
// }).listen(9000);

const showGreeting = (name) => {
    alert(`Welcome, ${name}!`);
};

const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent default page reload
    // const nameInput = document.getElementById("playerName");
    // const playerName = nameInput.value.trim();
    // if (playerName === "") {
    //     alert("Please enter your name.");
    //     return;
    // }
    // showGreeting(playerName);
    // window.location.href = "https://youtu.be/dQw4w9WgXcQ";
    window.open("https://youtu.be/dQw4w9WgXcQ", '_blank').focus();
};

const form = document.getElementById("btn-contact");
form.addEventListener("click", handleFormSubmit);