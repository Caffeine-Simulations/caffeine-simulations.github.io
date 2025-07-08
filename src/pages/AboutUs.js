import React from 'react';
import ProfileCard from '../components/AboutUsCard';
import './styles/AboutUs.css';

function AboutUs() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Meet the Team:</p>
        <div className="profileCardContainer">
        <ProfileCard
          imageSrc={`${process.env.PUBLIC_URL}/images/profile_pics/Hayds_93.JPG`}
          name="Hayds_93"
          role="Lead Developer"
          description="Knows more about T-38C's then the pilots do."
        />
        <ProfileCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwS70r6aZEg6-wofSf66x7MU7FiZSEFSOIQA&s"
          name="TheSpaceProgram"
          role="Project Manager"
          description='"Hey Hayds, How hard would it be if we..."'
        />
        <ProfileCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwS70r6aZEg6-wofSf66x7MU7FiZSEFSOIQA&s"
          name="Shelter OhOh"
          role="Lead 3D Artist"
          description='Likes all the ugly planes'
        />
        <ProfileCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwS70r6aZEg6-wofSf66x7MU7FiZSEFSOIQA&s"
          name="Tmux"
          role="Lead 2D Artist"
          description="Did I mention I'm a pilot?"
        />
        <ProfileCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwS70r6aZEg6-wofSf66x7MU7FiZSEFSOIQA&s"
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
          name="AFK"
          role="Sound Designer"
          description='Sound design god'
        />
        <ProfileCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwS70r6aZEg6-wofSf66x7MU7FiZSEFSOIQA&s"
          name="Sina.cpp"
          role="Developer"
          description="Would rather build his own flight sim from scratch"
        />
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
