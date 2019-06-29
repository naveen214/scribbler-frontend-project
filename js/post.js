function enableEditMode(){
    document.getElementById("blogTitleNew").contentEditable = "true";
    document.getElementById("blogTitleNew").style.border= "1px solid  #e3e3e3";
    document.getElementById("blogBody").contentEditable = "true"; 
    document.getElementById("blogBody").style.border= "1px solid  #e3e3e3";
    document.getElementById("saveBtn").style.display = "inline-block";
    document.getElementById("editBtn").style.display = "none";
}

function saveBlog(){
    document.getElementById("blogTitleNew").contentEditable = "false";
    document.getElementById("blogTitleNew").style.border="none";
    document.getElementById("blogBody").contentEditable = "false"; 
    document.getElementById("blogBody").style.border="none";
    document.getElementById("saveBtn").style.display = "none";
    document.getElementById("editBtn").style.display = "inline-block";
}
