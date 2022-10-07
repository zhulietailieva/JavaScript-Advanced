function solve(obj){
    let validMethods = ['POST', 'GET', 'DELETE', 'CONNECT'];
    let validSymbols = new RegExp(/^[^\<\>\\\&\'\"]*$/gm); 
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let validUri = new RegExp(/^(?:\*|[A-Za-z\.\d]+)$/gm);
    if (obj.method == undefined | !validMethods.includes(obj.method)) {
        throw new Error(`Invalid request header: Invalid Method`)
    }
    if (obj.uri == undefined | !validUri.test(obj.uri)) {
        throw new Error(`Invalid request header: Invalid URI`);
    }
    if (obj.version == undefined | !validVersions.includes(obj.version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    }
    if (obj.message == undefined | !validSymbols.test(obj.message)) {
        throw new Error(`Invalid request header: Invalid Message`);
    }
    return obj;
}
console.log(solve({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
  }))