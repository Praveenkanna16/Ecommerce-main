import axios from "axios";
import { useDispatch } from "react-redux";
import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./actiontype";

const dispatch = useDispatch();

export const loginUser = async (data) => {
  try {
    const response = await axios.post("/api/login", data);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    dispatch({ type: LOGIN_FAILURE, payload: { error: "Failed to log in" } });
    return { error: "Failed to log in" };
  }
};

 