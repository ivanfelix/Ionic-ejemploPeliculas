import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent implements OnInit {

  @Input() id;

  constructor() { }

  ngOnInit() {
    console.log('ID', this.id);
  }

}
