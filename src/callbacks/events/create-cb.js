export const eventCreatedCB = (event) => ({
  statusCode: 200,
  body: {
    message: 'Event created',
    event: event
  }
});
