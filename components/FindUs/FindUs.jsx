import React from 'react';
import Styles from './FindUs.module.css';

const FindUs = () => {
    return (
        <div className={Styles.container}>
            <h1 className='text-white text-5xl geomatrixBold font-bold'>Find Us</h1>
            <div className={Styles.addressSection}>
                <div className={Styles.address}>
                    <h1 className='text-white'>Bangladesh</h1>
                    <h4 className='text-neutral-400'>ADDRESS</h4>
                    <p className='text-neutral-400'>Level 3, Ventura Iconia, Holding 37, Road 11, Block</p>
                    <p className='text-neutral-400'>H, Banani 11, </p>
                    <p>Dhaka, 1216. </p>
                    <div className={Styles.usa}><h4>USA BRANCH</h4>
                        <p className='text-neutral-400'>51 Chester Avenue, Brooklyn, New York.</p></div>

                </div>
                <div className={Styles.contact}>
                    <h4 className='text-neutral-400'>CONTACT</h4>
                    <p className='text-neutral-400'>mail@gamil.com</p>
                    <p className='text-neutral-400'>anothermail@gmail.com</p>
                    <p className='text-neutral-400'>+880 1793690232</p>
                </div>
                <div className={Styles.mapLocation}>
                    <iframe className='rounded-lg' width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=universiy%20boys%20hostel+(Growdio)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>
        </div>
    )
}

export default FindUs
