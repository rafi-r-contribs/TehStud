import classes from "../styles/Analysis.module.css";
import Questions from "./Questions";

export default function Analysis({ answers }) {
  return (
    <div className={classes.analysis}>
      <h1>回答分析</h1>
      <Questions answers={answers} />
    </div>
  );
}
