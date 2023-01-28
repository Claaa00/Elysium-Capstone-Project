function sortTableByColumn(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll("tr"));

  // Sort each row
  const sortedRows = rows.sort((a, b) => {
    const aColText = a
      .querySelector(`.string-body-sort:nth-child(${column + 1})`)
      .textContent.trim();
    const bColText = b
      .querySelector(`.string-body-sort:nth-child(${column + 1})`)
      .textContent.trim();

    return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
  });

  // Remove all existing TRs from the table
  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }

  // Re-add the newly sorted rows
  tBody.append(...sortedRows);

  // Remember how the column is currently sorted
  table
    .querySelectorAll(".string-header-sort")
    .forEach((th) => th.classList.remove("th-sort-asc", "th-sort-desc"));
  table
    .querySelector(`.string-header-sort:nth-child(${column + 1})`)
    .classList.toggle("th-sort-asc", asc);
  table
    .querySelector(`.string-header-sort:nth-child(${column + 1})`)
    .classList.toggle("th-sort-desc", !asc);
}

document
  .querySelectorAll(".table-table .string-header-sort")
  .forEach((headerCell) => {
    headerCell.addEventListener("click", () => {
      const tableElement = headerCell.parentElement.parentElement.parentElement;
      const headerIndex = Array.prototype.indexOf.call(
        headerCell.parentElement.children,
        headerCell
      );
      const currentIsAscending = headerCell.classList.contains("th-sort-asc");

      sortTableByColumn(tableElement, headerIndex, !currentIsAscending);

      const bDateSort = document.querySelector(".bdate-header-sort");
      const dDateSort = document.querySelector(".ddate-header-sort");
      const mDateSort = document.querySelector(".mdate-header-sort");

      if (
        bDateSort.classList.contains("th-sort-asc") ||
        bDateSort.classList.contains("th-sort-desc") ||
        mDateSort.classList.contains("th-sort-asc") ||
        mDateSort.classList.contains("th-sort-desc") ||
        dDateSort.classList.contains("th-sort-asc") ||
        dDateSort.classList.contains("th-sort-desc")
      ) {
        bDateSort.classList.remove("th-sort-asc");
        bDateSort.classList.remove("th-sort-desc");
        mDateSort.classList.remove("th-sort-asc");
        mDateSort.classList.remove("th-sort-desc");
        dDateSort.classList.remove("th-sort-asc");
        dDateSort.classList.remove("th-sort-desc");

      }
    });
  });

// Sort birth date

function sortTableByBdate(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll("tr"));

  // Sort each row
  const sortedRows = rows.sort((a, b) => {
    const aColText = new Date(
      a
        .querySelector(`.bdate-body-sort:nth-child(${column + 1})`)
        .textContent.trim()
    );
    const bColText = new Date(
      b
        .querySelector(`.bdate-body-sort:nth-child(${column + 1})`)
        .textContent.trim()
    );

    return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
  });

  // Remove all existing TRs from the table
  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }

  // Re-add the newly sorted rows
  tBody.append(...sortedRows);

  // Remember how the column is currently sorted
  table
    .querySelectorAll(".bdate-header-sort")
    .forEach((th) => th.classList.remove("th-sort-asc", "th-sort-desc"));
  table
    .querySelector(`.bdate-header-sort:nth-child(${column + 1})`)
    .classList.toggle("th-sort-asc", asc);
  table
    .querySelector(`.bdate-header-sort:nth-child(${column + 1})`)
    .classList.toggle("th-sort-desc", !asc);
}

document
  .querySelectorAll(".table-table .bdate-header-sort")
  .forEach((headerCell) => {
    headerCell.addEventListener("click", () => {
      const tableElement = headerCell.parentElement.parentElement.parentElement;
      const headerIndex = Array.prototype.indexOf.call(
        headerCell.parentElement.children,
        headerCell
      );
      const currentIsAscending = headerCell.classList.contains("th-sort-asc");

      sortTableByBdate(tableElement, headerIndex, !currentIsAscending);

      const dDateSort = document.querySelector(".ddate-header-sort");
      const mDateSort = document.querySelector(".mdate-header-sort");
      const idSort = document.querySelector(".id-sort");
      const nameSort = document.querySelector(".name-sort");
      const graveTypeSort = document.querySelector(".grave-type-sort");

      if (
        dDateSort.classList.contains("th-sort-asc") ||
        dDateSort.classList.contains("th-sort-desc") ||
        mDateSort.classList.contains("th-sort-asc") ||
        mDateSort.classList.contains("th-sort-desc") ||
        idSort.classList.contains("th-sort-asc") ||
        idSort.classList.contains("th-sort-desc") ||
        nameSort.classList.contains("th-sort-asc") ||
        nameSort.classList.contains("th-sort-desc") ||
        graveTypeSort.classList.contains("th-sort-asc") ||
        graveTypeSort.classList.contains("th-sort-desc")
      ) {
        dDateSort.classList.remove("th-sort-asc");
        dDateSort.classList.remove("th-sort-desc");
        mDateSort.classList.remove("th-sort-asc");
        mDateSort.classList.remove("th-sort-desc");
        idSort.classList.remove("th-sort-asc");
        idSort.classList.remove("th-sort-desc");
        nameSort.classList.remove("th-sort-asc");
        nameSort.classList.remove("th-sort-desc");
        graveTypeSort.classList.remove("th-sort-asc");
        graveTypeSort.classList.remove("th-sort-desc");
      }
    });
  });

// Sort death date

function sortTableByDdate(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll("tr"));

  // Sort each row
  const sortedRows = rows.sort((a, b) => {
    const aColText = new Date(
      a
        .querySelector(`.ddate-body-sort:nth-child(${column + 1})`)
        .textContent.trim()
    );
    const bColText = new Date(
      b
        .querySelector(`.ddate-body-sort:nth-child(${column + 1})`)
        .textContent.trim()
    );

    return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
  });

  // Remove all existing TRs from the table
  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }

  // Re-add the newly sorted rows
  tBody.append(...sortedRows);

  // Remember how the column is currently sorted
  table
    .querySelectorAll(".ddate-header-sort")
    .forEach((th) => th.classList.remove("th-sort-asc", "th-sort-desc"));
  table
    .querySelector(`.ddate-header-sort:nth-child(${column + 1})`)
    .classList.toggle("th-sort-asc", asc);
  table
    .querySelector(`.ddate-header-sort:nth-child(${column + 1})`)
    .classList.toggle("th-sort-desc", !asc);
}

document
  .querySelectorAll(".table-table .ddate-header-sort")
  .forEach((headerCell) => {
    headerCell.addEventListener("click", () => {
      const tableElement = headerCell.parentElement.parentElement.parentElement;
      const headerIndex = Array.prototype.indexOf.call(
        headerCell.parentElement.children,
        headerCell
      );
      const currentIsAscending = headerCell.classList.contains("th-sort-asc");

      sortTableByDdate(tableElement, headerIndex, !currentIsAscending);

      const bDateSort = document.querySelector(".bdate-header-sort");
      const idSort = document.querySelector(".id-sort");
      const nameSort = document.querySelector(".name-sort");
      const graveTypeSort = document.querySelector(".grave-type-sort");
      const mDateSort = document.querySelector(".mdate-header-sort");

      if (
        bDateSort.classList.contains("th-sort-asc") ||
        bDateSort.classList.contains("th-sort-desc") ||
        mDateSort.classList.contains("th-sort-asc") ||
        mDateSort.classList.contains("th-sort-desc") ||
        idSort.classList.contains("th-sort-asc") ||
        idSort.classList.contains("th-sort-desc") ||
        nameSort.classList.contains("th-sort-asc") ||
        nameSort.classList.contains("th-sort-desc") ||
        graveTypeSort.classList.contains("th-sort-asc") ||
        graveTypeSort.classList.contains("th-sort-desc")
      ) {
        bDateSort.classList.remove("th-sort-asc");
        bDateSort.classList.remove("th-sort-desc");
        mDateSort.classList.remove("th-sort-asc");
        mDateSort.classList.remove("th-sort-desc");
        idSort.classList.remove("th-sort-asc");
        idSort.classList.remove("th-sort-desc");
        nameSort.classList.remove("th-sort-asc");
        nameSort.classList.remove("th-sort-desc");
        graveTypeSort.classList.remove("th-sort-asc");
        graveTypeSort.classList.remove("th-sort-desc");
      }
    });
  });

// Sort modified date

function sortTableByMdate(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll("tr"));

  // Sort each row
  const sortedRows = rows.sort((a, b) => {
    const aColText = new Date(
      a
        .querySelector(`.mdate-body-sort:nth-child(${column + 1})`)
        .textContent.trim()
    );
    const bColText = new Date(
      b
        .querySelector(`.mdate-body-sort:nth-child(${column + 1})`)
        .textContent.trim()
    );

    return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
  });

  // Remove all existing TRs from the table
  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }

  // Re-add the newly sorted rows
  tBody.append(...sortedRows);

  // Remember how the column is currently sorted
  table
    .querySelectorAll(".mdate-header-sort")
    .forEach((th) => th.classList.remove("th-sort-asc", "th-sort-desc"));
  table
    .querySelector(`.mdate-header-sort:nth-child(${column + 1})`)
    .classList.toggle("th-sort-asc", asc);
  table
    .querySelector(`.mdate-header-sort:nth-child(${column + 1})`)
    .classList.toggle("th-sort-desc", !asc);
}

document
  .querySelectorAll(".table-table .mdate-header-sort")
  .forEach((headerCell) => {
    headerCell.addEventListener("click", () => {
      const tableElement = headerCell.parentElement.parentElement.parentElement;
      const headerIndex = Array.prototype.indexOf.call(
        headerCell.parentElement.children,
        headerCell
      );
      const currentIsAscending = headerCell.classList.contains("th-sort-asc");

      sortTableByMdate(tableElement, headerIndex, !currentIsAscending);

      const bDateSort = document.querySelector(".bdate-header-sort");
      const dDateSort = document.querySelector(".ddate-header-sort");
      const idSort = document.querySelector(".id-sort");
      const nameSort = document.querySelector(".name-sort");
      const graveTypeSort = document.querySelector(".grave-type-sort");

      if (
        bDateSort.classList.contains("th-sort-asc") ||
        bDateSort.classList.contains("th-sort-desc") ||
        dDateSort.classList.contains("th-sort-asc") ||
        dDateSort.classList.contains("th-sort-desc") ||
        idSort.classList.contains("th-sort-asc") ||
        idSort.classList.contains("th-sort-desc") ||
        nameSort.classList.contains("th-sort-asc") ||
        nameSort.classList.contains("th-sort-desc") ||
        graveTypeSort.classList.contains("th-sort-asc") ||
        graveTypeSort.classList.contains("th-sort-desc")
      ) {
        bDateSort.classList.remove("th-sort-asc");
        bDateSort.classList.remove("th-sort-desc");
        dDateSort.classList.remove("th-sort-asc");
        dDateSort.classList.remove("th-sort-desc");
        idSort.classList.remove("th-sort-asc");
        idSort.classList.remove("th-sort-desc");
        nameSort.classList.remove("th-sort-asc");
        nameSort.classList.remove("th-sort-desc");
        graveTypeSort.classList.remove("th-sort-asc");
        graveTypeSort.classList.remove("th-sort-desc");
      }
    });
  });



//// ARCHIVED TAB 


function sortArcTableByColumn(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll("tr"));

  // Sort each row
  const sortedRows = rows.sort((a, b) => {
    const aColText = a
      .querySelector(`.arc-string-body-sort:nth-child(${column + 1})`)
      .textContent.trim();
    const bColText = b
      .querySelector(`.arc-string-body-sort:nth-child(${column + 1})`)
      .textContent.trim();

    return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
  });

  // Remove all existing TRs from the table
  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }

  // Re-add the newly sorted rows
  tBody.append(...sortedRows);

  // Remember how the column is currently sorted
  table
    .querySelectorAll(".arc-string-header-sort")
    .forEach((th) => th.classList.remove("th-sort-asc", "th-sort-desc"));
  table
    .querySelector(`.arc-string-header-sort:nth-child(${column + 1})`)
    .classList.toggle("th-sort-asc", asc);
  table
    .querySelector(`.arc-string-header-sort:nth-child(${column + 1})`)
    .classList.toggle("th-sort-desc", !asc);
}

document
  .querySelectorAll(".arc-table .arc-string-header-sort")
  .forEach((headerCell) => {
    headerCell.addEventListener("click", () => {
      const tableElement = headerCell.parentElement.parentElement.parentElement;
      const headerIndex = Array.prototype.indexOf.call(
        headerCell.parentElement.children,
        headerCell
      );
      const currentIsAscending = headerCell.classList.contains("th-sort-asc");

      sortArcTableByColumn(tableElement, headerIndex, !currentIsAscending);

      const bDateSort = document.querySelector(".arc-bdate-header-sort");
      const dDateSort = document.querySelector(".arc-ddate-header-sort");
      const aDateSort = document.querySelector(".adate-header-sort");

      if (
        bDateSort.classList.contains("th-sort-asc") ||
        bDateSort.classList.contains("th-sort-desc") ||
        aDateSort.classList.contains("th-sort-asc") ||
        aDateSort.classList.contains("th-sort-desc") ||
        dDateSort.classList.contains("th-sort-asc") ||
        dDateSort.classList.contains("th-sort-desc")
      ) {
        bDateSort.classList.remove("th-sort-asc");
        bDateSort.classList.remove("th-sort-desc");
        aDateSort.classList.remove("th-sort-asc");
        aDateSort.classList.remove("th-sort-desc");
        dDateSort.classList.remove("th-sort-asc");
        dDateSort.classList.remove("th-sort-desc");

      }
    });
  });

// Sort birth date

function sortArcTableByBdate(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll("tr"));

  // Sort each row
  const sortedRows = rows.sort((a, b) => {
    const aColText = new Date(
      a
        .querySelector(`.arc-bdate-body-sort:nth-child(${column + 1})`)
        .textContent.trim()
    );
    const bColText = new Date(
      b
        .querySelector(`.arc-bdate-body-sort:nth-child(${column + 1})`)
        .textContent.trim()
    );

    return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
  });

  // Remove all existing TRs from the table
  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }

  // Re-add the newly sorted rows
  tBody.append(...sortedRows);

  // Remember how the column is currently sorted
  table
    .querySelectorAll(".arc-bdate-header-sort")
    .forEach((th) => th.classList.remove("th-sort-asc", "th-sort-desc"));
  table
    .querySelector(`.arc-bdate-header-sort:nth-child(${column + 1})`)
    .classList.toggle("th-sort-asc", asc);
  table
    .querySelector(`.arc-bdate-header-sort:nth-child(${column + 1})`)
    .classList.toggle("th-sort-desc", !asc);
}

document
  .querySelectorAll(".arc-table .arc-bdate-header-sort")
  .forEach((headerCell) => {
    headerCell.addEventListener("click", () => {
      const tableElement = headerCell.parentElement.parentElement.parentElement;
      const headerIndex = Array.prototype.indexOf.call(
        headerCell.parentElement.children,
        headerCell
      );
      const currentIsAscending = headerCell.classList.contains("th-sort-asc");

      sortArcTableByBdate(tableElement, headerIndex, !currentIsAscending);

      const dDateSort = document.querySelector(".arc-ddate-header-sort");
      const aDateSort = document.querySelector(".adate-header-sort");
      const idSort = document.querySelector(".arc-id-sort");
      const nameSort = document.querySelector(".arc-name-sort");
      const graveTypeSort = document.querySelector(".arc-grave-type-sort");
      // const stringSort = document.querySelector(".arc-string-header-sort");

      if (
        dDateSort.classList.contains("th-sort-asc") ||
        dDateSort.classList.contains("th-sort-desc") ||
        aDateSort.classList.contains("th-sort-asc") ||
        aDateSort.classList.contains("th-sort-desc") ||
        idSort.classList.contains("th-sort-asc") ||
        idSort.classList.contains("th-sort-desc") ||
        nameSort.classList.contains("th-sort-asc") ||
        nameSort.classList.contains("th-sort-desc") ||
        graveTypeSort.classList.contains("th-sort-asc") ||
        graveTypeSort.classList.contains("th-sort-desc")
      ) {
        dDateSort.classList.remove("th-sort-asc");
        dDateSort.classList.remove("th-sort-desc");
        aDateSort.classList.remove("th-sort-asc");
        aDateSort.classList.remove("th-sort-desc");
        idSort.classList.remove("th-sort-asc");
        idSort.classList.remove("th-sort-desc");
        nameSort.classList.remove("th-sort-asc");
        nameSort.classList.remove("th-sort-desc");
        graveTypeSort.classList.remove("th-sort-asc");
        graveTypeSort.classList.remove("th-sort-desc");
      }
    });
  });

// Sort death date

function sortArcTableByDdate(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll("tr"));

  // Sort each row
  const sortedRows = rows.sort((a, b) => {
    const aColText = new Date(
      a
        .querySelector(`.arc-ddate-body-sort:nth-child(${column + 1})`)
        .textContent.trim()
    );
    const bColText = new Date(
      b
        .querySelector(`.arc-ddate-body-sort:nth-child(${column + 1})`)
        .textContent.trim()
    );

    return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
  });

  // Remove all existing TRs from the table
  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }

  // Re-add the newly sorted rows
  tBody.append(...sortedRows);

  // Remember how the column is currently sorted
  table
    .querySelectorAll(".arc-ddate-header-sort")
    .forEach((th) => th.classList.remove("th-sort-asc", "th-sort-desc"));
  table
    .querySelector(`.arc-ddate-header-sort:nth-child(${column + 1})`)
    .classList.toggle("th-sort-asc", asc);
  table
    .querySelector(`.arc-ddate-header-sort:nth-child(${column + 1})`)
    .classList.toggle("th-sort-desc", !asc);
}

document
  .querySelectorAll(".arc-table .arc-ddate-header-sort")
  .forEach((headerCell) => {
    headerCell.addEventListener("click", () => {
      const tableElement = headerCell.parentElement.parentElement.parentElement;
      const headerIndex = Array.prototype.indexOf.call(
        headerCell.parentElement.children,
        headerCell
      );
      const currentIsAscending = headerCell.classList.contains("th-sort-asc");

      sortArcTableByDdate(tableElement, headerIndex, !currentIsAscending);

      const bDateSort = document.querySelector(".arc-bdate-header-sort");
      const idSort = document.querySelector(".arc-id-sort");
      const nameSort = document.querySelector(".arc-name-sort");
      const graveTypeSort = document.querySelector(".arc-grave-type-sort");
      const aDateSort = document.querySelector(".adate-header-sort");

      if (
        bDateSort.classList.contains("th-sort-asc") ||
        bDateSort.classList.contains("th-sort-desc") ||
        aDateSort.classList.contains("th-sort-asc") ||
        aDateSort.classList.contains("th-sort-desc") ||
        idSort.classList.contains("th-sort-asc") ||
        idSort.classList.contains("th-sort-desc") ||
        nameSort.classList.contains("th-sort-asc") ||
        nameSort.classList.contains("th-sort-desc") ||
        graveTypeSort.classList.contains("th-sort-asc") ||
        graveTypeSort.classList.contains("th-sort-desc")
      ) {
        bDateSort.classList.remove("th-sort-asc");
        bDateSort.classList.remove("th-sort-desc");
        aDateSort.classList.remove("th-sort-asc");
        aDateSort.classList.remove("th-sort-desc");
        idSort.classList.remove("th-sort-asc");
        idSort.classList.remove("th-sort-desc");
        nameSort.classList.remove("th-sort-asc");
        nameSort.classList.remove("th-sort-desc");
        graveTypeSort.classList.remove("th-sort-asc");
        graveTypeSort.classList.remove("th-sort-desc");
      }
    });
  });

// Sort archived date

function sortArcTableByAdate(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll("tr"));

  // Sort each row
  const sortedRows = rows.sort((a, b) => {
    const aColText = new Date(
      a
        .querySelector(`.adate-body-sort:nth-child(${column + 1})`)
        .textContent.trim()
    );
    const bColText = new Date(
      b
        .querySelector(`.adate-body-sort:nth-child(${column + 1})`)
        .textContent.trim()
    );

    return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
  });

  // Remove all existing TRs from the table
  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }

  // Re-add the newly sorted rows
  tBody.append(...sortedRows);

  // Remember how the column is currently sorted
  table
    .querySelectorAll(".adate-header-sort")
    .forEach((th) => th.classList.remove("th-sort-asc", "th-sort-desc"));
  table
    .querySelector(`.adate-header-sort:nth-child(${column + 1})`)
    .classList.toggle("th-sort-asc", asc);
  table
    .querySelector(`.adate-header-sort:nth-child(${column + 1})`)
    .classList.toggle("th-sort-desc", !asc);
}

document
  .querySelectorAll(".arc-table .adate-header-sort")
  .forEach((headerCell) => {
    headerCell.addEventListener("click", () => {
      const tableElement = headerCell.parentElement.parentElement.parentElement;
      const headerIndex = Array.prototype.indexOf.call(
        headerCell.parentElement.children,
        headerCell
      );
      const currentIsAscending = headerCell.classList.contains("th-sort-asc");

      sortArcTableByAdate(tableElement, headerIndex, !currentIsAscending);

      const bDateSort = document.querySelector(".arc-bdate-header-sort");
      const dDateSort = document.querySelector(".arc-ddate-header-sort");
      const idSort = document.querySelector(".arc-id-sort");
      const nameSort = document.querySelector(".arc-name-sort");
      const graveTypeSort = document.querySelector(".arc-grave-type-sort");

      if (
        bDateSort.classList.contains("th-sort-asc") ||
        bDateSort.classList.contains("th-sort-desc") ||
        dDateSort.classList.contains("th-sort-asc") ||
        dDateSort.classList.contains("th-sort-desc") ||
        idSort.classList.contains("th-sort-asc") ||
        idSort.classList.contains("th-sort-desc") ||
        nameSort.classList.contains("th-sort-asc") ||
        nameSort.classList.contains("th-sort-desc") ||
        graveTypeSort.classList.contains("th-sort-asc") ||
        graveTypeSort.classList.contains("th-sort-desc")
      ) {
        bDateSort.classList.remove("th-sort-asc");
        bDateSort.classList.remove("th-sort-desc");
        dDateSort.classList.remove("th-sort-asc");
        dDateSort.classList.remove("th-sort-desc");
        idSort.classList.remove("th-sort-asc");
        idSort.classList.remove("th-sort-desc");
        nameSort.classList.remove("th-sort-asc");
        nameSort.classList.remove("th-sort-desc");
        graveTypeSort.classList.remove("th-sort-asc");
        graveTypeSort.classList.remove("th-sort-desc");
      }
    });
  });

////
