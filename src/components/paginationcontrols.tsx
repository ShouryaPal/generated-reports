// PaginationControls.tsx
"use client";
import type { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { data } from "../../data/data";

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
  const perPage = searchParams.get("per_page") ?? "5";

  return (
    <div className="flex gap-2">
      <Button
        className="bg-blue-500 text-white p-1"
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/?page=${Number(page) - 1}&per_page=${perPage}`);
        }}
      >
        prev page
      </Button>
      <div>
        {page} / {Math.ceil(data.length / Number(perPage))}
      </div>
      <Button
        className="bg-blue-500 text-white p-1"
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/?page=${Number(page) + 1}&per_page=${perPage}`);
        }}
      >
        next page
      </Button>
    </div>
  );
};

export default PaginationControls;
