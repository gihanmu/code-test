import SpyInstance = jest.SpyInstance;
import { Bird } from "./problem1";

test('Test Method Calls in Bird', async () => {

    let walkSpy: SpyInstance = jest.spyOn(Bird.prototype, 'walk');
    let flySpy: SpyInstance = jest.spyOn(Bird.prototype, 'fly');
    let singSpy: SpyInstance = jest.spyOn(Bird.prototype, 'sing');
  
    let bird: Bird = new Bird();
    bird.walk();
    bird.fly();
    bird.sing();
  
    expect(walkSpy).toHaveBeenCalled();
    expect(flySpy).toHaveBeenCalled();
    expect(singSpy).toHaveBeenCalled();
   
    jest.resetAllMocks();
});