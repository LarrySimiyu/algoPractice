var isAnagram = function(s, t){

    let mapA = mapMaker(s)
    let mapB = mapMaker(t)


    

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