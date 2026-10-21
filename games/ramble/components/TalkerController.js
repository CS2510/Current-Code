class TalkerController extends Component {
    textLabelComponent
    start() {
        let dialogGameObject = new GameObject("DialogGameObject")
        this.textLabelComponent = new TextLabel()
        dialogGameObject.addComponent(this.textLabelComponent, { text: "Blah, blah, blah", font: "5px Arial" })

        instantiate(dialogGameObject, new Vector2(0, -1))

        dialogGameObject.transform.setParent(this.gameObject.transform)

    }
    update() {

        const mainGameObject = GameObject.find("MainGameObject")
        const distance = mainGameObject.transform.position.minus(this.transform.position).magnitude

        const near = 50

        const far = 100

        if(distance > far){
            this.textLabelComponent.fillStyle = `rgba(0, 0, 0, 0)`
        }
        else if(distance < near)
            this.textLabelComponent.fillStyle = `rgba(0, 0, 0, 1)`
        else{
            this.textLabelComponent.fillStyle = `rgba(0, 0, 0, ${1-(distance - near)/(far-near)})`
        }


    }
}