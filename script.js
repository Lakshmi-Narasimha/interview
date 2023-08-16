const urls = [1,2,3,4,5,6,7,8,9,10].map(i => `/design/${i}`);

const fetch = url => new Promise((resolve, reject)=>{
    resolve({
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
      }
      
      );
})

const promises = urls.map(url => fetch(url));

const calculateAvg = (shapes) =>{
    totalr= 0;
    totalg=0;
    totalb=0;
    shapes.forEach(sh => {
        totalr+=sh.color.r;
        totalg+=sh.color.g
        totalb+=sh.color.b
    });
    return {
        avgR: totalr/shapes.length,
        avgG: totalg/shapes.length,
        avgB: totalb/shapes.length
    }
}

Promise.all(promises).then(res => {
    const responses = res;
    console.log(res.map(d => {
        let final = []
        if(d.shapes?.children?.length > 0){
            final.push(calculateAvg(d.shapes.children))
        } else{
            final.push(calculateAvg(d.shapes))
        }
        return final
    }))
})

// ========================