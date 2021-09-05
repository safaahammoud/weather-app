import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';

const materialUsedModules = [
  MatCardModule,
  MatListModule,
  FlexLayoutModule,
  MatIconModule,
]

@NgModule({
  imports: [...materialUsedModules],
  exports: [...materialUsedModules],
})
export class MaterialModule {};
