import {
    Component
} from '@angular/core';
import {
    TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-mainRoute',
    providers: [...magicProviders],
    templateUrl: './mainRoute.component.html'
}) export class mainRoute extends TaskBaseMagicComponent {}