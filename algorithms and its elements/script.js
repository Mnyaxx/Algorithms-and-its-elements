function analyzeSentence() {
    // Initialize counters for length, words, and vowels
    let lengthCounter = 0;
    let wordCounter = 0;
    let vowelCounter = 0;
    let insideWord = false; // A flag to keep track of whether we're inside a word
    const vowels = "aeiouAEIOU"; // A string containing all the vowels for easy checking
    const sentence = prompt("Enter a sentence ending with a period ('.'):"); // Prompt the user for a sentence

    // Loop through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        let variable = sentence[i]; // Get the current character
        
        // If the current character is a period, break out of the loop
        if (variable === '.') {
            break;
        }
        
        // Increment the length counter for every character
        lengthCounter++;
        
        // Check if the current character is a vowel, and if so, increment the vowel counter
        if (vowels.includes(variable)) {
            vowelCounter++;
        }
        
        // Check if the current character is a space
        if (variable === ' ') {
            // If we are in a word and encounter a space, set inWord to false
            if (insideWord) {
                insideWord = false;
            }
        } else {
            // If we encounter a non-space character and we are not in a word,
            // it means we are starting a new word, so increment the word counter
            if (!insideWord) {
                insideWord = true;
                wordCounter++;
            }
        }
    }

    // Output the results to the console
    console.log("Length of the sentence:", lengthCounter);
    console.log("Number of words:", wordCounter);
    console.log("Number of vowels:", vowelCounter);
}

// Call the function to execute the analysis
analyzeSentence();
