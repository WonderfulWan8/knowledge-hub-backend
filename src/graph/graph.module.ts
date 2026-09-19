import { Module } from '@nestjs/common';
import { PipelineModule } from '../pipeline/pipeline.module.js';
import { GraphController } from './graph.controller.js';

@Module({
  imports: [PipelineModule],
  controllers: [GraphController],
})
export class GraphModule {}
