# Capacity Timeline Planner

Explore how team capacity, project order and time off affect a release date.

![Capacity Timeline Planner preview](docs/preview.png)

**Status: working local planning demo.** Enter your own inputs and compare scenarios.

## Try it

1. Download this repository and open `index.html` in your browser.
2. In **Projects**, enter effort, dependencies and release groups.
3. In **Settings**, enter people, roles, monthly leave, focus time and planning dates.
4. Review the timeline and bottlenecks. Try a suggested change and compare the result.

The starting team and projects are fictional. Changes are saved in this browser.

## Planning rules

- Effort is measured in person-weeks. Results show the week when work finishes.
- Design comes before development. QA progresses alongside development.
- Dependent projects start in the week after their prerequisite finishes.
- Higher-priority projects receive capacity first. MVP work comes before V1.1.
- Monthly leave is spread across the working days in that month.
- The example holiday list includes December 24, 25, 26 and 31, plus January 1.

## Limitations and testing

- Dates are estimates based on your inputs and the planning rules. Compare them with your team's real calendar.
- Review dependency cycles, prerequisite projects and effort estimates before using a plan.
- Project data is entered manually. The [companion instructions](skills/capacity-timeline-planner/SKILL.md) can help an assistant gather inputs from a connected account.
- Four automated tests pass for scheduling, shared capacity, dependencies, assignments and leave.
- Broader browser, mobile and complex-project checks remain planned.

See [testing details](docs/validation.md) and a [small example plan](examples/capacity-timeline-planner.json).

## Run the tests

With Node.js 20 or newer, run:

```sh
node --test tests/app.test.cjs
```

## About this copy

This app comes from PM Toolkit. See [origin and license](ORIGIN.md). Google Fonts loads when internet access is available; system fonts provide a fallback.
