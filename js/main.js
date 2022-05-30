'use strict';

let obj = {
   wrapper: 'body',
   allLi: 'li',
}

class Slider {
   constructor({ wrapper, allLi }) {
      this.wrapper = document.querySelector(wrapper);
      this.allLi = this.wrapper.querySelectorAll(allLi);
      this.offset = 0;
   }

   next() {
      this.wrapper.addEventListener('click', (even) => {
         let target = even.target;
         if (target.matches('.next')) {
            this.offset -= 300;
            if (this.offset < -1200) {
               this.offset = 0;
            }
            this.allLi.forEach(item => item.style.left = this.offset + 'px');
         }
      });
   }

   prev() {
      this.wrapper.addEventListener('click', (even) => {
         let target = even.target;
         if (target.matches('.prev')) {
            this.offset += 300;
            if (this.offset > 0) {
               this.offset = -1200;
            }
            this.allLi.forEach(item => item.style.left = this.offset + 'px');
         }
      });
   }

   init() {
      this.prev();
      this.next();
   }
}


let start = new Slider(obj);
start.init();