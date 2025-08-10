import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import './styles/Mods.css';

export default function Mods() {
  return (
    <div className="mods">
      
      <main className="mods-wrap">
        <Header title="Mods" />
        <section className="mods-grid">
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
          <Card
            image={`${process.env.PUBLIC_URL}/images/TukTuk/tuktuk1.png`}
            title="Assult Tuk Tuk Pack"
            link="/mods/tuktuk"
            description="Our first project, a pack of TukTuks for DCS, both armed and unarmed."
          />
        </section>

        <Header title="Open Source Projects" />

        <section className="mods-grid">
          <Card
            image={`${process.env.PUBLIC_URL}/images/modding-guide.png`}
            title="DCS Modding Guide"
            link="https://modding.caffeinesimulations.com"
            description="A work in progress guide to modding DCS, including aircraft setup, basic systems and EDM export."
            target="_blank"
          />
          <Card
            image={`${process.env.PUBLIC_URL}/images/Digitize_points.png`}
            title="Chart Digitizer"
            link="https://github.com/DCS-OpenSource/chart-digitizer"
            description="A tool to convert paper performance charts into a digital format for use in DCS."
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
            image={`${process.env.PUBLIC_URL}/images/theway.png`}
            title='Unoffical "The Way" Support'
            link="/mods/dcs-the-way"
            description='Caffeine Simulations are proud to contribute to and support DCS: The Way'
          />
        </section>

        <Header title="Modding Plugins" />

        <section className="mods-grid">
          <Card
            image={`${process.env.PUBLIC_URL}/images/F10_map.png`}
            title="NavdataPlugin"
            link="https://modding.caffeinesimulations.com/Aircraft/Lua/Plugins/NavDataPlugin/"
            description="A small drop in API to collect navigation data more efficiently in DCS."
            target="_blank"
          />
          <Card
            image={`${process.env.PUBLIC_URL}/images/weapon_system.png`}
            title="WeaponSystemPlugin"
            link="https://modding.caffeinesimulations.com/Aircraft/Lua/Plugins/WeaponSystemPlugin/"
            description="A simple plugin to cleanup how avSimpleWeaponSystem works in DCS."
            target="_blank"
          />
          <Card
            image="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/07/lua-logo-on-gradiant-background.jpg?q=70&fit=contain&w=1200&h=628&dpr=1"
            title="LuaToolsPlugin"
            link="https://modding.caffeinesimulations.com/Aircraft/Lua/Plugins/LuaToolsPlugin/"
            description="A collection of classes to automate or simplify various common tasks in DCS Lua scripting."
            target="_blank"
          />
        </section>

      </main>
    </div>
  );
}
