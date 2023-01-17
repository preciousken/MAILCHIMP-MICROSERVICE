require('dotenv').config();
var request = require('superagent');

const Signup = (req, res)=> {
 request
     .post('https://' + process.env.mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + process.env.listUniqueId + '/members/')
     .set('Content-Type', 'application/json;charset=utf-8')
     .set('Authorization', 'Basic ' + new  Buffer('any:' + process.env.mailchimpApiKey ).toString('base64'))
     .send({
       'email_address': req.body.email,
       'status': 'subscribed',
       'merge_fields': {
         'FNAME': req.body.firstName,
         'LNAME': req.body.lastName
       }
     })
         .end(function(err, response) {
           if (response) {
             res.send('Signed Up!');
           } else {
             res.send('Sign Up Failed :(');
           }
           if(err){
            res.send(err)
           }
       })
      }

      module.exports = {Signup}