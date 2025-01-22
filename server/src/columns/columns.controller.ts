import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Param,
    Body,
  } from '@nestjs/common';
  import { ColumnsService } from './columns.service';
  
  @Controller('columns')
  export class ColumnsController {
    constructor(private readonly columnsService: ColumnsService) {}
  
    @Get()
    findAll() {
      return this.columnsService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.columnsService.findOne(+id);
    }
  
    @Post()
    create(@Body('name') name: string) {
      return this.columnsService.create(name);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body('name') name: string) {
      return this.columnsService.update(+id, name);
    }
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.columnsService.delete(+id);
    }
  }