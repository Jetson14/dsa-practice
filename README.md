# DSA Practice

Data Structures & Algorithms problems solved in JavaScript, one folder per problem.

## Structure

Each problem gets its own folder:

```
ProblemName/
  solution.js       # the solution, exported as a named function
  solution.test.js  # tests using Node's built-in test runner
```

## Requirements

- Node.js 18+ (uses the built-in `node:test` runner, no extra dependencies)

## Running

Run all tests:

```
npm test
```

Run tests for a single problem:

```
node --test Twosum
```

Run a solution file directly (e.g. to console.log something while working on it):

```
node Twosum/solution.js
```

## Adding a new problem

1. Create a new folder named after the problem (e.g. `ValidParentheses/`).
2. Add `solution.js` exporting your function(s).
3. Add `solution.test.js` with a few test cases.
4. Run `npm test` to verify.
