import {
    Component
} from '@angular/core';
import {
    BaseMatTableMagicComponent,
    matMagicProviders
} from "@magic-xpa/angular-material-core";
import {
    MagicModalInterface
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-linkEntity',
    providers: [...matMagicProviders],
    templateUrl: './linkEntity.component.html'
}) export class linkEntity extends BaseMatTableMagicComponent implements MagicModalInterface {
    private static readonly formName: string = "linkEntity";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "300px";
    private static readonly height: string = "300px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick = true;
    X() {
        return linkEntity.x;
    }
    Y() {
        return linkEntity.y;
    }
    Width(): string {
        return linkEntity.width;
    }
    Height(): string {
        return linkEntity.height;
    }
    IsCenteredToWindow() {
        return linkEntity.isCenteredToWindow;
    }
    FormName() {
        return linkEntity.formName;
    }
    ShowTitleBar() {
        return linkEntity.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return linkEntity.shouldCloseOnBackgroundClick;
    }
    displayedColumns = ['clmEntity',
        'Column5',
    ];
}