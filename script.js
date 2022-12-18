 
   var arr=[{name: "Horshita sharma",image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",status:"Strangers"},
   {name: "Nishta sharma",image:"https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",status:"Strangers"},
   {name: "Yash rai",image:"https://media.istockphoto.com/id/520113519/photo/this-kids-got-confidence.jpg?s=1024x1024&w=is&k=20&c=KRNB3JUUWuBo1BKMwXVCkgZO44Y-hsWc89tMyXO4GCw=",status:"Strangers"},
   
];
function show(){
    var clutter="";
arr.forEach(function(val,index){
clutter=clutter+`<div id="card">
<div id="img">
<img src="${val.image}" alt="">
</div>
<h2>${val.name}</h2>
<h4 id="${val.status}">${val.status}</h4>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint rerum quas perspiciatis ab doloribus atque quos ea tenetur alias iure.</p>
<button class="${val.status}" id="${index}">${(val.status==="Strangers")?"Add Friend":"Remove Friend"}</button>
</div>`
document.getElementById("cards").innerHTML = clutter;
});
}

show();

var flag=0;
document.querySelector("#cards").addEventListener("click",function(dets){
if(flag===0){
    arr[dets.target.id].status="Friends";
    show();
    flag=1;
}
else{  
        arr[dets.target.id].status="Strangers";
        show();  
        flag=0;
    }
});
