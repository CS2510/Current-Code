class GoodTurretGameObject extends GameObject{
    constructor(){
        super("GoodTurretGameObject")
        this.addComponent(new Polygon(), {fillStyle: "darkgreen", points:Assets.triangle})
        this.addComponent(new GoodTurretController())
        this.transform.scale = new Vector2(20, 10)
    }
}