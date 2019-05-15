import {
    Component
} from '@angular/core';
import {
    BaseMatTableMagicComponent,
    matMagicProviders
} from "@magic-xpa/angular-material-core";
@Component({
    selector: 'mga-sicListingOnline',
    providers: [...matMagicProviders],
    styleUrls: ['./sicListingOnline.component.css'],
    templateUrl: './sicListingOnline.component.html'
}) export class sicListingOnline extends BaseMatTableMagicComponent {
    displayedColumns = ['Column16',
        'Column18',
        'Column24',
        'Column26',
        'Column20',
    ];
}