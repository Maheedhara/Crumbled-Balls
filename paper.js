paper Class;

var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2,
}

Matter.Bodies.circle(50, 50, 10, [options], [maxSides]);