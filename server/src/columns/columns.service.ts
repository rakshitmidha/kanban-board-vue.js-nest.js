import { Injectable, NotFoundException } from '@nestjs/common';

export interface Column {
    id: number;
    name: string;
    cards: Card[];
  }
  
  interface Card {
    id: number;
    title: string;
  }
  
  @Injectable()
  export class ColumnsService {
    private columns: Column[] = [
      { id: 1, name: 'To Do', cards: [{ id: 1, title: 'Task 1' }] },
      { id: 2, name: 'In Progress', cards: [{ id: 2, title: 'Task 2' }] },
      { id: 3, name: 'Done', cards: [{ id: 3, title: 'Task 3' }] },
      { id: 4, name: 'Archived', cards: [{ id: 4, title: 'Task 4' }] },
    ];
  
    findAll(): Column[] {
      return this.columns;
    }
  
    findOne(id: number): Column {
      const column = this.columns.find((col) => col.id === id);
      if (!column) throw new NotFoundException('Column not found');
      
      return column;
    }
  
    create(name: string): Column {
      const newColumn: Column = { id: Date.now(), name, cards: [] };
      this.columns.push(newColumn);
      
      return newColumn;
    }
  
    update(id: number, name: string): Column {
      const column = this.findOne(id);
      column.name = name;
      
      return column;
    }
  
    delete(id: number): void {
      const index = this.columns.findIndex((col) => col.id === id);
      if (index === -1) throw new NotFoundException('Column not found');
      
      this.columns.splice(index, 1);
    }
  }
  