import React, { useState } from "react";
import { Header } from "../../components/Header/Header";


export const ContactC = () => {
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [message, setMessage] = useState("");

  function handleClick() {
    const form = {
      fullname,
      phone,
      adress,
      message,
    };
    console.log(form);
  }

  const disabledBtn =
    !fullname?.trim() || !phone?.trim() || !adress?.trim() || !message?.trim();

  return (
    <>
    <Header/>
    <section className="d-flex justify-content-between align-items-center my-5 px-5">
      <div className="w-50 text-center">
        <img
          style={{
            width: "70%",
            borderTopRightRadius: "50%",
            borderBottomLeftRadius: "50%",
            boxShadow: "0px 20px 35px rgba(0,0,0,0.55)",
          }}
          src="https://images-platform.99static.com//EJ1CS_OYaOdtZJyI8jGvIZrl1XQ=/489x489:1552x1552/fit-in/500x500/99designs-contests-attachments/79/79168/attachment_79168569"
          alt=""
        />
      </div>

      <div
        className="d-flex flex-column justify-content-center align-items-center gap-3 w-50 p-4 rounded"
        style={{
          backdropFilter: "blur(5px)",
          boxShadow: "0px 20px 25px rgba(0,0,0,0.55)",
        }}
      >
        <div className="d-flex flex-column justify-content-center w-100">
          <label className="fs-5 fw-light" htmlFor="">
            Fullname
          </label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            className="form-control"
            type="text"
          />
        </div>
        <div className="d-flex flex-column justify-content-center w-100">
          <label className="fs-5 fw-light" htmlFor="">
            Phone
          </label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            type="number"
          />
        </div>
        <div className="d-flex flex-column justify-content-center w-100">
          <label className="fs-5 fw-light" htmlFor="">
            Adress
          </label>
          <input
            onChange={(e) => setAdress(e.target.value)}
            className="form-control"
            type="text"
          />
        </div>
        <div className="d-flex flex-column justify-content-center w-100">
          <label className="fs-5 fw-light" htmlFor="">
            Message
          </label>
          <textarea
            className="form-control"
            onChange={(e) => setMessage(e.target.value)}
            cols="22"
            rows="4"
          ></textarea>
        </div>
        <div className="w-100">
          <button
            disabled={disabledBtn}
            onClick={handleClick}
            className="btn btn-dark fs-5 w-100 fw-light"
          >
            SEND
          </button>
        </div>
      </div>
    </section>
    </>
  );
};
