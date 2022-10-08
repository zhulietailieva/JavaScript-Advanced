let {  assert } = require('chai');
const {isOddOrEven}=require('./isOddOrEven');

describe('even and odd',()=>{
    it('should return odd numbers correctly',()=>{
        let a=isOddOrEven('123');       
        assert.equal(a,'odd');
    })
    it('should return even numbers correctly',()=>{
    let a=isOddOrEven('1234');
    assert.equal(a,'even');
})
})

describe('undefined',()=>{
    
    it('should return undefined with an integer',()=>{
        let a=isOddOrEven(5);       
        assert(a==undefined);
    })
    it('should return undefined with an array',()=>{
        let a=isOddOrEven([5,6,7]);
        assert(a==undefined);
        })
})

describe('multiple strings',()=>{
    
    it('should work with multiple strings correctly',()=>{
        let a=isOddOrEven('abcd');
        let b=isOddOrEven('a');
        let c=isOddOrEven('ab');
        assert.equal(a,'even');
        assert.equal(b,'odd');
        assert.equal(c,'even');
    })
})