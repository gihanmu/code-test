import SpyInstance = jest.SpyInstance;
import { Employee } from "./problem4";


test('Employee should have a greeting', async () => {
    const empName = 'Mike';
    const id = '123'
    const greeting = 'Hi 123 - Mike';
    let employee = new Employee<string>();
    employee.id = id;
    employee.name = empName;

    employee.getEmployeeGreeting = (id, name) => {
        return `Hi ${id} - ${name}`
    }
    
    expect(employee.getEmployeeGreeting(employee.id, employee.name)).toEqual(greeting);
   
});
