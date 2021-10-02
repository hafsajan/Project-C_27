class bob {
	constructor(x, y, r) {
		var options = {
			isStatic: false,
			restitution: 1,
			friction: 0,
			density: 0.8

		}

        this.r=r;
		this.body = Bodies.circle(this.x, this.y, this.r / 2, options)
		World.add(world, this.body);

	}
	display() {
		push()
		ellipseMode(RADIUS);
		fill(255, 0, 255)
		ellipse(this.body.position.x, this.body.position.y, 25, 25);
		pop()

	}

}