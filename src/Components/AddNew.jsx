import React, { useState } from 'react';
import JSONDATA from '../MOCK_DATA.json';


export const AddNew = () => {
    const [data,setData]=useState(JSONDATA);
    const [user, setUser]=useState({
        name:'',
        batch:'',
        location:'',
        experience:'',
        mobile:''
    });
    const handleNewRow=(e)=>{
        e.preventDefault();
        const fieldName=e.target.getAttribute('name');
        const fieldValue=e.target.value;

        const newFormData={...user};
        newFormData[fieldName]=fieldValue;
        setUser(newFormData);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
       const newDataRow={
        name:user.name,
        batch:user.batch,
        location:user.location,
        experience:user.experience,
        mobile:user.mobile
       }
       const newDataRowS=[...data,newDataRow];
       console.log(newDataRowS)
       setData(newDataRowS);
    }
console.log(data)
  return (
            <>
             <form className='col-12 d-flex justify-content-center align-items-center flex-wrap p-2 col-12 gap-2
             mt-4' onSubmit={handleSubmit}>
                <input type='text' name='name' onChange={handleNewRow}
                required='required' placeholder='Enter name'/>
                <input type='number' name='batch' onChange={handleNewRow}
                 required='required' placeholder='Enter batch'/>
                <input type='text' name='location' onChange={handleNewRow}
                 required='required' placeholder='Enter location'/>
                <input type='number' name='experience' onChange={handleNewRow}
                 required='required' placeholder='Enter experience'/>
                <input type='number' name='mobile' onChange={handleNewRow}
                 required='required' placeholder='Enter mobile no.'/>
               <button className="btn btn-success">ADD</button>
             </form>
            </>
  )
}
