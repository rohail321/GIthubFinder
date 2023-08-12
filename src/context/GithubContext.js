import { createContext, useReducer } from "react";
import axios from "axios";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);
  const searchUsers = async (text) => {
    try {
      setLoading();
      const params = new URLSearchParams({
        q: text,
      });

      const res = await axios.get(
        `${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`,
        {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        }
      );
      const { items } = res.data;
      dispatch({
        type: "GET_USERS",
        payload: items,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const searchUser = async (login) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_GITHUB_URL}/users/${login}`,
        {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        }
      );
      if (res.status === "404") {
        window.location = "/notfound";
      } else {
        dispatch({
          type: "GET_USER",
          payload: res.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const userRepo = async (login) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos`,
        {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        }
      );
      if (res.status === "404") {
        window.location = "/notfound";
      } else {
        dispatch({
          type: "GET_REPO",
          payload: res.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const setLoading = () => dispatch({ type: "SET_Loading" });
  const clearUser = () => dispatch({ type: "CLEAR_USER" });
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        isLoading: state.isLoading,
        searchUsers,
        clearUser,
        searchUser,
        user: state.user,
        userRepo,
        repos: state.repos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
