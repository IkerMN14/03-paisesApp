import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {
  regiones: string []=['africa', 'americas','asia','europe','oceania'];
  regionActiva: string='';


  activarRegion(region: string){
    if(region==this.regionActiva){return;}
    this.regionActiva= region;
    this.buscarRegion(this.regionActiva);
  }
  termino: string = '';
  hayError : boolean = false;
  paises : Country [] = [];
  constructor(private paisservice: PaisService) { }
  buscarRegion(termino : string ) {
    this.termino=termino;
    this.hayError=false;
    this.paisservice.buscarRegion(this.termino)
      .subscribe({
        next: (paises) => {
          this.paises= paises;
          console.log(paises);
          console.log(paises[0].capital);
        }
        ,
        error: (e) => {
          console.log(e);
          this.hayError=true;
        }
      }
      );

    //console.log(this.termino);
  }
}
