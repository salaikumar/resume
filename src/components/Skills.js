import React, {Component} from 'react';

var Skills = React.createClass({
    componentWillMount(){

    },
    render(){
        var getSkills = this.props.skillset.map(function(skill,index){
            return <li key={index}><span className="label label-info">{skill}</span></li>
        });
        return(
            <section className="skills">
                <h2 className="text-uppercase"><i className="fa fa-code">Skills</i></h2>
                <hr/>
                <ul className="skills-list list-inline">{getSkills}</ul>
            </section>
        )
    }
});

export default Skills;