import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {

  @Input() subTitulo : string = '';
  @Input() meuTitulo : string = '';
  @Input() meuTexto : string =  '';
  @Input() meuButton1 : string = '';
  @Input() meuButton2 : string = '';
  

}
