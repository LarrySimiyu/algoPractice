var isAnagram = function(s, t){

    let mapA = mapMaker(s)
    let mapB = mapMaker(t)


    if(Object.keys(mapA).length !== Object.keys(mapB).length){
        return false 
    }

    for(let char in mapA){
        if(mapA[char] !== mapB[char]){
            return false 
        }
    }

    return true 


}


function mapMaker(str){
    let map = {}

    for(let char of str){
        if(!map[char]){
            map[char] = 1
        } else {
            map[char] ++
        }
    }

    return map
}