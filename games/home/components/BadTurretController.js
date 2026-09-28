class BadTurretController extends Component {
    nextFire = 0
    start() {
        this.nextFire = Time.time + 1
    }
    update() {
        if (this.nextFire < Time.time) {
            this.nextFire = Time.time + 1
            let goodMinionGameObjects = GameObject.findGameObjectsWithTag("good").filter(go => go.tags.includes("minion"))

            let minDistance = Number.MAX_VALUE
            let minMinion
            for (const minion of goodMinionGameObjects) {
                let distance = minion.transform.position.minus(this.transform.position).magnitude
                if (distance < minDistance) {
                    minDistance = distance
                    minMinion = minion
                }
            }
            if (minMinion) {
                const offset = minMinion.transform.position.minus(this.transform.position)
                this.transform.rotation = Math.atan2(offset.y, offset.x)
                let laserGameObject = instantiate(new LaserGameObject(), this.transform.position.clone())
                laserGameObject.transform.scale = new Vector2(5, 5)
                laserGameObject.transform.rotation = this.transform.rotation
                laserGameObject.getComponent(LaserController).theta = this.transform.rotation
                laserGameObject.getComponent(LaserController).speed = 100
            }
        }

    }
}