import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { IKey, IKeyValue } from 'src/app/models/keyboard';
import { IonButton, IonIcon, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [IonButton, IonIcon, IonFab, IonFabButton, CommonModule],
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent {
  @Output() keyClicked = new EventEmitter<IKeyValue>();
  @Input() disabled: boolean = false;

  keys: IKey[] = [
    {
      type: 'number',
      value: '1',
    },
    {
      type: 'number',
      value: '2',
    },
    {
      type: 'number',
      value: '3',
    },
    {
      type: 'number',
      value: '4',
    },
    {
      type: 'number',
      value: '5',
    },
    {
      type: 'number',
      value: '6',
    },
    {
      type: 'number',
      value: '7',
    },
    {
      type: 'number',
      value: '8',
    },
    {
      type: 'number',
      value: '9',
    },
    {
      type: 'icon',
      value: 'delete',
    },
    {
      type: 'number',
      value: '0',
    },
    {
      type: 'button',
      value: 'success',
    },
  ];

  constructor() { }

  pressButton(value: IKeyValue) {
    this.keyClicked.emit(value)
  }

}
