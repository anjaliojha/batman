class Umbrella {
    constructor (x,y){
        var options = {
            isStatic : true
        }
        this.umbrella = Bodies.cirlce(x,y,50,options)
        this.radius = 50
        World.add(world,this.rain)
    }
    display(){
        ellipseMode(CENTER)
    ellipse(this.umbrella.position.x,this.umbrella.position.y)
    }
    
}
