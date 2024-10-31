import React from 'react';
import { ServicesCard } from './ServicesCard';
import AI from '../../Assets/images/AI.png';
import fullStack from '../../Assets/images/fullStack.png';
import mobile from '../../Assets/images/mobile.png';
import pm from '../../Assets/images/pm.png';
import team from '../../Assets/images/team.png';
import UI from '../../Assets/images/UI.png';
import digital from '../../Assets/images/digital.png';

export const Services = () => {
  return (
    <div className='w-full mt-2 flex flex-col h-auto gap-4 items-center'>
      <div className='max-w-screen-xl w-full px-4 sm:px-10'>
        <div className='w-full mt-3 text-center'>
          <h1 className='text-4xl font-bold'>Our Services</h1>
          <p className='text-base text-textColor font-mono  mb-4'>Elevate your online presence with our comprehensive range of digital services.</p>
        </div>
        <div className='items-center w-full'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center mx-auto'>
            <ServicesCard img={team} header="Remote Tech Team" des="Remote Tech Team With a dedicated team, Prime Technologies can provide Remote Tech Teams solutions."/>
            <ServicesCard img={AI} header="Artificial Intelligence" des="Our Artificial Intelligence services help you save time and money. Prevent errors, prejudice, and human error."/>

            <ServicesCard img={fullStack} header="Full Stack Development" des="We provide the best and most efficient Full Stack Development services to our clients who have placed their trust in us"/>

            <ServicesCard img={mobile} header="Mobile Application Development" des="We offer biggest selection of Mobile Applications with unique designs."/>

            <ServicesCard img={pm} header="Product Design & Development" des="Our extensive team offers you both cool Product Design and the best Development."/>

            <ServicesCard img={UI} header="User Experience" des="Let our UX/UI Experts assist you in creating attractive and user-friendly designs to elevate your digital presence."/>

            <ServicesCard img={digital} header="Digital Marketing" des="We assist you in implementing new Digital Marketing trends to achieve operational excellence, and run your business."/>
            
       
          </div>
        </div>
      </div>
    </div>
  );
};
