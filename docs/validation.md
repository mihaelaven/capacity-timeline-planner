# Testing and limitations

## Checked

Four automated tests pass for basic scheduling, shared capacity, dependency order, role assignments and monthly leave. Basic browser checks cover the fictional team and planning controls.

The extraction checks also cover JavaScript syntax, bundled files and local documentation links.

## Next checks

- Larger plans and complex dependency graphs.
- More browsers and mobile layouts.
- Comparison with real team calendars and delivery results.

## Before using real data

Start with fictional data and a test destination. Review owners, dates, source links and proposed writes. Keep a separate copy of important results.

## Repeat the automated checks

Use Node.js 20 or newer:

```sh
node --test tests/app.test.cjs
```

These checks run locally and in GitHub Actions. They use bundled examples and local code.
