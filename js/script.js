AFRAME.registerComponent('jump', {
    init: function () {
        var el = this.el;
        var velocity = el.getAttribute('velocity');
        var cameraEl = this.el.querySelector('[camera]');
      
        window.addEventListener('keydown', function (event) {
          if (event.key === ' ') { 
            velocity.y = 10; 
            cameraEl.setAttribute('velocity', velocity); 
          }
        });
      }
  });