import {
    Component, OnInit
} from '@angular/core';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { FileUploader } from 'ng2-file-upload';

import {
    TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-EditEventOnline',
    providers: [...magicProviders],
    styleUrls: ['./EditEventOnline.component.css'],
    templateUrl: './EditEventOnline.component.html'
}) 

export class EditEventOnline extends TaskBaseMagicComponent  {

        file = null;

  
   
    onFileSelected(event) {
        console.log(event);
        this.file = event.target.files[0];
    }
}