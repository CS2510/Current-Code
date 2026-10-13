class MainGameObject extends GameObject{
    constructor(){
        super("MainGameObject", [], "foreground")
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {fillStyle:"orange", points:Assets.triangle})
        this.transform.scale = new Vector2(10, 10)
    }
}