class GoodMinionGameObject extends GameObject{
    constructor(){
        super("GoodMinionGameObject", ["good", "minion"])
        this.addComponent(new Polygon(), {fillStyle: "green", points:Assets.triangle})
        this.addComponent(new GoodMinionController())
        this.transform.scale = new Vector2(10, 10)
    }
}