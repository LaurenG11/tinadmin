import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudinaryImgService } from './cloudinary-img-upload.service';
import { CloudinaryImgComponent } from './cloudinary-img-upload.component';
import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as Cloudinary from 'cloudinary-core';

@NgModule({
    imports: [
        CommonModule,
        FileUploadModule,
        FormsModule,
        CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'zuguhu', api_key: '958491295687176', api_secret: 'DUBD8ghkha4bKYMthG_BfE2pxkA', upload_preset: 'ytlhkcpq'})
    ],
    declarations: [
        CloudinaryImgComponent
    ],
    providers: [CloudinaryImgService],
    exports: [CloudinaryImgComponent]
})

export class CloudinaryMediaModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CloudinaryMediaModule,
            providers: [CloudinaryImgService]
        };
    }
}
