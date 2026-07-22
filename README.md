# Expense Tracker

A responsive Expense Tracker application developed as part of the SyntecxHub Web Development Internship.

The application allows users to add, view, and remove expenses while demonstrating practical usage of essential React Hooks and asynchronous data fetching from a mock REST API.

## Features

- Add expenses with title, amount, category, and date
- Fetch and display expenses from MockAPI
- Delete expenses from the current application state
- Calculate total expenses
- Display total expense entries
- Calculate average expense
- Validate expense inputs
- Automatic form focus management
- Loading and API error states
- Responsive design

## React Hooks Used

### useState

Manages expense data, form inputs, loading state, and error state.

### useEffect

Fetches expense data from MockAPI when the application loads.

### useRef

Manages form focus. After adding an expense, focus automatically returns to the title field.

### useMemo

Memoizes calculated expense statistics including total expenses, number of entries, and average expense.

### useCallback

Memoizes the add and delete expense handlers.

## Tech Stack

- React
- JavaScript ES6+
- Vite
- CSS3
- React Icons
- MockAPI
- Fetch API

## Project Structure

src/
  components/
    ExpenseCard.jsx
    ExpenseForm.jsx
    ExpenseList.jsx
    Loader.jsx
    Navbar.jsx
    SummaryCards.jsx
  App.css
  App.jsx
  index.css
  main.jsx

## Getting Started

Install dependencies:

    npm install

Start the development server:

    npm run dev

Create a production build:

    npm run build

## Mock API

Expense data is retrieved from a MockAPI REST endpoint using the Fetch API inside React's useEffect hook.

This simulates retrieving expense information from a backend service while keeping the project focused on frontend development.

## Internship

Developed for the SyntecxHub Web Development Internship.

Project: Expense Tracker
