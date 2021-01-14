class Roof {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      push();
      rectMode(CENTER)
      fill("brown");
      rect(this.position.x,this.position.y, this.width, this.height);
      pop();
    }
  };