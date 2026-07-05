# 🔐 Password Generator

A modern and responsive **Password Generator** built with **React** and **Tailwind CSS**. This application allows users to generate strong, customizable passwords by selecting the desired password length and choosing whether to include numbers and special characters.

## 🚀 Features

* Generate secure random passwords
* Adjust password length using a slider
* Include or exclude numbers
* Include or exclude special characters
* Copy the generated password to the clipboard with a single click
* Clean, responsive, and user-friendly interface

## 🛠️ Technologies Used

* React
* JavaScript (ES6+)
* Tailwind CSS
* Vite

## ⚛️ React Hooks Used

### `useState`

Manages the password, password length, and user-selected options such as numbers and special characters.

### `useCallback`

Memoizes the password generation function, preventing unnecessary function recreation and improving performance.

### `useEffect`

Automatically regenerates the password whenever the password length or selected options change.

### `useRef`

Provides direct access to the password input field, making it easy to select and copy the generated password.

## ▶️ Getting Started

The application will be available at the local URL displayed in your terminal (typically `http://localhost:5173`).

## 📸 Preview

![main-preview](<src/assets/password-generator-preview.png>)

## 📚 What I Learned

* Building reusable React components
* Managing state with React Hooks
* Optimizing functions with `useCallback`
* Performing side effects with `useEffect`
* Accessing DOM elements using `useRef`
* Creating responsive interfaces with Tailwind CSS
* Structuring React applications using Vite

## 🔮 Future Improvements

* Password strength indicator
* Option to avoid ambiguous characters
* Password history
* Dark/Light mode
* Copy success notification
* Save user preferences

## 👨‍💻 Author

**Uday Partap Singh**

If you found this project useful, consider giving it a ⭐ on GitHub!
