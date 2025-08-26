function truncateString(string, number) {
  console.log("string.length :", string.length);
  console.log("number:", number)
  console.log("string.length > number:", string.length > number);
  console.log("string.lenght <= number:", string.lenght <= number);
  if (string.length > number) {
    console.log('string.substring(0, number) + "...":', string.substring(0, number) + "...");
    return string.substring(0, number) + "...";
  } else if (string.length <= number) {
    console.log("string:", string)
    return string
  }
}
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
truncateString("A-", 1)
