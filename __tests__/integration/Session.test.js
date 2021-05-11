const { User } = require("../../src/app/models");
const request = require("supertest");
const app = require("../../src/app");

describe("Authentication", () => {
  it("Should return OK when inserted valid credentials", async () => {
    const user = await User.create({
      name: "Diego",
      email: "diego.ie.araujo@gmail.com",
      password_hash: "124232432as12",
    });
    expect(user.email).toBe("diego.ie.araujo@gmail.com");
  });
  // it("Should receive a JWT token when insert valid credentials", async () => {
  //   const response = await request(app).post("/sessions").send({
  //     email: user.email,
  //     password: "123456",
  //   });

  //   expect(response.status).toBe(200);
  // });
});
