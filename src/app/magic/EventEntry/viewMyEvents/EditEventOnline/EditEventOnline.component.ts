import {
    Component
} from '@angular/core';
import {
    TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-EditEventOnline',
    providers: [...magicProviders],
    templateUrl: './EditEventOnline.component.html'
}) export class EditEventOnline extends TaskBaseMagicComponent {}