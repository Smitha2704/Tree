class Mango{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y, 1200, 50,{isStatic:true});
        this.width = 30;
        this.height = 30;
        this.image = loadImage("Plucking mangoes/mango.png")
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}