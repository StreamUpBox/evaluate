import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {TranslateDirective} from './translate.directive';
import { TransPipe } from './translate.pipe';

@NgModule({
    declarations: [
        TranslateDirective,
        TransPipe,
    ],
    exports: [
        TranslateDirective,
        TransPipe,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TranslationsModule {}
