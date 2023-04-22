import React, { useEffect, useState } from "react";
import { getMessage } from "../Redux/test/test-action";
import { useDispatchn, useSelector } from "react-redux";
export default function Test() {
  const [message, setMessage] = useState();
  useEffect(() => {}, []);
  return <div>Test</div>;
}
