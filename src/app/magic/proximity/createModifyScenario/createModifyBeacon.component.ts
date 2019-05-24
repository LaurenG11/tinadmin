import {
    Component
} from '@angular/core';
import {
    TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-createModifyBeacon',
    providers: [...magicProviders],
    templateUrl: './createModifyBeacon.component.html'
}) export class createModifyBeacon extends TaskBaseMagicComponent {}