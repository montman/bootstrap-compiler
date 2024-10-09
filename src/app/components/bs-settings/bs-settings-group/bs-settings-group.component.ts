import { Component, Input, OnInit } from '@angular/core';
import { Variable, VariableStatus } from '../../../env';
import { BehaviorSubject } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bs-settings-group',
  templateUrl: './bs-settings-group.component.html',
  styleUrl: './bs-settings-group.component.scss'
})
export class BsSettingsGroupComponent implements OnInit {
  @Input() variables!: Variable[]
  @Input() observable!: BehaviorSubject<VariableStatus[]>
  form: FormGroup = new FormGroup({});
  infoIcon = faCircleQuestion
  ngOnInit(): void {
    this.variables.forEach(el => {
      this.form.addControl(el.name, new FormControl(el.value))
    })
    this.form.valueChanges.subscribe(v => {
      let toNext: VariableStatus[] = Object.keys(v).map(key => {
        return {
          name: key,
          value: v[key] + (this.variables.find(el => el.name == key)?.unit || '')
        }
      })
      this.observable.next(toNext)
    })
  }
}
