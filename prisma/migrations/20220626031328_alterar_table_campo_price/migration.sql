-- CreateTable
CREATE TABLE "type" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "barcode" TEXT NOT NULL,
    "prac" DOUBLE PRECISION NOT NULL,
    "typeId" TEXT NOT NULL,
    "employeerId" TEXT NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "type_name_key" ON "type"("name");

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_employeerId_fkey" FOREIGN KEY ("employeerId") REFERENCES "employeer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
