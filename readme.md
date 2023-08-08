# SSR practices

- [React Server APIs for Node.js Streams](https://react.dev/reference/react-dom/server#server-apis-for-nodejs-streams)

  - `renderToPipeableStream` renders a React tree to a pipeable Node.js Stream.
  - `renderToStaticNodeStream` renders a non-interactive React tree to a Node.js Readable Stream.

- [Node.js Streams?](https://nodejs.org/api/stream.html#stream)

  - A stream is an abstract interface for working with streaming data in Node.js.
  - The `node:stream` module provides an API for implementing the stream interface.
  - There are many stream objects provided by Node.js. For instance, `a request to an HTTP server` and `process.stdout` are both stream instances.
  - Streams can be readable, writable, or both. All streams are instance of EventEmitter.

- [The HTTP interface in Node.js](https://nodejs.org/api/http.html#http) are designed to support many features of the protocol which have been traditionally difficult to use. **In particular, large, possibly chunk-encoded, messages.** The interface is careful to never buffer entire requests or responses, _so the user is able to stream data_.
  - In order to support the full spectrum of possible HTTP applications, the Node.js HTTP API is very low-level. It deals with stream handling and message parsing only.
