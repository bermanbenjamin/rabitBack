/*
  Warnings:

  - You are about to drop the column `prioritys` on the `ToDoTask` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ToDoTask" DROP COLUMN "prioritys";

-- DropEnum
DROP TYPE "ToDoTaskPriorityEnum";
