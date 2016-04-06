import React, {Component} from 'react';
import Profile from './Profile';
import ResumeContent from './ResumeContent';
import Education from './Education';
import Work from './Work';
import Skills from './Skills';

var Resume = React.createClass({
    getInitialState(){
        return{
            resumeJson: null
        }
    },
    componentDidMount(){
        if(this.isMounted()){
            this.setState({resumeJson: this.props.sourceData})
        }
    },
    render(){
        if(this.state.resumeJson){
            var profileData = this.props.sourceData.profile;
            var workData = this.props.sourceData.work;
            var educationData = this.props.sourceData.education;
            var skillset = this.props.sourceData.skills;
            var languages = this.props.sourceData.languages;
            var interest = this.props.sourceData.interest;
            return(
                <div className="container">
                    <div className="row">
                        <aside className="col-md-4">
                            <div className="inner well">
                                <Profile profileData={profileData}/>
                            </div>
                        </aside>
                        <main className="col-md-8">
                            <div className="inner well">
                                <Work workData={workData} />
                                <br/>
                                <Skills skillset={skillset} />
                                <br/>
                                <Education educationData={educationData} />
                            </div>
                        </main>
                    </div>
                </div>
            )
        }else{
            return <p>Loading...</p>
        }
    }
});

export default Resume;