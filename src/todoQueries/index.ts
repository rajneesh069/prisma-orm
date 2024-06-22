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

// addTodo({ title: "Go to gym", description: "Go to gym at 5", userId: 1 });

async function getTodo(todoId:number) {
    const res = todo.findFirst({
        where : {
            id : todoId
        }
    })
}
