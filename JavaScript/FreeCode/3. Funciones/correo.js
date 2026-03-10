const maskEmail = (email) => {
    //esto es una cadena, y email es el argumento
    const [username, domain] = email.split("@");
    const maskedUsername = username[0] + "*".repeat(username.length - 2) + username[username.length - 1];
    return maskedUsername + "@" + domain;
}
const email = "juandavid@gmail.com"

console.log(maskEmail(email))
console.log(maskEmail("apple.pie@example.com"))
console.log(maskEmail("freecodecamp@example.com"))
console.log(maskEmail("info@test.dev"))
console.log(maskEmail("user@domain.org"))




/*
const maskEmail = (email) => {
    const [user, domain] = email.split('@');
    const maskedUser = user[0] + '******' + user[user.length - 10];
    return maskedUser + '@' + domain;
}
const email = "juan.pena@gmail.com"

console.log(maskEmail("apple.pie@example.com"))
console.log(maskEmail("freecodecamp@example.com"))
console.log(maskEmail("info@test.dev"))
console.log(maskEmail("user@domain.org"))
*/