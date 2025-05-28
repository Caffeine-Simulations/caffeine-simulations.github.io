import React, { useState } from 'react';
import ProgressWheelCard from '../components/ProgressWheelCard';
import './styles/T38C.css';
import Header from '../components/Header';

function T38C() {
  const [modalImage, setModalImage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    console.log("Opening modal with image:", image);
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    console.log("Closing modal");
    setIsModalOpen(false);
    setModalImage('');
  };

  const modules = [
  { color: "#4caf50", percentage: 25, title: "External Model" },
  { color: "#f44336", percentage: 67, title: "Cockpit Model" },
  { color: "#2196f3", percentage: 3,  title: "Flight Model" },
  { color: "black",    percentage: 59, title: "Avionics" },
];

const overall = Math.round(
  modules.reduce((sum, m) => sum + m.percentage, 0) / modules.length
);

  return (
    <div className="t38c-container">
      <Header title="T-38C Progress" />
      <section className="progress-updates">
        <p>These are estimates…</p>
        <div className="progress-grid">
          {modules.map((m) => (
            <ProgressWheelCard
              key={m.title}
              color={m.color}
              percentage={m.percentage}
              title={m.title}
            />
          ))}

          <ProgressWheelCard
            color="#ff9800"
            percentage={overall}
            title="Overall Status"
          />
        </div>
      </section>

      <Header title="T-38C External Model" />
      <section className="external-model">
        <p>The T-38C Talon Project for DCS features a highly detailed external model
          based on photos from researchers documents, and several reference sources from
          ENJJPT and other squadrons.
        </p>
        <div className="photo-grid">
          <img
            src={`${process.env.PUBLIC_URL}/images/External_1.png`}
            alt="External Model"
            className="external-model-image"
            onClick={() => openModal(`${process.env.PUBLIC_URL}/images/T-38_External_1.png`)}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/External_2.png`}
            alt="External Model"
            className="external-model-image"
            onClick={() => openModal(`${process.env.PUBLIC_URL}/images/External_2.png`)}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/External_3.png`}
            alt="External Model"
            className="external-model-image"
            onClick={() => openModal(`${process.env.PUBLIC_URL}/images/External_3.png`)}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/External_4.png`}
            alt="External Model"
            className="external-model-image"
            onClick={() => openModal(`${process.env.PUBLIC_URL}/images/External_4.png`)}
          />
        </div>
      </section>
      <Header title="T-38C Cockpit Model" />
      <section className="cockpit-model">
        <p>The model is made from over 300 high detailed photographs from both real jets and the simulators, as well as a 3D scan to verify our model down to the millimeter.<br></br>
        A huge thanks to our resident Talon drivers and maintainers for sourcing whatever we asked, and even a few airport staff snapping pictures of Talons when they come to visit.
        </p>
        <p>The Front Cockpit is complete, and is moving on to the next stage, being prepared for texturing. The Rear Cockpit model is now underway, with many of the elements a simple copy paste</p>
        <div className="photo-grid">
        <img
          src={`${process.env.PUBLIC_URL}/images/Cockpit_1.png`}
          alt="Cockpit Model"
          className="cockpit-model-image"
          onClick={() => openModal(`${process.env.PUBLIC_URL}/images/Cockpit_1.png`)}
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/Cockpit_2.png`}
          alt="Cockpit Model"
          className="cockpit-model-image"
          onClick={() => openModal(`${process.env.PUBLIC_URL}/images/T-38_Cockpit_2.png`)}
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/Cockpit_3.png`}
          alt="Cockpit Model"
          className="cockpit-model-image"
          onClick={() => openModal(`${process.env.PUBLIC_URL}/images/Cockpit_3.png`)}
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/Cockpit_4.png`}
          alt="Cockpit Model"
          className="cockpit-model-image"
          onClick={() => openModal(`${process.env.PUBLIC_URL}/images/Cockpit_4.png`)}
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/Cockpit_5.png`}
          alt="Cockpit Model"
          className="cockpit-model-image"
          onClick={() => openModal(`${process.env.PUBLIC_URL}/images/Cockpit_5.png`)}
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/Cockpit_6.png`}
          alt="Cockpit Model"
          className="cockpit-model-image"
          onClick={() => openModal(`${process.env.PUBLIC_URL}/images/Cockpit_6.png`)}
        />
                <img
          src={`${process.env.PUBLIC_URL}/images/Cockpit_7.png`}
          alt="Cockpit Model"
          className="cockpit-model-image"
          onClick={() => openModal(`${process.env.PUBLIC_URL}/images/Cockpit_7.png`)}
        />
        </div>
      </section>
      <Header title="T-38C Flight Model" />
      <section className="flight-model">
        <p>Information about the flight model of the T-38C. More information to come on this later</p>
      </section>
      <Header title="T-38C liveries" />
      <section className="liveries">
        <p>Details about the liveries available for the T-38C. More to come later</p>
      </section>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-content" src={modalImage} alt="Enlarged" />
        </div>
      )}
    </div>
  );
}

export default T38C;
