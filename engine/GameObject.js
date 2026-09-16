class GameObject{
    components = []

    markForDestroy = false

<<<<<<< HEAD
    name

=======
>>>>>>> 00ee758ffd3972b456c1cc41b7babaceebb57ceb
    get transform(){
        return this.components[0];
    }

    constructor(name){
        this.addComponent(new Transform())
        this.name = name
    }

    addComponent(component, parameters){
        Object.assign(component, parameters)
        this.components.push(component)
        component.gameObject = this
    }

    start(){
        for(const component of this.components){
            component.start?.()
        }

    }

    update(){
        for(const component of this.components){
            component.update?.()
        }

    }

    draw(ctx){
        for(const component of this.components){
            component.draw?.(ctx)
        }
    }

    destroy(){
        this.markForDestroy = true
    }
<<<<<<< HEAD

    static find(name){
        //return Engine.currentScene.gameObjects.find(function(go){return go.name == name})
        return Engine.currentScene.gameObjects.find(go=>go.name == name )
    }
=======
>>>>>>> 00ee758ffd3972b456c1cc41b7babaceebb57ceb
}