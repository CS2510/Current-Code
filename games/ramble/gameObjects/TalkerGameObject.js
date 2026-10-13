class TalkerGameObject extends GameObject{
    constructor(){
        super("TalkingGameObject", [], "foreground")
        this.addComponent(new TalkerController())
        this.addComponent(new Polygon(), {fillStyle:"red", points:Assets.triangle})
        this.transform.scale = new Vector2(10, 10)
    }
}