// Functions to handle the password generation
// * If characters is empty, return an empty string
// * If characters is not empty, add a random character from the characters
//   to the result
// * Returns the shuffled result
export const GeneratePassword = (length, includes) => {
    let [result, characters] = handelIncludes(includes)

    if (characters.length === 0) return ''
        
    for (let i = result.length; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
        characters.length));
    }

    return result.split('').sort(() => 0.5 - Math.random()).join('');
}

// Function to handle includes
// * If includes key is true, add the respective string to the characters
//   and also a random character to the result, so that it appears at least once
// * Returns a list with the result and the characters
const handelIncludes = (includes) => {
    let result = '';
    let characters = '';
    const symbols = '!@#$%^&*()';
    const numbers = '0123456789';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const similar = 'il1Lo0O'
    
    Object.keys(includes).forEach(key => {
        if (includes[key] === true) {
            characters += eval(key)
            result += eval(key).charAt(Math.floor(Math.random() * eval(key).length))
        }
    })

    return [result, characters]
}