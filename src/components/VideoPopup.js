import React, {Component} from "react";
import {Form, Button} from 'react-bootstrap';
import './VideoPopup.css';
import axios from './axios';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.updateDetails = this.updateDetails.bind(this);
    this.postvideo = this.postvideo.bind(this);
    this.state = {
      details: {
              url: "",
              channel: "",
              description: "",
              song: "",
              likes: "0",
              shares: "0",
              messages: "0"
      }
    }
  }

  updateDetails(event) {
    let updateDetails = Object.assign({}, this.state.details);

    updateDetails[event.target.id] = event.target.value;
    this.setState({
      details: updateDetails
    });
  }

  postvideo() {
    axios.post("/v2/posts", this.state.details)
      .then((reply) => {
        console.log(reply);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
      this.props.closePopup();
  }


  render(){
    return (
      <div className="popup__container">
      <div className="popup__body">
       <Form className='popup__form'>
         <Form.Group controlId="url">
             <Form.Label>Video URL</Form.Label>
             <Form.Control onChange={this.updateDetails} value={this.state.details.url} type="text" placeholder="Enter url of mp4 video" />
         </Form.Group>
 
         <Form.Group controlId="channel">
             <Form.Label>Username</Form.Label>
             <Form.Control onChange={this.updateDetails} value={this.state.details.channel} type="text" placeholder="Enter channel name" />
         </Form.Group>
 
         <Form.Group controlId="description">
             <Form.Label>Description</Form.Label>
             <Form.Control onChange={this.updateDetails} value={this.state.details.description} type="text" placeholder="Enter video description" />
         </Form.Group>
 
         <Form.Group controlId="song">
             <Form.Label>Song</Form.Label>
             <Form.Control onChange={this.updateDetails} value={this.state.details.song} type="text" placeholder="Enter song used" />
         </Form.Group>
         <Button onClick= {this.postvideo}>Post video</Button>
             </Form>
       <button onClick={this.props.closePopup}>Close X</button>
      </div>
     </div>
    )
  }
}

export default Popup;