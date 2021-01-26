class slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
            
        }
        this.pointB=pointB
        this.slingshot= Constraint.create(options);
        World.add(world, this.slingshot);
    }

fly(){
this.slingshot.pointB=null


}
Launch(pointB){
    this.slingshot.pointB=pointB;
}
    display(){
        if(this.slingshot.bodyA){

        
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}