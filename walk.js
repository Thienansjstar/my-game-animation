
class Walk {
	constructor(game) {
		this.x = 500;
		this.y = 500;
		this.width = 100;
		this.height = 100;
        this.game = game;
        this.Animator = new Animator(ASSET_MANAGER.getAsset("./Shuriken.png"), 0, 0, 32, 32, 6, 0.1);
        this.speed = 100;
	}
    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x > 1000) this.x = -100;
    }
    draw(ctx) {
        this.Animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);

    }
}   