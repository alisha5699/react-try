import Navbar from './components/Navbar';

const populateUser = document.getElementById("populate-user")

fetch('https://graphqlzero.almansi.me/api',{
    method: 'POST',
    headers: {"Content-Type": "application/json"} ,
    body: JSON.stringify({
        query: `
        query{
            users{
               data{
                 name,
                 username,
                 email,
                 address{
                   street
                 },
                 phone,
                 website
               }
           }
         }
        
        `
    })
})
.then(res => res.json())
.then(data => {
    console.log(data.data);
})