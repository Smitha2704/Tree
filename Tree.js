class Tree{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y, width,height,options);
        this.x=x;
        this.y = y;
        World.add(world,this.body);
        this.image = loadImage("Plucking mangoes/tree.png");

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos, pos-10);
        imageMode(CENTER);
        image(this.image, this.x, this.y, 450,500);
        pop();

        
    }
}