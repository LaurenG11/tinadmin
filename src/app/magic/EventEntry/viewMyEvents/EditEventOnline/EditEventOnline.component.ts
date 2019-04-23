import {
    Component, OnInit
} from '@angular/core';
import {
    TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";

@Component({
    selector: 'mga-EditEventOnline',
    providers: [...magicProviders],
    styleUrls: ['./EditEventOnline.component.css'],
    templateUrl: './EditEventOnline.component.html'
}) export class EditEventOnline extends TaskBaseMagicComponent {

   /* public theBoundCallback:    Function;
    public firstFormGroup:      FormGroup;
    public secondFormGroup:     FormGroup;

    images:                     any = [];
    videos:                     any = [];

    newEvent:                  any = {
        name                    : null,
        image_url               : null
    };

    attributes:                 any = {};
    attributesForEdit:          any = {};

    optionsForEventImg =  {
        accessToDwd     : true,
        gallery_id      : null,
        title           : null,
        desc            : null,
        name            : null,
        photoAssignment : 'entity',
        multiple        : false
    };

    ngOnInit(): void
    {



        // binding callbackToAddImage func
        this.theBoundCallback = this.callbackForCloudinary.bind(this);

    }

    callbackForCloudinary(data): void {

        if (data.photoAssignment === 'entity') {

            this.newEvent.image_url = data.url;

        } /*else if (data.photoAssignment === 'gallery') {
            const that = this;
                this._cityAPI.addImg(data)
                .then((responce) => {

                    console.log('Eeee - responce', responce);

                    this.optionsForNewImg = {
                        title: '',
                        desc: '',
                        name: '',
                        // accessToUpload: true,
                        photoAssignment: 'gallery',
                        gallery_id: data.gallery_id,
                        multiple: true,
                        accessToDwd: data.accessToDwd
                    };

                }, (err) => {
                    console.log('Callback err', err);
                });
        } else if (data.photoAssignment === 'featured') {

        } else if (data.photoAssignment === 'video') {
            const that = this;
            this._cityAPI.addVideo(data)

                .then((responce) => ``, (err) => {
                    console.log('Callback err', err);
                });
        }
        

    }*/
}