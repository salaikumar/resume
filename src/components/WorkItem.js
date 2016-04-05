import React, {Component} from 'react';
import moment from 'moment';
var WorkItem = React.createClass({
    getWorkDates(){
        var startDate = moment(this.props.workitem.from).format("MMM,YYYY");
        return <span>{startDate} - {this.props.workitem.to}</span>
    },
    render(){
        console.log(this.props.workitem);
        return(
            <div>
                <h4>{this.props.workitem.position},{this.props.workitem.company}</h4>
                <p>{this.getWorkDates()}</p>
                <p><strong>Backend</strong>
                    {this.props.workitem.workSummary[0].backend}</p>
                <p><strong>Frontend</strong>
                    {this.props.workitem.workSummary[0].frontend}</p>
            </div>
        )
    }
});

export default WorkItem;