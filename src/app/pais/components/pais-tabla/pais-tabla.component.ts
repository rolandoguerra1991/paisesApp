import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../intefaces/paises-interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: []
})
export class PaisTablaComponent implements OnInit {

  constructor() { }

  @Input() paises:Country[] = [];

  ngOnInit(): void {
  }

}
