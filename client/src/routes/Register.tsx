import { gql, useMutation } from "@apollo/client";
import React from "react";
import "../scss/register-page.scss";
import { UserContext } from "../context/UserContext";

const Register: React.FC = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { dispatch } = React.useContext(UserContext);

  const [register, { data, loading, error }] = useMutation<{ user: User }>(
    gql`
      mutation register($user: Register) {
        user: register(user: $user) {
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
    register({ variables: { user: { username, email, password } } });
    event.preventDefault();
  };

  React.useEffect(() => {
    if (!loading && data) {
      dispatch({
        type: "login",
        payload: { user: { ...data.user }, token: "test" },
      });
    }
    if (error) console.error(error.message);
  }, [data, loading, error, dispatch]);

  return (
    <section className="register__container">
      <form className="register__form" onSubmit={handleSubmit}>
        <div className="register__form-group">
          <label htmlFor="register-username">Username</label>
          <input
            type="text"
            name="register-username"
            id="register-username"
            className="register__username"
            required={true}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="register__form-group">
          <label htmlFor="register-email">Email</label>
          <input
            type="email"
            name="register-email"
            id="register-email"
            className="register__email"
            required={true}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="register__form-group">
          <label htmlFor="register-password">Password</label>
          <input
            type="password"
            name="register-password"
            id="register-password"
            className="register__password"
            required={true}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" className="button">
          register
        </button>
      </form>
    </section>
  );
};

export default Register;
