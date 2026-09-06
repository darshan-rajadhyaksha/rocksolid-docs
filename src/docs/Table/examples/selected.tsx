import { createSignal, For } from "solid-js";
import Checkbox from "rocksolidjs/Checkbox";
import Table from "rocksolidjs/Table";
import TableBody from "rocksolidjs/TableBody";
import TableCell from "rocksolidjs/TableCell";
import TableHead from "rocksolidjs/TableHead";
import TableRow from "rocksolidjs/TableRow";

const users = [
  { id: 1, name: "Olivia Martin", email: "olivia@example.com", role: "Admin" },
  { id: 2, name: "Jackson Lee", email: "jackson@example.com", role: "Member" },
  { id: 3, name: "Sophia Brown", email: "sophia@example.com", role: "Member" },
];

export default function Example() {
  const [selected, setSelected] = createSignal<number[]>([]);

  const toggleRow = (id: number) => {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((selectedId) => selectedId !== id)
        : [...current, id],
    );
  };

  const handleSelectAll = (e: Event) => {
    if ((e.currentTarget as HTMLInputElement).checked) {
      setSelected(users.map(user => user.id));
    } else {
      setSelected([]);
    }
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell class="w-12">
            <Checkbox
              aria-label="Select all users"
              checked={selected().length === users.length}
              onChange={handleSelectAll}
            />
          </TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Role</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <For each={users}>
          {(user) => (
            <TableRow selected={selected().includes(user.id)}>
              <TableCell>
                <Checkbox
                  checked={selected().includes(user.id)}
                  onChange={() => toggleRow(user.id)}
                  aria-label={`Select ${user.name}`}
                />
              </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          )}
        </For>
      </TableBody>
    </Table>
  );
}