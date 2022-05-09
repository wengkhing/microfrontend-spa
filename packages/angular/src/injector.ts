class Injector {
  element: any;

  getElement() {
    return this.element;
  }

  setElement(element: any) {
    this.element = element;
  }
}

const injector = new Injector();

export default injector;
