import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import CustomerDetails from './CustomerDetails'
import axios from 'axios'

export default class SupportedCities extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cities: null,
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
    axios.get('assets/samplejson/cities.json').then(response => {
      this.setState({cities: response.data.supported_cities})
    })
  }


  render() {
    if (!this.state.cities)
      return (<p>Loading data</p>)
    return (<div className="addmargin">
      <div className="col-md-3">
        {

          this.state.cities.map(c => <Panel bsStyle="info" key={c.name} className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h3">{c.name}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <Button bsStyle="info">

                Click to View Details

              </Button>

            </Panel.Body>
          </Panel>)
        }
      </div>
      <div className="col-md-6">
        {/* <CustomerDetails val={this.state.selectedCustomer}/> */}
      </div>
    </div>)
  }

}
