const messageContainer = document.querySelector('.message-container');
const messageInput = document.querySelector('input[type="text"]');
const sendButton = document.querySelector('button');

// Send message when Send button is clicked
sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  if (message) {
    addMessage('You', message);
    messageInput.value = '';
  }
});

// Add received message to message container
function receiveMessage(sender, message) {
  addMessage(sender, message);
}

// Helper function to add message to message container
function addMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerHTML = `<span class="sender">${sender}:</span> <span class="message-text">${message}</span>`;
  messageContainer.appendChild(messageElement);
  messageContainer.scrollTop = messageContainer.scrollHeight;
}
