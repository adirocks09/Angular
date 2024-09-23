import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-welcome-page',
    templateUrl: './welcome-page.component.html',
    styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

    constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

    ngOnInit() {
    }

    navigate(url: string) {
        console.log(url);
        this.router.navigate([url]);
    }

}
