let x =[{rating:3, fruits:"Apple"},{rating:1, fruits:"Apple"}, {rating:4, fruits:"Banana"}]

console.log(x.sort(function(a, b){
    return b.rating -a.rating
}))

