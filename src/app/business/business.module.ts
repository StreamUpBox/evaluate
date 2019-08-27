import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewBusinessComponent } from './new-business/new-business.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../common/core/ui/ui.module';
import { ImageCropperModule } from '../image-cropper/image-cropper.module';
import { TitleBarModule } from '../title-bar/title-bar.module';

@NgModule({
  imports: [
    CommonModule, MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    ImageCropperModule
  ],
  declarations: [NewBusinessComponent],
  exports: [NewBusinessComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BusinessModule { }
