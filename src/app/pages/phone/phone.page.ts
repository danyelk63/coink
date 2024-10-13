import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonIcon, IonInput } from '@ionic/angular/standalone';
import { KeyboardComponent } from 'src/app/components';
import { Router } from '@angular/router';
import { IKeyValue } from 'src/app/models';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.page.html',
  styleUrls: ['./phone.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonIcon, KeyboardComponent, IonInput, ReactiveFormsModule]
})
export class PhonePage {

  form = this.fb.group({
    phone: this.fb.control("", [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^3/)]),
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  keyClicked(key: IKeyValue) {
    this.form.controls.phone.markAsDirty();
    let str = this.form.controls.phone.value;
    if (str != null) {
      if (key == "success") {
        this.router.navigate(['/personal-data']);
      } else if (key == "delete") {
        this.form.controls.phone.setValue(str.slice(0, -1));
      } else {
        this.form.controls.phone.setValue(str + key);
      }
    }
  }

}
