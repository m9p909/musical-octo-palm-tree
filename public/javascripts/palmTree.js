
class palmTree {
    constructor(h, w) {
        this.height = h;
        this.width = w;
    }
    draw(id) {
        var svgElement=document.getElementById(id);
        var s = Snap(svgElement);
        // Lets create big circle in the middle:
        var bigCircle = s.circle(150, 150, 100);
        // By default its black, lets change its attributes
    }   
}
tree = new palmTree(200, 100);
tree.draw('#svg');