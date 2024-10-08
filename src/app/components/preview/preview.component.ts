import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss'
})
export class PreviewComponent {
  form = new FormGroup({
    mode: new FormControl('light'),
  });
  changeMode(m: 'light' | 'dark') {
    let body = this.d.querySelector('body');
    body?.setAttribute('data-bs-theme', m);
  }
  constructor(@Inject(DOCUMENT) private d: Document) {
    this.changeMode(this.form.value.mode as 'light' | 'dark')
    this.form.valueChanges.subscribe(el => {
      this.changeMode(el.mode as 'light' | 'dark')
    })
  }
}
