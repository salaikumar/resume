import React, {Component} from 'react';
import WorkItem from './WorkItem';
var Work = React.createClass({
    render(){
        var work = this.props.workData.map((workitem,i)=>{
            return <WorkItem key={i} workitem={workitem} />
        });
        console.log(this.props.workData);
        return(
            <section>
                <h2 className="text-uppercase"><i className="fa fa-briefcase"></i>Work Experience</h2>
                <hr />
                {work}
            </section>
        )
    }
});

export default Work;