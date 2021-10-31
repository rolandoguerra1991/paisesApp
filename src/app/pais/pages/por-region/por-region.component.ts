import { Component, OnInit } from '@angular/core';
import { Country } from '../../intefaces/paises-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = [
    'africa',
    'americas',
    'asia',
    'europe',
    'oceania'
  ];

  regionActiva:string = '';

  paises:Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  activarRegion(region:string){

    if(region !== this.regionActiva){
      this.regionActiva = region;
      this.paises = [];
      this.paisService.getPaisesPorRegion(region)
        .subscribe((paises) => {
          this.paises = paises;
        }
      );
    }
  }

  getClassCSS(region:string) : string {
    return (region === this.regionActiva) ? 'btn btn-primary active' : 'btn btn-primary';
  }

}
