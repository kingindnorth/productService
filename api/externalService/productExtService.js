const extApiCall = require('../../submodule/insta_util_submodule/external-service/externalApiCall');

const payload = {
    method: 'POST',
    url: "http://localhost:8001/login",
    headers: {
      'content-type': 'application/json'
    }
  };

  const body = {
    username: null,
    password: "sdk",
    otp:""
  }

  const validation = {
    apiName:"login",
    isActive: false
  }


  async function callExternalApi(payload, body, validation) {
    try {
        // Make the external API call
        const response = await extApiCall.extCall(payload, body, "", true, "",validation);

        // Log or handle the response as necessary
        console.log('API Response:', response);

        // Return the response if needed
        return response;
    } catch (error) {
        // Handle any error that occurs during the API call
        console.error('Error making API call:', error);
        throw error; // Rethrow the error to handle it further up the chain
    }
}

callExternalApi(payload, body, validation)
    .then(response => {
        // Do something with the response
        console.log(response)
    })
    .catch(err => {
        // Handle the error
        console.log(err)
    });
