import { PrismaClient } from "@prisma/client";
const { todo } = new PrismaClient();

type AddTodo = {
  title: string;
  description: string;
  userId: number;
};

type UpdateTodo = AddTodo & { todoId: number };

async function addTodo({ title, description, userId }: AddTodo) {
  const addedTodo = await todo.create({
    data: {
      title,
      description,
      userId,
    },
  });

  console.log(addedTodo);
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

getTodo(1);

async function getTodosForAParticularUser(userId: number) {
  const todos = await todo.findMany({
    where: {
      userId,
    },
  });
  console.log(todos);
}

// getTodosForAParticularUser(1);

async function updateTodo({ title, description, userId, todoId }: UpdateTodo) {
  const updatedTodo = await todo.update({
    where: {
      id: todoId,
      userId, //not necessary to use it, I am using it anyway
    },
    data: {
      title,
      description,
    },
  });
  console.log(updatedTodo);
}

// updateTodo({
//   title: "New Todo",
//   description: "New Description",
//   userId: 1,
//   todoId: 1,
// });

async function deleteTodo({
  todoId,
  userId,
}: {
  todoId: number;
  userId: number;
}) {
  const deletedTodo = await todo.delete({
    where: {
      id: todoId,
      userId,
    },
  });
  console.log(deletedTodo);
}
deleteTodo({ todoId: 1, userId: 1 });
getTodo(1);
