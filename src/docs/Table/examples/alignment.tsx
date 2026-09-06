import Table from "rocksolidjs/Table";
import TableBody from "rocksolidjs/TableBody";
import TableCell from "rocksolidjs/TableCell";
import TableHead from "rocksolidjs/TableHead";
import TableRow from "rocksolidjs/TableRow";

const orders = [
  { product: "Wireless Headphones", quantity: 2, price: "$199.00" },
  { product: "Mechanical Keyboard", quantity: 1, price: "$149.00" },
  { product: "USB-C Hub", quantity: 3, price: "$89.00" },
];

export default function Example() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="left">Product</TableCell>
          <TableCell align="right">Quantity</TableCell>
          <TableCell align="right">Price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {orders.map((order) => (
          <TableRow>
            <TableCell align="left">{order.product}</TableCell>
            <TableCell align="right">{order.quantity}</TableCell>
            <TableCell align="right">{order.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}