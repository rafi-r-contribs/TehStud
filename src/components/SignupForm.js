import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { signup } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    // do validation
    if (password !== confirmPassword) {
      return setError("Passwords don't match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      history.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account!");
    }
  }

  return (
    <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="お名前"
        icon="person"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <TextInput
        type="text"
        required
        placeholder="メールアドレス"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextInput
        type="password"
        required
        placeholder="パスワード"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <TextInput
        type="password"
        required
        placeholder="パスワード（確認用）"
        icon="lock_clock"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Checkbox
        required
        text="確認事項に同意する"
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
      />

      <Button disabled={loading} type="submit">
        <span>作成</span>
      </Button>

      {error && <p className="error">{error}</p>}

      <div className="info">
        アカウントを登録済みの方は、 <Link to="/login">ログイン</Link> へ
      </div>
    </Form>
  );
}
