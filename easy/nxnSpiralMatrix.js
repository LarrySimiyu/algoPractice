// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

 

// Example 1:


// Input: n = 3
 // Output: 
// [[1,2,3],
// [8,9,4],
// [7,6,5]]



var generateMatrix = function(n) {
    
    let results = []
    
    for(let i = 0; i < n; i++) {
        results.push([])
    }
    
    let counter = 1
    
    let startRow = 0 
    let endRow = n - 1
    
    let startCol = 0
    let endCol = n - 1
    
    while( startRow <= endRow && startCol <= endCol){
        
        
        // top
        for(let i = startCol; i <= endCol; i++){
            results[startRow][i] = counter
            counter++
        }
        startRow++
        
        // right
        
        for(let i = startRow; i<=endRow; i++){
            results[i][endCol] = counter
            counter++
        }
        endCol--
        
        // bottom
        
        for(let i = endCol; i >= startCol; i--){
            results[endRow][i] = counter
            counter++
            
        }
        
        endRow--
        
        // left
        
        for(let i = endRow; i >= startRow; i--){
            results[i][startCol] = counter
            counter++
        }
        
        startCol++
          
    }
    
    return results 
    
 
    
    
};