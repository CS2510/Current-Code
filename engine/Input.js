// Please carefully review the rules about academic integrity found in the academicIntegrity.md file found at the root of this project.

/**
 * Input class for our game engine.
 * 
 * Games can query this class to see the state of the mouse and keyboard
 * 
 * Compare to the Unity Input: https://docs.unity3d.com/6000.5/Documentation/ScriptReference/Input.html
 * Compare to the Unreal UInputComponent: https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Components/UInputComponent/?application_version=5.5
 * Compare to the Godot Input: https://docs.godotengine.org/en/4.4/classes/class_input.html
 */

class Input{
    /**
     * @type{string[]} A list of the keys that are currently pressed
     */
    static keysDown = []

    /**
     * 
     * @param {KeyboardEvent} event Event details for the keydown event
     */
    static keydown(event){
        //Don't add the key to our list of keys if it is already there
        //Note that we grab event.code
        if(!Input.keysDown.includes(event.code))
            Input.keysDown.push(event.code)
    }

    /**
     * 
     * @param {KeyboardEvent} event Event details for the keyup event
     */
    static keyup(event){
        //Remove a key code from the list of codes
        //In JS, you have to find the index and then remove it from the array

        //Get the index of the key
        let index = Input.keysDown.indexOf(event.code)

        //Remove the key from the array using the split command
        Input.keysDown.splice(index,1)

    }
}