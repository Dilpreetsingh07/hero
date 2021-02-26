class Monster{
    constructor(x,y,width,height){
      var options ={ isStatic: true}
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
     this.image=loadImage("Monster-01.png")
      World.add(world,this.body);
      this.width = width;
      this.height = height;
    }
    display()
    {
        push();
        fill("red")
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y,this.width, this.height);
        pop();
    }
  
}