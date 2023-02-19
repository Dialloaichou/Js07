module.exports = squarePerimeter;

function squarePerimeter(long){

   const square={
    perimeter:long*4,
    area:long*long,

    }
return  square;
}

let square = squarePerimeter(4);
console.log("perimeter :", square.perimeter);
console.log("area :", square.area);