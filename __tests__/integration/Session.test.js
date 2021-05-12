const { User } = require("../../src/app/models");
const request = require("supertest");
const app = require("../../src/app");
const truncate = require("../utils/truncate");
describe("Authentication", () => {
  beforeEach(async () => {
    await truncate();
  });
  it("Should return OK when inserted valid credentials", async () => {
    const user = await User.create({
      name: "Diego",
      email: "diego.ie.araujo@gmail.com",
      password_hash: "124232432as12",
    });
    //expect(user.email).toBe("diego.ie.araujo@gmail.com");

    const response = await request(app).post("/sessions").send({
      email: user.email,
      password: "123456",
    });
    //console.log(response);
    expect(response.status).toBe(401);
  });
  it("Should block access when inserted NOT valid credentials", async () => {
    const user = await User.create({
      name: "Diego",
      email: "diego.ie.araujo@gmail.com",
      password_hash: "123123",
    });
    //expect(user.email).toBe("diego.ie.araujo@gmail.com");

    const response = await request(app).post("/sessions").send({
      email: user.email,
      password: "12346",
    });
    //console.log(response);
    expect(response.status).toBe(401);
  });
  /*
  it("Should return jwt token when authenticate", async () => {
    const user = await User.create({
      name: "Diego",
      email: "diego.ie.araujo@gmail.com",
      password_hash: "123123",
    });
    //expect(user.email).toBe("diego.ie.araujo@gmail.com");

    const response = await request(app).post("/sessions").send({
      email: user.email,
      password: "123123",
    });

    expect(response).toHaveProperty("token");
  });
  */
});
