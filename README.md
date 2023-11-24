# devfest-mutation-testing
Mutation testing demo for GDSC UCC DevFest 2023

## Setup

Clone this repo:

```bash
gh repo clone eoin-obrien/devfest-mutation-testing
cd devfest-mutation-testing
```

Install dependencies:

```bash
npm install
```

Run the tests:

```bash
npm test
```

## Mutation Testing

Run mutation testing on the whole project:

```bash
npm run test:mutation
```

Run mutation testing on a single file:

```bash
npm run test:mutation -- --findRelatedTests src/sum.js
```

Run mutation testing on a single revision of the triangle type tests:

```bash
npm run test:mutation -- --mutate src/triangle-type/index.js --ignorePatterns 'src/**/*.test.js','!src/**/pass-4.test.js'
```

View the report:

```bash
open reports/mutation/mutation.html
```

## Resources

- [Jest](https://jestjs.io/)
- [Stryker Mutator](https://stryker-mutator.io/)

## License

This project is licensed under the GNU GPLv3 License - see the [LICENSE](LICENSE) file for details.
