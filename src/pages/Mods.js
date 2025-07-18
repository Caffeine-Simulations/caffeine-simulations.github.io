import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import './styles/Mods.css';

function Mods() {
  return (
    <div>
      <Header title="Mods" />
      <div className="card-container">
        <Card
          image={`${process.env.PUBLIC_URL}/images/T-38C/External_2.png`}
          title="T-38C Talon"
          link="/mods/T-38C"
          description="The T-38C Talon is a twin-engine, high-altitude, supersonic jet trainer."
        />
        <Card
          image={`${process.env.PUBLIC_URL}/images/CT-4E/External_1.png`}
          title="CT-4E Airtrainer"
          link="/mods/CT-4E"
          description="A test bed airframe for the Garmin Systems, The NavDataPlugin, and various other systems."
        />
        <Card
          image={`${process.env.PUBLIC_URL}/images/bus.png`}
          title="Caffeine Simulations Asset Pack"
          link="/mods/caffeine-simulations-asset-pack"
          description="A highly detailed asset pack to be released alongside the T-38C Talon."
        />
      </div>
      <Header title="Open Source Projects" />
      <div className="card-container">
        <Card
          image={`${process.env.PUBLIC_URL}/images/modding-guide.png`}
          title="DCS Modding Guide"
          link="https://modding.caffeinesimulations.com"
          description="A work in progress guide to modding DCS, including aircraft setup, basic systems and EDM export."
          target="_blank"
        />
        <Card
          image={`${process.env.PUBLIC_URL}/images/CT-4E/GNS530.png`}
          title="Garmin GNS530"
          link=""
          description="Open Source Replication of the Garmin GNS530 for DCS. Freely available for anyone to use in GA Aircraft."
        />
        <Card
          image={`${process.env.PUBLIC_URL}/images/CT-4E/G5.png`}
          title="Garmin G5 Suite"
          link=""
          description="Open Source Replication of the Garmin G5 for DCS. Either Single or Dual G5 available, with a full suite of features."
        />
        <Card
          image={`${process.env.PUBLIC_URL}/images/F10_map.png`}
          title="Navdata Plugin"
          link="https://github.com/DCS-OpenSource/NavDataPlugin/wiki"
          description="A small drop in API to collect navigation data more efficiently in DCS."
          target="_blank"
        />
        <Card
          image={`${process.env.PUBLIC_URL}/images/theway.png`}
          title='Unoffical "The Way" Support'
          link="/mods/dcs-the-way"
          description='Caffeine Simulations are proud to contribute to and support DCS: The Way'
        />
      </div>
    </div>
  );
}

export default Mods;
