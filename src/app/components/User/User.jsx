import React from "react";

import userImage from './images/user-image.jpg'
const User = () => {
    return(
        <div className="user">
            <div className="user__info">
                <div className="user__img-box">
                    <img src={userImage} alt="user image" className="user__img"/>
                </div>
                <div className="user__wrap">
                    <p className="user__name">Eva Jonson</p>
                    <p className="user__position">Sales Manager</p>
                    <p className="user__description">I will find the best offers for you. My services are absolutely free.</p>
                </div>
            </div>
            <div className="user__services">
                <p className="user__services-title">Services</p>
                <ul className="user__services-list">
                    <li className="user__services-item">
                        <p className="user__services-name">Manual tour booking</p>
                        <span className="user__services-number">13</span>
                    </li>
                    <li className="user__services-item">
                        <p className="user__services-name">Package tours</p>
                        <span className="user__services-number">3</span>
                    </li>
                    <li className="user__services-item">
                        <p className="user__services-name">Hotels</p>
                        <span className="user__services-number">1</span>
                    </li>
                </ul>
                <div className="user__services-wrap">
                    <p className="user__services-total">Total</p>
                    <span className="user__services-count">15</span>
                </div>
            </div>
        </div>
    )
}

export default User;
