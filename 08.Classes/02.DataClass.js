class Request{
    constructor(method, uri, version, message){
        this.method=method;
        this.uri=uri;
        this.version=version;
        this.message=message;
    }
    response=undefined;
    fulfilled =false;
}