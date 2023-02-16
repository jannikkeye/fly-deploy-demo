import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const ducks = [
  "Frida",
  "Enti",
  "Peter",
  "Gudrun",
  "Ruth",
  "Klaus",
  "Kalle",
  "Siegfried",
  "Rüdiger",
  "Rainer",
  "Ente",
  "Eberhard",
];
const moods = ["🤬", "😊", "😴", "🦆"];
const hobbiesAndActivities = [
  "Schlafen",
  "Essen",
  "Quaken",
  "Fliegen",
  "Schwimmen",
  "Tauchen",
  "Eier legen",
  "Kämpfen",
];

const randomNumber = (max: number) => Math.floor(Math.random() * max);

const pickById = <T extends { id: string }>(count: number, data: T[]) => {
  let picked: Set<string> = new Set();

  while (picked.size < count) {
    const d = data[randomNumber(data.length)];

    picked.add(d.id);
  }

  return data.filter((d) => picked.has(d.id));
};

const main = async () => {
  const insertedMoods = await Promise.all(
    moods.map(async (label) => prisma.mood.create({ data: { label } }))
  );

  const insertedHobbies = await Promise.all(
    hobbiesAndActivities.map(async (label) =>
      prisma.hobby.create({ data: { label } })
    )
  );

  const insertedActivities = await Promise.all(
    hobbiesAndActivities.map(async (label) =>
      prisma.activity.create({ data: { label } })
    )
  );

  await Promise.all(
    ducks.map((name) => {
      const hobbies = pickById(Math.max(randomNumber(3), 1), insertedHobbies);

      const acitvity =
        insertedActivities[randomNumber(insertedActivities.length)];

      const mood =
        acitvity.label === "Schlafen"
          ? insertedMoods.find((m) => m.label === "😴")!
          : acitvity.label === "Kämpfen"
          ? insertedMoods.find((m) => m.label === "🤬")!
          : hobbies.map((d) => d.label).includes(acitvity.label)
          ? insertedMoods.find((m) => m.label === "😊")!
          : insertedMoods.find((m) => m.label === "🦆")!;

      return prisma.duck.create({
        data: {
          name,
          activityId: acitvity.id,
          moodId: mood.id,
          hobbies: {
            connect: hobbies.map((d) => ({ id: d.id })),
          },
        },
      });
    })
  );
};

main()
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
