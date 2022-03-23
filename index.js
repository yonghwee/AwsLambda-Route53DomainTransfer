const aws = require("aws-sdk");
const route53domains = new aws.Route53Domains();

const awsAccountId = 'TRANSFER_TO_AWS_ACCOUNT_ID';
const domainToTransfer = 'domainToBeTransferred.com';
const domainTransferCode = 'DomainTransferPassword';
const role = 'accept'; // 'transfer' or 'accept'

exports.handler = async (event, context, callback) => {  
  if (role == 'transfer') {
    await route53domains.transferDomainToAnotherAwsAccount({
      AccountId: awsAccountId,
      DomainName: domainToTransfer
    }, async function (err, data) {
      if (err) {
        console.log('ERROR');
        console.log(err, err.stack);
      } else {
        console.log('SUCCESS');
        console.log(data);
      }
    });
    
  } else {
    await route53domains.acceptDomainTransferFromAnotherAwsAccount({
      DomainName: domainToTransfer,
      Password: domainTransferCode
    }, async function (err, data) {
      if (err) {
        console.log('ERROR');
        console.log(err, err.stack);
      } else {
        console.log('SUCCESS');
        console.log(data);
      }
    });
  }
  
  callback(null, 'success msg');
};
