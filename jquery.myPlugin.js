(function( $ ) {
    var methods = {
      start : function () {
        
        alert('s');
        document.querySelectorAll('section .btn')
        .forEach(function go(el){ 
          el.onclick = function() {
            let cnt = this.closest('section').querySelector('.cnt');
            cnt.innerText = parseInt(cnt.innerText, 10)+1;
            document.getElementById('summa').innerHTML = cnt.innerText;
          };
        });
      const display = document.getElementById('time');
      const fiveminutes = 6 * 1000;
      
      function timer(endTime) {
        var myTimer = setInterval(function() {
          let now = new Date().getTime();
          let diff = endTime - now;
          let seconds = Math.floor(diff % (1000 * 6) / 1000);
          seconds = seconds < 10 ? `0${seconds}` : seconds;
          display.textContent = "00 : " + (seconds);
          if (diff <= 0) {
            display.textContent = "Время закончилось!!!";
            clearInterval(myTimer);
            $('.dia').dialog('open');
            let btn = document.getElementById('btt');
      btn.setAttribute('disabled', true);
          }
        }, 100);
      }
      
      window.onload = timer(new Date().getTime() + fiveminutes);
        
}}
     $.fn.myPlugin = function(method) { 
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
          } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
          } else {
            $.error( 'Метод с именем ' +  method + ' не существует для jQuery.tooltip' );
          } 
          return this.each(methods[start]);
          
        };
      })( jQuery );