-- CreateEnum
CREATE TYPE "PlantEnum" AS ENUM ('piuva', 'almofadinha', 'mrCarrot', 'nunos', 'losNachos', 'miau', 'esconderijoDoToto', 'caioCoqueiro', 'cartolesco');

-- CreateEnum
CREATE TYPE "ToDoTaskDateTimeRepeatEnum" AS ENUM ('daily', 'weekly', 'monthly');

-- CreateEnum
CREATE TYPE "ToDoTaskPriorityEnum" AS ENUM ('important', 'urgent');

-- CreateEnum
CREATE TYPE "HabitColorEnum" AS ENUM ('blue', 'brown', 'green', 'orange', 'cyan', 'pink', 'purple', 'red', 'yellow');

-- CreateEnum
CREATE TYPE "HabitIconEnum" AS ENUM ('purple1', 'purple2', 'purple3', 'purple4', 'orange1', 'orange2', 'orange3', 'orange4', 'cyan1', 'cyan2', 'cyan3', 'cyan4', 'red1', 'red2', 'red3', 'red4', 'red5', 'red6', 'red7', 'blue1', 'blue2', 'blue3', 'blue4', 'green1', 'green2', 'green3', 'green4', 'pink1', 'pink2', 'pink3', 'pink4', 'pink5', 'pink6', 'pink7', 'yellow1', 'yellow2', 'yellow3', 'yellow4', 'brown1', 'brown2', 'brown3', 'brown4', 'brown5', 'brown6', 'brown7', 'purple5', 'purple6', 'purple7', 'purple8', 'orange5', 'orange6', 'orange7', 'orange8', 'cyan5', 'cyan6', 'cyan7', 'cyan8', 'red8', 'red9', 'red10', 'red11', 'red12', 'blue5', 'blue6', 'blue7', 'green5', 'green6', 'green7', 'green8', 'pink8', 'brown8');

-- CreateEnum
CREATE TYPE "HabitIntervalTypeEnum" AS ENUM ('everyOtherDay', 'daily', 'weekly');

-- CreateEnum
CREATE TYPE "HabitPeriodEnum" AS ENUM ('anyTime', 'morning', 'evening', 'night');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "coins" INTEGER NOT NULL DEFAULT 0,
    "bestStreak" INTEGER NOT NULL DEFAULT 0,
    "currentStreak" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "lastDailyReward" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dailyRewardCount" INTEGER NOT NULL DEFAULT 0,
    "userInfoId" INTEGER NOT NULL,
    "userSettingsId" INTEGER NOT NULL,
    "plants" "PlantEnum"[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserInfo" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "UserInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSettings" (
    "id" SERIAL NOT NULL,
    "weekStartsOn" INTEGER NOT NULL DEFAULT 0,
    "isWithoutAlarms" BOOLEAN NOT NULL DEFAULT false,
    "isOnVacation" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UserSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Routine" (
    "id" SERIAL NOT NULL,
    "userId" TEXT,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Routine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Habit" (
    "id" SERIAL NOT NULL,
    "routineId" INTEGER,
    "userId" TEXT,
    "frequencyPerDay" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "isPaused" BOOLEAN NOT NULL DEFAULT false,
    "lastPlantReward" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "habitPlantId" INTEGER NOT NULL,
    "habitTimerId" INTEGER NOT NULL,
    "habitIntervalId" INTEGER NOT NULL,
    "color" "HabitColorEnum" NOT NULL DEFAULT E'cyan',
    "icon" "HabitIconEnum" NOT NULL,
    "period" "HabitPeriodEnum" NOT NULL DEFAULT E'anyTime',

    CONSTRAINT "Habit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HabitPlant" (
    "id" SERIAL NOT NULL,
    "positionBot" INTEGER NOT NULL,
    "positionLeft" INTEGER NOT NULL,
    "plant" "PlantEnum" NOT NULL,

    CONSTRAINT "HabitPlant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HabitReminder" (
    "id" SERIAL NOT NULL,
    "habitId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "isAlarm" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "HabitReminder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HabitTimer" (
    "id" SERIAL NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HabitTimer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HabitInterval" (
    "id" SERIAL NOT NULL,
    "timesPerWeek" INTEGER NOT NULL,
    "daysOfWeek" INTEGER NOT NULL,
    "type" "HabitIntervalTypeEnum" NOT NULL DEFAULT E'daily',

    CONSTRAINT "HabitInterval_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HabitHistoryDay" (
    "id" SERIAL NOT NULL,
    "habitId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "frequencyOnThisDay" INTEGER NOT NULL DEFAULT 0,
    "doneTimes" INTEGER NOT NULL DEFAULT 0,
    "secondsPerFrequency" INTEGER NOT NULL,

    CONSTRAINT "HabitHistoryDay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ToDoList" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT,

    CONSTRAINT "ToDoList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ToDoTask" (
    "id" SERIAL NOT NULL,
    "toDoListId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lastDone" TIMESTAMP(3),
    "toDoTaskDateInfoId" INTEGER NOT NULL,
    "prioritys" "ToDoTaskPriorityEnum"[],

    CONSTRAINT "ToDoTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ToDoTaskDateInfo" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "repeat" "ToDoTaskDateTimeRepeatEnum" NOT NULL,

    CONSTRAINT "ToDoTaskDateInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ToDoSubtask" (
    "id" SERIAL NOT NULL,
    "toDoTaskId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "isDone" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ToDoSubtask_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userInfoId_key" ON "User"("userInfoId");

-- CreateIndex
CREATE UNIQUE INDEX "User_userSettingsId_key" ON "User"("userSettingsId");

-- CreateIndex
CREATE UNIQUE INDEX "UserInfo_email_key" ON "UserInfo"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Habit_habitPlantId_key" ON "Habit"("habitPlantId");

-- CreateIndex
CREATE UNIQUE INDEX "Habit_habitTimerId_key" ON "Habit"("habitTimerId");

-- CreateIndex
CREATE UNIQUE INDEX "Habit_habitIntervalId_key" ON "Habit"("habitIntervalId");

-- CreateIndex
CREATE UNIQUE INDEX "HabitHistoryDay_date_key" ON "HabitHistoryDay"("date");

-- CreateIndex
CREATE UNIQUE INDEX "ToDoTask_toDoListId_key" ON "ToDoTask"("toDoListId");

-- CreateIndex
CREATE UNIQUE INDEX "ToDoTask_toDoTaskDateInfoId_key" ON "ToDoTask"("toDoTaskDateInfoId");

-- CreateIndex
CREATE UNIQUE INDEX "ToDoSubtask_toDoTaskId_key" ON "ToDoSubtask"("toDoTaskId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userInfoId_fkey" FOREIGN KEY ("userInfoId") REFERENCES "UserInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userSettingsId_fkey" FOREIGN KEY ("userSettingsId") REFERENCES "UserSettings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Routine" ADD CONSTRAINT "Routine_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_routineId_fkey" FOREIGN KEY ("routineId") REFERENCES "Routine"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_habitPlantId_fkey" FOREIGN KEY ("habitPlantId") REFERENCES "HabitPlant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_habitTimerId_fkey" FOREIGN KEY ("habitTimerId") REFERENCES "HabitTimer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_habitIntervalId_fkey" FOREIGN KEY ("habitIntervalId") REFERENCES "HabitInterval"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HabitReminder" ADD CONSTRAINT "HabitReminder_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "Habit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HabitHistoryDay" ADD CONSTRAINT "HabitHistoryDay_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "Habit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToDoList" ADD CONSTRAINT "ToDoList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToDoTask" ADD CONSTRAINT "ToDoTask_toDoListId_fkey" FOREIGN KEY ("toDoListId") REFERENCES "ToDoList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToDoTask" ADD CONSTRAINT "ToDoTask_toDoTaskDateInfoId_fkey" FOREIGN KEY ("toDoTaskDateInfoId") REFERENCES "ToDoTaskDateInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToDoSubtask" ADD CONSTRAINT "ToDoSubtask_toDoTaskId_fkey" FOREIGN KEY ("toDoTaskId") REFERENCES "ToDoTask"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
