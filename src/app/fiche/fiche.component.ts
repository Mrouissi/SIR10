import { Component, OnInit } from '@angular/core';
import { FicheService } from './fiche.service';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css']
})
export class FicheComponent implements OnInit {

 public fiche = {
  'date_butoir': null,
  'heures_estime': 0,
  'id': 1,
  'lieu': null,
  'name': "Diag. de classe",
  'note': null,
  'tags': [],
  'url': null,
  'user': null
} 
  fiches = [{
    'date_butoir': null,
    'heures_estime': 0,
    'id': 0,
    'lieu': null,
    'name': "",
    'note': null,
    'tags': [],
    'url': null,
    'user': null
  } ] ;
  constructor(private service:FicheService) { }

  ngOnInit(): void {
    this.service.getFiches().subscribe(data=>{
      console.log(data);
      let datas = JSON.stringify(data)
      let res = JSON.parse(datas)
      console.log('res ===> ', res.length);
        this.fiches = []
      for (let i =0 ; i< res.length ; i++){
        if (res[i] !== undefined){
          this.fiches.push(res[i]);
        }
     
      }
      
    })
  }
getAll(){
  this.service.getFiches().subscribe(data=>{
    console.log(data);
  })
}
}
