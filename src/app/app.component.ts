import { Component } from '@angular/core';
import { CompileService } from './services/compile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bootstrap-compiler';
  constructor(public c: CompileService) { }
}
