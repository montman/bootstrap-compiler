import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FONT_VARIABLES } from '../../../env';

@Component({
  selector: 'app-font-settings',
  templateUrl: './font-settings.component.html',
  styleUrl: './font-settings.component.scss'
})
export class FontSettingsComponent {
  fontForm: FormGroup = new FormGroup({});
  values = FONT_VARIABLES;
}
