import {
    Component
} from '@angular/core';
import {
    TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-detailsSubform',
    providers: [...magicProviders],
    templateUrl: './detailsSubform.component.html'
}) export class detailsSubform extends TaskBaseMagicComponent {}