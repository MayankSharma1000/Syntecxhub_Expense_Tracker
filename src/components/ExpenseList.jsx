import ExpenseCard from "./ExpenseCard";

function ExpenseList({ expenses, deleteExpense }) {
  return (
    <section className="list">
      <h3>Your Expenses</h3>

      {expenses.length === 0 ? (
        <div className="empty-state">
          <h4>No expenses yet</h4>
          <p>Add your first expense using the form above.</p>
        </div>
      ) : (
        expenses.map((expense) => (
          <ExpenseCard
            key={expense.Field}
            expense={expense}
            deleteExpense={deleteExpense}
          />
        ))
      )}
    </section>
  );
}

export default ExpenseList;
