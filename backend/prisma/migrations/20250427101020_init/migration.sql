-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Batter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "nationality" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "span" TEXT NOT NULL,
    "matches" INTEGER NOT NULL,
    "innings" INTEGER NOT NULL,
    "notouts" INTEGER NOT NULL,
    "runs" INTEGER NOT NULL,
    "heighestscore" INTEGER NOT NULL,
    "average" INTEGER NOT NULL,
    "ballsfaced" INTEGER NOT NULL,
    "strikerate" DOUBLE PRECISION NOT NULL,
    "hundreds" INTEGER NOT NULL,
    "fifties" INTEGER NOT NULL,
    "ducks" INTEGER NOT NULL,
    "fours" INTEGER NOT NULL,
    "sixes" INTEGER NOT NULL,

    CONSTRAINT "Batter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bowler" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "nationality" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "span" TEXT NOT NULL,
    "matches" INTEGER NOT NULL,
    "innings" INTEGER NOT NULL,
    "balls" INTEGER NOT NULL,
    "overs" INTEGER NOT NULL,
    "madeins" INTEGER NOT NULL,
    "runs" INTEGER NOT NULL,
    "wickets" INTEGER NOT NULL,
    "bbi" TEXT NOT NULL,
    "average" DOUBLE PRECISION NOT NULL,
    "economy" DOUBLE PRECISION NOT NULL,
    "strikerate" DOUBLE PRECISION NOT NULL,
    "fours" INTEGER NOT NULL,
    "fives" INTEGER NOT NULL,

    CONSTRAINT "Bowler_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Allrounders" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "span" TEXT NOT NULL,
    "matches" INTEGER NOT NULL,
    "innings" INTEGER NOT NULL,
    "balls" INTEGER NOT NULL,
    "overs" INTEGER NOT NULL,
    "madeins" INTEGER NOT NULL,
    "runs" INTEGER NOT NULL,
    "wickets" INTEGER NOT NULL,
    "bbi" TEXT NOT NULL,
    "average" DOUBLE PRECISION NOT NULL,
    "economy" DOUBLE PRECISION NOT NULL,
    "strikerate" DOUBLE PRECISION NOT NULL,
    "fours" INTEGER NOT NULL,
    "fives" INTEGER NOT NULL,

    CONSTRAINT "Allrounders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");
