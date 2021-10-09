import * as validator from "./validation";

describe("[validation] Test Methods in Validation File", () => {
  it("[validateDate] Happy Path", () => {
    const errors = [];
    validator.validateDate("TestDate", "2016-12-28", errors);
    expect(errors.length).toBe(0);
  });
  it("[validateDate] Test Invalid Date", () => {
    const errors = [];
    validator.validateDate("TestDate", "xbikwskws", errors);
    expect(errors.length).toBe(1);
  });
  it("[validateDateWindow] Test start and end date ranges Happy Path", () => {
    const errors = [];
    validator.validateDateWindow("2016-12-28", "2016-12-28", errors);
    expect(errors.length).toBe(0);
  });
  it("[validateDateWindow] Test start Greater than end date", () => {
    const errors = [];
    validator.validateDateWindow("2016-12-31", "2016-12-28", errors);
    expect(errors.length).toBe(1);
  });
  it("[validateIntWithinRange] Test minCount is smaller than maxCount", () => {
    const errors = [];
    validator.validateIntWithinRange("TestCount", 10, 0, 20, true, errors);
    expect(errors.length).toBe(0);
  });
  it("[validateIntWithinRange] Test minCount is larger than maxCount", () => {
    const errors = [];
    validator.validateIntWithinRange("TestCount", 10, 0, 5, true, errors);
    expect(errors.length).toBe(1);
  });
  it("[validateIntOrNull] Test input given is a valid Integer", () => {
    const errors = [];
    validator.validateIntOrNull("TestInt", 5, true, errors);
    expect(errors.length).toBe(0);
  });
  it("[validateIntOrNull] Test input given is a Integer of type String", () => {
    const errors = [];
    validator.validateIntOrNull("TestInt", "5", true, errors);
    expect(errors.length).toBe(0);
  });
  it("[validateIntOrNull] Test input given a invalid string", () => {
    const errors = [];
    validator.validateIntOrNull("TestInt", "weeexs", true, errors);
    expect(errors.length).toBe(1);
  });
});
