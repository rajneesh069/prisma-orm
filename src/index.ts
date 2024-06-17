import { PrismaClient } from "@prisma/client";
const { user, todo } = new PrismaClient();

async function createUser(
  email: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await user.create({
    data: {
      email,
      firstName,
      lastName,
      password,
    },
    select: {
      id: true,
      email: true,
    },
  });

  console.log(res);
}
// createUser("rajneesh1@gmail.com", "12345", "Rajneesh", "Mishra");

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
