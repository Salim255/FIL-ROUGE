import axios from "axios";
import { useDispatch } from "react-redux";
import { TEST } from "../types/actions-types";

export const getMessage = () => async (dispatch) => {
  try {
    const result = await axios.get("localhost:3000/");
    console.log(result);
    dispatch({
      type: TEST,
      payload: result.message,
    });
  } catch (error) {
    return;
  }
};
