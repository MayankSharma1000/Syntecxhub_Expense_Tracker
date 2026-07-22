import { useMemo } from "react";

function SummaryCards({ expenses }) {
  const statistics = useMemo(() => {
    const total = expenses.reduce(
      (sum, expense) => sum + Number(expense.amount || 0),
      0
    );

    const average =
      expenses.length > 0
        ? total / expenses.length
        : 0;

    return {
      total,
      average,
      count: expenses.length,
    };
  }, [expenses]);

  return (
    <section className="summary">
      <div className="summary-card">
        <h4>Total Expenses</h4>
        <h2>
          ₹{statistics.total.toLocaleString("en-IN", {
            maximumFractionDigits: 0,
          })}
        </h2>
      </div>

      <div className="summary-card">
        <h4>Total Entries</h4>
        <h2>{statistics.count}</h2>
      </div>

      <div className="summary-card">
        <h4>Average Expense</h4>
        <h2>
          ₹{statistics.average.toLocaleString("en-IN", {
            maximumFractionDigits: 0,
          })}
        </h2>
      </div>
    </section>
  );
}

export default SummaryCards;
