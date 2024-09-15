import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Table } from "@radix-ui/themes";

async function test() {
  const data = await fetch("http://localhost:3000/").then((e) => e.text());
  console.log(data);
}

export default function Home() {
  test();

  return (
    <div className=" text-emerald-600">
      <div className="flex justify-center items-center w-full h-screen">
        <div className="block text-center">
          <h1>hai</h1>
          <TableComponent />
          <div className="w-fit"></div>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}

const TableComponent = () => (
  <Table.Root>
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
        <Table.Cell>danilo@example.com</Table.Cell>
        <Table.Cell>Developer</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
        <Table.Cell>zahra@example.com</Table.Cell>
        <Table.Cell>Admin</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
        <Table.Cell>jasper@example.com</Table.Cell>
        <Table.Cell>Developer</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table.Root>
);
