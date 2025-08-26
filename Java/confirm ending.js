function confirmEnding(str, target) {
  // Extract the substring from 'str' that has the same length as 'target'
  // and starts from the end of 'str'.
  const endingSubstring = str.slice(str.length - target.length);

  // Compare the extracted substring with 'target'.
  // If they are identical, 'str' ends with 'target'.
  return endingSubstring === target;
}
  console.log(confirmEnding("Bastian", "n"))
