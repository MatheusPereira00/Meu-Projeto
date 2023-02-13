import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { pessoas } from './pessoas.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // baseUrl = "http://localhost:3000/pessoas"


  constructor(private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 2000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  }

