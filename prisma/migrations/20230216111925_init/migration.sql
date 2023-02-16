-- CreateTable
CREATE TABLE "Duck" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "activityId" TEXT NOT NULL,
    "moodId" TEXT NOT NULL,

    CONSTRAINT "Duck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hobby" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "Hobby_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mood" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "Mood_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activity" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DuckToHobby" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DuckToHobby_AB_unique" ON "_DuckToHobby"("A", "B");

-- CreateIndex
CREATE INDEX "_DuckToHobby_B_index" ON "_DuckToHobby"("B");

-- AddForeignKey
ALTER TABLE "Duck" ADD CONSTRAINT "Duck_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Duck" ADD CONSTRAINT "Duck_moodId_fkey" FOREIGN KEY ("moodId") REFERENCES "Mood"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DuckToHobby" ADD CONSTRAINT "_DuckToHobby_A_fkey" FOREIGN KEY ("A") REFERENCES "Duck"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DuckToHobby" ADD CONSTRAINT "_DuckToHobby_B_fkey" FOREIGN KEY ("B") REFERENCES "Hobby"("id") ON DELETE CASCADE ON UPDATE CASCADE;
