$(document).ready(function () {
  $(".all-table").simpleCheckboxTable();
});

$(document).ready(function () {
  $(".all-table").simpleCheckboxTable({
    onCheckedStateChanged: function ($checkbox) {
      // Do something
      // $(".checkbox").click(function () {
      //   $("#archive-button").prop("disabled", !$(".checkbox:checked").length);
      // });

      $(".all-btn").prop("disabled", !$(".checkbox:checked").length);
    },
  });
});

$(document).ready(function () {
  $(".apt-table").simpleCheckboxTable();
});

$(document).ready(function () {
  $(".apt-table").simpleCheckboxTable({
    onCheckedStateChanged: function ($checkbox) {
      // Do something
      // $(".checkbox").click(function () {
      //   $("#archive-button").prop("disabled", !$(".checkbox:checked").length);
      // });

      $(".apt-btn").prop("disabled", !$(".checkbox:checked").length);
    },
  });
});

$(document).ready(function () {
  $(".lwn-table").simpleCheckboxTable();
});

$(document).ready(function () {
  $(".lwn-table").simpleCheckboxTable({
    onCheckedStateChanged: function ($checkbox) {
      // Do something
      // $(".checkbox").click(function () {
      //   $("#archive-button").prop("disabled", !$(".checkbox:checked").length);
      // });

      $(".lwn-btn").prop("disabled", !$(".checkbox:checked").length);
    },
  });
});

$(document).ready(function () {
  $(".bv-table").simpleCheckboxTable();
});

$(document).ready(function () {
  $(".bv-table").simpleCheckboxTable({
    onCheckedStateChanged: function ($checkbox) {
      // Do something
      // $(".checkbox").click(function () {
      //   $("#archive-button").prop("disabled", !$(".checkbox:checked").length);
      // });

      $(".bv-btn").prop("disabled", !$(".checkbox:checked").length);
    },
  });
});

$(document).ready(function () {
  $(".arc-table").simpleCheckboxTable();
});

$(document).ready(function () {
  $(".arc-table").simpleCheckboxTable({
    onCheckedStateChanged: function ($checkbox) {
      // Do something
      // $(".checkbox").click(function () {
      //   $("#archive-button").prop("disabled", !$(".checkbox:checked").length);
      // });

      $(".arc-btn").prop("disabled", !$(".checkbox:checked").length);
    },
  });
});
