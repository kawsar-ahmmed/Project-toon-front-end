import React from 'react';

const AddUser = () => {
  
    const handleAddUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = { name, email }
        fetch('http://127.0.0.1:5001/user', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success', data)
                alert("User Added Successfully");
                event.target.reset();
            })
    }

    return (
        <div className='text-center py-6'>
            <form onSubmit={handleAddUser}>
                <input className='border border-indigo-600' type="text" name='name' placeholder='Name' />
                <br />
                <input className='border border-indigo-600' type="email" name='email' placeholder='Email' />
                <br />
                <button className='py-4 px-8 ba bg-slate-400 text-yellow-50 my-2'>Add user</button>
            </form>
            <div className="user-main">
            </div>
        </div>
    );

};

export default AddUser;