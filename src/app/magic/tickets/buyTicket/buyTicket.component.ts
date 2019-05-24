import {
    Component, AfterViewChecked, OnInit
} from '@angular/core';
import {
    BaseMatTableMagicComponent,
    matMagicProviders
} from "@magic-xpa/angular-material-core";
import { IPayPalConfig, ICreateOrderRequest} from 'ngx-paypal';
import {MatSnackBarModule, MatSnackBarRef} from '@angular/material/snack-bar';
import { NGXLogger } from 'ngx-logger';
import { TrueFalseValues } from '@magic-xpa/utils';

declare let paypal: any;


@Component({
    selector: 'mga-buyTicket',
    providers: [...matMagicProviders],
    templateUrl: './buyTicket.component.html'
}) export class buyTicket extends BaseMatTableMagicComponent implements OnInit, AfterViewChecked{
    displayedColumns = ['clmTicket',
        'clmPrice',
        'Column5',
    ];
    addScript: boolean = false;
    paypalLoad: boolean = true;
    paypalSuccess: boolean = false;
    showButton: boolean = true;
    paypalDetails: string = '';
    pass_id: string = '2620140a-ea68-4632-902d-fa2a856f0c70';
  

    paypalBlob: string;
    
    
    paypalConfig = {
      env: 'sandbox',
      client: {
        sandbox: 'AUvLtONjzey_L6OzINfysqo8IcYsswv6Eb8adnu1kFKmzndmOJyYUoKOqUDCTSa4EIPBW9zq1qFxQ9RE',
        production: 'ATCVagPWdf5p--xP9SV-ErFihFUBZ9JgV9IblV87iIYiHTFKJbP1PVC108AwJj6rTmz4WvLIeFcV3HG_'
      
      },
      commit: true,
      payment: (data, actions) => {
        
        return actions.payment.create({
          payment: {
            transactions: [
              { amount: { total: this.screenFormGroup.controls.nTotalAmount.value
                        , currency: this.screenFormGroup.controls.aPaypalCurrencyCode.value
                        } 
              }
            ]
          },
          experience: {
            input_fields: {
              no_shipping: 1
            }
          }
        });
      },
      onAuthorize: (data, actions) => {
        
        actions.order.get().then(details => {
          

        }
      );
      actions.payment.execute().then(details => {


        this.screenFormGroup.patchValue({aPaypalDetails:details.state})
        // this.paypalDetails = details.state;
        
        this.showButton = false;
        if (this.screenFormGroup.controls.aPaypalDetails.value == 'approved')
        {
          this.paypalSuccess = true;
        
          
        }
        else{
          this.paypalSuccess = false;
        }
      });
        

      },
      onApprove: function(data, actions) {


        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
        console.log('onApprove - you can get full order details inside onApprove: ', details);
        
        })
      },
      onError: function(data, actions) {
          return actions.order.capture().then(function(details) {
          //this.screenFormGroup.controls.aPaypalDetails.setValue(details.error);
          //details.error;
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
    };
    
    addPaypalScript() {
      this.addScript = true;
      return new Promise((resolve, reject) => {
        let scripttagElement = document.createElement('script');    
        scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
        scripttagElement.onload = resolve;
        document.body.appendChild(scripttagElement);
      })
    };

    isApproved () {
      if (this.screenFormGroup.controls.aPaypalDetails.value == 'approved')
      {
        return true;
      }
        else
      {
        return false;
      }
    };
    getMessageVisible() {
      if (this.screenFormGroup.controls.aPaypalDetails.value == '')
    {
      return false;  
    }
    else 
    {
      return true;
    }
  }

  
}