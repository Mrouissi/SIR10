import { Component, OnInit } from '@angular/core';
import { FicheService } from './fiche.service';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css']
})
export class FicheComponent implements OnInit {

  constructor(private service:FicheService) { }

  ngOnInit(): void {
 
  }
getAll(){
  this.service.getFiches().subscribe(data=>{
    console.log(data);
  })
}
}
