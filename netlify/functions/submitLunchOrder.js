exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { date, username, lunchChoice } = JSON.parse(event.body);
    console.log('Order received:', { date, username, lunchChoice });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Order submitted successfully' }),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to process submission' }) };
  }
};