
# 🎱 Magic Eight Ball

## 📌 Overview
The **Magic Eight Ball** is a fun JavaScript project that acts as a fortune-teller. Users can ask a question, and the program provides a randomly generated response—just like the classic Magic Eight Ball toy!

---

## 🛠 Features
✅ **Personalized Greeting** – Greets the user by name.  
✅ **Randomized Responses** – Uses JavaScript's `Math.random()` to generate an answer.  
✅ **Switch Statement** – Efficiently assigns one of **eight possible responses**.  
✅ **Console Interaction** – The entire program runs inside the console.

---

## 🔄 How It Works
1. The program first checks if a user name is provided and greets them.
2. The user inputs a **yes/no** type question.
3. A random number between **0-7** is generated.
4. Based on the number, a corresponding **Magic Eight Ball** response is assigned.
5. The response is displayed in the console.

---

## 📝 Code Example
```javascript
let userName = 'Aumkar';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = "Will I get a job of 15 LPA?";
console.log(`${userName} has asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch (randomNumber) {
  case 0: eightBall = 'It is certain'; break;
  case 1: eightBall = 'It is decidedly so'; break;
  case 2: eightBall = 'Reply hazy, try again'; break;
  case 3: eightBall = 'Cannot predict now'; break;
  case 4: eightBall = 'Do not count on it'; break;
  case 5: eightBall = 'My sources say no'; break;
  case 6: eightBall = 'Outlook not so good'; break;
  case 7: eightBall = 'Signs point to yes'; break;
}

console.log(`${userName}, the Magic Eight Ball says: ${eightBall}`);
```

---

## 📌 Example Output
```
Hello, Aumkar!
Aumkar has asked: Will I get a job of 15 LPA?
Aumkar, the Magic Eight Ball says: It is decidedly so
```

---

## 🚀 Technologies Used
- JavaScript (ES6)
- Console-based interaction

---

## 🎯 Future Enhancements
🔹 Convert this program into a **web-based app** with an interactive UI.  
🔹 Add more **responses** to make it more engaging.  
🔹 Include **voice output** for a more immersive experience.

---

## 📌 How to Run
1. Copy the code into a JavaScript file (`magicEightBall.js`).
2. Open the file in a browser console or run it using Node.js.
3. Ask your question and get a **magical answer!**

---

Enjoy predicting the future with the **Magic Eight Ball!** 🎱✨
