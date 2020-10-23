class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke= loadImage("sprites/smoke.png");
    this.trajectory= [];   //Empty array
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    //TRACK THE BIRD - trajectory
    if(this.body.position.x>200 && this.body.velocity.x>10){
      this.trajectory.push([this.body.position.x,this.body.position.y]);
    }
    //DISPLAY THE SMOKE WHEREEVER THE BIRD GOES
    
    for (var i = 0; i < this.trajectory.length; i++) {
      image(this.smoke,this.trajectory[i][0],this.trajectory[i][1]);
    }
 
  }
}

/*
var i = 0; i < length; i = i + 1;

this.trajectory[0][0], this.trajectory[0][1]
this.trajectory[1][0], this.trajectory[1][1]
this.trajectory[2][0], this.trajectory[2][1]
.
.
.
.
this.trajectory[length-1][0], this.trajectory[length-1][1]
*/
