
import { useEffect, useState } from 'react';

import UserItem from './UserItem';

const Home = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {

            try {
                const res = await fetch(
                    'https://randomuser.me/api?results=10'
                );

                const body = await res.json();

                setUsers(body.results);

            } catch (err) {
                console.error(err);
            }
        };
        
        getUsers();
    }, []);

    return (
        <main>
            <h2>Lista de usuarios</h2>
            
            <ul>                
                {users.map((user) => {
                    return <UserItem key={user.id} user={user}/>;
                })}
            </ul>
        </main>
    );
};
export default Home;