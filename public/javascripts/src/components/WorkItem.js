import React, {Component} from 'react';
import moment from 'moment';
var WorkItem = React.createClass({
    getWorkDates(){
        var startDate = moment(this.props.workitem.from).format("MMM,YYYY");
        return <span>{startDate} - {this.props.workitem.to}</span>
    },
    render(){
        return(
            <div>
                <h4>{this.props.workitem.position},{this.props.workitem.company}</h4>
                <p>{this.getWorkDates()}</p>
                <p>{this.props.workitem.workSummary[0].java}</p>
                <p>{this.props.workitem.workSummary[0].angular}</p>
                <p>{this.props.workitem.workSummary[0].css}</p>
            </div>
        )
    }
});

export default WorkItem;
