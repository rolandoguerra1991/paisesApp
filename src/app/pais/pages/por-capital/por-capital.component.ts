import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../intefaces/paises-interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  constructor(private paisService:PaisService) { }

  termino:string = '';
  hayError:boolean = false;
  paises:Country[] = [];

  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino)
      .subscribe((paises) => {
        this.paises = paises;
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    });
  }
}
