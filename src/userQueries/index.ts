import { PrismaClient } from "@prisma/client";
const { user} = new PrismaClient();

async function createUser(
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  phoneNumber: string
) {
  const res = await user.create({
    data: {
      email,
      firstName,
      lastName,
      password,
      phoneNumber,
    },
    select: {
      id: true,
      email: true,
    },
  });

  console.log(res);
}
// createUser("rajneesh@gmail.com", "12345", "Rajneesh", "Mishra", "6386003647");

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
// updateUser("rajneesh1@gmail.com", { firstName: "Sachin", lastName: "Mishra" });

async function getUsers(email: string) {
  const res = await user.findFirst({
    where: {
      email,
    },
    // select: {
    //   email: true,
    //   firstName: true,
    //   lastName: true,
    //   id: true,
    // },
  });
  console.log(res);
}

getUsers("rajneesh@gmail.com");

async function getUsersWithTodos(email: string) {
  const res = await user.findFirst({
    where: {
      email,
    },
    select: {
      email: true,
      firstName: true,
      lastName: true,
      id: true,
      todos: true,
    },
  });
  console.log(res);
}
getUsersWithTodos("rajneesh@gmail.com");
