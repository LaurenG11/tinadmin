import {
    Component, AfterViewChecked, OnInit
} from '@angular/core';
import {
    BaseMatTableMagicComponent,
    matMagicProviders
} from "@magic-xpa/angular-material-core";
import { IPayPalConfig, ICreateOrderRequest} from 'ngx-paypal';


declare let paypal: any;


@Component({
    selector: 'mga-buyTicket',
    providers: [...matMagicProviders],
    templateUrl: './buyTicket.component.html'
}) export class buyTicket extends BaseMatTableMagicComponent implements OnInit{
    displayedColumns = ['clmTicket',
        'clmPrice',
        'Column5',
    ];
    addScript: boolean = false;
    paypalLoad: boolean = true;
    
    finalAmount: number = 15;
   
    paypalConfig = {
      env: 'sandbox',
      client: {
        sandbox: 'AUvLtONjzey_L6OzINfysqo8IcYsswv6Eb8adnu1kFKmzndmOJyYUoKOqUDCTSa4EIPBW9zq1qFxQ9RE',
        production: '<your-production-key here>'
      },
      commit: true,
      payment: (data, actions) => {
        return actions.payment.create({
          payment: {
            transactions: [
              { amount: { total: this.finalAmount, currency: 'USD' } }
            ]
          }
        });
      },
      onAuthorize: (data, actions) => {
        return actions.payment.execute().then((payment) => {
          //Do something when payment is successful.
        })
      }
    };
   
    ngAfterViewChecked(): void {
      if (!this.addScript) {
        this.addPaypalScript().then(() => {
          paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
          this.paypalLoad = false;
        })
      }
    }
    
    addPaypalScript() {
      this.addScript = true;
      return new Promise((resolve, reject) => {
        let scripttagElement = document.createElement('script');    
        scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
        scripttagElement.onload = resolve;
        document.body.appendChild(scripttagElement);
      })
    }
   
  
}