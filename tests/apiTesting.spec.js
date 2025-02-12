const { test, expect } = require('@playwright/test');

test('API Testing with Playwright', async ({ request }) => {
  // GET Request Example
  const getResponse = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(getResponse.ok()).toBeTruthy(); // Assert the response status is 200
  const getResponseBody = await getResponse.json(); // Parse JSON response
  console.log('GET Response:', getResponseBody);

  expect(getResponseBody.id).toBe(1); // Assert the ID is as expected

  // POST Request Example
  const postResponse = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      title: 'foo',
      body: 'bar',
      userId: 1,
    },
  });
  expect(postResponse.ok()).toBeTruthy(); // Assert the response status is 201
  const postResponseBody = await postResponse.json(); // Parse JSON response
  console.log('POST Response:', postResponseBody);

  expect(postResponseBody.title).toBe('foo'); // Assert the title in the response
  expect(postResponseBody.body).toBe('bar');  // Assert the body in the response
  expect(postResponseBody.userId).toBe(1);    // Assert the userId in the response
});
