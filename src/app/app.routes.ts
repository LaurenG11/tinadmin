import {
    Routes,
    RouterModule
} from '@angular/router';
import {
    RouterContainerMagicComponent
} from "@magic-xpa/angular";
import {
    CommonModule
} from "@angular/common";
import {
    NgModule
} from '@angular/core';
export const routes: Routes = [{
    path: 'Events/:inEoIsn',
    component: RouterContainerMagicComponent,
}, {
    path: 'EventListing/:inEoIsn/:inLongitude/:inLatitude/:inRange',
    component: RouterContainerMagicComponent,
}, {
    path: 'Proximity/:inLocationIsn',
    component: RouterContainerMagicComponent,
}, {
    path: 'Scenario/:inEntityIsn',
    component: RouterContainerMagicComponent,
}, ];
@NgModule({
    imports: [CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class MagicRoutingModule {}