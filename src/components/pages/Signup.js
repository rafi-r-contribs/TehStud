import Illustration from "../Illustration";
import SignupForm from "../SignupForm";

export default function Signup() {
  return (
    <>
      <h1>アカウントを作成して下さい</h1>

      <div className="column">
        <Illustration />
        <SignupForm />
      </div>
    </>
  );
}
