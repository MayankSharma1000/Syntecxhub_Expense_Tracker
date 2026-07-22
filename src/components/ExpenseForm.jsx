import { useState } from "react";

function ExpenseForm({ addExpense, titleRef }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !amount || Number(amount) <= 0) {
      alert("Please enter a valid title and amount.");
      return;
    }

    const expense = {
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
      date,
    };

    addExpense(expense);

    setTitle("");
    setAmount("");
    setCategory("Food");
    setDate(new Date().toISOString().split("T")[0]);
  };

  return (
    <div className="card form-card">
      <h3>Add Expense</h3>

      <form onSubmit={handleSubmit}>

        <input
          ref={titleRef}
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Food</option>
          <option>Shopping</option>
          <option>Travel</option>
          <option>Bills</option>
          <option>Entertainment</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button>Add Expense</button>

      </form>
    </div>
  );
}

export default ExpenseForm;
