(function ($) {
  $(document).foundation();


  $(document.links).filter(function() {
    return this.hostname != window.location.hostname;
  }).attr('target', '_blank');

})(jQuery);
