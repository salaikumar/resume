import React, {Component} from 'react';
import Profile from './Profile';
import ResumeContent from './ResumeContent';

var Resume = React.createClass({
    render(){
        return(
            <div>
                <Profile />
                <ResumeContent />
            </div>
        )
    }
})

export default Resume;