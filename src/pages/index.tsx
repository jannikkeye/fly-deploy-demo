import { prisma } from "@/db/prisma";
import { Button, Card, Page, Table, Text } from "@geist-ui/core";
import { Duck, Hobby } from "@prisma/client";
import { GetServerSideProps } from "next";

type Props = {
  ducks: (Duck & { hobbies: Hobby[] })[];
};

export default function Home({ ducks }: Props) {
  return (
    <Page>
      <Page.Header>
        <Text h1>Ducks</Text>
      </Page.Header>
      <Card>
        <Text h3>Here are your ducks:</Text>
        <Table data={ducks}>
          <Table.Column prop="id" label="id"></Table.Column>
          <Table.Column prop="name" label="Name"></Table.Column>
          <Table.Column
            prop="hobbies"
            label="Hobbies"
            render={(value) =>
              value.map((d: { label: string }) => d.label).join(", ")
            }
          ></Table.Column>
          <Table.Column
            prop="activity"
            label="Activity"
            render={(value) => value.label}
          ></Table.Column>
          <Table.Column
            prop="mood"
            label="Mood"
            render={(value) => value.label}
          ></Table.Column>
        </Table>
      </Card>
      <Page.Footer>
        <Text h3>ducks.com</Text>
      </Page.Footer>
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: {
    ducks: await prisma.duck.findMany({
      include: {
        mood: true,
        activity: true,
        hobbies: true,
      },
    }),
  },
});
