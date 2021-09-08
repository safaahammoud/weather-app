import { NgModule } from "@angular/core";

import { CardComponent } from './card/card.component';
import { MaterialModule } from './../modules/material.module';

const componentsUsed = [
  CardComponent,
];

@NgModule({
  declarations: [
    ...componentsUsed,
  ],
  imports: [
    MaterialModule,
  ],
  exports: [
    ...componentsUsed,
  ],
})
export class ComponentModule {};
