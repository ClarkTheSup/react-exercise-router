import React from 'react';


class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div>
            <p>Username: XXX,</p>
            <p>Gender: female,</p>
            <p>Work: IT industry,</p>
            <p>Website: '/profile',</p>
        </div>
    }
}

export default Profile;