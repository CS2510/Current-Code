class MainScene extends Scene{
    constructor(){
        super("beige")
        
        this.instantiate(new MainGameObject(), new Vector2(0, 0))

        this.instantiate(new TalkerGameObject(), new Vector2(100, 100))
        this.instantiate(new TalkerGameObject(), new Vector2(-168, -40))

       this.instantiate(new LakeGameObject(), new Vector2(-300, -50))
       this.instantiate(new DockGameObject(), new Vector2(-225, -40))

        const mainControllerGameObject = new GameObject("MainControllerGameObject")
        mainControllerGameObject.addComponent(new MainController())
        this.instantiate(mainControllerGameObject, new Vector2(100, 100))
        
    }
}