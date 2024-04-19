import Image from "next/image";
import { Filter, X } from "lucide-react";
import { data } from "../../data/data";
import MainTable from "@/components/main-table";
import PaginationControls from "@/components/paginationcontrols";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // biome-ignore lint/complexity/useLiteralKeys: <explanation>
  const page = searchParams["page"] ?? "1";
  // biome-ignore lint/complexity/useLiteralKeys: <explanation>
  const perPage = searchParams["per_page"] ?? "5";
  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage);

  const entriesForCurrentPage = data.slice(start, end);

  return (
    <div className="flex flex-col p-2">
      <div className="flex items-center justify-between">
        <div className="basis-1/3" />
        <div className="basis-1/3 text-center text-2xl font-semibold">
          Recently Generated Reports
        </div>
        <div className="flex gap-1 items-center justify-end basis-1/3">
          <div className="w-10 h-10 border rounded-md flex items-center justify-center cursor-pointer">
            <Filter />
          </div>
          <div className="w-10 h-10 border rounded-md flex items-center justify-center cursor-pointer">
            <X />
          </div>
        </div>
      </div>
      <div className="pt-4">
        <MainTable data={entriesForCurrentPage} />
      </div>
      <div className="fixed bottom-0 border-t-2 border-gray-300 w-full bg-white shadow-md py-4">
        <div className="flex flex-col items-center justify-center">
          <PaginationControls
            hasNextPage={end < data.length}
            hasPrevPage={start > 0}
          />
        </div>
      </div>
    </div>
  );
}
