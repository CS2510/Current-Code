class MainController extends Component{
    start(){

        const r = ()=>Math.random()*2-1

        for(let i = 0;  i < 100; i++){
            instantiate(new GrassGameObject(), new Vector2(r()*100, r()*50).plus(this.transform.position))
        }
            
    }
    update(){
            
    }
}