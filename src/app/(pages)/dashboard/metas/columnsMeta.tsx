'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

import { MoreHorizontal, Pencil, Trash } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export type MetasType = {
  id: string;
  meta: string;
  valorAtual: number;
  valorTotal: number;
  tag: string;
  progress?: undefined;
};

export const columnsMeta: ColumnDef<MetasType>[] = [
  {
    accessorKey: 'id',
    header: 'Ações',
    cell: () => {
      // const meta = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="cursor-pointer">
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {/* <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(meta.id)}
            >
              Copy meta ID
            </DropdownMenuItem>
            <DropdownMenuSeparator /> */}
            <DropdownMenuItem className="flex justify-between cursor-pointer">
              Atualizar <Pencil />
            </DropdownMenuItem>
            <DropdownMenuItem className="flex justify-between cursor-pointer">
              Deletar <Trash />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  {
    accessorKey: 'meta',
    header: 'Meta',
  },
  {
    accessorKey: 'valorAtual',
    header: 'Valor Atual',
    cell: ({ row }) => {
      const valorAtual = parseFloat(row.getValue('valorAtual'));
      const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(valorAtual);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'valorTotal',
    header: 'Valor Total',
    cell: ({ row }) => {
      const valorTotal = parseFloat(row.getValue('valorTotal'));
      const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(valorTotal);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'tag',
    header: 'Tag',
    cell: ({ row }) => {
      const tag: string = row.getValue('tag');
      return <Badge variant="outline">{tag ? tag : ''}</Badge>;
    },
  },
  {
    accessorKey: 'progress',
    header: 'Progresso',
    cell: ({ row }) => {
      const valorAtual: number = row.getValue('valorAtual');
      const valorTotal: number = row.getValue('valorTotal');

      const progress: number | null =
        valorAtual && valorTotal ? (valorAtual / valorTotal) * 100 : null;
      return (
        <div className="flex items-center gap-2">
          <span>{progress}%</span>
          <Progress className="border-1 border-black" value={progress} />
        </div>
      );
    },
  },
];
