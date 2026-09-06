import Table from "rocksolidjs/Table";
import TableBody from "rocksolidjs/TableBody";
import TableCell from "rocksolidjs/TableCell";
import TableHead from "rocksolidjs/TableHead";
import TableRow from "rocksolidjs/TableRow";

const users = [
  { name: "Olivia Martin", email: "olivia@example.com", role: "Admin" },
  { name: "Jackson Lee", email: "jackson@example.com", role: "Member" },
  { name: "Sophia Brown", email: "sophia@example.com", role: "Member" },
  { name: "Noah Wilson", email: "noah@example.com", role: "Member" },
];

export default function Example() {
  return (
    <Table dense>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Role</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}