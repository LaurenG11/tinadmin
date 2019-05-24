import {
    Component
} from '@angular/core';
import {
    BaseMatTableMagicComponent,
    matMagicProviders
} from "@magic-xpa/angular-material-core";
@Component({
    selector: 'mga-listBeacon',
    providers: [...matMagicProviders],
    templateUrl: './listBeacon.component.html'
}) export class listBeacon extends BaseMatTableMagicComponent {
    displayedColumns = ['clmBeaconName',
        'clmBeaconUuid',
        'clmMajor',
        'clmMinor',
        'Column6',
        'Column11',
        'Column16',
        'Column18',
    ];
}