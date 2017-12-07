"use strict";

var title = document.getElementsByClassName('accordion-title'),
    cont = document.getElementsByClassName('accordion-cont');

for (var i = 0; i < title.length; i++) {
    title[i].addEventListener('click', function() {
        if (!(this.classList.contains('active'))) {
            for(var i = 0; i < title.length; i++) {
                title[i].classList.remove('active');
            }
            this.classList.add('active');
        }
    })
}
