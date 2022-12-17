import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
 
 
const comp = [
  { label: <Link to="/dashboard" style={{color:'red',textDecoration:'none' }}>Dashboard</Link>},
  { label: <Link to="/student" style={{ textDecoration:'none'}}>Student</Link>},
 
];
 
class DropdowmComp extends Component {
 
  render() {
    return (
          <Select options={comp} isMulti styles={{backgroundColor:'red'}} /> 
    );
  }
 
}
 
export default DropdowmComp;
