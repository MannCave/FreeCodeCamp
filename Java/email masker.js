let email = "testing@email.com"

const maskEmail = (email) => {
  let emailSymbol = "@";
  let symbolIndex = email.indexOf(emailSymbol);
  let firstLetter = email[0];
  let maskedEmail = firstLetter + "*".repeat(symbolIndex - 2) + email[symbolIndex - 1] + email.slice(symbolIndex);
 return maskedEmail
}
maskEmail("apple.pie@example.com");
maskEmail("freecodecamp@example.com");
maskEmail("info@test.dev");
maskEmail("user@domain.org");
console.log(maskEmail(email));
