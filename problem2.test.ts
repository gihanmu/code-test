import { Adder } from "./problem2";


test('Two numbers should get added successfully ', async () => {

    let adder: Adder = new Adder();
    expect(adder.add(4,5)).toBe(9);
   
});

test('Errors on null values ', async () => {
   
    let adder: Adder = new Adder();
  
    expect(() => {
        adder.add(null,5)
      }).toThrow();

    jest.resetAllMocks();
});