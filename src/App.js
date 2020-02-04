import React, {Component} from 'react';
import Projects from './components/projects'

const headerStyle = { textAlign: 'center' }

class App extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    fetch('https://data.sfgov.org/resource/9rdx-httc.json')
    .then(res => res.json())
    .then(data => {
      this.setState({ projects: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <div className="App">
        <div className="header" style={headerStyle}>
            <h1>Mayor's Office of Housing and Community Development Affordable Rental Portfolio</h1>
            <p>Affordable rental housing developed in partnership with non-profit and private developers and financed by the Mayor’s Office of Housing and Community Development (MOHCD) and the Office of Community Investment and Infrastructure (OCII) through City Funding Agreements, Ground Leases, Disposition & Participation Agreements and Conduit Mortgage Revenue Bond Financing, as of December 31, 2018.</p>
            <p>Data from <a href='https://data.sfgov.org/Housing-and-Buildings/Mayor-s-Office-of-Housing-and-Community-Developmen/9rdx-httc'>DataSF</a>.</p>
        </div>

        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
