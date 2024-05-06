// Don't forget to import your functions
import { getDriverStatus } from "./Drivers";

describe("Drivers", () => {
  test("young", () => {
    expect(getDriverStatus(15)).toEqual("too young")
  });
  
  test("eligible", () => {
    expect(getDriverStatus(16)).toEqual("eligible")
  });

  test("old", () => {
    expect(getDriverStatus(86)).toEqual("too old")
  });
});
