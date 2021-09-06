import Avatax from '../lib/AvaTaxClient';
import nock from 'nock';


const baseUrl = 'https://sandbox-rest.avatax.com';


const taxDocument = {
    type: 'SalesInvoice',
    companyCode: 'abc123',
    date: '2017-04-12',
    customerCode: 'ABC',
    purchaseOrderNo: '2017-04-12-001',
    addresses: {
      SingleLocation: {
        line1: '123 Main Street',
        city: 'Irvine',
        region: 'CA',
        country: 'US',
        postalCode: '92615'
      }
    },
    lines: [
      {
        number: '1',
        quantity: 1,
        amount: 100,
        taxCode: 'PS081282',
        itemCode: 'Y0001',
        description: 'Yarn'
      }
    ],
    commit: true,
    currencyCode: 'USD',
    description: 'Yarn'
  }


describe('Creating new transactions', () => {
   
      nock(baseUrl)
        .post('/api/v2/transactions/create', transactionRequest)
        .reply(201, transactionResponse);
    });
    
    
describe('Adjusting existing transactions', () =>  { 
   
         nock(baseUrl)
            .post(
              `/api/v2/companies/${companyCode}/transactions/${transactionCode}/adjust`,
              adjustTransactionRequest
            )
            .reply(200, adjustTransactionResponse);
        });
    
describe('Voiding existing transactions', () => {
     
              nock(baseUrl)
                .post(
                  `/api/v2/companies/${companyCode}/transactions/${transactionCode}/void`,
                  voidTransactionRequest
                )
                .reply(200, voidTransactionResponse);
            })     