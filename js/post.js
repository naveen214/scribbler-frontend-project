var numberOfLikes=0;

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

function like(){
    document.getElementById("likeBtn").innerHTML="Liked!";
    numberOfLikes=numberOfLikes+1;
    document.getElementById("likeDesc").innerHTML=(numberOfLikes==1)?numberOfLikes+" person likes this!":numberOfLikes+" people have liked this!";
}

function addComment(){
    var comment=document.getElementById("commentText").value;
    var commentDiv = document.createElement("div");
    commentDiv.setAttribute('class', 'commentStyle');
    commentDiv.innerHTML = comment;

    document.getElementById("allComments").appendChild(commentDiv);
}
