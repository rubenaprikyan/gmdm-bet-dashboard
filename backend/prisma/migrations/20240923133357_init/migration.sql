-- CreateTable
CREATE TABLE "SportsEvent" (
    "id" TEXT NOT NULL,
    "eventName" TEXT NOT NULL,
    "odds" DECIMAL(5,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SportsEvent_pkey" PRIMARY KEY ("id")
);
