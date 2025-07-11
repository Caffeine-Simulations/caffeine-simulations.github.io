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
          image={`${process.env.PUBLIC_URL}/images/External_2.png`}
          title="T-38C Talon"
          link="/mods/t-38c-talon"
          description="The T-38C Talon is a twin-engine, high-altitude, supersonic jet trainer."
        />
        <Card
          image={`${process.env.PUBLIC_URL}/images/bus.png`}
          title="Caffeine Simulations Asset Pack"
          link="/mods/caffeine-simulations-asset-pack"
          description="A highly detailed asset pack to be released alongside the T-38C Talon."
        />
        <Card
          image={`${process.env.PUBLIC_URL}/images/CT4A_in_game_annoucement.png`}
          title="CT-4E Airtrainer"
          // link="/mods/caffeine-simulations-asset-pack"
          description="A test bed airframe for the Garmin Systems, The NavDataPlugin, and various other systems."
        />
        {/* <Card
          // image={`${process.env.PUBLIC_URL}/images/bus.png`}
          title="Secret Project #1"
          // link="/mods/caffeine-simulations-asset-pack"
          description="A small, single engine aircraft. Announcement coming soon."
        /> */}

      </div>
    <Header title="Open Source Projects" />
      <div className="card-container">
        <Card
          image={`${process.env.PUBLIC_URL}/images/GNS530.png`}
          title="Garmin GNS530"
          link=""
          description="Open Source Replication of the Garmin GNS530 for DCS. Freely available for anyone to use in GA Aircraft."
        />
        <Card
          image={`${process.env.PUBLIC_URL}/images/G5.png`}
          title="Garmin G5 Suite"
          link=""
          description="Open Source Replication of the Garmin G5 for DCS. Either Single or Dual G5 available, with a full suite of features."
        />
        <Card
          image={`${process.env.PUBLIC_URL}/images/F10_map.png`}
          title="Navdata Plugin"
          link="https://github.com/DCS-OpenSource/NavDataPlugin/wiki"
          description="A small drop in API to collect navigation data more efficiently in DCS."
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
