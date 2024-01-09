// ----------------
$(document).ready(function () {
    $('[data-fancybox="overview"]').fancybox({
      thumbs: {
        autoStart: true,
      },
      buttons: [
        'thumbs',
        'close'
      ],
      infobar: false,
      keyboard: true,
      idleTime: false,
      clickContent: function(current, event) {
        return current.type === 'image' ? 'zoom' : false;
      },
    });
  
    $('[data-fancybox="lobby"]').fancybox({
      thumbs: {
        autoStart: true,
      },
      buttons: [
        'thumbs',
        'close'
      ],
      infobar: false,
      keyboard: true,
      idleTime: false,
      clickContent: function(current, event) {
        return current.type === 'image' ? 'zoom' : false;
      },
    });
  
    $('[data-fancybox="restaurant"]').fancybox({
      thumbs: {
        autoStart: true,
      },
      buttons: [
        'thumbs',
        'close'
      ],
      infobar: false,
      keyboard: true,
      idleTime: false,
      clickContent: function(current, event) {
        return current.type === 'image' ? 'zoom' : false;
      },
    });
    $('[data-fancybox="garden"]').fancybox({
      thumbs: {
        autoStart: true,
      },
      buttons: [
        'thumbs',
        'close'
      ],
      infobar: false,
      keyboard: true,
      idleTime: false,
      clickContent: function(current, event) {
        return current.type === 'image' ? 'zoom' : false;
      },
    });
    $('[data-fancybox="pool"]').fancybox({
      thumbs: {
        autoStart: true,
      },
      buttons: [
        'thumbs',
        'close'
      ],
      infobar: false,
      keyboard: true,
      idleTime: false,
      clickContent: function(current, event) {
        return current.type === 'image' ? 'zoom' : false;
      },
    });
    $('[data-fancybox="gym"]').fancybox({
      thumbs: {
        autoStart: true,
      },
      buttons: [
        'thumbs',
        'close'
      ],
      infobar: false,
      keyboard: true,
      idleTime: false,
      clickContent: function(current, event) {
        return current.type === 'image' ? 'zoom' : false;
      },
    });
    $('[data-fancybox="children_playground"]').fancybox({
      thumbs: {
        autoStart: true,
      },
      buttons: [
        'thumbs',
        'close'
      ],
      infobar: false,
      keyboard: true,
      idleTime: false,
      clickContent: function(current, event) {
        return current.type === 'image' ? 'zoom' : false;
      },
    });
  });
// ---------------

