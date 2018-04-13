
## Moving Objects in a Canvas

**Canvas2D** allows you to **translate (move), rotate, or scale** objects.

### Scaling

**scale(x,y)** multiplies the x and y values by a given factor so

> ctx.scale(2,3);

will make all values twice as large on the x axis and three times as large on the y axis.

### Translation

**translate(x,y)** moves all subsequent draw commands by x number of pixels on horizontally and y pixels vertically.

> ctx.translate(20,40); 
moves all elements drawn after it 20 pixels to the rights and 40 pixels down.

### Rotation

**ctx.rotate(angleRadians)** rotates an object a certain number of radians (generally) about its center.  

- Formula to convert a value from degrees to radians.

> radians = degrees * (Math.PI/180)

### Order of operations

You should generally **scale** objects first, **rotate** them next, and then finally **translate** last.

> **It’s important to note that whatever transformations apply for all subsequent objects until you reverse them.**


## Saving and Restoring Canvas State

Every canvas object contains a stack of drawing states. 

> Stacks : Last In-First Out(LIFO).

Draw a couple rectangles in different colors. *(Instead of reassigning the respective property every time.)*

```javascript
var c = document.querySelector("#c");
var ctx = c.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(0,0,50,50);

// Save state with blue fill
ctx.save();
ctx.fillStyle = "green";
ctx.fillRect(100,100,10,10);
// Restore to blue fill
ctx.restore();

ctx.fillRect(200,10,20,20);
```

### The canvas state can store:

- The current transformation matrix (**rotation**, **scaling**, **translation**)

- **strokeStyle**

- **fillStyle**

- **font**

- **globalAlpha**

- **lineWidth**

- **lineCap**

- **lineJoin**

- **miterLimit**

- **shadowOffsetX**

- **shadowOffsetY**

- **shadowBlur**

- **shadowColor**

- **globalCompositeOperation**

- **textAlign**

- **textBaseline**

- **The current clipping region**


