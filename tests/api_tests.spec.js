const { test, expect } = require('@playwright/test');
const { request } = require('http');

test('API POST Request', async({request}) =>{   //To run the particular only use test.only

    const postResponse = await request.post('https://reqres.in/api/users', {
        data:{
            "name": "Minura",
            "job": "Intern"
        }
    });

    expect(postResponse.status()).toBe(201);

    const postResponseBody = await postResponse.text();
  
    expect(postResponseBody).toContain('Minura');
  
  
  console.log(await postResponse.json());
  
})

test('API PUT Request', async({request}) =>{   //To run the particular only use test.only

    const putResponse = await request.put('https://reqres.in/api/users/2', {
        data:{
            "name": "Minura",
            "job": "Intern1"
        }
    });

    expect(putResponse.status()).toBe(200);

    const putResponseBody = await putResponse.text();
  
    expect(putResponseBody).toContain('Minura');
  
  
  console.log(await putResponse.json());
  
})

test('API GET Request', async ({ request }) => {    //APIRequestContext
  // GET Request Example
  const getResponse = await request.get('https://reqres.in/api/users/2');

  expect(getResponse.status()).toBe(200);

  const getResponseBody = await getResponse.text();

  expect(getResponseBody).toContain('Janet');

//   expect(getResponseBody).toContain('John');

console.log(await getResponse.json());

});

test('API DELETE Request', async ({ request }) => {    //APIRequestContext
    // GET Request Example
    const getResponse = await request.delete('https://reqres.in/api/users/2');
  
    expect(getResponse.status()).toBe(204);
    
  });
