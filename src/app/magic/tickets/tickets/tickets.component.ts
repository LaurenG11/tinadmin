import {
    Component
} from '@angular/core';
import {
    BaseMatTableMagicComponent,
    matMagicProviders
} from "@magic-xpa/angular-material-core";
@Component({
    selector: 'mga-tickets',
    providers: [...matMagicProviders],
    templateUrl: './tickets.component.html'
}) export class tickets extends BaseMatTableMagicComponent {
    displayedColumns = ['Column3',
        'Column7',
        'Column9',
    ];
}