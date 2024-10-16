import axios from "axios";
import { getServer } from "../utils";
import { GET_PROFILE, PROFILE_ERROR, ERRORS } from "./types";



export const getProfile = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${getServer()}/api/profile/${id}`);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusType },
    });
  }
};

export const createProfile = (profileData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post(`${getServer()}/api/profile/`, profileData, config)
      .then((_) => console.log("profile created"));
  } catch (err) {
    const error = err.response.data.errors;
    if (error) {
      dispatch({
        type: ERRORS,
        payload: error,
      });
    } else {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusType },
      });
    }
  }
};

export const deleteAccount = (history) => async (dispatch) => {
  try {
    axios.delete(`${getServer()}/api/profile`).then((_) => {
      localStorage.removeItem("token");
      // window.history.push("/");
      console.log("profile deleted")
      window.location.reload();
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusType },
    });
  }
};
