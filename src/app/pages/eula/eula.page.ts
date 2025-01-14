import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonButton,
  IonCheckbox
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/http';
import { StorageService } from 'src/app/services/storage/storage.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-eula',
  templateUrl: './eula.page.html',
  styleUrls: ['./eula.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons,
    IonBackButton,
    IonButton,
    IonCheckbox
  ]
})
export class EulaPage {
  checkValue: boolean = false;

  constructor(
    private router: Router,
    private signupService: SignupService,
    private storageService: StorageService,
    private toastController: ToastController,
  ) { }

  onSubmit() {
    this.signupService.post(this.storageService.get("userData")).subscribe({
      next: (response) => {
        if(response) {
          this.router.navigate(['/log']);
        }
      },
      error: (error) => {
        console.error(error);
        this.presentToast("Error al crear su cuenta");
      }
    });
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
