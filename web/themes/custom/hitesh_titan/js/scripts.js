alert("hello js");

(function ($, Drupal) {
  Drupal.behaviors.helloMessage = {
    attach: function (context, settings) {
      $(context)
        .once("helloMessage")
        .each(function () {
          alert("Hello!");
        });
    },
  };
})(jQuery, Drupal);
