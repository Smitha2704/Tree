class Ground{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y, 1200, 50,{isStatic:true});
        this.width = 2000;
        this.height = 50;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("brown");
        rect(0,0, this.width, this.height);
        pop();
    }
}