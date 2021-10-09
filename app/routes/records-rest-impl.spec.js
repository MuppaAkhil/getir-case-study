import { validateRecordRequest } from "./records-rest-impl";

describe("[records-rest-impl] Test Request Body Param Validation", () => {
  it("Happy Path", () => {
    const errors = [];
    validateRecordRequest("2016-12-28", "2016-12-28", 0, 160, errors);
    expect(errors.length).toBe(0);
  });
  it("When startDate is missing", () => {
    const errors = [];
    validateRecordRequest(null, "2016-12-28", 0, 160, errors);
    expect(errors).toEqual([
      { field: "startDate", error: "value was null or empty" },
    ]);
  });
  it("When endDate is missing", () => {
    const errors = [];
    validateRecordRequest("2016-12-28", null, 0, 160, errors);
    expect(errors).toEqual([
      { field: "endDate", error: "value was null or empty" },
    ]);
  });
  it("When minCount is missing", () => {
    const errors = [];
    validateRecordRequest("2016-12-28", "2016-12-29", null, 160, errors);
    expect(errors).toEqual([
      { field: "minCount", error: "must not be null, undefined or empty" },
    ]);
  });
  it("When maxCount is missing", () => {
    const errors = [];
    validateRecordRequest("2016-12-28", "2016-12-29", 0, null, errors);
    expect(errors).toEqual([
      { field: "maxCount", error: "must not be null, undefined or empty" },
    ]);
  });
  it("When startDate is greater than enddate", () => {
    const errors = [];
    validateRecordRequest("2016-12-28", "2016-12-21", 0, 160, errors);
    expect(errors).toEqual([
      {
        fields: "startDate, endDate",
        error: "endDate must be after startDate",
      },
    ]);
  });
  it("When minCount is greater than maxCount", () => {
    const errors = [];
    validateRecordRequest("2016-12-28", "2016-12-29", 10, 2, errors);
    expect(errors).toEqual([
      {
        field: "minCount",
        error: "must not be more than maximum value of 2",
      },
    ]);
  });
});
