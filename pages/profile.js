import React from 'react';
import styles from '../styles/Profile.module.css'
import data from '../data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

function Profile(props) {
    return (
        <div className={styles.container}>
            <div class="card" >
                <div class="card-body">
                    <h5 class="card-title text-center">Profle</h5>
                    <div className={styles.profilePicContainer}></div>
                    <h5 className='text-center'>User-Name</h5>
                    <span><p className='text-center'>@username</p></span>
                    <div className='d-flex margin-auto'>
                        <div className='d-flex p-2'>
                            <p className='text-center'>Followers 2</p>
                        </div>
                        <div className='d-flex p-2'>
                            <p className='text-center'>Following 2</p>
                        </div>
                    </div>
                    <div className='d-flex margin-auto'>
                        <h5 className='text-center'>Public Repositories</h5>
                    </div>
                    {data.repo.map((_, i) => {
                        return (
                            <div className='d-flex'>
                                <p>{_.link}</p>
                                <FontAwesomeIcon icon={faCopy} style={{
                                    margin: '0px 0px 0px 20px',
                                    size: '15px'
                                }} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Profile;