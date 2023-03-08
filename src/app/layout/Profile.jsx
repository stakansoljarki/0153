import React from "react";

import User from "../components/User/User";
import Comment from "../components/Comment/Comment";

const Profile = () => {
    return(
        <section className="profile">
            <div className="profile__container">
                <User/>
                <Comment/>
            </div>
        </section>
    )
}

export default Profile;
