import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileDown } from "lucide-react";


type Props = {
    data: { Date: string; "Report Name": string }[];
  };

const MainTable = ({data}: Props) => {
  return (
    <Table>
      <TableHeader className="bg-gray-300">
        <TableRow className="text-lg font-semibold text-gray-600">
          <TableCell>Date</TableCell>
          <TableCell>Report Name</TableCell>
          <TableCell>Download</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={`${index + 1}`} className="text-base">
            <TableCell>{item.Date}</TableCell>
            <TableCell>{item["Report Name"]}</TableCell>
            <TableCell>
              {" "}
              <FileDown />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MainTable;
