import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { compileString } from 'sass';

@Injectable({
  providedIn: 'root',
})
export class CompileService {
  source?: string;
  compile(primaryColor: string) {
    let source = '$primary: ' + primaryColor + ';\n' + this.source;
    let now = new Date().getTime();
    let c = compileString(source).css;
    let then = new Date().getTime();
    let durationMs = then - now;
    this.document.getElementById('bs-compiled')!.innerHTML = c;
  }
  constructor(@Inject(DOCUMENT) private document: Document) {
    fetch('assets/bootstrap.scss').then((res) => {
      res.text().then((source) => {
        this.source = source;
        this.compile('#ffaabb');
      });
    });
  }
}
