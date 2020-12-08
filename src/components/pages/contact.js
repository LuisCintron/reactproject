import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactPicture from '../../../static/assets/images/contact.jpg'


export default function () {
    return (
        <div className='contact-container'>
            <div className='left-contact'
                style={{
                    background: "url(" + contactPicture + ") no-repeat",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>

            </div>

            <div className='right-contact'>
                <div className='contact-bullet-points'>
                    <div className='bullet-point-group'>
                        <div className='icon'>
                            <FontAwesomeIcon icon='phone' />
                        </div>
                        <div className='text'>
                            555-555-5555
                            </div>

                    </div>

                    <div className='bullet-point-group'>
                        <div className='icon'>
                            <FontAwesomeIcon icon='envelope' />
                        </div>
                        <div className='text'>
                            Cintron@gmail.com
                            </div>

                    </div>

                    <div className='bullet-point-group'>
                        <div className='icon'>
                            <FontAwesomeIcon icon='map-marked-alt' />
                        </div>
                        <div className='text'>
                            New York, NY
                            </div>

                    </div>


                </div>
            </div>

        </div>
    );
}