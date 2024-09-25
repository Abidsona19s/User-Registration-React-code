import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function Read() {

    const [data, setData] = useState([])
    useEffect(() => {
        getList();
    },
        []);

    function getList() {
        fetch("http://localhost:1919/users/all").then(response => {
            return response.json();
        }
        ).then(result => {
            console.warn(result);
            setData(result);
        }
        )
    }

    function deleteUser(id) {
        fetch("http://localhost:1919/users/" + id,
            {
                method: "DELETE"
            }
        ).then((resp) => {
            console.warn(resp)
            getList();
        })

    }

    function setToLocalStorage(id,name,email,degination)
    {
localStorage.setItem("id",id);
localStorage.setItem("name",name);
localStorage.setItem("email",email);
localStorage.setItem("degination",degination);
    }



    return (
        <>
        <div className='d-flex justify-content-between m-2'>
        <h>Read Operation</h>
      <Link to="/">
      <button className='btn btn-secondary'>create</button>
      </Link>
      </div>

           
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Degination</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                {

                    data.map((item) =>
                        <tbody>
                            <tr>

                                <td>{item.userId}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.degination}</td>
                                <td><Link to="/update"><button type="button" class="btn btn-success" onClick={() => setToLocalStorage(item.userId,item.name, item.email, item.degination)}>Edit</button></Link></td>
                                <td><button type="button" class="btn btn-danger" onClick={() => deleteUser(item.userId)}>Delete</button></td>
                            </tr>
                        </tbody>

                    )
                }



            </table>
        </>
    )
}
export default Read;
