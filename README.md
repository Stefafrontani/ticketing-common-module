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

Commit - Update 6:
Bring everything done in the nats-streaming-server project into the common module of the ticketing app. Some more code was added - TicketUpdated event for example.

Commit - Update 7:
Add the enum type for the status an order can have. This status will be used and updated by various services so we make this an enum type to be shared among those services.

Commit - Update 8:
Add the interface for the order:created and order:cancelled events. Each one inside its own file
Add these new channels as subjects in the subjects enum type, inside subjects.ts file
Re-export new files from index.ts

Commit - Update X - Stop counting here
Add version property to every event registered until now

Commit
Fix version in order cancelled event
