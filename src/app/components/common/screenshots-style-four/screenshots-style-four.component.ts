import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-screenshots-style-four',
    templateUrl: './screenshots-style-four.component.html',
    styleUrls: ['./screenshots-style-four.component.scss']
})
export class ScreenshotsStyleFourComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    screenSwiperSlides: OwlOptions = {
        items: 1,
		nav: true,
		loop: true,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='ri-arrow-left-s-line'></i>",
			"<i class='ri-arrow-right-s-line'></i>",
		]
    }

}