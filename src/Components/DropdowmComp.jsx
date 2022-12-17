import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
 
 
const comp = [
  { label: <Link to="/dashboard" style={{color:'green',textDecoration:'none' }}>Ashish Kumar<br></br>Admin</Link>},
  { label: <Link to="/student" style={{ color:'green',textDecoration:'none'}}>Ashish Kumar<br></br>Student</Link>},
 
];
 
class DropdowmComp extends Component {
 
  render() {
    return (
      <div className="col-3 position-absolute text-align-center">
          <Select options={comp} isMulti /> 
          
       </div>
    );
  }
 
}
 
export default DropdowmComp;
