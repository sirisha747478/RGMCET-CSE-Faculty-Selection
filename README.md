# 📚 RGMCET CSE Faculty Selection Portal

A web-based application developed to simplify the faculty selection process for students of the Computer Science and Engineering department at RGMCET. This system allows students to select faculty based on seat availability while providing administrators full control over the process.

---

## 🔗 Project Repository

GitHub Link: https://github.com/sirisha747478/RGMCET-CSE-Faculty-Selection/tree/main/RGMCET-faculty-selection-portal-CSE

---

## 🚀 Features

### 👨‍🎓 Student Module
- Secure login using authentication  
- View list of faculty members  
- Check available seats for each faculty in real-time  
- Select preferred faculty  
- Restriction to avoid multiple selections  

### 🛠️ Admin Module
- Admin login access  
- Add / remove faculty members  
- Set and update seat limits  
- Monitor student selections  
- Automatically grant access to newly added admins  

### 🔄 Real-Time Functionality
- Live seat updates using Firebase  
- Prevents overbooking  
- Instant reflection of changes across users  

---

## 🧑‍💻 Tech Stack

- Frontend: HTML, CSS, JavaScript  
- Backend: Firebase  
- Database: Firestore Database  
- Authentication: Firebase Authentication  
- Deployment: Vercel  

---

## 📁 Project Structure

RGMCET-faculty-selection-portal-CSE/  
│── index.html  
│── login.html  
│── admin.html  
│── style.css  
│── script.js  
│── firebase-config.js  
│── README.md  

---

## ⚙️ Setup & Installation

1. Clone the repository  
git clone https://github.com/sirisha747478/RGMCET-CSE-Faculty-Selection.git  

2. Open the project folder  
cd RGMCET-CSE-Faculty-Selection  

3. Setup Firebase  
- Create a project in Firebase Console  
- Enable Authentication (Email/Password)  
- Enable Firestore Database  
- Replace Firebase config in firebase-config.js  

4. Run the project  
- Open index.html in browser  
OR  
- Deploy using Vercel  

---

## 🔐 Firebase Configuration

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
};

---

## 📊 How It Works

- Students log in and select a faculty  
- Seat count updates instantly  
- Admin controls faculty and seat limits  
- System ensures fair and transparent allocation  

---

## 🛡️ Security Features

- Role-based authentication (Admin / Student)  
- Firestore secure rules  
- Restricted admin panel access  
- Prevention of duplicate selections  

---

## 📌 Future Enhancements

- Email notifications for confirmation  
- Faculty dashboard  
- Analytics and reports  
- UI/UX improvements  

---

## 👩‍💻 Contributors

Majjari Sirisha  
Bhanu Sri  

---

## 🎓 Guidance

Under the guidance of  
Navven Sundar Kumar  
Department of Computer Science and Engineering  

---

## 📄 License

This project is developed for educational purposes only.
