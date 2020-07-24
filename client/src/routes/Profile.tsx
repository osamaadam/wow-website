import React from "react";
import { UserContext } from "../context/UserContext";
import "../scss/profile.scss";

const Profile: React.FC = () => {
  const { state } = React.useContext(UserContext);

  const Table: React.FC = () => {
    return (
      <table className="profile__table">
        <tbody>
          {Object.entries(state.user).map(([key, value]) => {
            return (
              key.match(/^[^_]/) && (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              )
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <section className="profile">
      <h1>Account Summary</h1>
      <h3>Logged in as {state.user.username}</h3>
      <Table />
    </section>
  );
};

export default Profile;
