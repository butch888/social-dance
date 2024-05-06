'use client'
import Modal from "@/components/Modal";
import Main from "./../components/Main";
import { useState } from "react";

export default function Home() {
  const [modal, setModal] = useState(false)
  return (
    <div className="max-w-[1440px] mx-auto">
      <Main modal={modal} setModal={setModal}/>
      {modal && <Modal setModal={setModal}/>}
    </div>
  );
}
