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
    templateUrl: './tickets.component.html',
    styleUrls: ['./tickets.component.css']
}) export class tickets extends BaseMatTableMagicComponent {
    displayedColumns = ['clmTicketType',
        'clmPrice',
        'Column18',
        'clmSold',
        'clmRemaining',
        'Column5',
        'Column36',
    ];
}