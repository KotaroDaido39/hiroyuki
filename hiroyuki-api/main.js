import './style.css';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';


document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('chat-container');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            addMessageToChat('ユーザー', message);
            userInput.value = '';
            getBotResponse(message);
        }
    }

    function addMessageToChat(sender, message) {
        const messageElement = document.createElement('p');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    async function getBotResponse(message) {
        const requestBody = {
            contents: [{
                parts: [{
                    text: `以下のユーザーのメッセージに対して、ひろゆきのような喋り方で論破してください。: ${message}`
                }]
            }]
        };

        try {
            const response = await fetch(`${API_URL}?key=${API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const botResponse = data.candidates[0].content.parts[0].text;
            console.log({ botResponse });
            addMessageToChat('ひろゆき', botResponse);
        } catch (error) {
            console.error('Error:', error);
            addMessageToChat('ひろゆき', 'おいら、何言ってるかわからないっすね');
        }
    }
});