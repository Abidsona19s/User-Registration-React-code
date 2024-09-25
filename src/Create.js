import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
const Create = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [degination, setDegination] = useState("");

    const history=useNavigate();

    const CreateHandler = () => {

        let data = { name, email, degination };
        fetch("http://localhost:1919/users/",
            {
                method: "POST",
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
    return <>
      <div className='d-flex justify-content-between m-2'>
      <h2>create</h2>
      <Link to="/read">
      <button className='btn btn-primary'>show Data</button>
      </Link>
      </div>
        
        <form>
            <div className="mb-3">
                <label className="form-label">Name     </label>
                <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Email    </label>
                <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="mb-3">
                <label className="form-label">Degination</label>
                <input type="text" className="form-control" onChange={(e) => setDegination(e.target.value)} />
            </div>

            <button type="button" className="btn btn-primary" onClick={CreateHandler}>Submit</button>
        </form>

    </>

}

export default Create;