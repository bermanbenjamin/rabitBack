/*
  Warnings:

  - The `daysOfWeek` column on the `ToDoTask` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "ToDoTask" DROP COLUMN "daysOfWeek",
ADD COLUMN     "daysOfWeek" INTEGER[];
