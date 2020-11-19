class paper
{
    constructor(x,y,r)
    {
        var option = {
                       restitution:0.3,
                       friction:0.5,
                       density:1.5  }
         
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x , this.y, this.r/2,option)
        World.add(world,this.body)
        this.image2 = loadImage("sprites/paper.png")            
    }

    appear()
    {
       var paperPos = this.body.position

       push()
       translate(paperPos.x,paperPos.y)
       imageMode(CENTER) 
       strokeWeight(3)
       fill(255,0,255)
       image(this.image2,0,0,this.r,this.r)
       pop();
   
    }
}