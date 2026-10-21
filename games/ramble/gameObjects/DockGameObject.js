class DockGameObject extends GameObject{
    constructor(){
        super("DockGameObject", [], "midground")
        this.addComponent(new Polygon(), {fillStyle: "brown", points:Assets.rectangle})
        // this.addComponent(new DockController())
        this.transform.scale = new Vector2(50, 25)
    }
}