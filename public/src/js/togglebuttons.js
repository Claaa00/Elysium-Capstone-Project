function toggleShowButton() {
  document.querySelector(".show-button-options").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {
//   if (!event.target.matches(".show-button")) {
//     var dropdowns = document.querySelector(".show-button-options"),
//       showEvent = "show";
//     for (var i = 0; i < dropdowns.length; i++) {
//       var currentElement = dropdowns[i],
//         currentElementAsString = dropdowns[i].toString();
//       if (currentElementAsString.localeCompare(showEvent)) {
//         currentElement.classList.remove("show");
//       }
//     }
//   }
// };

function formReset(){
  var form = document.querySelector(".createRecord")
  form.reset();
}

function showEditRecord() {

  var v = document.querySelector("#updateLabel");
  var w = document.querySelector("#createLabel");
  var x = document.querySelector("#updateRecord");
  var y = document.querySelector("#createRecord");

  v.style.display = 'block';
  w.style.display = 'none'
  x.style.display = 'block';
  y.style.display = 'none';

}
function showCreateRecord() {
  var form = document.querySelector(".createRecord")
  var v = document.querySelector("#updateLabel");
  var w = document.querySelector("#createLabel");
  var x = document.querySelector("#updateRecord");
  var y = document.querySelector("#createRecord");

  v.style.display = 'none';
  w.style.display = 'block'
  x.style.display = 'none';
  y.style.display = 'block';

}


