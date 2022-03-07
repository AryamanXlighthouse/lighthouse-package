const lighthouse = require("../../Lighthouse");

test("getUploads", async () => {
  const response = await lighthouse.getUploads(
    "0x487fc2fE07c593EAb555729c3DD6dF85020B5160",
    "fantom"
  );

  expect(typeof response[0]["cid"]).toBe("string");
}, 20000);

test("getUploads null case", async () => {
  const response = await lighthouse.getUploads(null, null);

  expect(response).toBe(null);
}, 20000);
