import React, {Component} from 'react';

var Profile = React.createClass({
    render(){
        return(
            <div>
                <div className="profileImage">
                    <img src={this.props.profileData.picture}
                         alt="Profile Picture" className="img-circle profileImage" width="200"/>
                </div>
                <div className="name text-center"><h3>{this.props.profileData.name}</h3></div>
                <div></div>
            </div>
        )
    }
});

export default Profile;