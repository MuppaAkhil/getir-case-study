import Response from "./response";

export default class SuccessResponse extends Response {
  constructor(code, status, msg, data) {
    super(code, msg);
    this.status = status;
    this.msg = msg;
    this.records = data;
  }

  send(res) {
    let resObj = super.prepare();
    resObj.records = this.records;
    res.status(this.status).json({ ...resObj });
    res.end();
  }
}
