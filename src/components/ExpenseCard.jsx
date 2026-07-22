import { FaTrash } from "react-icons/fa";

function ExpenseCard({ expense, deleteExpense }) {
  const amount = Number(expense.amount || 0);

  return (
    <article className="expense-card">
      <div>
        <h3>{expense.title}</h3>
        <p>{expense.category}</p>
        <small>{expense.date}</small>
      </div>

      <div className="right">
        <h2>
          ₹{amount.toLocaleString("en-IN", {
            maximumFractionDigits: 2,
          })}
        </h2>

        <button
          className="delete-btn"
          type="button"
          onClick={() => deleteExpense(expense.Field)}
          aria-label={`Delete ${expense.title}`}
          title="Delete expense"
        >
          <FaTrash />
        </button>
      </div>
    </article>
  );
}

export default ExpenseCard;
