export default class HttpClientError extends Error {
  constructor(response: Response, details: string) {
    const message = `${response.status} ${response.statusText}: ${details}`;
    super(message);
  }
}
