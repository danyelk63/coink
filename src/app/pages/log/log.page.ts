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
  IonBackdrop,
  IonButton
 } from '@ionic/angular/standalone';
import { StorageService } from 'src/app/services/storage/storage.service';
import { IUser } from 'src/app/models';

@Component({
  selector: 'app-log',
  templateUrl: './log.page.html',
  styleUrls: ['./log.page.scss'],
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
    IonBackdrop,
    IonButton
  ]
})
export class LogPage implements OnInit {

  isVisible: boolean = true;

  userData: IUser | null = null; 

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.userData = this.storageService.get("userData");
  }

  hideModal() {
    this.isVisible = false;
  }

}
