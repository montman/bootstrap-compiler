import { Component } from '@angular/core';
import { CompileService } from '../../services/compile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  downloadCss() {
    this.cs.downloadCss();
  }
  downloadScss() {
    this.cs.downloadScss();
  }
  constructor(private cs: CompileService) {

  }
}
