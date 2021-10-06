class Box {
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            density: 0.001,
            friction: 1
        }
        this.visibility = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("extra project 2 bowling pin.png");
        World.add(world, this.body);

    }
    display(color, border) {
        var pos = this.body.position;
        var angle = this.angle;
        push();
        if (this.body.speed < 15) {
            rectMode(CENTER);
            translate(pos.x, pos.y);
            rotate(angle);
            fill(color);
            stroke(border);
            strokeWeight(4);
            rect(0, 0, this.width, this.height);
            image(this.image,-25,-27,this.width,this.height);
            pop();
        } 
        if (this.body.speed >15) {
            push();
            World.remove(world, this.body);
            this.visibility = this.visibility - 1;
            tint(255, this.visibility);
            //score = score+1;
            pop();
        }
    }
}