import { Component, OnInit } from '@angular/core';
import { CompileService } from '../../services/compile.service';
import { COLOR_VARIABLES, FONT_VARIABLES, RADIUS_VARIABLES } from '../../env';
@Component({
  selector: 'app-bs-settings',
  templateUrl: './bs-settings.component.html',
  styleUrl: './bs-settings.component.scss',
})
export class BsSettingsComponent {
  COLORS = COLOR_VARIABLES
  FONTS = FONT_VARIABLES
  RADIUS = RADIUS_VARIABLES;
  constructor(public cS: CompileService) { }
}
