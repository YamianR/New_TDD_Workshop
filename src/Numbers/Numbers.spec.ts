import { sum, subtract, product } from "./Numbers";

describe("Numbers", () => {
  test("sum() should add two numbers", () => {
    expect(sum(1, 2)).toEqual(3);
  });

  test("subtract() should subtract two numbers", () => {
    expect(subtract(2, 1)).toEqual(1);
  });

  test("product() should multiply two numbers", () => {
    expect(product(2, 3)).toEqual(6);
  });
});
