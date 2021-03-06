class Box_emty extends Sprite {
    constructor(config) {
        super(config);
        this.img = images.box_emty;
    }

    draw() {
        super.draw();
        if (!this.isInCamera()){
            return;
        }
        push();
        imageMode(CENTER);
        translate(this.pos.x, this.pos.y);
        rotate(this.degree);
        scale(this.size);
        image(this.img, 0, 0);
        pop();
    }
}