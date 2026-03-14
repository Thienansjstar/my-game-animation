class Walk {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.width = 100;
		this.height = 100;
	}
    update() {
        this.x += 1;
        if (this.x > 800) this.x = 0;
    }
    draw(ctx, assetManager) {
        ctx.drawImage(ASSET_MANAGER.getAsset("./walk.png"), 0,0);
    }
}   