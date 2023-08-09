# SSR practices

### Stream?

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

### Babel preset vs plugin?

- [Presets are just a collection of plugins.](https://stackoverflow.com/a/45943890/9781499)

### 어떻게 index.js에서 .jsx파일을 가져올 수 있나?

- chatgpt는 `esm` 을 사용하는 방법을 알려주었고 [stack overflow](https://stackoverflow.com/questions/73200289/importing-jsx-with-esm-dynamic-imports-in-node-js)에서는 `node-loader/babel` 을 사용해 런타임에 어떻게 바꿔주는 방법을 알려줬는데, 둘 다 성공적이지 않았다. 에러 메시지들로 미루어보아 es-module과 commonjs 관련된 문제들이 존재했던 것 같았다.
- 도저히 가져올 수 없어서 index.js와 App.jsx를 바벨로 빌드하면서, 컴포넌트는 js파일로 트랜스파일링 함과 동시에 index.js에서 임포트하는 구문의 확장자 `App.jsx`를 바벨 플러그인을 사용해 `App.js` 로 바꿔주었다.
- 확장자 변경에 사용된 플러그인은 `babel-plugin-replace-import-extension` 이다.
