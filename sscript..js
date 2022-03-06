document.querySelector(document).ready(function(){
  var hitBtn = document.querySelector('button.damage'),
      reset = document.querySelector('button.reset'),
      hBar = document.querySelector('.health-bar'),
      bar = hBar.querySelector('.bar'),
      hit = hBar.querySelector('.hit');
  
  hitBtn.addEventListener("click", function(){
    var total = hBar.data('total'),
        value = hBar.data('value');
    
    if (value < 0) {
			log("you dead, reset");
      return;
    }
    // max damage is essentially quarter of max life
    var damage = Math.floor(Math.random()*total);
    // damage = 100;
    var newValue = value - damage;
    // calculate the percentage of the total width
    var barWidth = (newValue / total) * 100;
    var hitWidth = (damage / value) * 100 + "%";
    
    // show hit bar and set the width
    hit.css('width', hitWidth);
    hBar.data('value', newValue);
    
    setTimeout(function(){
      hit.css({'width': '0'});
      bar.css('width', barWidth + "%");
    }, 500);
    //bar.css('width', total - value);
    
    log(value, damage, hitWidth);
    
    if( value < 0){
      log("DEAD");
    }
  });
  
  reset.addEventListener('click', function(e){
    hBar.data('value', hBar.data('total'));
    
    hit.css({'width': '0'});
    
		bar.css('width', '100%');
		log("resetting health to 1000");
  });
});



function log(_total, _damage, _hitWidth){
  var log = document.querySelector('.log');
  
  if(_damage !== undefined && _hitWidth !== undefined) {
	  log.insertAdjacentHTML("beforeend","<div>H:"+_total+" D:"+_damage+" W:"+_hitWidth+" = " + (_total - _damage) + "</div>");
  } else {
    log.insertAdjacentHTML("beforeend","<div>"+_total+"</div>");
  }
};