"use client";

import * as React from "react";
import {
    ColumnDef,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
    PaginationState,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { useCharacterStore } from "@/store/charactersStore";
import { useEffect } from "react";
import { lastCharactersTables } from "./LastCharacterTable.types";
import Image from "next/image";

export const columns: ColumnDef<lastCharactersTables>[] = [
    {
        accessorKey: "id",
        header: "ID",
        cell: ({ row }) => <div>{row.getValue("id")}</div>,
    },
    {
        accessorKey: "image",
        header: "Image",
        cell: ({ row }) => (
            <Image src={row.getValue("image")} alt={row.getValue("name")} className="h-16 w-16 rounded-md transform transition duration-300 ease-in-out hover:scale-110" width={60} height={60} priority />
        ),
    },
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => <div>{row.getValue("name")}</div>,
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue("status") as string;
            let statusColor = "";

            if (status === "Alive") {
                statusColor = "dark:text-green-400";
            }

            if (status === "Dead") {
                statusColor = "dark:text-red-400";
            }

            return <div className={`capitalize ${statusColor}`}>{status}</div>;
        },
    },
    {
        accessorKey: "gender",
        header: "Gender",
        cell: ({ row }) => <div>{row.getValue("gender")}</div>,
    },
];

export function LastCharacterTable() {

    const { characters, fetchCharacters } = useCharacterStore();

    const [sorting, setSorting] = React.useState<SortingState>([
        {
            id: "id", // Campo por el cual se hará la ordenación
            desc: true, // Ordenar de forma descendente
        },
    ]);

    const [columnVisibility] = React.useState<VisibilityState>({});
    const [rowSelection] = React.useState({});
    const [pagination, setPagination] = React.useState<PaginationState>({
        pageIndex: 0,
        pageSize: 5,
    });

    const table = useReactTable({
        data: characters,
        columns,
        pageCount: Math.ceil(characters.length / pagination.pageSize), // Total de páginas
        onPaginationChange: setPagination,
        state: {
            sorting, // Pasar el estado de ordenación
            columnVisibility,
            rowSelection,
            pagination,
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    useEffect(() => {
        fetchCharacters();
    }, [fetchCharacters]);

    return (
        <div className="w-full">
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}
