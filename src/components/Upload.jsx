import React, { Component } from 'react';
import './css/Upload.css'
import {connect} from "react-redux";

//import { connect } from 'react-redux';
//import octokit from "@octokit/rest";
const octokit = require('@octokit/rest')({
    debug: true
})


var token =
    "d63784c455f9443fde3150bdf3f199e930d31e91"

// octokit.authenticate({
//     type: 'basic',
//     username: 'jamesamrundle',
//     password: token
// })




var theresult;




class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            owner:"jamesamrundle",
            repo:"React-ToDo",
            title:"",
            body:"",

        }
    this.postIssue = this.postIssue.bind(this)
    }

     postIssue (event) {

         octokit.authenticate({
             type: 'basic',
             username: 'rundleja',
             password: 'signmeinplz1'
         })

         event.preventDefault();
         console.log("clicked");
         octokit.issues.create({
             owner: "jamesamrundle",
             repo: "React-ToDo",
             title: "("+this.props.username+"):"+this.state.title,
             body: this.state.body,
             //assignee, milestone, labels, assignees
         }, (error, result) => {
             console.log("submitted");
             (this.setState({error: error, result: result, title: "", body: ""}));

         })

     }

    render(){
    console.log("state",this.props)
    return(
      <div className="upload">
      <div>
          <div className="upload-form">
             <div  >
                 <span>
                     <h1 style={{color:"white"}} >Issue Title</h1>
              <input className="form-group title"
                  className="form-group title "
                     placeholder="Enter a title for your issue"
                     value={this.state.title}
                     onChange={event => this.setState({title:event.target.value})}>
              </input>
                 </span>
                 </div>
              <div className="form-group ">
              <textarea className="body"
                     placeholder="Enter a description of your issue"
                     value={this.state.body}
                     onChange={event => this.setState({body:event.target.value})}>
              </textarea>
              </div>
              <span className="input-group-btn">
                    <button onClick={this.postIssue} className="btn btn-secondary">Add</button>

                </span>


          </div>
      </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated,
        username: state.auth.username,
        owner:"jamesamrundle",
        repo:"React-ToDo",
        title:"",
        body:"",
    };
}
export default connect(mapStateToProps)(Upload);
