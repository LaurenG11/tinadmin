import {
    Component
} from '@angular/core';
import {
    TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-modifyCreateTicket',
    providers: [...magicProviders],
    styleUrls: ['./modifyCreateTicket.component.css'],
    templateUrl: './modifyCreateTicket.component.html'
}) export class modifyCreateTicket extends TaskBaseMagicComponent {}