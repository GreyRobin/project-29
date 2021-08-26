class Link{
    constructor(nlink,pointA){
        this.nlink = nlink
  const group = Body.nextGroup(true);
  const rects = Composites.stack(100, 100, this.nlink, 1, 5, 5, function(x, y) {
      return Bodies.rectangle(x, y, 30, 5, { collisionFilter: { group: group } });
  });
      
  this.pointA = pointA;
  this.body = Composites.chain(rects, 0.1, 0, -0.6, 0, {stiffness: 0.1, length: 0.1, render: {type: 'line'}});
      
  World.add(engine.world, this.body);
  
      
    Composite.add(rects, Constraint.create({
    pointA: this.pointA,
    bodyB: rects.bodies[0],
    pointB: {x: -25, y: 0},
    length:10,
    stiffness: 0.1
  }));
    }
}