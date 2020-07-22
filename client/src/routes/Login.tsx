import { gql, useLazyQuery } from "@apollo/client";
import React from "react";
import { UserContext } from "../context/UserContext";
import "../scss/login-page.scss";
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { state, dispatch } = React.useContext(UserContext);

  const history = useHistory();

  const [login, { data, loading, error }] = useLazyQuery<{
    info: { user: User; token: string };
  }>(
    gql`
      query login($user: Login!) {
        info: login(user: $user) {
          user {
            id
            username
            email
            last_ip
            last_attempt_ip
            mutetime
            mutereason
            muteby
          }
          token
        }
      }
    `
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login({
      variables: {
        user: {
          username,
          password,
        },
      },
    });
  };

  React.useLayoutEffect(() => {
    if (state.isLoggedIn) history.replace("/");
  }, [state.isLoggedIn, history]);

  React.useEffect(() => {
    if (!loading && data) {
      dispatch({
        type: "login",
        payload: { user: { ...data.info.user }, token: data.info.token },
      });
    }
    if (error) dispatch({ type: "logout" });
  }, [data, loading, error, dispatch]);

  return (
    <section className="login__container">
      <form className="login__form" onSubmit={handleSubmit}>
        <div className="login__form-group">
          <label htmlFor="login-email">Username</label>
          <input
            type="text"
            className="login__username"
            name="login-username"
            id="login-username"
            required={true}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="login__form-group">
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
        </div>
        <button type="submit" className="button login__button">
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
