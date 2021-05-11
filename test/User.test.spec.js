const chai = require("chai");
const chaiHttp = require("chai-http");
let server = require("../app.js");

chai.should();

chai.use(chaiHttp);

Describe("api_test()", () => {
  Describe("teste 1", () => {
    it("entrega resultado status - 200", (done) => {
      done();
    });
    it("entrega resultado status - 300", (done) => {
      done();
    });
    it("entrega resultado status - 500", (done) => {
      done();
    });
  });
});
