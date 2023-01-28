// function editData(e) {
//   const el = e.target;
//   const input = document.createElement("input");
//   input.setAttribute("value", el.textContent);
//   el.replaceWith(input);

//   const save = function () {
//     const previous = document.createElement(el.tagName.toLowerCase());
//     previous.onclick = editData;
//     previous.textContent = input.value;
//     input.replaceWith(previous);
//   };

//   /**
//       We're defining the callback with `once`, because we know that
//       the element will be gone just after that, and we don't want
//       any callbacks leftovers take memory.
//       Next time `p` turns into `input` this single callback
//       will be applied again.
//     */
//   input.addEventListener("blur", save, {
//     once: true,
//   });
//   input.focus();
// }

// for (const child of document.querySelectorAll("[data-editable]")) {
//   child.onclick = editData;
// }

function openRecentActivities() {
  var x = document.querySelector("#recents");
  var y = document.querySelector("#main");
  if (x.style.display !== "none") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}

function closeRecentActivities() {
  var y = document.querySelector("#recents");
  var x = document.querySelector("#main");
  if (x.style.display !== "none") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}

function openGeneralSettings() {
  var x = document.querySelector("#general-settings-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function openProfileSettings() {
  var x = document.querySelector("#profile-settings-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function openSecuritySettings() {
  var x = document.querySelector("#security-settings-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function closeGeneralSettings() {
  var x = document.querySelector("#general-settings-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function closeProfileSettings() {
  var x = document.querySelector("#profile-settings-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function closeSecuritySettings() {
  var x = document.querySelector("#security-settings-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
