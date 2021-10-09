import Response from "./response";

export default class ErrorResponse extends Response {
  constructor(code, status, msg, error) {
    super(code, msg);
    this.status = status;
    this.msg = msg;
    this.error = error;
  }

  send(res) {
    let resObj = super.prepare();
    resObj.error = this.error;
    res.status(this.status).json({ ...resObj });
    res.end();
  }
}
