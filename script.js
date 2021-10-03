
var outerbox=document.getElementById("o1")
async function Display(){
  outerbox.innerHTML="";
    let from =document.getElementById('from').value;
    
let to=document.getElementById('to').value;
  let x1=from.split("-");
  let y1=new Date(Date.UTC(x1[0],x1[1]-1,x1[2]));
  let fromtimestamp=y1.getTime()/1000;
  
  let x2=to.split("-");
  let y2=new Date(Date.UTC(x2[0],x2[1]-1,x2[2]));
  let totimestamp=y2.getTime()/1000;
  
   try{
    let data=await fetch(`https://api.stackexchange.com/2.3/answers?fromdate=${fromtimestamp}&todate=${totimestamp}&order=desc&sort=activity&site=stackoverflow`);
     let data2=await data.json();
     displayData(data2);
   }
   catch(error){
       console.log("Something Went Wrong",error)
   }

}
 function displayData(values){
for(i=0;i<30;i++){
  var card=document.createElement('div');
  card.setAttribute('class','card');
  var image=document.createElement('img');
  image.setAttribute('class','card-img-top')
  image.src=values.items[i].owner.profile_image;
  var body1=document.createElement('div');
   body1.setAttribute('class','card-body');
   var title=document.createElement('h4');
   title.setAttribute('class','card-title');
   title.innerHTML=values.items[i].owner.display_name;
   var link=document.createElement('a');
   link.setAttribute('class','btn');
   link.classList.add("btn-primary")
   link.innerHTML="See Profile"
  
   link.href=values.items[i].owner.link;
   body1.append(title,link);
   card.append(image,body1);
   outerbox.append(card)
}

}




