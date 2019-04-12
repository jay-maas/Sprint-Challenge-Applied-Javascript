class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.prevButton = this.carousel.querySelector(".left-button");
        this.nextButton = this.carousel.querySelector(".right-button");
        this.slides = this.carousel.querySelectorAll("img");
        this.slides = Array.from(this.slides);
        this.slides.forEach(slide=>slide.style.zIndex = 1);
        this.counter = 0;
        this.slidesLength = this.slides.length;
        this.slidesIndex = this.slides[this.counter]
        this.changePrev = this.changePrev.bind(this);
        this.prevButton.addEventListener('click', this.changePrev);
        this.changeNext = this.changeNext.bind(this);
        this.nextButton.addEventListener('click', this.changeNext);
    }
    changePrev() {
        
        this.reset ()
        if(this.counter > 0) {
            this.counter = this.counter - 1;
          } else {
            this.counter = this.slidesLength -1
          }
          this.slidesIndex = this.slides[this.counter];
          this.reset2 ()
          TweenMax.to(this.slidesIndex, 2, {opacity:1, delay:.25});
          this.reset2 ()
          this.slidesIndex.style.zIndex++
    }
    changeNext() {
        
        this.reset ()
        // this.reset2 ()
        if(this.counter < this.slidesLength - 1) {
            this.counter = this.counter + 1;
          } else {
            this.counter = 0;
          } 
          this.slidesIndex = this.slides[this.counter];
          this.reset2 ()
          TweenMax.to(this.slidesIndex, 2, {opacity:1, delay:.25});
          this.reset2 ()
          this.slidesIndex.style.zIndex++

    }
    reset () {
        this.slides.forEach(slide=>slide.style.zIndex = 0);
       
    }
    reset2 () {
        this.slides.forEach(slide=>slide.style.opacity = 0);
    }
}

let carousels = document.querySelectorAll(".carousel");
carousels.forEach(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/