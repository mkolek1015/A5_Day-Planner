

$(document).ready(function() {

  // can't get this to work. What am I doing wrong?
  const today = moment();
  console.log(
    "Today's date is: " + 
    today.format('YYYY-MM-DD')
  );

    console.log($(".saveIcon"));

    $.each( $(".saveIcon"), function(a, icon) {

      $(icon).on("click", function() {
        console.log ("we're here");
        console.log($(this));

        var id = $(this).attr("save-id");
        console.log(id);
        var toTarget = "#input-" + id;

        var textToSave = $(toTarget).val()
        console.log(textToSave);



      })

  })
});