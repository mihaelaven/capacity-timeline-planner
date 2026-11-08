// Run with: node --test tests/toolkit.test.cjs
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const json = p => JSON.parse(read(p));
const between = (text, a, b) => {
  const start = text.indexOf(a), end = text.indexOf(b, start + a.length);
  assert.ok(start >= 0 && end > start, `Missing source boundary: ${a} / ${b}`);
  return text.slice(start, end);
};

function planner(state) {
  const source = read('index.html');
  const ctx = vm.createContext({state});
  // Evaluate the actual scheduling helpers without rendering or duplicating the algorithm.
  vm.runInContext(between(source, 'const EPS =', '// Sample team and projects.') +
    'const personById = id => state.people.find(x => x.id === id);\n' +
    between(source, 'function startMs()', 'function topEntry('), ctx);
  return vm.runInContext('simulate()', ctx);
}
test('one person-week finishes in the first week at full capacity', () => {
  assert.equal(planner(json('examples/capacity-timeline-planner.json')).res.export.finish, 0);
});
test('shared person is not double-booked and lower priority work waits', () => {
  const state = json('examples/capacity-timeline-planner.json');
  state.projects.push({...state.projects[0], id:'second'});
  const actual = planner(state);
  assert.equal(actual.res.export.finish, 0);
  assert.equal(actual.res.second.finish, 1);
  assert.ok(actual.used.fe1.every((used, w) => used <= actual.cap.fe1[w] + 1e-6));
});
test('dependencies and monthly leave delay completion', () => {
  const state = json('examples/capacity-timeline-planner.json');
  state.people.push({id:'fe2', name:'Maya', role:'fe', off:{}});
  state.projects.push({...state.projects[0], id:'second', after:'export', assign:{fe:['fe2']}});
  assert.equal(planner(state).res.second.finish, 1);
  state.people[0].off = {'2026-11':5};
  assert.equal(planner(state).res.export.finish, 1);
});
test('unassigned work stays blocked instead of receiving invented capacity', () => {
  const state = json('examples/capacity-timeline-planner.json');
  state.projects[0].assign.fe = [];
  const actual = planner(state).res.export;
  assert.equal(actual.finish, null);
  assert.ok(actual.needs.has('fe'));
});

