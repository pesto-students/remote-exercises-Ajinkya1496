// write your own test cases
import { flipArgs } from './flipArgs'

it('should a return arguments in reverse order', () => {
    expect(flipArgs(1,2,3,4)).toEqual(expect.arrayContaining([4,3,2,1]));
});

it('should a return arguments in reverse order', () => {
    expect(flipArgs("Coding","Blogging","Designing")).toEqual(expect.arrayContaining(["Designing","Blogging","Coding"]));
});

it('should a return arguments in reverse order', () => {
    expect(flipArgs(34,1,56,78)).toEqual(expect.arrayContaining([78,56,1,34]));
});