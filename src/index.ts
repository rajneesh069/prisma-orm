import { PrismaClient } from "@prisma/client";
const { user, todo } = new PrismaClient();

async function createUser(
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  phoneNumber  : string,
  todo
) {
  const res = await user.create({
    data: {
      email,
      firstName,
      lastName,
      password,
      phoneNumber,todos
    },
    select: {
      id: true,
      email: true,
    },
  });

  console.log(res);
}
createUser("rajneesh1@gmail.com", "12345", "Rajneesh", "Mishra", "6386003647");

async function updateUser(
  email: string,
  { firstName, lastName }: { firstName: string; lastName: string }
) {
  const res = await user.update({
    where: { email },
    data: {
      firstName,
      lastName,
    },
    select: {
      firstName: true,
      lastName: true,
    },
  });
  console.log(res);
}
updateUser("rajneesh1@gmail.com", { firstName: "Sachin", lastName: "Mishra" });
