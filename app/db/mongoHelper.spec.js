import { RecordModel } from "../model/records";
import { queryDbforRecords } from "../db/mongoHelper";

let mockRecordModel = null;

beforeAll(() => {
    mockRecordModel = jest.spyOn(RecordModel, 'aggregate').mockImplementationOnce(() => ({
      sort: jest.fn().mockResolvedValueOnce([
        {
          key: 'kOKMRjkB',
          createdAt: '2016-12-30T11:56:25.780Z',
          totalCount: 120,
        },
        {
          key: 'LSyjwviN',
          createdAt: '2016-12-30T01:31:07.831Z',
          totalCount: 116,
        },
      ]),
    })).mockImplementationOnce(() => ({ sort: jest.fn().mockResolvedValueOnce([]) }));
});
  
afterAll(() => {
    mockRecordModel.mockRestore();
});
  

describe('[mongoHelper] - Test DB Query', () => {
  it('Should fetch records when startdate, enddate, mincount and maxcount is passed', async () => {
    const filterPayload = {
      startDate: '2016-12-30',
      endDate: '2016-12-31',
      minCount: '0',
      maxCount: '160',
    };
    const response = await queryDbforRecords(filterPayload);

    expect(response).toBeDefined();
    expect(Array.isArray(response)).toEqual(true);
    expect(response).toHaveLength(2);
    expect(mockRecordModel).toHaveBeenCalled();
  });

  it('Should return Empty array if no result match a filter', async () => {
    const filterPayload = {
      startDate: '2016-12-30',
      endDate: '2016-12-30',
      minCount: '0',
      maxCount: '160',
    };
    const response = await queryDbforRecords(filterPayload);
    expect(response).toBeDefined();
    expect(Array.isArray(response)).toEqual(true);
    expect(response).toHaveLength(0);
  });
});
