/*
  Warnings:

  - The `accountId` column on the `user` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropIndex
DROP INDEX "user_accountId_key";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "accountId",
ADD COLUMN     "accountId" SERIAL NOT NULL;
