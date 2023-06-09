# Text-To-Speech Web Page

This project demonstrates a simple web page that utilizes text-to-speech functionality. Users can enter text into a textarea, and by clicking the "Speak" button, the entered text will be spoken aloud using the browser's speech synthesis capabilities.

# Technologies Used
HTML | CSS | JAVASCRIPT

# How It Works
The web page utilizes the Web Speech API, specifically the SpeechSynthesis interface, to convert the entered text into speech. When the user clicks the "Speak" button, the text from the textarea is retrieved, and a SpeechSynthesisUtterance object is created with the text as its content. The window.speechSynthesis.speak() function is then called with the SpeechSynthesisUtterance object to speak the text aloud.

# Setup and Usage
Clone the repository or download the project files.
Open the index.html file in a web browser.
Enter the desired text into the textarea.
Click the "Speak" button to hear the entered text being spoken.
Please note that the SpeechSynthesis interface is supported by modern browsers such as Chrome, Firefox, Safari, and Edge.

# Feedback and Contributions
Feedback, bug reports, and contributions are welcome! If you encounter any issues or have suggestions for improvement, please open an issue or submit a pull request on GitHub.

Enjoy using the Text-to-Speech Web Page!
