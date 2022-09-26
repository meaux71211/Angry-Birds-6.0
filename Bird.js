class Bird extends Baseclass {
    constructor(x,y) {
        super(x,y, 50, 50);
        this.image = loadImage("bird.png");
        this.smokeImage = loadImage("smoke.png");
        this.trajectory = [];
     
    }
    display() {
     super.display();
    //  this.body.position.x=mouseX;
    //  this.body.position.y=mouseY;
    if(this.body.velocity.x>10&&this.body.position.x>200){
        var position = [this.body.position.x,this.body.position.y];
    this.trajectory.push(position);
    }
    
    for(var i = 0; i < this.trajectory.length;i++){
        image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1]);
    }
    }
}