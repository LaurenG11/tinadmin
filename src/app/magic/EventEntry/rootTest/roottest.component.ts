import {
    Component
} from '@angular/core';
import {
    TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-roottest',
    providers: [...magicProviders],
    styleUrls: ['./roottest.component.css'],
    templateUrl: './roottest.component.html'
}) export class roottest extends TaskBaseMagicComponent {}