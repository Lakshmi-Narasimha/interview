function fetch(url) {
    return new Promise(resolve => {
        setTimeout(() => resolve({
            designId: 1,
            shapes: [
              {shapeId: 'basic-shape', color: { r: 55, g: 40, b: 255 }, children: []},
              {shapeId: 'duck', color: { r: 255, g: 255, b: 252 }, children: [
                {shapeId: 'duck-bill', color: { r: 255, g: 255, b: 255 }, children: []},
                {shapeId: 'duck-body', color: { r: 205, g: 255, b: 252 }, children: []},
                {shapeId: 'duck-legs', color: { r: 100, g: 255, b: 252 }, children: []},
              ]},
              {shapeId: 'zigzag-polygon', color: { r: 205, g: 255, b: 252 }, children: []},
              {shapeId: 'fish', color: { r: 205, g: 255, b: 252 }, children: [
                {shapeId: 'fish-eyes', color: { r: 255, g: 255, b: 255 }, children: []},
                {shapeId: 'fish-fin', color: { r: 100, g: 66, b: 74 }, children: [
                  {shapeId: 'fish-fin-part-1', color: { r: 93, g: 54, b: 55 }, children: []},
                  {shapeId: 'fish-fin-part-2', color: { r: 33, g: 255, b: 255 }, children: []},
                  {shapeId: 'fish-fin-part-3', color: { r: 128, g: 53, b: 255 }, children: []},
                ]},
                {shapeId: 'fish-tail', color: { r: 255, g: 5, b: 255 }, children: []},
              ]},
              {shapeId: 'duck', color: { r: 255, g: 255, b: 252 }, children: [
                {shapeId: 'duck-bill', color: { r: 255, g: 255, b: 255 }, children: []},
                {shapeId: 'duck-body', color: { r: 205, g: 255, b: 252 }, children: []},
                {shapeId: 'duck-legs', color: { r: 100, g: 255, b: 252 }, children: []},
              ]},
            ]
          }), Math.random() * 4000);
    });
}

const fetchList =[1];

function avgChild(r){
    const avg = {
        r: 0,
        g:0,
        b: 0,
        children: 0
    }
    r.shapes.forEach(s => {
        {
        avg.r+=s.color.r;
        avg.g+=s.color.g;
        avg.b+=s.color.b;
        avg.children = r.children.length > 0 ? avgChild(r.children) : []
    }});
    return {
        avgR: avg.r/r.shapes.length ,
     avgG: avg.g/r.shapes.length,
    avgB: avg.b/r.shapes.length, avgC : avg.children} ;

}

Promise.all([...fetchList.map(fl => fetch(fl)) ]).then(res => {
    const list = []
    res.forEach(r => {
        

        list.push(avgChild(r)) ;

    });
  
});


