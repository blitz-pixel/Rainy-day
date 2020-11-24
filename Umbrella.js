class umbrella{
    constructor(x,y){
        var options ={
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,10,10,options);
        this.width = 300;
        this.height = 300;
        this.image = loadImage("images/WalkingFrame/walking_1.png")

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y)
        imageMode(CENTER);
        fill("brown");
        //ellipse(pos.x,pos.y,this.radius);
        image(this.image,0,0,this.width,this.height);
        pop();
       
    }
}
