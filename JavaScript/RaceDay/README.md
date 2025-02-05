Here's a well-structured **README** file for your **Race Registration Program**:

---

# 🏃‍♂️ Codecademy Race Registration System

## 📌 Overview
This program registers participants for **Codecademy’s annual race** and assigns them **race numbers** and **start times** based on their age and registration status.  

The system ensures fair and organized race assignments by implementing conditions based on **age** and **registration time**.

---

## 🛠 Features
✅ **Assigns Race Numbers** – Early adults get numbers above 1000; others get below 1000.  
✅ **Determines Start Times** – Different start times based on age and registration status.  
✅ **Dynamic Output** – Provides clear instructions for each participant.  
✅ **Simple & Efficient** – Uses JavaScript conditionals for easy execution.

---

## 🔄 How It Works
1. **Check Registration Status**  
   - If a runner registered **early**, they may get priority.  
   - If they registered **late**, they get different rules.  

2. **Check Age**  
   - **Adults (18+)** who registered early **start at 9:30 AM**.  
   - **Adults (18+)** who registered late **start at 11:00 AM**.  
   - **Youth (<18)** run at **12:30 PM**, regardless of registration time.  

3. **Assign a Race Number**  
   - Early **adults** get a **race number ≥ 1000**.  
   - All other participants get a **race number < 1000**.  

4. **Display the Race Number and Start Time** to the participant.

---

## 📝 Code Example
```javascript
let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;  // Change this to false for late registration
let runnerAge = 25;  // Change this to test different ages

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000; // Early adults get race numbers 1000 and above
}

if (runnerAge > 18 && registeredEarly) {
  console.log(`Race Number: ${raceNumber}. Your race starts at 9:30 AM.`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`Race Number: ${raceNumber}. Your race starts at 11:00 AM.`);
} else {
  console.log(`Race Number: ${raceNumber}. Your race starts at 12:30 PM.`);
}
```

---

## 📌 Example Outputs

### **Example 1: Early Adult**
```bash
Race Number: 1543. Your race starts at 9:30 AM.
```

### **Example 2: Late Adult**
```bash
Race Number: 421. Your race starts at 11:00 AM.
```

### **Example 3: Youth Participant**
```bash
Race Number: 764. Your race starts at 12:30 PM.
```

---

## 🚀 Technologies Used
- JavaScript (ES6)
- Console-based execution

---

## 🎯 Future Enhancements
🔹 Convert this into an **interactive web form** for easy race registration.  
🔹 Add **real-time registration tracking** using a database.  
🔹 Implement a **notification system** to remind participants of their race times.  

---

## 📌 How to Run
1. Copy the JavaScript code into a file (`raceRegistration.js`).
2. Run the file using Node.js or inside the browser console.
3. Change the **age** and **registration status** variables to test different cases.
4. Get your **race number** and **start time** instantly!

---

Now go ahead and **register for the race!** 🏅🏃‍♂️✨
