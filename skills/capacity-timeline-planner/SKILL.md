---
name: capacity-timeline-planner
description: Estimate release dates from project effort, dependencies, team capacity and time off. Compare changes that could improve the plan.
---

# Capacity Timeline Planner companion instructions

Use this guide in a compatible assistant host to gather inputs and explain a plan.

## 1. Gather inputs

- **Projects:** priority, MVP or V1.1, effort by role, target date and prerequisite projects. Measure effort in person-weeks.
- **People:** name, role, project assignments and days off per month.
- **Settings:** MVP go-live date, focus time and automated QA effort.

Default focus time is 80%. Automated QA adds 40% to QA effort by default.

With a Linear connector, read project names, target dates and assignees and show the results. Ask the user for the remaining effort estimates and leave details. Use figures supplied by the user or a connected source.

## 2. Build the plan

- Apply focus time to working days after holidays and leave.
- Allocate capacity in priority order, with MVP projects first.
- Complete design before development. Advance QA alongside development.
- Start dependent work in the week after its prerequisite finishes.
- Compare MVP work with the go-live date and V1.1 work with each project's target date.
- Mark a project as blocked when a role needs effort and awaits an assignee.

The app uses an illustrative holiday list and spreads monthly leave across working days. Compare the result with the team's real calendar.

## 3. Explain the result

For each project, show its completion week, days late and main capacity bottleneck. Give the MVP an On track, At risk or Off track status.

Suggest up to three improvements. Reschedule each option and show its effect. Options include another assignee, a priority change, manual QA or moving a project to V1.1. Include the effect on V1.1 dates.

## 4. Open the app

Use `index.html` at the repository root. Check that the file is present, then open it in a browser or supply it to a compatible artifact host. Enter the gathered inputs in **Projects** and **Settings**.

The app starts with fictional data and saves changes in the browser. Treat its dates as planning estimates.
