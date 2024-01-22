-- AlterTable
ALTER TABLE "Answers" ALTER COLUMN "answer" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Questions" ADD COLUMN     "user_name" TEXT;
