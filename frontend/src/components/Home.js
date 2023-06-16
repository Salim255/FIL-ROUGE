import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
//import { getMessage } from "../feature/homeSlice";

export default function Home() {
  //const { message } = useSelector((store) => store.test);
  const dispatch = useDispatch();
  console.log("====================================");
  //console.log(message);
  console.log("====================================");
  useEffect(() => {
    //dispatch(getMessage());
  }, [dispatch]);
  return (
    <main className="test">
      <p className="test__container">Hello world</p>
    </main>
  );
}
