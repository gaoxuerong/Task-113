const main = require('../main/main');

describe('taxi fee', function () {
    it("10公里 and no waitting",function(){
        expect(main(10,0)).toEqual(13);
    });
    it("3公里 and  waitting 4 min",function(){
        expect(main(3,4)).toEqual(8);
    });
    it("6.4公里 and no waitting",function(){
        expect(main(6.4,0)).toEqual(10);
    });
    it("12.4公里 and  waitting 4 min",function(){
        expect(main(12.4,4)).toEqual(17);
    });
});
