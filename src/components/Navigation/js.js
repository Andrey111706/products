const array = ['test1', 'test2', 'test3']

// output = {
//     '0': 'test1',
//     '1' : 'test2',
//     '2' : 'test3',
// }
let Array = function(somearray){
    let newarray = {}
    for(let i =0; i<somearray.length;i++){

        let key = ''+ i
        newarray[key] = somearray[i];
        return somearray;
    }
}
let output=Array(array)