We have a script that will commit our changes with a generic message of "Updates"

Commit - Update 1:
Created the "pub" script

Commit - Update 2:
We copy paste every code we want to share among services.
Dirs:
/errors
/middlewares

We reexport them from index.ts (our main file), so we can use them like:
import { ErrorSpecific } from '@sfticketing/common';

We install dependencies needed by those files:

- express
- express-validator
- cookie-session
- jsonwebtoken
- @types/cookie-session
- @types/express
- @types/jsonwebtoken

Commit - Update 3:
Take out ./ from "files" [] prop

Commit - Update 4:
Console log the error not catch in the if (err instance of Error), in case we have a scenario we did not imagine - Give us info about that unexpected error

Commit - Update 5:
Uncomment console log of the error
