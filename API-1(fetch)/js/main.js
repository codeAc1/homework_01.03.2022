let btn=document.querySelector(".btn-success");
btn.addEventListener("click",function(){
    fetch ("https://randomuser.me/api/?results=100")
    .then(response=>response.json())
    .then(data=>{

        var x=""
        data.results.forEach(user => {
            x+=`
            <div class ="col-lg-2 card text-center mt-5 ms-2">
            <div class ="card-body card-footer">
               <img src="${user.picture.large}" alt="">
            </div>
            <div class ="card-footer">
               <p>${user.phone}</p>
               <p>${user.name.first} ${user.name.last} </p>
            </div>
            </div>
            `
        })
        document.getElementById("users").innerHTML=x
    })
    .catch(error=>console.log(error))

    
})

let cards=document.querySelector(".card ")

console.log(cards)
