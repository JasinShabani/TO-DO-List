//var kontrol = 1; 
function yapilacakListe(){
    var checkbox = document.createElement('input'); 
              
            
            checkbox.type = "checkbox"; 
           
           
    var item= document.getElementById("yapilacakGiris").value
    var list = document.getElementById("yapilacakListe");	
    list.addEventListener("click", isaretlendimi);
    function isaretlendimi(event) {
		const element = event.target;
		if(element.type == "checkbox") {
            element.parentNode.style.textDecoration = "line-through";
       
            
        }
	}
    if(item== ""){
        alert("Lutfen bir sey giriniz");
    }
    else{
    var text= document.createTextNode(item)
    var yeniItem= document.createElement("li")
    
    yeniItem.appendChild(text)
    yeniItem.append(checkbox)
    document.getElementById("yapilacakListe").appendChild(yeniItem)
    //kontrol++;
    //checkbox.id=kontrol;
    //if(document.getElementById("checkbox").checked == true){
      // if (checkBox.checked == true){
        //text.style.display="none";
    //}
}
}
function sil(){
    var sil = document.getElementById("yapilacakListe");
    sil.remove();
    location.reload();
}
