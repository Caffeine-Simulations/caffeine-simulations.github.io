import React, { useState } from 'react';
import ProgressWheelCard from '../components/ProgressWheelCard';
import './styles/T38C.css';

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

  return (
    <div className="t38c-container">
      <header className="t38c-header">
        <h1>T-38C Progress</h1>
      </header>

      <section className="progress-updates">
        <h2>Progress updates</h2>
        <p>These are estimates, and not indicative of time to release. However, they give a good idea of the state of the project</p>
        <div className="progress-grid">
          <ProgressWheelCard
            color="#4caf50"
            percentage={75}
            title="External Model"
          />
          <ProgressWheelCard
            color="#f44336"
            percentage={25}
            title="Cockpit Model"
          />
          <ProgressWheelCard
            color="#2196f3"
            percentage={5}
            title="Flight Model"
          />
        </div>
      </section>

      <section className="external-model">
        <h2>External Model</h2>
        <p>The T-38C Talon Project for DCS features a highly detailed external model
          based on photos from researchers documents, and several reference sources from
          ENJJPT and other squadrons.
        </p>
        <div className="photo-grid">
          <img
            src={`${process.env.PUBLIC_URL}/images/T-38_External_5.png`}
            alt="External Model"
            className="external-model-image"
            onClick={() => openModal(`${process.env.PUBLIC_URL}/images/T-38_External_5.png`)}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/T-38_External_1.png`}
            alt="External Model"
            className="external-model-image"
            onClick={() => openModal(`${process.env.PUBLIC_URL}/images/T-38_External_1.png`)}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/T-38_External_3.png`}
            alt="External Model"
            className="external-model-image"
            onClick={() => openModal(`${process.env.PUBLIC_URL}/images/T-38_External_3.png`)}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/T-38_External_4.png`}
            alt="External Model"
            className="external-model-image"
            onClick={() => openModal(`${process.env.PUBLIC_URL}/images/T-38_External_4.png`)}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/T-38_External_6.png`}
            alt="External Model"
            className="external-model-image"
            onClick={() => openModal(`${process.env.PUBLIC_URL}/images/T-38_External_6.png`)}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/T-38_External_2.png`}
            alt="External Model"
            className="external-model-image"
            onClick={() => openModal(`${process.env.PUBLIC_URL}/images/T-38_External_2.png`)}
          />
        </div>
      </section>

      <section className="cockpit-model">
        <h2>Cockpit Model</h2>
        <p>Information and images about the cockpit model of the T-38C.</p>
        <div className="photo-grid">
        <img
          src={`${process.env.PUBLIC_URL}/images/T-38_Cockpit_1.png`}
          alt="Cockpit Model"
          className="cockpit-model-image"
          onClick={() => openModal(`${process.env.PUBLIC_URL}/images/T-38_Cockpit_1.png`)}
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/T-38_Cockpit_2.png`}
          alt="Cockpit Model"
          className="cockpit-model-image"
          onClick={() => openModal(`${process.env.PUBLIC_URL}/images/T-38_Cockpit_2.png`)}
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/T-38_Cockpit_3.png`}
          alt="Cockpit Model"
          className="cockpit-model-image"
          onClick={() => openModal(`${process.env.PUBLIC_URL}/images/T-38_Cockpit_3.png`)}
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/T-38_Cockpit_4.png`}
          alt="Cockpit Model"
          className="cockpit-model-image"
          onClick={() => openModal(`${process.env.PUBLIC_URL}/images/T-38_Cockpit_4.png`)}
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/T-38_Cockpit_5.png`}
          alt="Cockpit Model"
          className="cockpit-model-image"
          onClick={() => openModal(`${process.env.PUBLIC_URL}/images/T-38_Cockpit_5.png`)}
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/T-38_Cockpit_6.png`}
          alt="Cockpit Model"
          className="cockpit-model-image"
          onClick={() => openModal(`${process.env.PUBLIC_URL}/images/T-38_Cockpit_6.png`)}
        />
        </div>
      </section>

      <section className="flight-model">
        <h2>Flight Model</h2>
        <p>Information about the flight model of the T-38C.</p>
        <div className="photo-grid">
        <img
          src={`${process.env.PUBLIC_URL}/images/T-38_Cockpit_1.png`}
          alt="Cockpit Model"
          className="cockpit-model-image"
          onClick={() => openModal(`${process.env.PUBLIC_URL}/images/T-38_Cockpit_1.png`)}
        />

        </div>
      </section>

      <section className="liveries">
        <h2>Liveries</h2>
        <p>Details about the liveries available for the T-38C.</p>
        <div className="photo-grid">
        <img
          src={`${process.env.PUBLIC_URL}/images/T-38_Cockpit_1.png`}
          alt="Cockpit Model"
          className="cockpit-model-image"
          onClick={() => openModal(`${process.env.PUBLIC_URL}/images/T-38_Cockpit_1.png`)}
        />
        </div>
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
