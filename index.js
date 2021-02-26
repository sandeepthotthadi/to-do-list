var elements = []
var dateelements = []
var currentdateelements = []
text = document.querySelector(".text")
date = document.querySelector(".date")
var currentdate = new Date();
currentyear = currentdate.getFullYear();
currentmonth = currentdate.getMonth()+1;
currentday = currentdate.getDate();
currenthours = currentdate.getHours();
currentminutes = currentdate.getMinutes();
currentseconds = currentdate.getSeconds();
window.onload = function(){
   if(JSON.parse(localStorage.getItem("todo-elements"))!=null){
      elements =  JSON.parse(localStorage.getItem("todo-elements"));
    display()
   }
   //date elements
   if(JSON.parse(localStorage.getItem("todo-dateelements"))!=null){
    dateelements =  JSON.parse(localStorage.getItem("todo-dateelements"));
   display()
   }
   if(JSON.parse(localStorage.getItem("todo-currentdateelements"))!=null){
    currentdateelements =  JSON.parse(localStorage.getItem("todo-currentdateelements"));
   display()
   }

 };

 


 var modal = document.getElementById("myModal");

 // Get the button that opens the modal
 var btn = document.getElementById("myBtn");
 
 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];
 
 // When the user clicks on the button, open the modal
 btn.onclick = function() {
   modal.style.display = "block";
  
 }
 
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
   modal.style.display = "none";
 }
 
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == modal) {
       modal.style.display = "none";
     }
   }



    

function save(){



    if(text.value.trim()!=""){
        elements.push(text.value);

        currentdateelements.push(currentyear+"-"+currentmonth+"-"+currentday+"-"+currenthours+":"+currentminutes+":"+currentseconds)
        modal.style.display = "none";
        if(localStorage.getItem("todo-elements")==null){
            localStorage.setItem("todo-elements", JSON.stringify(elements))
        }else{
            localStorage.setItem("todo-elements", JSON.stringify(elements))
        }
        if(localStorage.getItem("todo-currentdateelements")==null){
            localStorage.setItem("todo-currentdateelements", JSON.stringify(currentdateelements))
        }else{
            localStorage.setItem("todo-currentdateelements", JSON.stringify(currentdateelements))
        }

        display()
    }
    else{
        alert('please enter the list')
    }

    //date elements
    if(date.value.trim()!=""){
        dateelements.push(date.value);
        modal.style.display = "none";
        if(localStorage.getItem("todo-dateelements")==null){
            localStorage.setItem("todo-dateelements", JSON.stringify(dateelements))
        }else{
            localStorage.setItem("todo-dateelements", JSON.stringify(dateelements))
        }


        display()
    }
    else{
        alert('please enter the list')
    }
}





function display(){
    document.querySelector('.textlist').innerHTML ="";
    for(let i=0;i<elements.length;i++){
         document.querySelector('.textlist').innerHTML += "<center><div class='list1'>"+elements[i]+"<img src='trash.jfif' onclick='del("+i+")' class='del'></img><img src='tick.jfif' class='tick' onclick='strike("+i+")'></img></div></center>"
    }
    document.querySelector('.datelist').innerHTML ="";
    for(let i=0;i<dateelements.length;i++){
         document.querySelector('.datelist').innerHTML += "<center><div class='list2'>"+dateelements[i]+"</div></center>"
    }
    document.querySelector('.currentdatelist').innerHTML ="";
    for(let i=0;i<dateelements.length;i++){
         document.querySelector('.currentdatelist').innerHTML += "<center><div class='list3'>"+currentdateelements[i]+"</div></center>"
    }

}


function del(index){
    elements.splice(index, 1);
    currentdateelements.splice(index, 1);
    dateelements.splice(index, 1)
    if(localStorage.getItem("todo-elements")==null){
        localStorage.setItem("todo-elements", JSON.stringify(elements))
    }else{
        localStorage.setItem("todo-elements", JSON.stringify(elements))
    }
    if(localStorage.getItem("todo-currentdateelements")==null){
        localStorage.setItem("todo-currentdateelements", JSON.stringify(currentdateelements))
    }else{
        localStorage.setItem("todo-currentdateelements", JSON.stringify(currentdateelements))
    }

    display()
        //date elements
    dateelements.splice(index, 1);
    if(localStorage.getItem("todo-dateelements")==null){
        localStorage.setItem("todo-dateelements", JSON.stringify(dateelements))
    }else{
        localStorage.setItem("todo-dateelements", JSON.stringify(dateelements))
    }
    modal.style.display = "none";

    display()

}
function strike(index){
    if(elements[index].includes("<strike>")){
        elements[index] = elements[index].replace("<strike>","")
        elements[index] = elements[index].replace("</strike>","")
    }
    else{

        elements[index] ="<strike>"+elements[index]+
        "</strike>"
    }
    display()
    if(dateelements[index].includes("<strike>")){
        dateelements[index] = dateelements[index].replace("<strike>","")
        dateelements[index] = dateelements[index].replace("</strike>","")
    }
    else{
        dateelements[index] ="<strike>"+dateelements[index]+
        "</strike>"
    }


    if(currentdateelements[index].includes("<strike>")){
        currentdateelements[index] = currentdateelements[index].replace("<strike>","")
        currentdateelements[index] = currentdateelements[index].replace("</strike>","")
    }
    else{
        currentdateelements[index] ="<strike>"+currentdateelements[index]+
        "</strike>"
    
    }
    if(localStorage.getItem("todo-elements")==null){
        localStorage.setItem("todo-elements", JSON.stringify(elements))
    }else{
        localStorage.setItem("todo-elements", JSON.stringify(elements))
    }
    if(localStorage.getItem("todo-currentdateelements")==null){
        localStorage.setItem("todo-currentdateelements", JSON.stringify(currentdateelements))
    }else{
        localStorage.setItem("todo-currentdateelements", JSON.stringify(currentdateelements))
    }

    //date elements

    if(localStorage.getItem("todo-dateelements")==null){
        localStorage.setItem("todo-dateelements", JSON.stringify(dateelements))
    }else{
        localStorage.setItem("todo-dateelements", JSON.stringify(dateelements))
    }
    modal.style.display = "none";

    display()

}









    