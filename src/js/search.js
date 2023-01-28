// Search in all tab
function toggleAllSearchBox() {
  var x = document.querySelector("#all-table-search-box");
  var z = document.querySelector(".all-search-icon");
  var a = document.querySelector(".all-close-icon");

  if (x.style.display !== "none") {
    x.style.display = "none";
    z.style.display = "block";
    a.style.display = "none";
  } else {
    x.style.display = "flex";
    z.style.display = "none";
    a.style.display = "block";
  }
}

$(document).ready(function () {
  $("#all-table-search-box").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#all-records-table tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

// Search in Apartment tab
function toggleAptSearchBox() {
  var x = document.querySelector("#apt-table-search-box");
  var z = document.querySelector(".apt-search-icon");
  var a = document.querySelector(".apt-close-icon");

  if (x.style.display !== "none") {
    x.style.display = "none";
    z.style.display = "block";
    a.style.display = "none";
  } else {
    x.style.display = "flex";
    z.style.display = "none";
    a.style.display = "block";
  }
}

$(document).ready(function () {
  $("#apt-table-search-box").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#apt-records-table tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

// Search in Lawn tab
function toggleLwnSearchBox() {
  var x = document.querySelector("#lwn-table-search-box");
  var z = document.querySelector(".lwn-search-icon");
  var a = document.querySelector(".lwn-close-icon");

  if (x.style.display !== "none") {
    x.style.display = "none";
    z.style.display = "block";
    a.style.display = "none";
  } else {
    x.style.display = "flex";
    z.style.display = "none";
    a.style.display = "block";
  }
}

$(document).ready(function () {
  $("#lwn-table-search-box").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#lwn-records-table tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

// Search in Bone Vault tab
function toggleBvSearchBox() {
  var x = document.querySelector("#bv-table-search-box");
  var z = document.querySelector(".bv-search-icon");
  var a = document.querySelector(".bv-close-icon");

  if (x.style.display !== "none") {
    x.style.display = "none";
    z.style.display = "block";
    a.style.display = "none";
  } else {
    x.style.display = "flex";
    z.style.display = "none";
    a.style.display = "block";
  }
}

$(document).ready(function () {
  $("#bv-table-search-box").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#bv-records-table tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

// Search in Archived tab
function toggleArcSearchBox() {
  var x = document.querySelector("#arc-table-search-box");
  var z = document.querySelector(".arc-search-icon");
  var a = document.querySelector(".arc-close-icon");

  if (x.style.display !== "none") {
    x.style.display = "none";
    z.style.display = "block";
    a.style.display = "none";
  } else {
    x.style.display = "flex";
    z.style.display = "none";
    a.style.display = "block";
  }
}

$(document).ready(function () {
  $("#arc-table-search-box").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#arc-records-table tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

// Search in Recent Activities
function toggleRecSearchBox() {
  var x = document.querySelector("#rec-table-search-box");
  var z = document.querySelector(".rec-search-icon");
  var a = document.querySelector(".rec-close-icon");

  if (x.style.display !== "none") {
    x.style.display = "none";
    z.style.display = "block";
    a.style.display = "none";
  } else {
    x.style.display = "flex";
    z.style.display = "none";
    a.style.display = "block";
  }
}

$(document).ready(function () {
  $("#rec-table-search-box").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#rec-records-table tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

// Search in Grave Type tab
function toggleGraveTypeSearchBox() {
  var x = document.querySelector("#graveType-table-search-box");
  var z = document.querySelector(".graveType-search-icon");
  var a = document.querySelector(".graveType-close-icon");

  if (x.style.display !== "none") {
    x.style.display = "none";
    z.style.display = "block";
    a.style.display = "none";
  } else {
    x.style.display = "flex";
    z.style.display = "none";
    a.style.display = "block";
  }
}

$(document).ready(function () {
  $("#graveType-table-search-box").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#graveType-records-table tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

// Search in Location tab
function toggleLocationSearchBox() {
  var x = document.querySelector("#location-table-search-box");
  var z = document.querySelector(".location-search-icon");
  var a = document.querySelector(".location-close-icon");

  if (x.style.display !== "none") {
    x.style.display = "none";
    z.style.display = "block";
    a.style.display = "none";
  } else {
    x.style.display = "flex";
    z.style.display = "none";
    a.style.display = "block";
  }
}

$(document).ready(function () {
  $("#location-table-search-box").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#location-records-table tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

// Search in Block tab
function toggleBlockSearchBox() {
  var x = document.querySelector("#block-table-search-box");
  var z = document.querySelector(".block-search-icon");
  var a = document.querySelector(".block-close-icon");

  if (x.style.display !== "none") {
    x.style.display = "none";
    z.style.display = "block";
    a.style.display = "none";
  } else {
    x.style.display = "flex";
    z.style.display = "none";
    a.style.display = "block";
  }
}

$(document).ready(function () {
  $("#block-table-search-box").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#block-records-table tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
