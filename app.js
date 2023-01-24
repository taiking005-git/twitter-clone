

async function getUsers() {
    const users = await fetch('https://dummyjson.com/users')
        .then(res => res.json());
    console.log(users.users)
}

getUsers()