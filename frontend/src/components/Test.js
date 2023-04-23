import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getMessage } from "../feature/test/testSlice";
import { store } from "../store";
export default function Test() {
  const { message } = useSelector((store) => store.test);
  const dispatch = useDispatch();
  console.log("====================================");
  console.log(message);
  console.log("====================================");
  useEffect(() => {
    dispatch(getMessage());
  }, [dispatch]);
  return <div>{message}</div>;
}
