import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { compileString } from 'sass';
import { COLOR_VARIABLES, FONT_VARIABLES, VariableStatus } from '../env';
import { BehaviorSubject, combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompileService {
  colorValues: BehaviorSubject<VariableStatus[]> = new BehaviorSubject<VariableStatus[]>(COLOR_VARIABLES.map(el => {
    return {
      name: el.name,
      value: el.value
    }
  }))
  fontValues: BehaviorSubject<VariableStatus[]> = new BehaviorSubject<VariableStatus[]>(FONT_VARIABLES.map(el => {
    return {
      name: el.name,
      value: el.value
      unit
    }
  }))
  toObserve = [
    this.colorValues, this.fontValues
  ]
  source?: string;
  compile() {
    let allVariables: VariableStatus[] = [...this.colorValues.value]
    let variablesHeader = allVariables.map(el => '$' + el.name + ': ' + el.value + el.unit + ';\n').join('');
    let source = variablesHeader + this.source;
    let c = compileString(source).css;
    this.document.getElementById('bs-compiled')!.innerHTML = c;
  }
  watchChanges() {
    combineLatest(this.toObserve).subscribe(el => {
      this.compile()
    })
  }
  constructor(@Inject(DOCUMENT) private document: Document) {
    fetch('assets/bootstrap.scss').then((res) => {
      res.text().then((source) => {
        this.source = source;
        this.compile();
        this.watchChanges();
      });
    });
  }
}
