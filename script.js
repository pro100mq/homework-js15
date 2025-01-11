const users = [
    {name: "Danya", balance: 15000, friend: "Ostap", friends: 10, skills: "swimming"},
    {name: "Ostap", balance: 12000, friend: "Danya", friends: 5, skills: "basketball"},
    {name: "Andrey", balance: 10000, friend: "Stas", friends: 9 , skills: "english"},
    {name: "Stas", balance: 13000, friend: "Kiril", friends: 13, skills: "programming"},
    {name: "Kiril", balance: 14000, friend: "Andrey", friends: 3, skills: "tennis"},
    {name: "Ivan", balance: 17000, friend: "Kiril", friends: 15, skills: "football"},
];

const allSalary = users.reduce((sum, user) => sum + user.balance, 0)
console.log(allSalary)

const searchName = users.reduce((names, user)=> {
    if(user.friend === "Kiril"){
        names.push(user)
    }
    return(names)
}, [])
console.log(searchName)

const copyFriends = [...users]
copyFriends.sort((a, b) => a.friends - b.friends)
console.log(copyFriends)

const copySkills = [...users]
copySkills.sort((a, b) => a.skills.localeCompare(b.skills))
console.log(copySkills)