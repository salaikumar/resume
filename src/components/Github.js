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
        console.log(this.state.userRepos.map(function(repo,i){
            return repo.id + repo.name;
        }));
        var firstHalfUserRepos = this.state.userRepos.map((repo,i)=>{
            if(repo.id == '55372911'){
                return <div>

                    <div className="col-md-12 reponame text-primary">
                        <a href={repo.html_url} target="_blank" key={i}>{repo.name}</a>
                    </div>
                    <div className="col-md-12 repodescription">
                        <p key={i}>Creating resume using reactjs with the help of gulp and node.</p>
                    </div>
                    <div className="col-md-12" key={i}>
                        <span className=" tags label label-primary text-uppercase">react</span>
                        <span className="tags label label-primary text-uppercase">gulp</span>
                    </div>

                </div>
            }
            if(repo.id == '55372911'){
                return <div>

                    <div className="col-md-12 reponame text-primary">
                        <a href={repo.html_url} target="_blank" key={i}>{repo.name}-Meghaduta</a>
                    </div>
                    <div className="col-md-12 repodescription">
                        <p key={i}>Creating resume using reactjs with the help of gulp and node.</p>
                    </div>
                    <div className="col-md-12" key={i}>
                        <span className=" tags label label-primary text-uppercase">react</span>
                        <span className="tags label label-primary text-uppercase">gulp</span>
                    </div>

                </div>
            }
            if(repo.id == '54154127'){
                return <div>

                    <div className="col-md-12 reponame text-primary">
                        <a href={repo.html_url} target="_blank" key={i}>{repo.name}</a>
                    </div>
                    <div className="col-md-12 repodescription">
                        <p key={i}>A react application using flux architecture to create stickypad notes.</p>
                    </div>
                    <div className="col-md-12" key={i}>
                        <span className=" tags label label-primary text-uppercase">react & flux</span>
                        <span className="tags label label-primary text-uppercase">gulp</span>
                    </div>

                </div>
            }
            if(repo.id == '53275321'){
                return <div>
                    <div className="col-md-12 reponame text-primary">
                        <a href={repo.html_url} target="_blank" key={i}>{repo.name}</a>
                    </div>
                    <div className="col-md-12 repodescription">
                        <p key={i}>A react application with webpack bundler to search for github users and their repositories.</p>
                    </div>
                    <div className="col-md-12" key={i}>
                        <span className=" tags label label-primary text-uppercase">react</span>
                        <span className="tags label label-primary text-uppercase">webpack</span>
                    </div>
                </div>

            }
        });
        var secondHalfUserRepos = this.state.userRepos.map((repo,i)=>{
            if(repo.id == '55171168'){
                return <div>

                    <div className="col-md-12 reponame text-primary">
                        <a href={repo.html_url} target="_blank" key={i}>{repo.name}</a>
                    </div>
                    <div className="col-md-12 repodescription">
                        <p key={i}>A replica of google homepage using react and bootstrap.</p>
                    </div>
                    <div className="col-md-12" key={i}>
                        <span className=" tags label label-primary text-uppercase">react</span>
                    </div>

                </div>
            }
            if(repo.id == '55171070'){
                return <div>

                    <div className="col-md-12 reponame text-primary">
                        <a href={repo.html_url} target="_blank" key={i}>{repo.name}</a>
                    </div>
                    <div className="col-md-12 repodescription">
                        <p key={i}>Creating resume using reactjs with the help of gulp and node.</p>
                    </div>
                    <div className="col-md-12" key={i}>
                        <span className=" tags label label-primary text-uppercase">react</span>
                        <span className="tags label label-primary text-uppercase">gulp</span>
                    </div>

                </div>
            }
            if(repo.id == '53755138'){
                return <div>

                    <div className="col-md-12 reponame text-primary">
                        <a href={repo.html_url} target="_blank" key={i}>{repo.name}</a>
                    </div>
                    <div className="col-md-12 repodescription">
                        <p key={i}>Creating resume using reactjs with the help of gulp and node.</p>
                    </div>
                    <div className="col-md-12" key={i}>
                        <span className=" tags label label-primary text-uppercase">react</span>
                        <span className="tags label label-primary text-uppercase">gulp</span>
                    </div>

                </div>
            }
            if(repo.id == '53605417'){
                return <div>

                    <div className="col-md-12 reponame text-primary">
                        <a href={repo.html_url} target="_blank" key={i}>{repo.name}</a>
                    </div>
                    <div className="col-md-12 repodescription">
                        <p key={i}>Creating resume using reactjs with the help of gulp and node.</p>
                    </div>
                    <div className="col-md-12" key={i}>
                        <span className=" tags label label-primary text-uppercase">react</span>
                        <span className="tags label label-primary text-uppercase">gulp</span>
                    </div>

                </div>
            }


        });
        return(
            <section>
                <h2 className="text-uppercase"><i className="fa fa-code-fork">Github Repos</i></h2>
                <hr/>
                <div className="row">
                    <div className="col-md-6">
                        {firstHalfUserRepos}
                    </div>
                    <div className="col-md-6">
                        {secondHalfUserRepos}
                    </div>
                </div>
            </section>
        )
    }
});

export default Github;