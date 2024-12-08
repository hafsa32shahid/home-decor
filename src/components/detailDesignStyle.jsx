import React, { useEffect, useState } from "react";
import Bathroom from "../json for design styles/bathroom.json";
import Kitchen from "../json for design styles/kitchen.json";
import bedroom from "../json for design styles/bedroom.json";
import Living from "../json for design styles/living.json";
import { useParams } from "react-router-dom";
import Modal from "react-modal";

// import "../designStyle.css"
const DetailDesignStyle = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [a, seta] = React.useState(false);

  function openModal(v) {
    seta(v);
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const [data, setData] = useState(null);
  const { catg } = useParams();
  //   console.log(catg);
  useEffect(() => {
    if (catg == "livingRoom") {
      setData(Living);
    } else if (catg == "bathroom") {
      setData(Bathroom);
    } else if (catg == "kitchen") {
      setData(Kitchen);
    } else if (catg == "bedroom") {
      setData(bedroom);
    }
  }, [catg]);
  console.log(data);
  return (
    <div className="container">
      <div style={{ height: 300, width: "100%" }}></div>
      <div className="row">
        {Array.isArray(data) &&
          data.map((res) => {
            return (
              <div
                className="col-md-4 col-sm-6 col-12 p-4"
                style={{ cursor: "pointer" }}
              >
                {/* <img height={10} width={300} src={res.image_link} alt="" /> */}

                <figure
                  onClick={() => {
                    openModal(res);
                  }}
                >
                  <img
                    src={res.image_link}
                    style={{ border: "2px solid black" }}
                    alt="Volcano and lava field against a stormy sky"
                  />
                  {/* <figcaption>Mountains and volcanos</figcaption> */}
                </figure>
              </div>
            );
          })}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <img src={a && a.image_link} />
            </div>
            <div className="col-sm-6">
              <h5>{a.description}</h5>
              <h5>Products In Design</h5>
              <ul>
                {a &&
                  a.products.map((d) => {
                    return <li>{d.name}</li>;
                  })}
              </ul>
            </div>
            <div
              style={{ display: "flex", justifyContent: "center", margin: 10 }}
            >
              <button onClick={closeModal}>Modal Close</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DetailDesignStyle;
