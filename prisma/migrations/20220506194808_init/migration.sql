/*
  Warnings:

  - You are about to drop the column `toDoTaskDateInfoId` on the `ToDoTask` table. All the data in the column will be lost.
  - You are about to drop the `ToDoTaskDateInfo` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `date` to the `ToDoTask` table without a default value. This is not possible if the table is not empty.
  - Added the required column `daysOfWeek` to the `ToDoTask` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DateTimeRepeatEnum" AS ENUM ('never', 'day', 'week', 'month');

-- DropForeignKey
ALTER TABLE "ToDoTask" DROP CONSTRAINT "ToDoTask_toDoTaskDateInfoId_fkey";

-- DropIndex
DROP INDEX "ToDoTask_toDoTaskDateInfoId_key";

-- AlterTable
ALTER TABLE "HabitPlant" ALTER COLUMN "plant" SET DEFAULT E'piuva';

-- AlterTable
ALTER TABLE "ToDoTask" DROP COLUMN "toDoTaskDateInfoId",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "daysOfWeek" INTEGER NOT NULL,
ADD COLUMN     "frequenciesByRepeatType" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "repeatType" "DateTimeRepeatEnum" NOT NULL DEFAULT E'never';

-- DropTable
DROP TABLE "ToDoTaskDateInfo";

-- DropEnum
DROP TYPE "ToDoTaskDateTimeRepeatEnum";
