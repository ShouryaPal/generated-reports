import Image from "next/image";
import { FileDown, Filter, X } from 'lucide-react';
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { data } from "../../data/data";

export default function Home() {
  return (
    <div className="flex flex-col p-2">
      <div className="flex items-center justify-between">
        <div className="basis-1/3"></div>
        <div className="basis-1/3 text-center text-2xl font-semibold">Recently Generated Reports</div>
        <div className="flex gap-1 items-center justify-end basis-1/3">
          <div className="w-10 h-10 border rounded-md flex items-center justify-center cursor-pointer">
            <Filter/>
          </div>
          <div className="w-10 h-10 border rounded-md flex items-center justify-center cursor-pointer">
            <X />
          </div>
        </div>
      </div>
      <div className="pt-4">

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
            <TableRow key={index} className="text-base">
              <TableCell>{item.Date}</TableCell>
              <TableCell>{item["Report Name"]}</TableCell>
              <TableCell> <FileDown /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>


    </div>
  );
}
