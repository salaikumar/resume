import React, {Component} from 'react';

var Education = React.createClass({
    render(){
        return(
            <section>
                <h2 className="text-uppercase"><i className="fa fa-graduation-cap">Education</i></h2>
                <hr/>
                <p><strong>{this.props.educationData[0].course}</strong> at <strong>{this.props.educationData[0].college}</strong></p>
                <p><strong>CGPA:{this.props.educationData[0].cgpa}</strong></p>
                <p>Studied:{this.props.educationData[0].from} - {this.props.educationData[0].to}</p>
            </section>
        )
    }
});

export default Education;