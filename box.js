class Box{
    constructor(x,y,width,height){
      var options ={ 
          isStatic: false,
          restitution:0.1,
          density:20,
          friction:1.0
    }
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
    
      World.add(world,this.body);
      this.width = width;
      this.height = height;
    }
    display(){
        push();
        var pos= this.body.position
        var angle= this.body.angle
        translate(pos.x,pos.y)
        rotate(angle)
        fill("red")
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
    }
  
}