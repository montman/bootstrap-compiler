import { Component } from '@angular/core';
import { COLOR_VARIABLES } from '../../../env';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-button-preview',
  templateUrl: './button-preview.component.html',
  styleUrl: './button-preview.component.scss'
})
export class ButtonPreviewComponent {
  form = new FormGroup({
    size: new FormControl(''),
  });
  colors = COLOR_VARIABLES;
}
