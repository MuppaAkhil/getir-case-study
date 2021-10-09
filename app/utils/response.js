export default class Response {
  constructor(code, msg) {
    this.code = code;
    this.msg = msg;
  }

  prepare() {
    return { code: this.code, msg: this.msg };
  }
}
