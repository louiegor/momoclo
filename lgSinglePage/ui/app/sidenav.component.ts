import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Http, Response, Headers } from '@angular/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: '[nav-menu]',
    templateUrl: 'sidenav.component.html'
})
export class SideNavComponent  implements OnInit {
    form: FormGroup;
   
    constructor(private router: Router) { }

    goToMenu(url: any): void {
        this.router.navigate([url]);
    }

    ngOnInit(): void {
    }

}

