class stone{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0.4,
            'density':5,
            'isStatic':false,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/stone.png");
        World.add(world, this.body);
      }
      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
       
        imageMode(CENTER);
        image(this.image, 80, 80, this.width, this.height);
        pop();
      }
}