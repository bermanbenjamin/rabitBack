/*
  Warnings:

  - The `secondsPerFrequency` column on the `HabitHistoryDay` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `daysOfWeek` column on the `HabitInterval` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "HabitHistoryDay" DROP COLUMN "secondsPerFrequency",
ADD COLUMN     "secondsPerFrequency" INTEGER[];

-- AlterTable
ALTER TABLE "HabitInterval" DROP COLUMN "daysOfWeek",
ADD COLUMN     "daysOfWeek" INTEGER[];
