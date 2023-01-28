function openCreateOverlay() {
  var x = document.querySelector("#record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function closeCreateOverlay() {
  var x = document.querySelector("#record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function openEditOverlay() {
  var x = document.querySelector("#record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function closeEditOverlay() {
  var x = document.querySelector("#record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function openArchiveOverlay() {
  var x = document.querySelector("#archive-record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function closeArchiveOverlay() {
  var x = document.querySelector("#archive-record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function openUnarchiveOverlay() {
  var x = document.querySelector("#unarchive-record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function closeUnarchiveOverlay() {
  var x = document.querySelector("#unarchive-record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function openDetailedViewOverlay() {
  var x = document.querySelector("#view-details-record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function closeDetailedViewOverlay() {
  var x = document.querySelector("#view-details-record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function validateForm() {
  var errorMessage = document.querySelector(".error-message");
  var fname = document.querySelector("#first-name");
  var lname = document.querySelector("#last-name");
  var graveType = document.querySelector("#grave-type-input");
  var graveTypeValue = graveType.options[graveType.selectedIndex].value;
  var Block = document.querySelector("#block-input");
  var BlockValue = Block.options[Block.selectedIndex].value;
  var Column = document.querySelector("#column-input");
  var ColumnValue = Column.options[Column.selectedIndex].value;
  var Row = document.querySelector("#row-input");
  var RowValue = Row.options[Row.selectedIndex].value;


  if (
    graveTypeValue == "" ||
    fname.value.length < 1 ||
    lname.value.length < 1
  ) {
    errorMessage.style.display = "block";
  } else if (
    graveTypeValue == "apartment-type-form" ||
    fname.value.length < 1 ||
    lname.value.length < 1
  ) {
    if (BlockValue == "" || ColumnValue == "" || RowValue == "") {
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
    }
  }
}

// function validateEditForm() {
//   var errorMessage = document.querySelector(".edit-message");
//   var fnameEdit = document.querySelector("#first-name");
//   var lnameEdit = document.querySelector("#last-name");
//   var graveTypeEdit = document.querySelector("#grave-type-input");
//   var graveTypeEditValue =
//     graveTypeEdit.options[graveTypeEdit.selectedIndex].value;
//   var aptBlockEdit = document.querySelector("#block-input");
//   var aptBlockEditValue =
//     aptBlockEdit.options[aptBlockEdit.selectedIndex].value;
//   var aptColumnEdit = document.querySelector("#column-input");
//   var aptColumnEditValue =
//     aptColumnEdit.options[aptColumnEdit.selectedIndex].value;
//   var aptRowEdit = document.querySelector("#row-input");
//   var aptRowEditValue = aptRowEdit.options[aptRowEdit.selectedIndex].value;
//   var bvBlockEdit = document.querySelector("#block-input");
//   var bvBlockEditValue = bvBlockEdit.options[bvBlockEdit.selectedIndex].value;
//   var bvColumnEdit = document.querySelector("#column-input");
//   var bvColumnEditValue =
//     bvColumnEdit.options[bvColumnEdit.selectedIndex].value;
//   var bvRowEdit = document.querySelector("#bv-row-input");
//   var bvRowEditValue = bvRowEdit.options[bvRowEdit.selectedIndex].value;
//   var lwnBlockEdit = document.querySelector("#lwn-block-input");
//   var lwnBlockEditValue =
//     lwnBlockEdit.options[lwnBlockEdit.selectedIndex].value;
//   var lwnColumnEdit = document.querySelector("#lwn-column-input");
//   var lwnColumnEditValue =
//     lwnColumnEdit.options[lwnColumnEdit.selectedIndex].value;
//   var lwnRowEdit = document.querySelector("#lwn-row-input");
//   var lwnRowEditValue = lwnRowEdit.options[lwnRowEdit.selectedIndex].value;
//   var statusEdit = document.querySelector("#status-input");
//   var statusEditValue = statusEdit.options[statusEdit.selectedIndex].value;

//   if (
//     graveTypeEditValue == "" ||
//     fnameEdit.value.length < 1 ||
//     lnameEdit.value.length < 1 ||
//     statusEditValue == ""
//   ) {
//     errorMessage.style.display = "block";
//   } else if (
//     graveTypeEditValue == "apartment-type-form-edit" ||
//     fnameEdit.value.length < 1 ||
//     lnameEdit.value.length < 1 ||
//     statusEditValue == ""
//   ) {
//     if (
//       aptBlockEditValue == "" ||
//       aptColumnEditValue == "" ||
//       aptRowEditValue == ""
//     ) {
//       errorMessage.style.display = "block";
//     } else {
//       errorMessage.style.display = "none";
//     }
//   } else if (
//     graveTypeEditValue == "lawn-type-form-edit" ||
//     fnameEdit.value.length < 1 ||
//     lnameEdit.value.length < 1 ||
//     statusEditValue == ""
//   ) {
//     if (
//       lwnBlockEditValue == "" ||
//       lwnColumnEditValue == "" ||
//       lwnRowEditValue == ""
//     ) {
//       errorMessage.style.display = "block";
//     } else {
//       errorMessage.style.display = "none";
//     }
//   } else if (
//     graveTypeEditValue == "bone-vault-type-form-edit" ||
//     fnameEdit.value.length < 1 ||
//     lnameEdit.value.length < 1 ||
//     statusEditValue == ""
//   ) {
//     if (
//       bvBlockEditValue == "" ||
//       bvColumnEditValue == "" ||
//       bvRowEditValue == ""
//     ) {
//       errorMessage.style.display = "block";
//     } else {
//       errorMessage.style.display = "none";
//     }
//   } else {
//     errorMessage.style.display = "none";
//   }
// }

function openAddGraveTypeOverlay() {
  var x = document.querySelector("#addGraveType-record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function closeAddGraveTypeOverlay() {
  var x = document.querySelector("#addGraveType-record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function validateAddGraveTypeForm() {
  var errorMessage = document.querySelector(".addGraveType-error-message");
  var graveType = document.querySelector("#graveType-input");
  var status = document.querySelector("#graveTypeStatus-input");
  var statusValue = status.options[status.selectedIndex].value;

  if (statusValue == "" || graveType.value.length < 1) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
}

function openEditGraveTypeOverlay() {
  var x = document.querySelector("#editGraveType-record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function closeEditGraveTypeOverlay() {
  var x = document.querySelector("#editGraveType-record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function validateEditGraveTypeForm() {
  var errorMessage = document.querySelector(".editGraveType-error-message");
  var graveType = document.querySelector("#graveType-input-edit");
  var status = document.querySelector("#graveTypeStatus-input-edit");
  var statusValue = status.options[status.selectedIndex].value;

  if (statusValue == "" || graveType.value.length < 1) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
}

function openAddLocationOverlay() {
  var x = document.querySelector("#addLocation-record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function closeAddLocationOverlay() {
  var x = document.querySelector("#addLocation-record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function validateAddLocationForm() {
  var errorMessage = document.querySelector(".location-error-message");
  var locationBlock = document.querySelector("#location-block-input");
  var locationBlockValue =
    locationBlock.options[locationBlock.selectedIndex].value;
  var locationColumn = document.querySelector("#location-column-input");
  var locationColumnValue =
    locationColumn.options[locationColumn.selectedIndex].value;
  var locationRow = document.querySelector("#location-row-input");
  var locationRowValue = locationRow.options[locationRow.selectedIndex].value;
  var status = document.querySelector("#location-status-input");
  var statusValue = status.options[status.selectedIndex].value;

  if (
    statusValue == "" ||
    locationBlockValue == "" ||
    locationColumnValue == "" ||
    locationRowValue == ""
  ) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
}

function openEditLocationOverlay() {
  var x = document.querySelector("#editLocation-record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function closeEditLocationOverlay() {
  var x = document.querySelector("#editLocation-record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function validateEditLocationForm() {
  var errorMessage = document.querySelector(".editlocation-error-message");
  var locationBlock = document.querySelector("#location-block-input-edit");
  var locationBlockValue =
    locationBlock.options[locationBlock.selectedIndex].value;
  var locationColumn = document.querySelector("#location-column-input-edit");
  var locationColumnValue =
    locationColumn.options[locationColumn.selectedIndex].value;
  var locationRow = document.querySelector("#location-row-input-edit");
  var locationRowValue = locationRow.options[locationRow.selectedIndex].value;
  var status = document.querySelector("#location-status-input-edit");
  var statusValue = status.options[status.selectedIndex].value;

  if (
    statusValue == "" ||
    locationBlockValue == "" ||
    locationColumnValue == "" ||
    locationRowValue == ""
  ) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
}

function openAddBlockOverlay() {
  var x = document.querySelector("#addBlock-record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function closeAddBlockOverlay() {
  var x = document.querySelector("#addBlock-record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function validateAddBlockForm() {
  var errorMessage = document.querySelector(".block-error-message");
  var blockBlock = document.querySelector("#block-block-input");
  var blockColumn = document.querySelector("#block-column-input");
  var blockRow = document.querySelector("#block-row-input");
  var blockGraveType = document.querySelector("#block-graveType-input");
  var blockGraveTypeValue =
    blockGraveType.options[blockGraveType.selectedIndex].value;
  var status = document.querySelector("#block-status-input");
  var statusValue = status.options[status.selectedIndex].value;

  if (
    statusValue == "" ||
    blockBlock.value.length < 1 ||
    blockColumn.value.length < 1 ||
    blockRow.value.length < 1 ||
    blockGraveTypeValue == ""
  ) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
}

function openEditBlockOverlay() {
  var x = document.querySelector("#editBlock-record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function closeEditBlockOverlay() {
  var x = document.querySelector("#editBlock-record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function validateEditBlockForm() {
  var errorMessage = document.querySelector(".editblock-error-message");
  var blockBlock = document.querySelector("#block-block-input-edit");
  var blockColumn = document.querySelector("#block-column-input-edit");
  var blockRow = document.querySelector("#block-row-input-edit");
  var blockGraveType = document.querySelector("#block-graveType-input-edit");
  var blockGraveTypeValue =
    blockGraveType.options[blockGraveType.selectedIndex].value;
  var status = document.querySelector("#block-status-input-edit");
  var statusValue = status.options[status.selectedIndex].value;

  if (
    statusValue == "" ||
    blockBlock.value.length < 1 ||
    blockColumn.value.length < 1 ||
    blockRow.value.length < 1 ||
    blockGraveTypeValue == ""
  ) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
}

function openConfirmOverlay() {
  var x = document.querySelector("#confirm-overlay");
  var y = document.querySelector("#security-settings-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
    y.style.display = "flex";
  } else {
    x.style.display = "flex";
    y.style.display = "none";
  }
}

function closeConfirmOverlay() {
  var x = document.querySelector("#confirm-overlay");
  var y = document.querySelector("#security-settings-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
    y.style.display = "flex";
  } else {
    x.style.display = "flex";
    y.style.display = "none";
  }
}

// Archive tab
function openArchiveConfirmPasswordOverlay() {
  var x = document.querySelector("#confirm-password-overlay");
  var y = document.querySelector("#archive-record-overlay");
  var z = document.querySelector("#unarchive-record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
    y.style.display = "flex";
    z.style.display = "none";
  } else {
    x.style.display = "flex";
    y.style.display = "none";
    z.style.display = "none";
  }
}

function openUnarchiveConfirmPasswordOverlay() {
  var x = document.querySelector("#confirm-password-overlay");
  var y = document.querySelector("#archive-record-overlay");
  var z = document.querySelector("#unarchive-record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
    z.style.display = "flex";
    y.style.display = "none";
  } else {
    x.style.display = "flex";
    z.style.display = "none";
    y.style.display = "none";
  }
}


function closeConfirmPasswordOverlay() {
  var x = document.querySelector("#confirm-password-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
