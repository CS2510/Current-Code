class LaserController extends Component {
    theta = 0 
    speed = 20
    update() {
        this.transform.position.x += Time.deltaTime * this.speed * Math.cos(this.theta)
        this.transform.position.y += Time.deltaTime * this.speed * Math.sin(this.theta)

        if (this.transform.position.y < 50) {
            this.gameObject.destroy()
        }

        //Collision Check
       
        let myPosition = this.transform.position
        let enemyGameObjects = GameObject.findGameObjectsWithTag("good").filter(go=>go.tags.includes("minion"))
        for (const enemyGameObject of enemyGameObjects) {
            let enemyPosition = enemyGameObject.transform.position
            let distance = myPosition.minus(enemyPosition).magnitude
            if (distance < 20) {
                this.gameObject.destroy()
                enemyGameObject.destroy()
            }
        }

    }
}