import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";


export const HomeC = () => {
  const navigate = useNavigate();
  return (
    <>
    <Header/>
    <section className=" mt-5 d-flex justify-content-center align-items-center ">
      <div
        style={{ boxShadow: "0px 20px 15px rgba(0,0,0,0.55)" }}
        className="container p-0 d-flex justify-content-center align-items-center mt-5 mx-auto"
      >
        <div>
          <img
            style={{ width: "100%" }}
            src="https://www.stone-ideas.com/wordpress/wp-content/uploads/2022/10/energie_Spanien22.jpg"
          />
        </div>

        <div className="d-flex flex-column pe-5 justify-content-center gap-3 align-items-end">
          <h1 style={{ fontSize: "60px" }} className="fw-light">
            MARBLE AESTHETICS
          </h1>
          <p style={{ fontStyle: "italic" }} className="text-end">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            beatae expedita porro consectetur quasi quae optio aliquid iste,
            repellat vel.
          </p>
          <button
            onClick={() => {
              navigate("/about");
            }}
            className="btn btn-dark w-25 fs-5"
          >
            About Us
          </button>
        </div>
      </div>
    </section>
    </>
  );
};
