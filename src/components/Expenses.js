import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  props.items.map((item, index) => {
    return (
      <ExpenseItem
        title={item.title}
        amount={item.amount}
        date={item.date}
      ></ExpenseItem>
    );
  });
  return (
    <div className="expenses">
      {/* better way to do */}
      {/* {props.items.map((item, index) => {
        return (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          ></ExpenseItem>
        );
      })} */}

      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </div>
  );
}

export default Expenses;
