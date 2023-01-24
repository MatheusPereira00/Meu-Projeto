import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent  implements OnInit{


  public cadastroForm: FormGroup = this.formBuilder.group({
    firstName: [''],
    lastName: ['']
  });
  
  constructor (private formBuilder: FormBuilder){}

  ngOnInit(): void {}

  public submitForm(){
    console.log(this.cadastroForm.value);
    console.log(this.cadastroForm.value);
  }





  




}
