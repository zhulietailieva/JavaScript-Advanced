let {assert}=require('chai');
const {charLookup, lookupChar}=require('../03.CharLookup');

describe('Incorrect parameters',()=>{
    let a;
    it('should return undefined with first and second parameter incorrect values',()=>{
         a=lookupChar(1,'1');
        assert.equal(a,undefined);
    })
    it('should return undefined with first parameter not a string',()=>{
        a=lookupChar(1,1);
        assert.equal(a,undefined);
    })
    it('should return undefined with a second parameter not a number',()=>{
         a =lookupChar("test","1")
            assert.equal(a,undefined);    
    })
    it('should return undefined with a second parameter decimal number',()=>{
         a =lookupChar("test",0.1)
            assert.equal(a,undefined);    
    })
})

describe("Incorrect index",()=>{
    let errorMsg="Incorrect index";
    let a;
    it('should return errorMsg with index less than 1',()=>{
        a=lookupChar("test",-1)
        assert.equal(a,errorMsg);
    })
    it('should return errorMsg with index bigger than string\'s length',()=>{
         a=lookupChar("a",2)
        assert.equal(a,errorMsg);      
    })
    it('should return errorMsg with index equal than string\'s length',()=>{
         a=lookupChar("a",1)
        assert.equal(a,errorMsg);      
    })
})

describe('Correct behaviour',()=>{
    it('should return correct chars at correct indexes',()=>{
        let a=lookupChar('test',0);
        let b=lookupChar('test',1);
        let c=lookupChar('test',2);
        let d=lookupChar('test',3);
        assert.equal(a,'t');
        assert.equal(b,'e');
        assert.equal(c,'s');
        assert.equal(d,'t');
    })
} )