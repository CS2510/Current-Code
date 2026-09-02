class UpdateComponent extends Component {
    position

    start(){
        this.position = new Vector2(50,50)
    }
    update() {
        //Check to see if the right arrow key is down.
        //If it is, move our character right
        if (Input.keysDown.includes("ArrowRight"))
            this.position.x = this.position.x + 1

        //Check to see if the left arrow key is down.
        //If it is, move our character left
        if (Input.keysDown.includes("ArrowLeft"))
            this.position.x = this.position.x - 1

        //Check to see if the up arrow key is down.
        //If it is, move our character up
        if (Input.keysDown.includes("ArrowUp"))
            this.position.y = this.position.y - 1

        //Check to see if the down arrow key is down.
        //If it is, move our character down
        if (Input.keysDown.includes("ArrowDown"))
            this.position.y = this.position.y + 1
    }
}