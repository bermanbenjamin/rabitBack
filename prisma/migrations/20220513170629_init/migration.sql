/*
  Warnings:

  - You are about to drop the `UserInfo` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_userInfoId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "birthdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "email" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "name" TEXT NOT NULL DEFAULT E'';

-- DropTable
DROP TABLE "UserInfo";

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
