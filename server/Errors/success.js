class Success {
  constructor(message) {
    this.status = 500;
    this.message = message;
    this.title = "Success";
    this.data = []
    // this.stack = <call stack>;
  }
}

class Ok extends Success {
  constructor(message = "Ok",data = []) {
    super(message);
    super(data)
    this.status = 200;
    this.title = "Success";
  }
}

module.exports = {
  Ok,
};
