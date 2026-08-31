/* Please carefully review AcademicIntegrity.md found at the root of this project */

/**
 * Class that defines a 2D point
 * 
 * Compare to the Unity Vector2: https://docs.unity3d.com/6000.5/Documentation/ScriptReference/Vector2.html
 * Compare to the Unreal Vector2D: https://dev.epicgames.com/documentation/en-us/unreal-engine/python-api/class/Vector2D?application_version=4.27
 * Compare to the Godot Vector2: https://docs.godotengine.org/en/4.4/classes/class_vector2.html
 */
class Vector2{
    /**
     * @type{Number} The x component of the vector
     */
    x

    /**
     * @type{Number} The y component of the vector
     */
    y

    
    /**
     * 
     * @param {Number} x The x value of the new vector
     * @param {Number} y The y value of the new vector
     * 
     * If you are coming from a python background, a constructor is similar to __init__
     */
    constructor(x, y){
        //Again, coming from a python background, you can compare
        //the this keyword to the self keyword.

        //Assign the incoming values to the new instance
        this.x = x
        this.y = y
    }
}