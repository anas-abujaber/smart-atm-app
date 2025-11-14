# Smart ATM – Smart Electronic Wallet

A modern, responsive web app that lets users manage their financial account, track transactions, and monitor exchange rates.

---

## 📌 Data Structure

### **User Object**
Each user contains:
1. **id** – Unique identifier  
2. **user_name** – Username  
3. **first_name** – First name  
4. **last_name** – Last name  
5. **profile_img** – Profile picture URL  
6. **pin** – PIN code  
7. **balance** – Current balance (ILS ₪)  
8. **birthday** – Date of birth (`YYYY-MM-DD`)  
9. **transactions** – Array of transaction objects  

---

### **Transaction Object**
Each transaction contains:
1. **id** – Unique ID  
2. **type** – `Deposit` or `Withdraw`  
3. **amount** – Transaction amount  
4. **currency** – Always `ILS`  
5. **date** – ISO timestamp  

---

## ⭐ User Stories

### **1. Login System**
- User enters **username + PIN**.  
- On success → redirect to **Dashboard**.  
- Toast: **“Welcome back, anas!”**  

---

### **2. View Current Balance**
- Displayed on Dashboard.  
- Formatted like: **₪1,948.00**  
- Shown inside a gradient styled card.  

---

### **3. Deposit Money**
- Enter a positive amount.  
- Live preview of new balance.  
- On Submit:
  - Transaction is stored.
  - Balance updates.
  - Success toast: **“Successfully deposited ₪500”**.
  - Redirect to Dashboard.

---

### **4. Withdraw Money**
- Enter an amount ≤ current balance.  
- If exceeds balance → error: **“Insufficient balance”**  
- On success → transaction stored + toast + redirect.  

---

### **5. Transaction History**
- Shows all transactions chronologically.  
- Each item includes:
  - Icon (➕ deposit / ➖ withdraw)
  - Type
  - Colored amount (green/red)
  - Formatted date like: `03/11/2025 at 21:32`
- If empty → **“No transactions found.”**

---

### **6. Watchlist (Currencies)**
- Available currencies:
  - USD — ₪3.70
  - EUR — ₪4.10
  - JOD — ₪5.20
- Clicking a star:
  - Adds currency to watchlist.
  - Star becomes gold.
  - Shows toast: `USD added to watchlist`
- Clicking again removes it.

---

### **7. Account Statistics**
Dashboard shows:
- Total Deposits  
- Total Withdrawals  
- Transaction Count  

Displayed in clean stat cards.

---

### **8. Reset Account**
- Found in Settings.  
- Clears all transactions + resets balance.  
- Requires confirmation.  
- Shows toast → Redirects to Dashboard.  

---

### **9. Birthday Surprise 🎉**
- On the user’s birthday:
  - Popup: **“Happy Birthday, Anas!”**
  - 1,000 confetti pieces for 5 seconds.
  - Button: **“Thanks!”** to close.
  - Shown **once per year** using `localStorage`.  

---

### **10. Navigation**
- Responsive sidebar with icons:
  - Dashboard, Deposit, Withdraw, History, Watchlist, Settings
- On mobile → collapsible hamburger menu.  
- Active route is highlighted in blue.  

---

### **11. Data Persistence**
- Uses **MockAPI** as backend.  
- **Context API** keeps the user logged in after refresh.  

---

## 🎯 Features
- Real-time toasts (`sonner`)  
- Fully responsive (mobile-first)  
- Clean icons (`lucide-react`)  
- Material-UI login  
- Protected routes  
- Confetti animation (`react-confetti`)  
- Smart birthday tracking  

---

## 👤 Demo Accounts

| Username   | PIN     |
|------------|---------|
| `anas`     | `a1234` |
| `mohammed` | `m1234` |
| `nour`     | `n1234` |

---

## 🛠️ Tech Stack
- **React + Vite**  
- **Tailwind CSS**  
- **React Router**  
- **Context API**  
- **Lucide Icons**  
- **Sonner (Toasts)**  
- **Material-UI (Login)**  
- **react-confetti**  
- **MockAPI.io**

