import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-products-page',
    templateUrl: './products-page.component.html',
    styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleProductsBox = [
        {
            img: `assets/img/products/products-img1.jpg`,
            title: `Laptop Blue Background`,
            price: `$250`
        },
        {
            img: `assets/img/products/products-img2.jpg`,
            title: `Pink Smartwatch`,
            price: `$200`
        },
        {
            img: `assets/img/products/products-img3.jpg`,
            title: `Black Headphone`,
            price: `$200`
        },
        {
            img: `assets/img/products/products-img4.jpg`,
            title: `Fashion Film Camera`,
            price: `$150`
        },
        {
            img: `assets/img/products/products-img5.jpg`,
            title: `Real Life Smartwatch`,
            price: `$240`
        },
        {
            img: `assets/img/products/products-img6.jpg`,
            title: `Joystick Controller`,
            price: `$100`
        },
        {
            img: `assets/img/products/products-img3.jpg`,
            title: `Black Headphone`,
            price: `$200`
        },
        {
            img: `assets/img/products/products-img4.jpg`,
            title: `Fashion Film Camera`,
            price: `$150`
        },
        {
            img: `assets/img/products/products-img5.jpg`,
            title: `Real Life Smartwatch`,
            price: `$240`
        }
    ]

    productsGrid: number = 1;

}