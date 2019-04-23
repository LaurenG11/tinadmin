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
    styleUrls: ['./viewMyEvents.component.css'],
    templateUrl: './viewMyEvents.component.html'
}) export class viewMyEvents extends BaseMatTableMagicComponent {
    displayedColumns = ['Column8',
        'Column24',
        'Column10',
        'Column22',
    ];
}