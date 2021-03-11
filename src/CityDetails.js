import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import axios from 'axios';

//This Component is a child Component of Customers Component
export default class CityDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getCityDetails(this.props.val)
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {

    //get Customer Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getCityDetails(this.props.val)
    }
  }

  //Function to Load the customerdetails data from json.
  getCityDetails(id) {
    axios.get('assets/samplejson/supported_cities' + id + '.json').then(response => {
      this.setState({cityDetails: response.data.supported_cities})

    })
  };

  render() {
    if (!this.state.cityDetails)
      return (<p>Loading Data</p>)
    return (<div className="citydetails">
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{this.state.cityDetails.data.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>code : {this.state.cityDetails.data.code}</p>
          <p>name : {this.state.cityDetails.data.name}</p>
          <p>description : {this.state.cityDetails.data.description}</p>
          <p>amount : {this.state.cityDetails.data.amount}</p>
          <p>unit : {this.state.cityDetails.data.unit}</p>
          <p>is_visible : {this.state.cityDetails.data.is_visible}</p>
          <p>is_global : {this.state.cityDetails.data.is_global}</p>
        </Panel.Body>
      </Panel>
    </div>)
  }
}