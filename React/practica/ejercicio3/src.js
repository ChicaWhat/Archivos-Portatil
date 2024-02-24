const getUsers = async () => {
    const res = await fetch('https://randomuser.me/api?results=10');

    const body = await res.json();

    console.log(body);
};

getUsers();
