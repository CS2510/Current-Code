class LakeGameObject extends GameObject{
    constructor(){
        super("LakeGameObject", [], "midground")
        this.addComponent(new Polygon(), {fillStyle: "blue", points:Assets.lake})
        // this.addComponent(new LakeController())
        this.transform.scale = new Vector2(100, 100)
    }
}