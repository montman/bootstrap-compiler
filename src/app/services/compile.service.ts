import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { compileString, Logger } from 'sass';
import { COLOR_VARIABLES, FONT_VARIABLES, RADIUS_VARIABLES, VariableStatus } from '../env';
import { BehaviorSubject, combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompileService {
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
  radiusValues: BehaviorSubject<VariableStatus[]> = new BehaviorSubject<VariableStatus[]>(RADIUS_VARIABLES.map(el => {
    return {
      name: el.name,
      value: el.value + (el.unit || ''),
    }
  }))
  toObserve$: BehaviorSubject<VariableStatus[]>[] = [
    this.colorValues, this.fontValues, this.radiusValues
  ]
  source?: string;
  compile(allVariables: VariableStatus[]) {
    let variablesHeader = allVariables.map(el => '$' + el.name + ': ' + el.value + ';').join('\n');
    let source = variablesHeader + this.source;
    let c = compileString(source, { logger: Logger.silent }).css;
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
