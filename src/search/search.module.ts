import { Module } from '@nestjs/common';
import { PipelineModule } from '../pipeline/pipeline.module.js';
import { SearchController } from './search.controller.js';

@Module({
  imports: [PipelineModule],
  controllers: [SearchController],
})
export class SearchModule {}
