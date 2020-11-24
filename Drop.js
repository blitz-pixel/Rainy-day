class drop{

    constructor(x,y){
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,10);
        this.radius = 7;
        World.add(world,this.body); 
        
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("blue"); 
        ellipse(0,0,this.radius);
        pop();    
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x: random(0,490) , y : random(0,200)})
            } 
        }
    }