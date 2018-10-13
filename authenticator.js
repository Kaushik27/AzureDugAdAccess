$(document).ready(function() {
  $.get("./ad.json", function(data, status) {
    for (var myuser in data) {
      console.log(data[myuser].user_id);
    }
  });
});
