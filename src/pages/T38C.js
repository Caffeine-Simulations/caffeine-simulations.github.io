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

  // List of YouTube video IDs to embed
  const youtubeVideos = [
    'VYWRZHvv1rI',
    'ey-pCZQl-Kc',
    'iiu2vrhtIQU',
    'm7KEro2sdNs',
    '805JXwjy-X8',
    'b3pDf1XfBE8',

  ];

  return (
    <div className="t38c-container">
      <Header title="T-38C Progress" />
      <section className="progress-updates">
        <p>These are estimates, and not indicative of time remaining in the project.</p>
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
          {[1,2,3,4].map((i) => (
            <img
              key={i}
              src={`${process.env.PUBLIC_URL}/images/External_${i}.png`}
              alt="External Model"
              className="external-model-image"
              onClick={() => openModal(`${process.env.PUBLIC_URL}/images/External_${i}.png`)}
            />
          ))}
        </div>
      </section>

      <Header title="T-38C Cockpit Model" />
      <section className="cockpit-model">
        <p>The model is made from over 300 high detailed photographs from both real jets and the simulators, as well as a 3D scan to verify our model down to the millimeter.<br />
        A huge thanks to our resident Talon drivers and maintainers for sourcing whatever we asked, and even a few airport staff snapping pictures of Talons when they come to visit.
        </p>
        <p>The Front Cockpit is complete, and is moving on to the next stage, being prepared for texturing. The Rear Cockpit model is now underway, with many of the elements a simple copy paste</p>
        <div className="photo-grid">
          {[11,10,9,8,2,3,5,6,7].map((i) => (
            <img
              key={i}
              src={`${process.env.PUBLIC_URL}/images/Cockpit_${i}.png`}
              alt="Cockpit Model"
              className="cockpit-model-image"
              onClick={() => openModal(`${process.env.PUBLIC_URL}/images/Cockpit_${i}.png`)}
            />
          ))}
        </div>
      </section>

      <Header title="T-38C Avionics" />
      <section className="avionics">
        <p>The T-38C features a highly advanced Navigation system. Based off publicly available manuals, and honed by SME feedback, our reproduction
          is one of the indepth 4th gen aircraft simulated in DCS World. The T-38C is equipped with GPS Navigation, as well as VOR, TACAN, and ILS, 
          and is capable of using civilian SIDS and STARS.
        </p>
        <p>
          The Navigation system in DCS is powered by our open sourced NavDataPlugin, which we have made available for all modders to use, featuring
          airport information, beacons and more. For more information see{' '}<a href="https://github.com/DCS-OpenSource/NavDataPlugin/wiki" target="_blank" rel="noopener noreferrer">here.</a>
        </p>
        <div className="video-grid">
          {youtubeVideos.map((id) => (
            <div key={id} className="video-container">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
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
