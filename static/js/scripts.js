var house;
$("form[name=signup_form").submit(function(e) {

  var $form = $(this);
  console.log("HIIIIIIIIIIII");
  console.log($form);
  var $error = $form.find(".error");
  var data = $form.serialize();
  // house=this.house;

  $.ajax({
    url: "/user/signup",
    type: "POST",
    data: data,
    dataType: "json",
    success: function(resp) {
      window.location.href = "/dashboard/";
    },
    error: function(resp) {
      $error.text(resp.responseJSON.error).removeClass("error--hidden");
    }
  });

  e.preventDefault();
});

$("form[name=login_form").submit(function(e) {

  var $form = $(this);
  console.log("HIIIIIIIIIIII");
  console.log($form);

  var $error = $form.find(".error");
  var data = $form.serialize();
  house=data.house;

  $.ajax({
    url: "/user/login",
    type: "POST",
    data: data,
    dataType: "json",
    success: function(resp) {
      window.location.href = "/dashboard/";
    },
    error: function(resp) {
      $error.text(resp.responseJSON.error).removeClass("error--hidden");
    }
  });

  e.preventDefault();
});