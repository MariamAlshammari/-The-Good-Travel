"use srict";


let allPlaces=[];
function Places(placeName,tripPlace,typeOfTransport){
    this.placeName=placeName;
    this.tripPlace=tripPlace;
    this.typeOfTransport=typeOfTransport;

    let img='';

    allPlaces.push(this);
    

}
function setingItems(){
    let data=JSON.stringify(allPlaces);
    localStorage.setItem('place',data);

}

function getingItems(){
    let placeString=localStorage.getItem('place');
    let parsingPlace=JSON.parse(placeString);
    if(parsingPlace != null){
allPlaces=parsingPlace;
    }
     console.log(allPlaces);
}
//  new Places('mm','zz','carr');
//  console.log(allPlaces);
 

 let btn=document.getElementById('btn');
 let myForm=document.getElementById('myForm');
 let rendering=document.getElementById('rendering');

 myForm.addEventListener('submit',addingPlace);
//  btn.addEventListener('submit',render)

 function addingPlace(event){
     event.preventDefault();
     setingItems();
     let name=event.target.name.value;
     let tripPlace=event.target.tripPlace.value;
     let typeOfTransport=event.target.typeOfTransport.value;


     new Places(name,tripPlace,typeOfTransport); 

     
     let ul=document.createElement('ul');
     rendering.appendChild(ul);
     let img = document.createElement("img");

    //  img.src = "../images/HAWAII.jpg";
     ul.appendChild(img);
     let liEle=document.createElement('li');
     ul.appendChild(liEle);
     liEle.textContent=`Place Name : ${name}  `;

     let liEle2=document.createElement('li');
     ul.appendChild(liEle2);
     liEle2.textContent=`Trip Place : ${tripPlace}  `;
     if(tripPlace==='HAWAII'){
         img.src="images/HAWAII.jpg"
        //  new Places(name,tripPlace,typeOfTransport,img); 
     }
     else if(tripPlace==="LONDON"){
        img.src="images/LONDON.png"
       //  new Places(name,tripPlace,typeOfTransport,img); 
    }
    else if(tripPlace==="ITALY"){
        img.src="images/ITALY.png"
       //  new Places(name,tripPlace,typeOfTransport,img); 
    }

    else if(tripPlace==="MALAYSIA"){
        img.src="images/MALAYSIA.png"
       //  new Places(name,tripPlace,typeOfTransport,img); 
    }

    else if(tripPlace==="PARIS"){
        img.src="images/PARIS.png"
       //  new Places(name,tripPlace,typeOfTransport,img); 
    }

    else if(tripPlace==="SLOVAKIA"){
        img.src="images/SLOVAKIA.png"
       //  new Places(name,tripPlace,typeOfTransport,img); 
    }


     let liEle3=document.createElement('li');
     ul.appendChild(liEle3);
     liEle3.textContent=`Type Of Transport : ${typeOfTransport}  `;

     myForm.reset();

    //  console.log(liEle);
    }















 getingItems()