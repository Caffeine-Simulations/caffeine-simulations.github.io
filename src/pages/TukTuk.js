import React, { useState } from 'react';
import './styles/ModPage.css';
import Header from '../components/Header';

function TUKTUK() {
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
    <div className="modpage-container">
      <Header title="Assault TukTuk Asset Pack" />
      <section className="external-model">
        <p>The Assult TukTuk stems from an idea we had 2 years ago after seeing a reddit post on <a href="https://www.reddit.com/r/shittytechnicals/comments/n7vjmg/danish_assault_tuk_tuk/" target="_blank">r/shittytechnicals</a> which lead us to <a href="https://www.youtube.com/watch?app=desktop&v=4Utg0pF9FB4" target="_blank">this video</a>. 
        We thought it would be a fun project to do, and so we started work on it. All variants are available as AI ground units, and if you have combined arms they are driveable.
        <br /><br />
        So far, we have an unarmed version, just for driving around in, and an armed version, to more fit the DCS Theme.
        <br /><br />
        The models are nearing the final stage, We need to finalise the interior and drivers/gunner models, as well as texture the .50 Cal on the back. We hope to get this in your hands ASAP, and keep your eyes out for our launch event.</p>
      </section> 
      <Header title="Images" /> 
        <section className="external-model">
        <p>Check out some of our work in progress pictures</p>
        <div className="photo-grid">
          {[1, 2].map((i) => (
            <img
              key={i}
              src={`${process.env.PUBLIC_URL}/images/TukTuk/tuktuk${i}.png`}
              alt="External Model"
              className="external-model-image"
              onClick={() => openModal(`${process.env.PUBLIC_URL}/images/TukTuk/tuktuk${i}.png`)}
            />
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

export default TUKTUK;
