function reverseString(string) {let charArray = string.split(""); charArray.reverse();
let reversedString = charArray.join(""); 
return reversedString;
}

reverseString("hello");

reverseString("Howdy");

reverseString("Greetings from Earth");
