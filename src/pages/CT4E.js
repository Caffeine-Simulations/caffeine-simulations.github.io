import React, { useState } from 'react';
import ProgressWheelCard from '../components/ProgressWheelCard';
import './styles/ModPage.css';
import Header from '../components/Header';

function CT4E() {
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
    { color: "#4caf50", percentage: 10, title: "External Model" },
    { color: "#f44336", percentage: 15, title: "Cockpit Model" },
    { color: "#2196f3", percentage: 3,  title: "Flight Model" },
    { color: "black",    percentage: 20, title: "Avionics" },
  ];

  const overall = Math.round(
    modules.reduce((sum, m) => sum + m.percentage, 0) / modules.length
  );

  // // List of YouTube video IDs to embed
  // const youtubeVideos = [
  //   'VYWRZHvv1rI',
  //   'ey-pCZQl-Kc',
  //   'iiu2vrhtIQU',
  //   'm7KEro2sdNs',
  //   '805JXwjy-X8',
  //   'b3pDf1XfBE8',
  // ];

  return (
    <div className="modpage-container">
      <Header title="CT-4E Progress Tracker" />
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

      <Header title="CT-4E External Model" />
      <section className="external-model">
        <p>Our CT-4E external model is currently a standin model from the web, we will update this when we have a more accurate model.</p>
        <div className="photo-grid">
          {[1].map((i) => (
            <img
              key={i}
              src={`${process.env.PUBLIC_URL}/images/CT-4E/External_${i}.png`}
              alt="External Model"
              className="external-model-image"
              onClick={() => openModal(`${process.env.PUBLIC_URL}/images/CT-4E/External_${i}.png`)}
            />
          ))}
        </div>
      </section>

      <Header title="CT-4E Cockpit Model" />
      <section className="cockpit-model">
        <p>The CT-4E cockpit model is currently a stand-in model from the web, we will update this when we have a more accurate model.<br />
        The Garmin avionics in the cockpit have been the focus for now, other gauges will be filled out when the art team becomes available</p>
        <div className="photo-grid">
            <img
              key={"garmin"}
              src={`${process.env.PUBLIC_URL}/images/CT-4E/garmin.png`}
              alt="Cockpit Model"
              className="cockpit-model-image"
              onClick={() => openModal(`${process.env.PUBLIC_URL}/images/CT-4E/garmin.png`)}
            />
            <img
              key={"GNS530"}
              src={`${process.env.PUBLIC_URL}/images/CT-4E/GNS530.png`}
              alt="Cockpit Model"
              className="cockpit-model-image"
              onClick={() => openModal(`${process.env.PUBLIC_URL}/images/CT-4E/GNS530.png`)}
            />
        </div>
      </section>

      <Header title="CT-4E Avionics" />
      <section className="avionics">
        <p>The CT-4E will feature a full Garmin avionics suite, including the GNS530 and G5 systems, in addition to the standard set of gauges. <br />
          We plan to intergrate Navigraph navigation data into the garmins, including SIDS/STARS.
        </p>
        <p>
          The Navigation system in DCS is powered by our open sourced NavDataPlugin, which we have made available for all modders to use, featuring
          airport information, beacons and more. For more information see{' '}<a href="https://github.com/DCS-OpenSource/NavDataPlugin/wiki" target="_blank" rel="noopener noreferrer">here.</a>
        </p>
        {/* <div className="video-grid">
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
        </div> */}
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

export default CT4E;
