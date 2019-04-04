let square;
function loadWebAssembly(fileName)
{
    return fetch(fileName)
    .then(response=>response.arrayBuffer())
    .then(buffer => WebAssembly.compile(buffer))
    .then(module=>{return new WebAssembly.Instance(module)});
}

loadWebAssembly('./wasm/squarer.wasm')
    .then(instance => {
        square = instance.exports._Z7squareri;
        console.log(`square(2) = ${square(2)}`);
    });