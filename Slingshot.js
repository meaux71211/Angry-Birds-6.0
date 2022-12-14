class Slingshot{
    constructor(body1,point2){
        var options = {
            bodyA:body1,
            pointB:point2,
            stiffness:0.04,
            length:10,
        }
        this.pointB = point2; 
        this.sling = Matter.Constraint.create(options);
        this.sling1 = loadImage("sling1.png");
        this.sling2 = loadImage("sling2.png");
        this.sling3 = loadImage("sling3.png");
        World.add(world, this.sling)
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        stroke(48,22,8);
        if(pointA.x<230){
            strokeWeight(7);
            line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
            line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
            image(this.sling3,pointA.x-30,pointA.y-10,15,30);

        }
        else{
            strokeWeight(3);
            line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
            line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
            image(this.sling3, pointA.x+25,pointA.y-10,15,30);
        }
       
        }

    }
}