-- DropIndex
DROP INDEX "Questions_question_key";

-- AlterTable
ALTER TABLE "Questions" ALTER COLUMN "question" DROP NOT NULL;
