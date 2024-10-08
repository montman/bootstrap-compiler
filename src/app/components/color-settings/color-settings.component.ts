import { Component } from '@angular/core';
import { CompileService } from '../../services/compile.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { COLOR_VARIABLES } from '../../env';

@Component({
  selector: 'app-color-settings',
  templateUrl: './color-settings.component.html',
  styleUrl: './color-settings.component.scss'
})
export class ColorSettingsComponent {
  colorForm: FormGroup = new FormGroup({});
  colors = COLOR_VARIABLES;
  constructor(private c: CompileService, private fb: FormBuilder) {
    this.colors.forEach(el => this.colorForm.addControl(el.name, new FormControl(el.value)))
    this.colorForm.valueChanges.subscribe(v => {
      this.c.colorValues.next(Object.keys(v).map(k => {
        return {
          name: k,
          value: v[k]
        }
      }))
    })
  }
}
