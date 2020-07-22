import React from "react";

interface State {
  user: User;
  isLoggedIn: boolean;
}

interface Action {
  type: "login" | "logout";
  payload?: {
    user?: User;
    token?: string;
  };
}

const token = localStorage.getItem("token");
const username = localStorage.getItem("username");

export const initialState: State = {
  user: {
    id: 0,
    username: username || "",
    email: "",
  },
  isLoggedIn: Boolean(token),
};

export const UserContext = React.createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

const login = (state: State, user: User, token: string) => {
  const updatedState = state;
  localStorage.setItem("token", token);
  localStorage.setItem("username", user.username);
  return {
    ...updatedState,
    user,
    isLoggedIn: true,
  };
};

const logout = (state: State) => {
  const updatedState = state;
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  window.location.reload();
  return {
    ...updatedState,
    user: initialState.user,
    isLoggedIn: false,
  };
};

export const userReducer = (state: State, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case "login": {
      if (payload?.user && payload?.token)
        return login(state, payload.user, payload.token);
      else return state;
    }
    case "logout":
      return logout(state);
    default:
      return state;
  }
};
