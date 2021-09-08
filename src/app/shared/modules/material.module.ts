import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const materialUsedModules = [
  MatCardModule,
  MatListModule,
  FlexLayoutModule,
  MatIconModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatSnackBarModule,
]

@NgModule({
  imports: [...materialUsedModules],
  exports: [...materialUsedModules],
})
export class MaterialModule {};
