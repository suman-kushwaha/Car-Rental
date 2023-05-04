
const API_ADMIN="https://car-rental-7mti.onrender.com"


function addAdmin(AdminData){
    return fetch(`${API_ADMIN}/admin/signup`, {
        method: 'POST',
       headers:{
        "content-type":"application/json",
       } ,
       body:JSON.stringify(AdminData)
    })
    .then(res => res.json())
}

export {addAdmin}