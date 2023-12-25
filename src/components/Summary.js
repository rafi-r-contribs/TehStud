import { useMemo } from "react";
import successImage from "../assets/images/success.png";
import useFetch from "../hooks/useFetch";
import classes from "../styles/Summary.module.css";
import { useAuth } from "../contexts/AuthContext";

export default function Summary({ score, noq }) {
  const { currentUser, logout } = useAuth();
  const getKeyword = useMemo(() => {
    if ((score / (noq * 5)) * 100 < 50) {
      return "failed";
    } else if ((score / (noq * 5)) * 100 < 75) {
      return "good";
    } else if ((score / (noq * 5)) * 100 < 100) {
      return "very good";
    } else {
      return "excellent";
    }
  }, [score, noq]);

 const correctAnsPercentage = () => {
  return (score / (noq * 5)) * 100
 }

  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`,
    "GET",
    {
      Authorization: process.env.REACT_APP_PEXELS_API_KEY,
    }
  );

  const image = result ? result?.photos[0].src.medium : successImage;

  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
        {currentUser.displayName}さんが取得した点数は{score}点 <br />
           正答率： {correctAnsPercentage()}%
        </p>
      </div>

      {loading && <div className={classes.badge}>Loading your badge...</div>}

      {error && <div className={classes.badge}>An error occured!</div>}

      {!loading && !error && (
        <div className={classes.badge}>
          <img src={image} alt="Success" />
        </div>
      )}
    </div>
  );
}
