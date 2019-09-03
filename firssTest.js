const chai = require('chai');
const {assert} = chai; //const assert= chai.assert();
const myfunction = require('./myyfunc');


describe('Myfunction', ()=>{
    //it: method that allows to over load it. allows us to put the object against the function we are testing
    it('factorial of 0 should be 1' , ()=> {
assert.equal(myfunction.factorial(0), 1) //0 is the function passed to the parameter
    });



     it('factorial of 0 should be 1' , ()=> {
        assert.notEqual(myfunction.factorial(0), 2) //factorial of 0 isnt 2 unlike above where factorial of 0 is 1
    });

 });


describe('Add', ()=>{
    it('sum of 3 and 7 should be 10', ()=>{
        assert.equal(myfunction.sum(3, 7), 10)
    });
});





//.isNotOk(object, [message])