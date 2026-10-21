class GrassGameObject extends GameObject{
    constructor(){
        super("GrassGameObject", [], "background")
        this.addComponent(new Polygon(), {fillStyle: "green", points:Assets.triangle})
        this.transform.scale = new Vector2(2.5, 5)
    }
}