'use client'
import Main from "./../components/Main";
import { useState } from "react";

export default function Home() {
  const [modal, setModal] = useState(false)
  return (
    <div>
      <Main modal={modal} setModal={setModal}/>
    </div>
  );
}
