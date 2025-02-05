class Sling {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10

        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display() {
        push();
        fill("brown");
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB,this.sling.pointB);
        pop();
    }

}