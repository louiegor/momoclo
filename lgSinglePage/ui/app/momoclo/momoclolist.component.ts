import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { DataScrollerModule } from 'primeng/primeng';
import { Member } from './Member';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';




@Component({
    moduleId: module.id,
    //selector: 'broker',
    templateUrl: 'momoclolist.component.html'
})
export class MomocloListComponent  implements OnInit{
    members: Array<Member> ;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private http: Http,
    ){}
    
    ngOnInit():void{
        this.members = [
            {id:1,name:'Momota Kanako',color:'Red'},
            {id:2,name:'Tamai Shiori',color:'Yellow'},
            {id:3,name:'Sazaki Ayaka',color:'Pink'},
            {id:4,name:'Ariyasu Momoka',color:'Green'},
            {id:5,name:'Takagi Reni',color:'Purple'}, 
        ];
    }

    // onRowSelect(event){
    //     this.router.navigate(['/momoclo/get', { id: event.data.id }]);
    // }
}