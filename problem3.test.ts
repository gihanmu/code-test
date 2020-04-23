import SpyInstance = jest.SpyInstance;
import { MyBook, Book } from "./problem3";


test('MyBook should have a title', async () => {
    const title = 'New Title';
    let getTitle: SpyInstance = jest.spyOn(Book.prototype, 'getTitle');
    let myBook: MyBook = new MyBook();
    myBook.setTitle(title);
    const titleReturned = myBook.getTitle();
    expect(getTitle).toHaveBeenCalled();
    expect(titleReturned).toEqual(title);
   
});
