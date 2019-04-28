import {
    Component
} from '@angular/core';
import {
    BaseMatTableMagicComponent,
    matMagicProviders
} from "@magic-xpa/angular-material-core";
@Component({
    selector: 'mga-eventListing',
    providers: [...matMagicProviders],
    templateUrl: './eventListing.component.html'
}) export class eventListing extends BaseMatTableMagicComponent {
    displayedColumns = ['Column9',
        'Column17',
    ];
}