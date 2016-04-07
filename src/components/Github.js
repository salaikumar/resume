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
        var getUserRepos =

                this.state.userRepos.map((repo,i)=>{
                    if(repo.id == '55643485'){
                        return <div className="row">
                            <div className="col-md-6">
                                <div className="col-md-12 reponame text-primary">
                                    <a href={repo.url} key={i}>{repo.name}</a>
                                </div>
                                <div className="col-md-12 repodescription">
                                    <p key={i}>Creating resume using reactjs with the help of gulp and node.</p>
                                </div>
                                <div className="col-md-12" key={i}>
                                    <span className=" tags label label-primary text-uppercase">react</span>
                                    <span className="tags label label-primary text-uppercase">gulp</span>
                                </div>
                            </div>

                            <div className="col-md-6">

                            </div>
                        </div>
                    }
                });

        return(
            <section>
                <h2 className="text-uppercase"><i className="fa fa-code-fork">Github Repos</i></h2>
                <hr/>
                {getUserRepos}
            </section>
        )
    }
});

export default Github;