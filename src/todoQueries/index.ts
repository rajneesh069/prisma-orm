import { PrismaClient } from "@prisma/client";
const { todo } = new PrismaClient();

type Todo = {
  title: string;
  description: string;
  userId: number;
};

async function addTodo({ title, description, userId }: Todo) {
  const res = await todo.create({
    data: {
      title,
      description,
      userId,
    },
  });

  console.log(res);
}

// addTodo({ title: "Go buy Milk", description: "Go buy Milk at 5", userId: 1 });
// addTodo({
//   title: "Complete Assignment",
//   description: "Finish the math assignment by tonight",
//   userId: 1,
// });
// addTodo({
//   title: "Call Mom",
//   description: "Call mom to catch up in the evening",
//   userId: 1,
// });

async function getTodo(todoId: number) {
  const res = await todo.findFirst({
    where: {
      id: todoId,
    },
  });
  console.log(res);
}

// getTodo(1);

async function getTodosForAParticularUser(userId: number) {
  const res = await todo.findMany({
    where: {
      userId,
    },
  });
  console.log(res);
}

// getTodosForAParticularUser(1);

