function middle(x, y, z) {
    if((x>=y && x<=z) || (x<=y && x>=z))
        console.log("x is middle")
}
{
if((y>=x && y<=z) || (y<=x && y>=z))
        console.log("y is middle")
}
{
if((z>=x && z<=y) || (y<=x && y>=z))
        console.log("z is middle")
}