let btn=document.querySelector("#btn_add");
let allPost=document.querySelector(".allPost");

btn.onclick=function(){
    
     let http=new XMLHttpRequest();
     http.onreadystatechange=function()
     {
         if(this.readyState==4 && this.status==200)
         {
             let response=JSON.parse(this.responseText);
             for(let post of response)
             {
                let p=document.createElement("p");
                p.classList.add("card-text");
                p.innerText=post.body;

                let h5=document.createElement("h5");
                h5.classList.add("card-title");
                h5.innerText=post.title;

                let cardBody=document.createElement("div")
                cardBody.classList.add("card-body");

                let card=document.createElement("div")
                card.classList.add("card","mt-3");

                let col=document.createElement("div")
                col.classList.add("col-lg-3","col-12");

                cardBody.append(h5,p);
                card.append(cardBody);
                col.append(card);
                allPost.append(col);
 
             }
             
         }
     }
     http.open("GET","https://jsonplaceholder.typicode.com/posts");
     http.send();
}
