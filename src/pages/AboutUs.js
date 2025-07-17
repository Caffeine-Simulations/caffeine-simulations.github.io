import React from 'react';
import ProfileCard from '../components/AboutUsCard';
import './styles/AboutUs.css';

import Header from '../components/Header';

function AboutUs() {
  return (
    <div>
      <Header title="Meet the Team" />
      <p>Caffeine Simulations is a group of like minded individuals, with the goal of creating open source projects to further the DCS Modding Community.
        <br />
        We are a collection of developers, artists, and pilots from various other notable modding projects in the DCS community. Including the Lancaster, AH-1G Cobra, T-6D Texan and more.
        <br />
        
      </p>
      <Header title="Project Leads" />
        <div className="profileCardContainer">
        <ProfileCard
          imageSrc={`${process.env.PUBLIC_URL}/images/profile_pics/Hayds_93.JPG`}
          name="Hayds_93"
          role="Lead Developer"
          description="Knows more about T-38C's then the pilots do."
        />
        <ProfileCard
          imageSrc={`${process.env.PUBLIC_URL}/images/profile_pics/space.JPG`}
          name="TheSpaceProgram"
          role="Project Manager"
          description='"Hey Hayds, How hard would it be if we..."'
        />
        </div>
        <Header title="Developers" />
        <div className="profileCardContainer">
        <ProfileCard
          imageSrc={`${process.env.PUBLIC_URL}/images/profile_pics/brian.JPG`}
          name="BrianTheBrain"
          role="Developer"
          description="Once broke the entire T-38C by forgetting a comma."
        />
        <ProfileCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwS70r6aZEg6-wofSf66x7MU7FiZSEFSOIQA&s"
          name="Violent Nomad"
          role="Developer / 2D Artist"
          description="Brazilian Maths Wizard"
        />

        <ProfileCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwS70r6aZEg6-wofSf66x7MU7FiZSEFSOIQA&s"
          name="Sina.cpp"
          role="Developer"
          description="Would rather build his own flight sim from scratch"
        />
        </div>
        <Header title="Artists" />
        <div className="profileCardContainer">
        <ProfileCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwS70r6aZEg6-wofSf66x7MU7FiZSEFSOIQA&s"
          name="Shelter OhOh"
          role="Lead 3D Artist"
          description='Likes all the ugly planes'
        />
        <ProfileCard
          imageSrc={`${process.env.PUBLIC_URL}/images/profile_pics/dewfiend.JPG`}
          name="DewFiend"
          role="3D Artist"
          description='Owns more "For Dummies" Manuals than the smithsonian.'
        />
        <ProfileCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwS70r6aZEg6-wofSf66x7MU7FiZSEFSOIQA&s"
          name="Tmux"
          role="Lead 2D Artist"
          description="Did I mention I'm a pilot?"
        />
        <ProfileCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwS70r6aZEg6-wofSf66x7MU7FiZSEFSOIQA&s"
          name="AFK"
          role="Sound Designer"
          description='Sound design god'
        />
        </div>
        
        <Header title="Livery Artists" />
        <div className="profileCardContainer">
        <ProfileCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwS70r6aZEg6-wofSf66x7MU7FiZSEFSOIQA&s"
          name="Coffee"
          role="Livery Artist"
          description='"Hey Dood!"'
        />
        <ProfileCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwS70r6aZEg6-wofSf66x7MU7FiZSEFSOIQA&s"
          name="Captain_3D"
          role="Livery Artist"
          description='Put a shrimp on the barbie!'
        />
    </div>
    </div>
  );
}

export default AboutUs;
