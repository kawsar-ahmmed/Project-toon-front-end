import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserUpdate = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5001/user/${id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, [id]);
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold">Updating id: {user.name}</h1>
        </div>
    );
};

export default UserUpdate;