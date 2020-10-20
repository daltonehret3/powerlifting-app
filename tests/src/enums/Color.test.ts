import { Color } from "../../../src/enums/Color";

describe('Colors', () => {
    it('should return the proper colors', () => {
        expect(Color.red).toStrictEqual('#ff0000');
    });
});
