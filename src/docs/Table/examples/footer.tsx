import Table from "rocksolidjs/Table";
import TableBody from "rocksolidjs/TableBody";
import TableCell from "rocksolidjs/TableCell";
import TableFooter from "rocksolidjs/TableFooter";
import TableHead from "rocksolidjs/TableHead";
import TableRow from "rocksolidjs/TableRow";

const orders = [
  { product: "Wireless Headphones", quantity: 2, total: "$398.00" },
  { product: "Mechanical Keyboard", quantity: 1, total: "$149.00" },
  { product: "USB-C Hub", quantity: 3, total: "$267.00" },
];

export default function Example() {
  const total = orders.reduce(
    (sum, order) => sum + Number(order.total.replace("$", "")),
    0,
  );

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Product</TableCell>
          <TableCell align="right">Quantity</TableCell>
          <TableCell align="right">Total</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {orders.map((order) => (
          <TableRow>
            <TableCell>{order.product}</TableCell>
            <TableCell align="right">{order.quantity}</TableCell>
            <TableCell align="right">{order.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter class="bg-neutral-100 dark:bg-neutral-900">
        <TableRow>
          <TableCell class="font-semibold">Total</TableCell>
          <TableCell align="right" class="font-semibold">
            {orders.reduce((sum, order) => sum + order.quantity, 0)}
          </TableCell>
          <TableCell align="right" class="font-semibold">
            ${total.toFixed(2)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}