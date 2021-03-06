class Box {
    constructor(x, y, width, height, colour) {
        var options = {
            restitution:0.3,
            friction:1,
            density:6,
            isStatic: false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.colour = colour;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.colour);
        rect(0, 0, this.width, this.height);
        pop();
      }
}