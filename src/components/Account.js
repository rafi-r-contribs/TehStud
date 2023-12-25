import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Account.module.css";
import { useHistory } from "react-router-dom";

export default function Account() {
  document.title = "Tech Stud";
  const history = useHistory();
  const { currentUser, logout } = useAuth();
  const handleLogout = () => {
    logout();
    history.push("/login");
  }
  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={handleLogout}
          >
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">サインアップ</Link>
          <Link to="/login">ログイン</Link>
        </>
      )}
    </div>
  );
}
