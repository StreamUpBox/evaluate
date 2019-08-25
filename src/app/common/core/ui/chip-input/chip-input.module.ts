import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipInputComponent } from './chip-input.component';
import { MatChipsModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        MatChipsModule,
        MatIconModule,
        ReactiveFormsModule,
    ],
    declarations: [
        ChipInputComponent
    ],
    exports: [
        ChipInputComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ChipInputModule {
}
