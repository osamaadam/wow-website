import React from "react";
import "../scss/login-page.scss";
import { useLazyQuery, gql } from "@apollo/client";

const Login: React.FC = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [login, loginquery] = useLazyQuery<Account>(
    gql`
      query login($username: String!, $password: String!) {
        account: login(username: $username, password: $password) {
          id
          username
          email
          last_ip
          last_attempt_ip
          mutetime
          mutereason
          muteby
        }
      }
    `
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login({ variables: { username, password } });
  };

  React.useEffect(() => {
    if (!loginquery.loading && loginquery.data) console.log(loginquery.data);
    if (loginquery.error) console.log(loginquery.error.message);
  }, [loginquery.data, loginquery.loading, loginquery.error]);

  return (
    <section className="login__container">
      <form className="login__form" onSubmit={handleSubmit}>
        <label htmlFor="login-email">Email</label>
        <input
          type="text"
          className="login__username"
          name="login-username"
          id="login-username"
          required={true}
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="login-password">Password</label>
        <input
          type="password"
          className="login__password"
          name="login-password"
          id="login-password"
          required={true}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit" className="button">
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
