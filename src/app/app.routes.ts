import {
    Routes
} from '@angular/router';
import {
    RouterContainerMagicComponent
} from "@magic-xpa/angular";
export const routes: Routes = [{
        path: 'Events/:inEoIsn',
        component: RouterContainerMagicComponent,
    },
    {
        path: 'EventListing/:inEoIsn',
        component: RouterContainerMagicComponent,
    },
];