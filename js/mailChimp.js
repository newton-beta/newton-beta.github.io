const button = document.getElementById('sendDataToMailChimp');

button.addEventListener('click', async _ => {
    console.log('Button Click');
  try {    
    const postURL = 'https://us18.api.mailchimp.com/3.0/lists/6381714fe8'; 
    const response = await fetch(postURL, {
      method: 'post',
      body: {"members": [
        {
                "email_address": "nishanth@surreal.company", 
                "status": "subscribed",
                "merge_fields": {
                    "FNAME": "foo",
                    "LNAME": "foo",
                    "ADDRESS": "Hyd",
                    "PHONE": "7032447444"
                },
                "tags": ["foo", "bar"]
            }
        ], "update_existing": true}
    });
    console.log('Completed!', response);
  } catch(err) {
    console.error(`Error: ${err}`);
  }
});