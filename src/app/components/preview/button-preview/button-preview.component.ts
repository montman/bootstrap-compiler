import { Component } from '@angular/core';
import { COLOR_VARIABLES } from '../../../env';

@Component({
  selector: 'app-button-preview',
  templateUrl: './button-preview.component.html',
  styleUrl: './button-preview.component.scss'
})
export class ButtonPreviewComponent {
  colors = COLOR_VARIABLES;
}
