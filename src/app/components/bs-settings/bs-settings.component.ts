import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { compileStringAsync, compileString } from 'sass';
import { CompileService } from '../../services/compile.service';
@Component({
  selector: 'app-bs-settings',
  templateUrl: './bs-settings.component.html',
  styleUrl: './bs-settings.component.scss',
})
export class BsSettingsComponent {
}
