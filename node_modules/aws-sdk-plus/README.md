# aws-sdk-plus

AWS SDK is a second layer package built on top of [aws-sdk](https://www.npmjs.com/package/aws-sdk). It exposes several common helper functions to make the sdk easier to use. The package exports each method as it's own module in a function-per-file style.

## Methods

Each method could be imported as its own module. For example, this is how you could use the method, `example`:

```javascript
import example from "aws-sdk-plus/dist/example";

example();
```

All methods will also be available from the root module, if you choose to install the whole package:

```javascript
import { example } from "aws-sdk-plus";

example();
```

### createAPIGatewayProxyHandler

Takes in a method and converts it into an `APIGatewayProxyHandler`. It handles parsing the incoming event body, serializing the output, attaching a reasonable status code, and adding a CORs header. Use the environment variable `HOST` to specify a specific origin to allow, otherwise it will use the wildcard, `"*"`.

```javascript
import createAPIGatewayProxyHandler from "aws-sdk-plus/dist/createAPIGatewayProxyHandler";

const lambda = ({ id }) => ({ user: { id, name: 'David Vargas' } });

export const handler = createAPIGatewayProxyHandler(lambda);
```

This then allows you to export the type of the inner `lambda` function for strict front end typing in request libraries like `axios`.
