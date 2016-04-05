import React, {Component} from 'react';
import Profile from './Profile';
import ResumeContent from './ResumeContent';

var Resume = React.createClass({
    getInitialState(){
        return{
            resumeJson: null
        }
    },
    componentDidMount(){
        if(isMounted()){

        }
    },
    render(){
        if(this.state.resumeJson){
            return(
                <div className="container">
                    <div className="row">
                        <aside className="col-md-4">
                            <div className="inner well">
                                <Profile />
                                {this.state.resumeJson.profile.summary}
                            </div>
                        </aside>
                        <main className="col-md-8">
                            <div className="inner well">
                                <ResumeContent />
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