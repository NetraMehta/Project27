class Bob{
    constructor(x, y){
        var options = {
            restitution:0.3,
            density:1.2,
            friction:0
        }

        this.body = Bodies.circle(x, y, 50, options);
        this.x = x;
        this.y = y;
        this.r = this.radius;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        strokeWeight(4);
        stroke("red");
        fill("orange")
        rectMode(CENTER);
        ellipse(0, 0, 100, 100);
        pop();
    }
}