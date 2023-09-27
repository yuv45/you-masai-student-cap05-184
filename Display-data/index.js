document.getElementById("data").addEventListener("click",fetchusers);

 function fetchusers(){
    fetch(`https://reqres.in/api/users`)
    .then(response=>response.json())
    .then(data=>{
        console.log(data.data);
        let output=``;
        data.data.forEach(user => {
            console.log(user);

            output+=
            
            `<div class="user-card">
            <img  src="${user.avatar}" alt="user avatar"><br>
            <div class="user-details">
                <span class="name">${user.first_name}    ${user.last_name} </span><br>
                <span class="email">${user.email}</span><br>
                <span class="id">${user.id}</span><br>
            </div>
        </div>`
        });
        
        document.getElementById("usersList").innerHTML=output;
        
        let datas=document.getElementById("data");
        datas.innerText="Unfectch data";
        
    })
    
 }
        
