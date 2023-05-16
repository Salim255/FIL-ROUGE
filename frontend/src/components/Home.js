import React, { useEffect } from "react";

import { getMessage } from "../feature/homeSlice";

export default function Home() {
  // const { message } = useSelector((store) => store.test);

  return (
    <main className="test">
      <p className="test__container">Hello world</p>
    </main>
  );
}
