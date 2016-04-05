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
                <h4 className="role text-center">{this.props.profileData.role}</h4>
                <hr/>
                <ul>
                    <li><i className="fa fa-lg fa-map-marker"></i>{this.props.profileData.location.address},
                        {this.props.profileData.location.city},
                        {this.props.profileData.location.region}</li>
                    <li><i className="fa fa-envelope"></i>{this.props.profileData.email}</li>
                    <li><i className="fa fa-mobile"></i>{this.props.profileData.mobile}</li>
                </ul>
            </div>
        )
    }
});

export default Profile;