import Table from "rocksolidjs/Table";
import TableBody from "rocksolidjs/TableBody";
import TableCell from "rocksolidjs/TableCell";
import TableHead from "rocksolidjs/TableHead";
import TableRow from "rocksolidjs/TableRow";

const orders = [
  {
    id: "#1024",
    customer: "Olivia Martin",
    product: "Wireless Headphones",
    status: "Completed",
    total: "$398.00",
  },
  {
    id: "#1025",
    customer: "Jackson Lee",
    product: "Mechanical Keyboard",
    status: "Processing",
    total: "$149.00",
  },
  {
    id: "#1026",
    customer: "Sophia Brown",
    product: "USB-C Hub",
    status: "Pending",
    total: "$267.00",
  },
];

export default function CustomStyling() {
  return (
    <Table class="rounded-lg shadow-sm">
      <TableHead class="bg-muted/50">
        <TableRow>
          <TableCell class="font-semibold">Order</TableCell>
          <TableCell class="font-semibold">Customer</TableCell>
          <TableCell class="font-semibold">Product</TableCell>
          <TableCell class="font-semibold">Status</TableCell>
          <TableCell align="right" class="font-semibold">
            Total
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {orders.map((order) => (
          <TableRow class="hover:bg-neutral-100/80 dark:hover:bg-neutral-900">
            <TableCell class="font-medium">{order.id}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell>{order.product}</TableCell>
            <TableCell>{order.status}</TableCell>
            <TableCell align="right" class="font-medium">
              {order.total}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}