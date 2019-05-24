import {
    Component
} from '@angular/core';
import {
    TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-proximity',
    providers: [...magicProviders],
    templateUrl: './proximity.component.html'
}) export class proximity extends TaskBaseMagicComponent {}