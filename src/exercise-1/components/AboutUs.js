import React from 'react';
import { Link } from 'react-router-dom';


class AboutUs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div>
            <p>Company: ThoughtWorks.local</p>
            <p>Location: WuHan</p>
            <p>For more infomation, please click my <Link to="/profile">profile</Link></p>
        </div>
    }
}

export default AboutUs;