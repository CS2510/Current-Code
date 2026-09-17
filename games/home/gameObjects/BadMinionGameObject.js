class BadMinionGameObject extends GameObject{
    constructor(){
        super("BadMinionGameObject")
        this.addComponent(new Polygon(), {fillStyle: "red", points:Assets.triangle})
        this.addComponent(new BadMinionController())
        this.transform.scale = new Vector2(10, 10)
    }
}