var swipee = (function (window, document) {

    var swipee = function(qstr){
        var targetArray = document.querySelectorAll(qstr);
        targetArray.forEach((el)=>{
            var el_isDown = false;
            var el_startX;
            var el_scrollLeft;
            // el.querySelectorAll("img").forEach((el)=>{el.style.userSelect = "none"})

            el.addEventListener('mousedown', (e) => {
                console.log('a')
              el.classList.add('active');
              el_isDown = true;
              el_startX = e.pageX - el.offsetLeft;
              el_scrollLeft = el.scrollLeft;
            });
            el.addEventListener('mouseleave', () => {
                console.log('b')
              el_isDown = false;
              el.classList.remove('active');
            });

            el.addEventListener('mouseup', () => {
                console.log('c')
              el_isDown = false;
              el.classList.remove('active');
            });
            el.addEventListener('mousemove', (e) => {
              console.log("move")
              if(!el_isDown) return;
              e.preventDefault();
              const x = e.pageX - el.offsetLeft;
              const walk = (x - el_startX) * 0.04; //scroll-fast
              console.log(walk)
              el.scrollLeft = el.scrollLeft - walk;
            });
        })
    }
    return  swipee
}(window, document));
