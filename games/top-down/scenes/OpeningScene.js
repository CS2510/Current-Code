class OpeningScene extends Scene{
    constructor(){
        super("white")
        const openingText = new RectGameObject("Opening Text", [], "UI")
        openingText.addComponent(new TextLabel(), {text: "Move the Stuff", 
            textAlign: "center", 
            textBaseline: "middle", 
            font:"50px sans"})
        openingText.transform.anchorMin = new Vector2(.5, .25)
        openingText.transform.anchorMax = new Vector2(.5, .25)
        openingText.transform.offsetLowerRight = new Vector2(1, 1)
        openingText.transform.useLetterBoxing = true
        this.instantiate(openingText)

        const openingSceneControllerGameObject = new GameObject("Opening Scene Controller", [], "UI")
        openingSceneControllerGameObject.addComponent(new OpeningSceneController())
        this.instantiate(openingSceneControllerGameObject)
    }
}
