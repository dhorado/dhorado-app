import React from 'react';
import styles from '../styles/home.module.css'
// import { useNetwork } from 'wagmi'

function Home() {
  return (
    <div class="container no-padding">
      <img src={require("../assets/images/UI/FondoHome.png").default} alt="Background" />
      <div className="centered">
        <h1 className='text-uppercase text-center pt-5 text-white'>Welcome</h1>
        <h4 className='text-uppercase text-center text-white'>To</h4>
        <h1 className='text-uppercase text-center text-gold'>Dhorado</h1>
        <div className='pt-3'>
          <h4 className='m-0 text-gold'>Step 1</h4>
          <p className='w-75 mx-auto mt-0 text-white'>Connect your Wallet and Lens profile</p>
          <h4 className='m-0 text-gold'>Step 2</h4>
          <p className='w-75 mx-auto mt-0 text-white'>Get out and find some treasures!</p>
          <h4 className='m-0 text-gold'>Step 3</h4>
          <p className='w-75 mx-auto text-white'>Brag about it to your friends!</p>
        </div>
        <a className='pt-4' href='/#/hunt'>
          <img src={require("../assets/images/UI/StartHunting.png").default} alt="Start hunting" />
        </a>
      </div>
    </div>
  );
}

export default Home;
