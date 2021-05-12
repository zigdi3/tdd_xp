const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");

const bcrypt = require("bcryptjs");

describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should encrypt user password", async () => {
    const user = await User.create({
      name: "Diego",
      email: "diego.ie.araujo@gmail.com",
      password: "123456",
    });

    //const compareHash = ;
    //const hash = await bcrypt.hash("123456", 8);
    expect(await bcrypt.compare("123456", user.password_hash)).toBe(true);
  });
});
