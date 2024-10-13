import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonBackButton,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonIcon
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { DocumentTypeService } from 'src/app/services/http';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.page.html',
  styleUrls: ['./personal-data.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonButton,
    IonButtons,
    IonBackButton,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonInput,
    IonIcon
  ]
})
export class PersonalDataPage implements OnInit {

  form = this.fb.group({
    idType: this.fb.control(""),
    id: this.fb.control(""),
    issueDate: this.fb.control(""),
    birthdate: this.fb.control(""),
    gender: this.fb.control(""),
    email: this.fb.control(""),
    confirmEmail: this.fb.control(""),
    pin: this.fb.control(""),
    confirmPin: this.fb.control(""),
  });

  constructor(private fb: FormBuilder, private router: Router, private documentTypeService: DocumentTypeService) { }
  
  ngOnInit() {
    this.documentTypeService.get().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  onSubmit() {

  }

}
