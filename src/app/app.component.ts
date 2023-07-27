import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.scss']
    })
    export class AppComponent {
      title = 'teste';
      form: FormGroup;
      mailText = '';


      constructor(private fb:FormBuilder){
        this.form = this.fb.group({
          text: ['']
        })
      }

      mailMe(){
        console.log('teste')
        this.mailText = "mailto:eusferalves@gmail.com?subject=teste de assunto&body="; // add the links to body
        window.location.href = this.mailText;
      }
      
      
    }
