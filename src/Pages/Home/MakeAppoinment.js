import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appoinment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppoinment = () => {
    return (
        <section style={{
            background: `url(${appoinment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Appoinment</h3>
                <h2 className='text-3xl text-white'>Make an Appoinment Today</h2>
                <p className='text-white py-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, saepe mollitia itaque qui fugit distinctio expedita quo. Id ea sit, mollitia impedit reiciendis laborum exercitationem libero fuga, unde facere totam deserunt eos distinctio labore inventore amet quaerat saepe. Soluta, ad?</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppoinment;