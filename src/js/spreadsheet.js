var atable = document.getElementById("apartmentBlockTable");
for (var i = 0, row; row = atable.rows[i]; i++) {
    for (var j = 0, col; col = row.cells[j]; j++) {
        col.addEventListener("click", function() {
            

            if (this.classList.contains("red")) {
                // perform action 1
                    // alert("rorrrrr" );
                    document.querySelector("#view-details-record-overlay").style.display = "flex";
            } else if (this.classList.contains("green")) {
                // perform action 2
                    // alert("mehhh" );
                    document.querySelector("#confirm-add-record-overlay").style.display = "flex";
            }
        });
    }
    
}

var ltable = document.getElementById("lawnBlockTable");
for (var i = 0, row; row = ltable.rows[i]; i++) {
    for (var j = 0, col; col = row.cells[j]; j++) {
        col.addEventListener("click", function() {
            

            if (this.classList.contains("red")) {
                // perform action 1
                    // alert("rorrrrr" );
                    document.querySelector("#view-details-record-overlay").style.display = "flex";
            } else if (this.classList.contains("green")) {
                // perform action 2
                    // alert("mehhh" );
                    document.querySelector("#confirm-add-record-overlay").style.display = "flex";
            }
        });
    }
    
}

var btable = document.getElementById("boneVaultBlockTable");
for (var i = 0, row; row = btable.rows[i]; i++) {
    for (var j = 0, col; col = row.cells[j]; j++) {
        col.addEventListener("click", function() {
            

            if (this.classList.contains("red")) {
                // perform action 1
                    // alert("rorrrrr" );
                    document.querySelector("#view-details-record-overlay").style.display = "flex";
            } else if (this.classList.contains("green")) {
                // perform action 2
                    // alert("mehhh" );
                    document.querySelector("#confirm-add-record-overlay").style.display = "flex";
            }
        });
    }
    
}

function closeConfirmAddOverlay() {
    var x = document.querySelector("#confirm-add-record-overlay");
    if (x.style.display !== "none") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }





