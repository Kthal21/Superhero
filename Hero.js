class Hero{

    constructor(x,y,width,height){
    
    var options={
    
    density:4,
    frictionAir:0.03
    
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);

   // this.image= loadImage ("sprites/Superhero-01.png");
    
    
    }
    display(){
    
    var pos= this.body.position
    
    rectMode(CENTER);
    
       fill("grey");
    
    ellipse(pos.x,pos.y,this.width,this.height);
   // image(this.image, 300, 400, this.width, this.height);
    
    
    }
    
    }







