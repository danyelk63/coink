import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
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
  IonIcon,
  IonBackdrop,
  IonSpinner
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { DocumentTypeService, GenderService } from 'src/app/services/http';
import { gender, idType, IGenders, IIdTypes, IUser } from 'src/app/models';
import { StorageService } from 'src/app/services/storage/storage.service';
import { ToastController } from '@ionic/angular';
import { delay } from 'rxjs';

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
    IonIcon,
    IonBackdrop,
    IonSpinner
  ]
})
export class PersonalDataPage implements OnInit {

  dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/;
  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  numericRegex = /^\d+$/;

  form = this.fb.group({
    idType: this.fb.control("", [Validators.required]),
    id: this.fb.control("", [Validators.required]),
    issueDate: this.fb.control("", [Validators.required, Validators.pattern(this.dateRegex)]),
    birthdate: this.fb.control("", [Validators.required, Validators.pattern(this.dateRegex)]),
    gender: this.fb.control("", [Validators.required]),
    email: this.fb.control("", [Validators.required, Validators.pattern(this.emailRegex)]),
    confirmEmail: this.fb.control("", [Validators.required, Validators.pattern(this.emailRegex)]),
    pin: this.fb.control("", [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern(this.numericRegex)]),
    confirmPin: this.fb.control("", [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern(this.numericRegex)]),
  }, { validators: [this.matchFields('email', 'confirmEmail'), this.matchFields('pin', 'confirmPin')] });

  idTypes: IIdTypes[] = [];
  genders: IGenders[] = [];

  showPin: boolean = false;
  showConfirmPin: boolean = false;

  toastMessage: string = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private documentTypeService: DocumentTypeService,
    private genderService: GenderService,
    private storageService: StorageService,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
    this.storageService.remove("userData");
    this.documentTypeService.get().pipe(delay(3000)).subscribe({
      next: (response: IIdTypes[]) => {
        this.idTypes = response;
      },
      error: (error) => {
        console.error(error);
        this.presentToast("Error al cargar los tipos de id");
      }
    });

    this.genderService.get().pipe(delay(3000)).subscribe({
      next: (response: IGenders[]) => {
        this.genders = response;
      },
      error: (error) => {
        console.error(error);
        this.presentToast("Error al cargar los géneros");
      }
    });
  }

  onSubmit() {
    let userData: IUser = {
      phone: this.storageService.get("phone"),
      id: this.form.controls.id.value!,
      birthdate: this.form.controls.birthdate.value!,
      email: this.form.controls.email.value!,
      gender: this.form.controls.gender.value! as gender,
      idType: this.form.controls.idType.value! as idType,
      issueDate: this.form.controls.issueDate.value!,
      pin: this.form.controls.pin.value!,
    }

    this.storageService.save("userData", userData);
    this.router.navigate(['/eula']);
  }

  changePinStatus() {
    this.showPin = !this.showPin;
  }

  changeConfirmPinStatus() {
    this.showConfirmPin = !this.showConfirmPin;
  }

  matchFields(controlName: string, matchingControlName: string): ValidatorFn {
    return (formGroup: AbstractControl): { [key: string]: boolean } | null => {
      const control = formGroup.get(controlName);
      const matchingControl = formGroup.get(matchingControlName);

      if (control && matchingControl && control.value !== matchingControl.value) {
        return { 'mismatch': true };
      }
      return null;
    };
  }
  
  async presentToast(text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }

}
