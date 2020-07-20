import { gql, useMutation } from "@apollo/client";
import React from "react";
import "../scss/register-page.scss";

const Register: React.FC = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [register, { data, loading, error }] = useMutation<Account>(
    gql`
      mutation register(
        $username: String!
        $email: String!
        $password: String!
      ) {
        register(username: $username, email: $email, password: $password) {
          id
          username
          email
        }
      }
    `
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    register({ variables: { username, email, password } });
    event.preventDefault();
  };

  React.useEffect(() => {
    if (!loading && data) console.log(data);
    if (error) console.error(error.message);
  }, [data, loading, error]);

  return (
    <section className="register__container">
      <form className="register__form" onSubmit={handleSubmit}>
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
        <button type="submit" className="button">
          register
        </button>
      </form>
    </section>
  );
};

export default Register;
