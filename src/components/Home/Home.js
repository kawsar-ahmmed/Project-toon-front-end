import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:5001/user')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    console.log(user)
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure? You want to delete');
        if (proceed) {
            console.log('deleting user with id: ', id);
            const url = `http://127.0.0.1:5001/user/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = user.filter(user => user._id != id);
                        setUser(remaining);
                    }
                })
        }
    }
    return (
        <div className=' text-center from-neutral-700'>
            <h1 className=' text-3xl font-bold py-2'>User Count {user.length}</h1>
            {
                user.map(item =>
                    <div key={item._id}>
                        <ul>
                            <li>Name: {item.name}, Email: {item.email}
                                <button onClick={() => handleDeleteUser(item._id)} className=' p-4 bg-slate-500 text-white mx-2 my-4'>X</button>
                                <Link to={`/update/${item._id}`}><button className=' bg-slate-400 from-neutral-400 p-5'>Update</button></Link>
                            </li>
                        </ul>
                    </div>)
            }
        </div>
    );
};

export default Home;