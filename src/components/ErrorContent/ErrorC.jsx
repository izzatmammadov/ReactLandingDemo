import React from "react";
import styles from "./error.module.css";
import { useNavigate } from "react-router-dom";

export const ErrorC = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.content}>
      <div className="w-25">
        <img
          style={{ width: "100%" }}
          src="https://img.freepik.com/free-vector/isometric-error-background-hand-reaches-out-from-hole-with-sign-error-four-hundred-four-vector-illustration_1284-67441.jpg?w=900&t=st=1699614392~exp=1699614992~hmac=4dd48a6a0467d560b0e947af7f7bf2391edf8296ddb90a5bca86909059ca361e"
        />
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center w-50 text-center">
        <h1 className="fw-bold">Page Not Found</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          inventore, totam recusandae rerum enim eius deserunt magnam quasi
          saepe quod?
        </p>
        <button onClick={() => navigate("/")} className="btn btn-dark  fs-5"> &larr;
          Go Home
        </button>
      </div>
    </section>
  );
};
