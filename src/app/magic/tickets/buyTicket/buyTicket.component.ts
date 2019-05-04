import {
    Component, AfterViewChecked
} from '@angular/core';
import {
    BaseMatTableMagicComponent,
    matMagicProviders
} from "@magic-xpa/angular-material-core";
import { FormsModule } from '@angular/forms';

declare let paypal: any;


@Component({
    selector: 'mga-buyTicket',
    providers: [...matMagicProviders],
    templateUrl: './buyTicket.component.html'
}) export class buyTicket extends BaseMatTableMagicComponent implements AfterViewChecked{
    displayedColumns = ['clmTicket',
        'clmPrice',
        'Column5',
    ];
    addScript: boolean = false;
    paypalLoad: boolean= true;
    finalAmount: number  = 1;
    paypalConfig = {
        env: 'sandbox',
        client: {
            sandbox: 'AZFyfSSmLfGTztHZDJtkDHQV5L4HAqwiIKOlSQcPnAeiYXg5ZdfeOruH',
            production: ''
        },
        commit: true,
        payment: (data, actions) => {
            return actions.payment.create({
                payment: {
                    transactions: [
                        {amount: {total: this.finalAmount, currency: 'USD'}}
                    ]
                }
            }

            );
        },
        onAuthorize: (data, actions) => {
            actions.payment.execute().then((payment) => {
                //do something to confirm payment was successful
            }

            )
        }

    };

    ngAfterViewChecked(): void {
        if(!this.addScript){
            this.addPaypalScript().then(()=>{
                paypal.button.render(this.paypalConfig, '#paypal-checkout-button');
                this.paypalLoad =false;
            }

            )
        }

    }
    addPaypalScript() {
        this.addScript = true;
        return new Promise((resolve, reject) => {
            let scripttagElement = document.createElement('script')
            scripttagElement.src = 'http://www.paypalobjects.com/api/checkout.js';
            scripttagElement.onload = resolve;
            document.body.appendChild(scripttagElement)
        }

        )

    }
}