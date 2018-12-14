# Node App Template

You require only remove unnecessary code modules.

## Tools:

- Node.js 10.13
- yarn 1.12.3
- TypeScript 3.3
- TS-Lint
- typeorm 0.2.9 (any dbms + migrations)
- ts-typed-events as strongly typed event emitters
- ts-node-dev for autoreload while developing
- node-dev for autoreload in production (this also allows autoreload of config files) 
- Use decko's @memoize facility 
- @machinomy/logger
- coveralls

### Testing

- jest 23.6.0
- newman for testing REST services based on Postman 6.5.2 files

Hint: Use BigInt from ES instead of BigNumber. Node 10.4+ & Chrome 67+ supports it.

Hint: Do "yarn global add yarn-completions" for yarn run completions (https://github.com/mklabs/yarn-completions)

Hint: Develop with yarn start-dev, run in production with yarn start


### Databases

To use Postgres instead of SQLite just rename ormconfig.json to ormconfig.sqlite.json and ormconfig.postgres.json to ormconfig.json
