import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
const emptyEvent = {
  title: "",
  date: "",
  city: "",
  venue: "",
  hostedBy: ""
};

class EventForm extends Component {

  state = {
    event: emptyEvent
  }
  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({
        event : this.props.selectedEvent
      })
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedEvent !== this.props.selectedEvent) {
      this.setState({
        event: nextProps.selectedEvent || emptyEvent
      })
    }
  }
  onFormSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.event.id) {
      this.props.updatedEvent(this.state.event);
    } else {
      this.props.createEvent(this.state.event);
    }
    
  }
  onTitleChange = (evt) => {
    this.setState({
      event: {
        title: evt.target.value
      }
    })
  }
  onInputChange = (evt) => {
    const newEvent = this.state.event;
    newEvent[evt.target.name] = evt.target.value;
    this.setState({
      event:  newEvent
    })
  }
  render() {
    const {handleFormCancel} =  this.props
    const {event} = this.state
    return <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input name="title" onChange={this.onInputChange} value={event.title} placeholder="Event Title" />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input onChange={this.onInputChange} name="date" value={event.date} type="date" placeholder="Event Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input onChange={this.onInputChange} name="city" value={event.city} placeholder="City event is taking place" />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input onChange={this.onInputChange} name="venue" value={event.venue} placeholder="Enter the Venue of the event" />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input onChange={this.onInputChange} name="hostedBy" value={event.hostedBy} placeholder="Enter the name of person hosting" />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={handleFormCancel} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>;
  }
}
export default EventForm;
