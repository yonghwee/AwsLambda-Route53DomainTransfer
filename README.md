# Transfer domain from one AWS account to another.

Use this simple Lambda function to transfer domain easily between AWS accounts.


### To use
- Create this Lambda function in both originator and recipient account.
- Set IAM permission to write to CloudWatch, and route53domains permissions.
- In line 7, the originator should have role 'transfer' and recipient should have role 'accept'.
- Deploy then run under Test for originator first, then run in recipient.
- Domain should be transferred.
