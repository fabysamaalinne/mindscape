
async function sendMessage() {
    const userInput = document.getElementById("user-input");
    const message = userInput.value;

    if (message.trim() === "") return;

    addMessageToChat("user", message);
    userInput.value = "";

    try {
        const response = await fetch("http://127.0.0.1:5000/chatbot", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: message })
            
        });

        const data = await response.json();
        addMessageToChat("bot", data.response);
    } catch (error) {
        addMessageToChat("bot", "olá, como posso te ajudar?");
    }
}


function addMessageToChat(sender, message) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}


















































































































































































































































































