import React, {Component} from 'react';

var Github = React.createClass({
    getInitialState(){
      return{
          username: 'rvkumar92',
          userRepos: []
      }
    },
    getDefaultProps(){
        return{
            clientId: '33861dcfe25145fcb3d0',
            clientSecret:  'afe58fa6f82ca834f2bbdb6d4367a22301a0cc19'
        }
    },
    componentWillMount(){
        $.ajax({
            url: 'https://api.github.com/users/'+this.state.username+'/repos?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({userRepos: data});
            }.bind(this),
            error: function(xhr, status, error){
                this.setState({username: null});
                alert(error).bind(this);
            }
        });
    },
    render(){
        var getuserrepos = this.state.userRepos.map(function(repo,i){
            return <div className="row">
                    <div className="col-lg-12">
                        <a href={repo.url} key={repo.id}>{repo.name}</a>
                    </div>
                </div>
        });
        return(
            <section>
                <h2 className="text-uppercase"><i className="fa fa-code-fork">Github Repos</i></h2>
                <hr/>
                <ul className="list-group list-inline">
                    <li>{getuserrepos}</li>
                </ul>
            </section>
        )
    }
});

export default Github;