import { useState } from "react";
import styles from "./TodoForm.module.css";
import { Button } from "../UI/Button";

export function TodoForm({ addTodos }) {
  const [text, setText] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodos(text);
    setText("");
  };
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          value={text}
          placeholder="Enter new todo"
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submite" title="Submite">
          Submite
        </Button>
      </form>
    </div>
  );
}
