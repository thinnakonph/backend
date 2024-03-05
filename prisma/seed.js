const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcryptjs = require("bcryptjs");

const password = bcryptjs.hashSync("123456");

const userData = [{ username: "Thinn", password, email: "Thinn@gmail.com" }];

const ShippingAddressData = [
  {
    fistName: "Thinnakon",
    lastName: "Phuchonthong",
    identityNumber,
    email: "kimr123azx@gmil.acom",
    phone,
    address: "55/11",
    province: "karakin",
    subDistrict: "guddon",
    district,
    isMainAddress: "nako 55/11",
    userId:1,
  },
];
const run = async () => {
  await prisma.user.createMany({
    data: userData
  });

  await prisma.shippingAddress.createMany({
    data: ShippingAddressData
  });
};

run()