import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { compileString, Logger } from 'sass';
import { COLOR_VARIABLES, VariableStatus } from '../env';
import { BehaviorSubject, combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompileService {
  colorValues: BehaviorSubject<VariableStatus[]> = new BehaviorSubject<VariableStatus[]>(COLOR_VARIABLES.map(el => {
    return {
      name: el.name,
      value: el.value,
    }
  }))
  toObserve = [
    this.colorValues
  ]
  source?: string;
  compile() {
    let allVariables: VariableStatus[] = [...this.colorValues.value]
    let variablesHeader = allVariables.map(el => '$' + el.name + ': ' + el.value + ';').join('\n');
    let source = variablesHeader + this.source;
    let c = compileString(source, { logger: Logger.silent }).css;
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
        this.watchChanges();
      });
    });
  }
}
