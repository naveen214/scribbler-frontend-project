//add last post into middle of the page
document.getElementsByClassName("post")[
  document.getElementsByClassName("post").length - 1
].style.left = "25%";
var delModal = document.getElementById("deleteModal");
function showDeleteModal() {
  delModal.style.display = "block";
}
function hideDeleteModal() {
  delModal.style.display = "none";
}
