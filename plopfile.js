module.exports = function(plop) {
  plop.setGenerator('day', {
    description: 'new day',
    prompts: [
      {
        type: 'number',
        name: 'day',
        message: 'Day number',
        default: () => Math.min(Math.max(1, new Date().getDate()), 25),
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/day{{day}}/day{{day}}.js',
        templateFile: '.plop/day.js.hbs',
      },
      {
        type: 'add',
        path: 'src/day{{day}}/day{{day}}.test.js',
        templateFile: '.plop/day.test.js.hbs',
      },
      {
        type: 'add',
        path: 'src/day{{day}}/input.txt',
        templateFile: '.plop/input.txt.hbs',
      },
    ],
  });
};
