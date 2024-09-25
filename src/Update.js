import React from 'react'
import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


 const Update = () => {
    
    
    const history=useNavigate();
  
  const[id,setId]=useState(0);
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[degination,setDegination]=useState("");
  
  useEffect(()=>
  {
   setId(localStorage.getItem("id"));
   setName(localStorage.getItem("name"));
   setEmail(localStorage.getItem("email"));
   setDegination(localStorage.getItem("degination"));
  },[])

  const handleUpdate=(e)=>
  {
    e.preventDefault();
    let data = {id, name, email, degination };
    fetch("http://localhost:1919/users/update/"+id,
        {
            method: "PUT",
            body: JSON.stringify(data),
            headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    ).then((response) => {
        console.warn(response);
    }
    );
    history('/read');
    
  }
    
  return (
    <>

        <h2>update</h2>
        <form>
            <div className="mb-3">
                <label className="form-label">Name     </label>
                <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Email    </label>
                <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>

            <div className="mb-3">
                <label className="form-label">Degination</label>
                <input type="text" className="form-control"value={degination} onChange={(e)=>setDegination(e.target.value)} />
            </div>

            <button type="button" className="btn btn-primary" onClick={handleUpdate}>Edit</button>
            <Link to="/read"><button className='btn btn-dark mx-2' >Back</button></Link>
        </form>

    </>
  )
}
export default Update;
