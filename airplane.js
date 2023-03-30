const airplane = {
  name: "",
  isFlying: false,
  init(name) {
    this.name = name;
    return this;
  },
  takeOff() {
    this.isFlying = true;
    return `${this.name} took off!`;
  },
  land() {
    this.isFlying = false;
    return `${this.name} landed!`;
  },
};

const airplaneState = airplane.init("Boeing B-17 Flying Fortress").land();
console.log(airplaneState);
