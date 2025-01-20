# white-house-exam

## 📌 Introduction
This project is a web application for managing employees in the **Trump administration**.  
The backend is developed using **.NET/C# Web API** and **Room Database (SQLite)**, while the frontend is built with **React and JavaScript (ES6+).**  
The solution focuses on **CRUD functionality, API integration, and accessibility** and is tested using **Swagger**.

---

## 🛠 Technologies & Tools
- **Backend:** C# (.NET Web API), Room Database (SQLite), Swagger (API Documentation & Testing)
- **Frontend:** React, JavaScript (ES6+), HTML5, CSS3
- **UI/UX:** Bootstrap, Responsive Design
- **State Management:** React Hooks
- **API Communication:** Axios for HTTP requests

---

## 📂 Project Structure
The project is structured as follows:

```
📦 trump-verse-exam
├── 📂 backend (Backend - .NET Web API)
│ ├── 📂 controllers (Handles API endpoints)
│ ├── 📂 models (Defines data models)
│ ├── 📂 data (Database configuration - Room Database / SQLite)
│ ├── 📂 services (Contains business logic)
│ ├── 📂 migrations (Entity Framework Core database migrations)
│ ├── 📂 wwwroot (Static files like images and API documentation)
│ ├── 📜 Program.cs (Main entry point for the API)
│ ├── 📜 backend.csproj (Project configuration for the .NET backend)
│ ├── 📜 appsettings.json (Configuration settings for the backend)
│
├── 📂 frontend (Frontend - React application)
│ ├── 📂 components (Reusable UI components)
│ ├── 📂 pages (Application pages and routing)
│ ├── 📂 services (Handles API calls using Axios)
│ ├── 📂 contexts (React Context API for state management)
│ ├── 📂 hooks (Custom React hooks)
│ ├── 📜 App.jsx (Main React component)
│ ├── 📜 package.json (Manages frontend dependencies and scripts)
│
 ```

---

## 📌 Features
### ** Backend (C# .NET Web API)**
Fetch, update, and delete employees via API  
Uses **Room Database (SQLite)** for data storage  
Provides an endpoint for predefined profile pictures  
API documentation & testing using **Swagger**  

### ** Frontend (React)**
Displays a list of employees  
Form to add/edit employees  
Full **CRUD functionality** integrated with API  
**Accessibility (WCAG) & responsive design**  

---

## 🛠 Installation & Setup
**Clone the repository:**  
   ```
git clone https://github.com/niaa004/white-house-exam.git
   cd trump-verse-exam
 ```

**Run the backend (C# .NET Web API):**  
   ```
cd TrumpVerseAPI
   dotnet run
 ```

- The local project folder is named trump-verse-exam, while the GitHub repository is white-house-exam.

**Run the frontend (React):**  
```
cd trump-verse
   npm install
   npm run dev
```

---

## License & References
MIT License © Nicolai Aalberg  
Data is retrieved from predefined sources.  
API documentation and testing with **Swagger**.

---

## 💡 Summary
This project demonstrates **full-stack development using React and .NET Web API**, showcasing how a **complete web application** can be built from backend to frontend.  

🚀 **Feel free to check out the repository and contribute!**
