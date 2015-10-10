(function($) {

  // shorten references to variables. this is better for uglification
  var kendo = window.kendo,
      ui = kendo.ui,
      Widget = ui.Widget;

  var DualListView = Widget.extend({

    // method called when a new kendoYouTube widget is created
    init: function(element, options) {
      var that = this
      // base call to initialize widget
      Widget.fn.init.call(that, element, options);

      that._create();
    },
    // options that are avaiable to the user when initializing the widget
    options: {
      name: "DualListView",
      template: "<div style='padding: 10px;'>" + "<div style='float: left;'>" + "<a href='${player.default}' target='_blank'>" + "<img height='90' width='120' src='${thumbnail.sqDefault}' alt='thumbnail' />" + "</a>" + "</div>" + "<div style='margin-left: 130px; height: 90px;'>" + "<h4 style='margin: 2px'>" + "<a href='${player.default}' target='_blank'>${title}</a>" + "</h4>" + "<div style='font-size: .8em'>" + "<p>${description}</p>" + "</div>" + "</div>" + "</div>"
    },
    _create: function() {
      var that = this,
          html = '<div class="dlb-container"></div>';

      $(that.element).html(html);
    }
  });
  ui.plugin(DualListView);


})(jQuery);
