class Hero{
    constructor(x,y,width,height){
        var options = {
            isStatic:false
        }
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y
        this.body=Bodies.rectangle(x,y,this.width,this.height,options);
        this.image=loadImage("Superhero-01.png")
        World.add(world,this.body);
    }
    display(){
      push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
        pop();
    }
}