import { Component, OnInit } from '@angular/core';
import { CompileService } from '../../services/compile.service';
import { COLOR_VARIABLES, FONT_FAMILY_VARIABLES, FONT_VARIABLES, RADIUS_VARIABLES } from '../../env';
import { faBorderTopLeft, faFont, faPaintRoller, faTextHeight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-bs-settings',
  templateUrl: './bs-settings.component.html',
  styleUrl: './bs-settings.component.scss',
})
export class BsSettingsComponent {
  COLORS = COLOR_VARIABLES
  FONTS = FONT_VARIABLES
  FONTFAMILY = FONT_FAMILY_VARIABLES
  RADIUS = RADIUS_VARIABLES;
  paintRoller = faPaintRoller
  fontSizeIcon = faTextHeight
  radiusIcon = faBorderTopLeft
  fontFamilyIcon = faFont
  constructor(public cS: CompileService) { }
}
