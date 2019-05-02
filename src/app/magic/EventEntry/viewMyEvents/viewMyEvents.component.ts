import {
    Component
} from '@angular/core';
import {
    BaseMatTableMagicComponent,
    matMagicProviders
} from "@magic-xpa/angular-material-core";
@Component({
    selector: 'mga-viewMyEvents',
    providers: [...matMagicProviders],
    templateUrl: './viewMyEvents.component.html'
}) export class viewMyEvents extends BaseMatTableMagicComponent {
    displayedColumns = ['clmEvent',
        'clmDate',
        'Column9',
    ];
}