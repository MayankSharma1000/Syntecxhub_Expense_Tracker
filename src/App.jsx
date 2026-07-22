import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import SummaryCards from "./components/SummaryCards";

const API_URL =
  "https://6a609674b1933e9d25fd75f9.mockapi.io/api/v1/expenses";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const titleRef = useRef(null);

  // Fetch and display expenses from MockAPI when the app loads.
  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Unable to fetch expenses.");
        }

        const data = await response.json();

        setExpenses(data);
      } catch (err) {
        console.error("Failed to fetch expenses:", err);
        setError("Unable to load expenses. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  // Required useCallback optimization.
  const addExpense = useCallback((expense) => {
    setExpenses((previousExpenses) => [
      {
        ...expense,
        Field: `local-${Date.now()}`,
      },
      ...previousExpenses,
    ]);

    titleRef.current?.focus();
  }, []);

  const deleteExpense = useCallback((expenseId) => {
    setExpenses((previousExpenses) =>
      previousExpenses.filter(
        (expense) => expense.Field !== expenseId
      )
    );
  }, []);

  return (
    <>
      <Navbar />

      <main className="container">
        <ExpenseForm
          addExpense={addExpense}
          titleRef={titleRef}
        />

        {loading && <Loader />}

        {!loading && error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            <SummaryCards expenses={expenses} />

            <ExpenseList
              expenses={expenses}
              deleteExpense={deleteExpense}
            />
          </>
        )}
      </main>
    </>
  );
}

export default App;
