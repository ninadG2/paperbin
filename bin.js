class bin
{
    constructor(x,y,widtha,heighta)
    {   
        var optiona = {isStatic:true}

        this.body = Bodies.rectangle(x,y,widtha,heighta,optiona)
        World.add(world, this.body)
        this.width = widtha;
        this.height = heighta;
        this.image1 = loadImage("sprites/dustbingreen.png")
    
      
    }
    


appear()
{
    var pos = this.body.position;
    push()
          if(this.width === 200)
          {
            imageMode(CENTER);
            image(this.image1,pos.x, pos.y, this.width , 200);  
            
          }else 
          {
            noStroke();
            fill("grey");
            rectMode(CENTER); 
            rect(pos.x, pos.y, this.width, this.height);
          }
         
        pop();
}

}