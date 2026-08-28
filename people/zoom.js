(function(){
  var lb, pane, img, tip;

  function build(){
    lb = document.createElement('div');
    lb.className = 'lb';
    lb.innerHTML =
      '<div class="pane"><img alt=""></div>' +
      '<button class="shut" aria-label="Close">&times;</button>' +
      '<p class="tip">Tap the image to zoom &middot; Esc to close</p>';
    document.body.appendChild(lb);
    pane = lb.querySelector('.pane');
    img  = lb.querySelector('img');
    tip  = lb.querySelector('.tip');

    lb.querySelector('.shut').addEventListener('click', close);
    pane.addEventListener('click', function(e){
      if (e.target === img) { toggle(e); } else { close(); }
    });
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape') close();
    });
  }

  function open(src, alt){
    if (!lb) build();
    img.src = src;
    img.alt = alt || '';
    lb.classList.remove('zoom');
    lb.classList.add('on');
    document.body.style.overflow = 'hidden';
  }

  function close(){
    if (!lb) return;
    lb.classList.remove('on','zoom');
    document.body.style.overflow = '';
    img.src = '';
  }

  // click on the image toggles between fit-to-screen and full resolution,
  // and keeps the point you tapped under your finger
  function toggle(e){
    var zoomed = lb.classList.contains('zoom');
    if (zoomed){
      lb.classList.remove('zoom');
      tip.textContent = 'Tap the image to zoom \u00b7 Esc to close';
      return;
    }
    var r = img.getBoundingClientRect();
    var fx = (e.clientX - r.left) / r.width;
    var fy = (e.clientY - r.top)  / r.height;
    lb.classList.add('zoom');
    // after layout, scroll so the tapped point stays roughly centred
    requestAnimationFrame(function(){
      pane.scrollLeft = (img.offsetWidth  * fx) - (pane.clientWidth  / 2);
      pane.scrollTop  = (img.offsetHeight * fy) - (pane.clientHeight / 2);
    });
    tip.textContent = 'Drag to move \u00b7 Tap to fit \u00b7 Esc to close';
  }

  document.addEventListener('DOMContentLoaded', function(){
    var shots = document.querySelectorAll('[data-full]');
    Array.prototype.forEach.call(shots, function(el){
      el.classList.add('zoomable');
      el.setAttribute('role','button');
      el.setAttribute('tabindex','0');
      el.addEventListener('click', function(){
        open(el.getAttribute('data-full'), el.getAttribute('alt'));
      });
      el.addEventListener('keydown', function(e){
        if (e.key === 'Enter' || e.key === ' '){
          e.preventDefault();
          open(el.getAttribute('data-full'), el.getAttribute('alt'));
        }
      });
    });
  });
})();
