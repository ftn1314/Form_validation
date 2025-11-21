export function validateUsername(username) {
if (username.length < 6) return "Username must be at least 6 characters";
const letters = username.replace(/[^a-zA-Z]/g, "");
const numbers = username.replace(/[^0-9]/g, "");


if (letters.length < 3) return "Username must contain at least 3 alphabets";
if (numbers.length < 3) return "Username must contain at least 3 numbers";


return "";
}


export function validatePassword(password) {
if (password.length < 8) return "Password must be at least 8 characters";
if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return "Password must include a special character";
return "";
}