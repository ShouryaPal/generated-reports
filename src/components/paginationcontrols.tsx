// PaginationControls.tsx
"use client";
import type { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { data } from "../../data/data";
import { ChevronFirst, ChevronLast } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const perPage = searchParams.get("per_page") ?? "10";
  const totalPages = Math.ceil(data.length / Number(perPage));
  const maxPageButtons = 5; // Adjust this value to change the number of page buttons displayed

  function getPageNumbers(
    currentPage: number,
    totalPages: number,
    maxPageButtons: number
  ) {
    const pageNumbers = [];
    const maxPages = Math.min(maxPageButtons, totalPages);

    let startPage = Math.max(1, currentPage - Math.floor((maxPages - 1) / 2));
    const endPage = Math.min(totalPages, startPage + maxPages - 1);

    if (endPage - startPage < maxPages - 1) {
      startPage = endPage - maxPages + 1;
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  }
  const pageNumbers = getPageNumbers(Number(page), totalPages, maxPageButtons);

  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center gap-2">
        <Button
          variant={"ghost"}
          className=" text-gray-800 font-bold cursor-pointer"
          disabled={!hasPrevPage}
          onClick={() => {
            router.push(`/?page=${Number(page) - 1}&per_page=${perPage}`);
          }}
        >
          <ChevronFirst />
          Prev
        </Button>
        {pageNumbers.map((pageNumber) => (
          <Button
            key={pageNumber}
            variant={Number(page) === pageNumber ? "outline" : "ghost"}
            className="font-bold cursor-pointer rounded-md border-gray-400 text-gray-400 hover:bg-red-500 focus-visible:bg-red-500 hover:text-white focus-visible:text-white"
            onClick={() => {
              router.push(`/?page=${pageNumber}&per_page=${perPage}`);
            }}
          >
            {pageNumber}
          </Button>
        ))}
        <Button
          variant={"ghost"}
          className="text-gray-800 font-bold cursor-pointer"
          disabled={!hasNextPage}
          onClick={() => {
            router.push(`/?page=${Number(page) + 1}&per_page=${perPage}`);
          }}
        >
          Next
          <ChevronLast />
        </Button>
      </div>
      <div className="flex items-center">
        <h1 className="text-gray-800 block">Rows per page</h1>
        <Select>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent side="top">
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default PaginationControls;
