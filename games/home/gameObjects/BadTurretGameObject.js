class BadTurretGameObject extends GameObject{
    constructor(){
        super("BadTurretGameObject")
        this.addComponent(new Polygon(), {fillStyle: "darkred", points:Assets.triangle})
        this.addComponent(new BadTurretController())
        this.transform.scale = new Vector2(20, 10)
    }
}