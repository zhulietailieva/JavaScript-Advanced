let {assert,expect}=require('chai');
const {mathEnforcer}=require('../04.MathEnforcer');
describe('addFive method',()=>{
    it('addFive should return undefined with a non-number parameter',()=>{
        let res=mathEnforcer.addFive('a');
        assert.equal(res,undefined);
    })  
    it('should return correct result with a positive number',()=>{
        let res=mathEnforcer.addFive(5);
        assert.equal(res,10);
        let res2=mathEnforcer.addFive(0.99);
        assert.equal(res2,5.99);
    })
    it('should return correct result with a negative number',()=>{
        let res=mathEnforcer.addFive(-5);
        assert.equal(res,0);
        let res2=mathEnforcer.addFive(-10);
        assert.equal(res2,-5);
    })
    it('should return correct result with 0',()=>{
        let res=mathEnforcer.addFive(0);
        assert.equal(res,5);
    })
})

describe('subtractTen method',()=>{
    it('should return undefined with a non-number parameter',()=>{
        let res=mathEnforcer.subtractTen('a');
        assert.equal(res,undefined);
    })
    it('should return correct result with a positive number',()=>{
        let res=mathEnforcer.subtractTen(20);
        assert.equal(res,10);
        let res2=mathEnforcer.subtractTen(10);
        assert.equal(res2,0);
    })
    it('should return correct result with a decimal number',()=>{
        expect(mathEnforcer.subtractTen(11.01)).to.be.closeTo(1.01,0.00001);
        expect(mathEnforcer.subtractTen(9.01)).to.be.closeTo(-0.99,0.00001);       
    })
    it('should return correct result with a negative number',()=>{
        let res=mathEnforcer.subtractTen(-10);
        assert.equal(res,-20);
    })
    it('should return correct result with 0',()=>{
        let res=mathEnforcer.subtractTen(0);
        assert.equal(res,-10);
    })
})

describe('sum method',()=>{
    it('should return undefined with both parameters being non-numbers',()=>{
        let res=mathEnforcer.sum('a','b');
        assert.equal(res,undefined);
    })
    it('should return undefined with one non-number parameter',()=>{
        let res=mathEnforcer.sum(1,'b');
        assert.equal(res,undefined);
        let res2=mathEnforcer.sum('a',2);
        assert.equal(res2,undefined);
    }) 
    it('should return a correct result with correct positive parameters',()=>{
        let res=mathEnforcer.sum(1,2);
        assert.equal(res,3);
    })
    it('should return a correct result with correct decimal parameters',()=>{
        expect(mathEnforcer.sum(1.1,2)).to.be.closeTo(3.1,00000000001);
        expect(mathEnforcer.sum(1.1,2.2)).to.be.closeTo(3.3,00000000001);
        expect(mathEnforcer.sum(1,2.2)).to.be.closeTo(3.2,00000000001);
    })
    it('should return a correct result with correct negative parameters',()=>{
        let res=mathEnforcer.sum(-1,-2);
        assert.equal(res,-3);
        let res2=mathEnforcer.sum(-1,1);
        assert.equal(res2,0);
        let res3=mathEnforcer.sum(1,-1);
        assert.equal(res3,0);
    })
    it('should return a correct result with correct decimal negative parameters',()=>{
        expect(mathEnforcer.sum(-1.1,2)).to.be.closeTo(0.9,0.00000001);
        expect(mathEnforcer.sum(-1.1,-2.2)).to.be.closeTo(-3.3,0.00001);
        expect(mathEnforcer.sum(1,-2.2)).to.be.closeTo(-1.2,0.00000001);
    })
})
