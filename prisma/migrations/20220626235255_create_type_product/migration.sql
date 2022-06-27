/*
  Warnings:

  - You are about to drop the column `prac` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `typeId` on the `product` table. All the data in the column will be lost.
  - Added the required column `desciption` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_typeId_fkey";

-- AlterTable
ALTER TABLE "product" DROP COLUMN "prac",
DROP COLUMN "typeId",
ADD COLUMN     "desciption" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;

-- CreateTable
CREATE TABLE "typeProduct" (
    "id" TEXT NOT NULL,
    "typeId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "typeProduct_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "typeProduct" ADD CONSTRAINT "typeProduct_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "typeProduct" ADD CONSTRAINT "typeProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
