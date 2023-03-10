/*
  Warnings:

  - You are about to drop the column `userInfoId` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_userInfoId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "userInfoId";
