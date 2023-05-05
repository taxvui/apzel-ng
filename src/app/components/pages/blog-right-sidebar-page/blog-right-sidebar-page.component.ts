import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-blog-right-sidebar-page',
    templateUrl: './blog-right-sidebar-page.component.html',
    styleUrls: ['./blog-right-sidebar-page.component.scss']
})
export class BlogRightSidebarPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleBlogPost = [
        {
            img: `assets/img/blog/blog1.jpg`,
            tag: `Branding`,
            title: `Branding involves developing strategy to create a point of differentiation`,
            date: `April 14, 2021`,
            comment: `(0) Comment`
        },
        {
            img: `assets/img/blog/blog2.jpg`,
            tag: `Branding`,
            title: `Design is a plan or specification for the construction of an object`,
            date: `April 13, 2021`,
            comment: `(4) Comment`
        },
        {
            img: `assets/img/blog/blog3.jpg`,
            tag: `Marketing`,
            title: `The new minimum is a digital magazine with a header featuring a thin`,
            date: `April 12, 2021`,
            comment: `(2) Comment`
        },
        {
            img: `assets/img/blog/blog4.jpg`,
            tag: `Branding`,
            title: `WordPress is open source software you can use to create a beautiful`,
            date: `April 14, 2021`,
            comment: `(0) Comment`
        },
        {
            img: `assets/img/blog/blog5.jpg`,
            tag: `Agency`,
            title: `Bootstrap 5 is open source software you can use to create a beautiful`,
            date: `April 13, 2021`,
            comment: `(4) Comment`
        },
        {
            img: `assets/img/blog/blog6.jpg`,
            tag: `Marketing`,
            title: `Beautiful designs, powerful features, and the freedom to build anything you`,
            date: `April 12, 2021`,
            comment: `(2) Comment`
        },
        {
            img: `assets/img/blog/blog7.jpg`,
            tag: `Branding`,
            title: `Branding involves developing strategy to create a point of differentiation`,
            date: `April 14, 2021`,
            comment: `(0) Comment`
        },
        {
            img: `assets/img/blog/blog8.jpg`,
            tag: `Agency`,
            title: `Most designs, powerful features, and the freedom to build anything you`,
            date: `April 13, 2021`,
            comment: `(4) Comment`
        },
        {
            img: `assets/img/blog/blog9.jpg`,
            tag: `Marketing`,
            title: `Branding involves developing strategy to create a point`,
            date: `April 12, 2021`,
            comment: `(2) Comment`
        }
    ]

    blogGrid: number = 1;

}