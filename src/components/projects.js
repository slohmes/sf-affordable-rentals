import React, {Component} from 'react';
import './projects.css';


class Projects extends Component {
  render() {
    return (
      <div>
        <h2 className='title'>Affordable Rental Projects</h2>
          <div className='tableContainer'>
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Neighborhood</th>
                  <th>Sponsor</th>
                  <th>District</th>
                  <th>Affordable Units</th>
                  <th>Total Units</th>
                </tr>
                {this.props.projects.map((project) => (
                <tr key={project.project_id}>
                  <td>{project.project_name}</td>
                  <td>{project.street_number}</td>
                  <td>{project.neighborhood}</td>
                  <td>{project.project_sponsor}</td>
                  <td>{project.supervisor_district}</td>
                  <td>{project.affordable_units}</td>
                  <td>{project.total_units}</td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
      </div>
    )
  }
};

export default Projects
