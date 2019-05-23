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
    displayedColumns = ['clmScenarioName',
        'clmTriggerType',
        'clmActivityType',
        'clmURL',
        'Column6',
        'Column11',
    ];
}