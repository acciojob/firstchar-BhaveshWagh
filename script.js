function firstChar(text) {
  // your code here
	 // Trim the input text to remove leading and trailing spaces
  text = text.trim();
  
	 if (text === '') {
    return ''; // Return empty string if all spaces
  }
  
  // Return the first character of the trimmed text
  return text[0];
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
