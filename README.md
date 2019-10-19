# TypeScript with AWS Lambda Starter Project

This is a sample project that demonstrates AWS SAM applications in TypeScript.

## Prerequisites
1. [AWS SAM CLI](https://aws.amazon.com/serverless/sam/)
2. [NodeJs](https://nodejs.org/en/) (or optionally)
3. [NVM](https://github.com/nvm-sh/nvm)

## Running locally

* (Optional) Setup the correct version of Node
```bash
▶ nvm use
Found '/home/~/~/js/projects/aws-sam-typescript-boilerplate/.nvmrc' with version <v11.14.0>
Now using node v11.14.0 (npm v6.7.0)
```
* Pull down dependencies
```bash
▶ npm i
...
audited 881753 packages in 6.257s
found 0 vulnerabilities
```
* Build project
```bash
▶ npm run build
> typescript-starter-project@1.0.0 build /home/~/~/js/projects/debug-hello-world
> NODE_ENV=${NODE_ENV:-development} webpack
...
[./src/index.ts] 1.13 KiB {index/index} [built]
```
* Invoke Lambda using SAM
```bash
▶ echo '{"name": "World"}' | sam local invoke Hello
Reading invoke payload from stdin (you can also pass it from file with --event)
...
REPORT RequestId: bbc24a0c-3dfe-1105-ad85-41a39777a59f	Duration: 11.61 ms	Billed Duration: 100 ms	Memory Size: 128 MB	Max Memory Used: 41 MB	
{"body":{"message":"Hello World"},"statusCode":200}
```

## Running Tests
[Jest](https://jestjs.io/) is used as the test framework.
```bash
▶ npm t
...
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.131s
Ran all test suites.
```
## Questions or Issues?
Well then simply create an issue 😀. This primarily a hobby project but will strive to help.
