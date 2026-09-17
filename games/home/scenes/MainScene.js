class MainScene extends Scene{
    constructor(){
        super()
        
        this.instantiate(new GoodMinionGameObject(), new Vector2(125, 150), Math.PI/2)
        this.instantiate(new GoodMinionGameObject(), new Vector2(175, 200), Math.PI/2)
        this.instantiate(new GoodMinionGameObject(), new Vector2(125, 250), Math.PI/2)

        this.instantiate(new GoodTurretGameObject(), new Vector2(100, 200), Math.PI/2)
        
        this.instantiate(new BadMinionGameObject(), new Vector2(475, 150), -Math.PI/2)
        this.instantiate(new BadMinionGameObject(), new Vector2(425, 200), -Math.PI/2)
        this.instantiate(new BadMinionGameObject(), new Vector2(475, 250), -Math.PI/2)

        this.instantiate(new BadTurretGameObject(), new Vector2(500, 200), -Math.PI/2)
    }
}