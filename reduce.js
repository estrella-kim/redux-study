const arr = [1,2,3,4,5,6,7,8,9,10];

const result = arr.reduce(function(p,c){
    console.log('p:', p);
    console.log('c:', c);
    return c+'<li>${p}</li>';
},'<ul>' );

console.log(result+'</li>');