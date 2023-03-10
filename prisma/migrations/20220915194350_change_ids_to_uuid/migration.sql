/*
  Warnings:

  - The primary key for the `HabitHistoryDay` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `HabitInterval` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `HabitPlant` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `HabitReminder` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `HabitTimer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Routine` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ToDoList` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ToDoSubtask` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ToDoTask` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserSettings` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `age` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Habit" DROP CONSTRAINT "Habit_habitIntervalId_fkey";

-- DropForeignKey
ALTER TABLE "Habit" DROP CONSTRAINT "Habit_habitPlantId_fkey";

-- DropForeignKey
ALTER TABLE "Habit" DROP CONSTRAINT "Habit_habitTimerId_fkey";

-- DropForeignKey
ALTER TABLE "Habit" DROP CONSTRAINT "Habit_routineId_fkey";

-- DropForeignKey
ALTER TABLE "ToDoSubtask" DROP CONSTRAINT "ToDoSubtask_toDoTaskId_fkey";

-- DropForeignKey
ALTER TABLE "ToDoTask" DROP CONSTRAINT "ToDoTask_toDoListId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_userSettingsId_fkey";

-- AlterTable
ALTER TABLE "Habit" ALTER COLUMN "routineId" SET DATA TYPE TEXT,
ALTER COLUMN "habitPlantId" SET DATA TYPE TEXT,
ALTER COLUMN "habitTimerId" SET DATA TYPE TEXT,
ALTER COLUMN "habitIntervalId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "HabitHistoryDay" DROP CONSTRAINT "HabitHistoryDay_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "HabitHistoryDay_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "HabitHistoryDay_id_seq";

-- AlterTable
ALTER TABLE "HabitInterval" DROP CONSTRAINT "HabitInterval_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "HabitInterval_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "HabitInterval_id_seq";

-- AlterTable
ALTER TABLE "HabitPlant" DROP CONSTRAINT "HabitPlant_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "HabitPlant_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "HabitPlant_id_seq";

-- AlterTable
ALTER TABLE "HabitReminder" DROP CONSTRAINT "HabitReminder_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "HabitReminder_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "HabitReminder_id_seq";

-- AlterTable
ALTER TABLE "HabitTimer" DROP CONSTRAINT "HabitTimer_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "HabitTimer_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "HabitTimer_id_seq";

-- AlterTable
ALTER TABLE "Routine" DROP CONSTRAINT "Routine_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Routine_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Routine_id_seq";

-- AlterTable
ALTER TABLE "ToDoList" DROP CONSTRAINT "ToDoList_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ToDoList_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ToDoList_id_seq";

-- AlterTable
ALTER TABLE "ToDoSubtask" DROP CONSTRAINT "ToDoSubtask_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "toDoTaskId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ToDoSubtask_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ToDoSubtask_id_seq";

-- AlterTable
ALTER TABLE "ToDoTask" DROP CONSTRAINT "ToDoTask_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "toDoListId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ToDoTask_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ToDoTask_id_seq";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "age" INTEGER NOT NULL,
ALTER COLUMN "userSettingsId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "UserSettings" DROP CONSTRAINT "UserSettings_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "UserSettings_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "UserSettings_id_seq";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userSettingsId_fkey" FOREIGN KEY ("userSettingsId") REFERENCES "UserSettings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_routineId_fkey" FOREIGN KEY ("routineId") REFERENCES "Routine"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_habitPlantId_fkey" FOREIGN KEY ("habitPlantId") REFERENCES "HabitPlant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_habitTimerId_fkey" FOREIGN KEY ("habitTimerId") REFERENCES "HabitTimer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_habitIntervalId_fkey" FOREIGN KEY ("habitIntervalId") REFERENCES "HabitInterval"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToDoTask" ADD CONSTRAINT "ToDoTask_toDoListId_fkey" FOREIGN KEY ("toDoListId") REFERENCES "ToDoList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToDoSubtask" ADD CONSTRAINT "ToDoSubtask_toDoTaskId_fkey" FOREIGN KEY ("toDoTaskId") REFERENCES "ToDoTask"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
