const { Engine, Render, Runner, World, Bodies } = Matter;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 800,
    height: 600
  }
});

Render.run(render);
Runner.run(Runner.create(), engine);

// (位置x axis, 位置y axis, 長, 寬)
const shape = Bodies.rectangle(200, 200, 50, 50, {
  isStatic: true  //物件不會往下掉
});
World.add(world, shape);

// https://github.com/liabru/matter-js/wiki/Getting-started
