import {
    Component
} from '@angular/core';
import {
    BaseMatTableMagicComponent,
    matMagicProviders
} from "@magic-xpa/angular-material-core";
@Component({
    selector: 'mga-tickets1',
    providers: [...matMagicProviders],
    templateUrl: './tickets1.component.html'
}) export class tickets1 extends BaseMatTableMagicComponent {
    displayedColumns = ['Column2', ];
}