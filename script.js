// Function to speak the entered text
function speakText() {
  const textInput = document.getElementById('text-input').value;
  const speechUtterance = new SpeechSynthesisUtterance(textInput);
  window.speechSynthesis.speak(speechUtterance);
}

// Event listener for the speak button
document.getElementById('speak-btn').addEventListener('click', speakText);
