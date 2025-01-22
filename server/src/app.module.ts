import { Module } from '@nestjs/common';
import { ColumnsModule } from './columns/columns.module';

@Module({
  imports: [ColumnsModule],
})
export class AppModule {}
