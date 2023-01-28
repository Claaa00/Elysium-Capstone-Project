// function selectGraveType(selectEl) {
//   let selectedValue = selectEl.options[selectEl.selectedIndex].value;
//   let subForms = document.querySelectorAll(".input-group .grave-type-option");
//   for (let i = 0; i < subForms.length; i += 1) {
//     if (selectedValue === subForms[i].name) {
//       subForms[i].setAttribute("style", "display:block");
//     } else {
//       subForms[i].setAttribute("style", "display:none");
//     }
//   }
// }

// function selectGraveType(form) {
//   for (var i = 0; i < form.length; i++) {
//     var form_op = form.options[i].value;
//     if (form_op == form.value) {
//       document.getElementsByName(form_op)[0].style.display = "block";
//     } else {
//       document.getElementsByName(form_op)[0].style.display = "none";
//     }
//   }
// }

// $("#myselect").on("change", function () {
//   $("#" + $(this).val())
//     .show()
//     .siblings()
//     .hide();
// });  

$("#grave-type-input").on("change", function () {
  $("#block-input").prop('disabled', false).on("change", function(){
    $("#column-input").prop('disabled', false).on("change", function(){
      $("#row-input").prop('disabled', false);
    })
  })
});

$("#createForm").on("submit",function(){
  $("#block-input").prop('disabled', true);
  $("#column-input").prop('disabled', true);
  $("#row-input").prop('disabled', true)
});

$("#allTab").on('click', function(){ 
  $("#allRecordsTable div:contains('apartment')").addClass("chip orange-chip");
  $("#allRecordsTable div:contains('lawn')").addClass("chip green-chip"); 
  $("#allRecordsTable div:contains('bonevault')").addClass("chip red-chip"); 
});

