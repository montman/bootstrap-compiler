import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { compileString, Logger } from 'sass';
import { COLOR_VARIABLES, FONT_FAMILY_VARIABLES, FONT_VARIABLES, RADIUS_VARIABLES, Variable, VariableStatus } from '../env';
import { BehaviorSubject, combineLatest, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompileService {
  importFontUrl: string = ''
  colorValues: BehaviorSubject<VariableStatus[]> = new BehaviorSubject<VariableStatus[]>(COLOR_VARIABLES.map(el => {
    return {
      name: el.name,
      value: el.value + (el.unit || ''),
    }
  }))
  fontValues: BehaviorSubject<VariableStatus[]> = new BehaviorSubject<VariableStatus[]>(FONT_VARIABLES.map(el => {
    return {
      name: el.name,
      value: el.value + (el.unit || ''),
    }
  }))
  fontFamilyValues: BehaviorSubject<VariableStatus[]> = new BehaviorSubject<VariableStatus[]>(FONT_FAMILY_VARIABLES.map(el => {
    return {
      name: el.name,
      value: el.value + (el.unit || ''),
    }
  }))
  radiusValues: BehaviorSubject<VariableStatus[]> = new BehaviorSubject<VariableStatus[]>(RADIUS_VARIABLES.map(el => {
    return {
      name: el.name,
      value: el.value + (el.unit || ''),
    }
  }))
  toObserve$: BehaviorSubject<VariableStatus[]>[] = [
    this.colorValues, this.fontValues, this.radiusValues, this.fontFamilyValues
  ]
  source?: string;
  async download(content: string, filename: string) {
    const url = window.URL.createObjectURL(new Blob([content]));
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  }
  getHeader(variables: VariableStatus[]) {
    return variables.map(el => '$' + el.name + ': ' + el.value + ';').join('\n')
  }
  getSource(variables: VariableStatus[]) {
    let importFont = this.importFontUrl ? `@import url('${this.importFontUrl}');\n` : '';
    return importFont + this.getHeader(variables) + this.source;
  }
  async downloadCss() {
    let sub = await firstValueFrom(combineLatest(this.toObserve$))
    let variables = sub.reduce((p, c) => p.concat(c), [])
    let c = compileString(this.getSource(variables), { style: 'compressed', logger: Logger.silent }).css;
    await this.download(c, 'bootstrap.css');
  }
  async downloadScss() {
    let sub = await firstValueFrom(combineLatest(this.toObserve$))
    let variables = sub.reduce((p, c) => p.concat(c), [])
    await this.download(this.getHeader(variables), 'bootstrap_header.scss');
  }
  compile(allVariables: VariableStatus[]) {
    let c = compileString(this.getSource(allVariables), { logger: Logger.silent }).css;
    this.document.getElementById('bs-compiled')!.innerHTML = c;
  }
  watchChanges() {
    combineLatest(this.toObserve$).subscribe(_ => {
      this.compile(_.reduce((p, c) => p.concat(c), []))
    })
  }
  constructor(@Inject(DOCUMENT) private document: Document) {
    fetch('assets/bootstrap.scss').then((res) => {
      res.text().then((source) => {
        this.source = source;
        this.watchChanges();
      });
    });
  }
}
