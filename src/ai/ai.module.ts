import { Module } from '@nestjs/common';
import { PipelineModule } from '../pipeline/pipeline.module.js';
import { AiChatService } from './ai-chat.service.js';
import { AiController } from './ai.controller.js';
import { ChatSessionService } from './chat-session.service.js';
import { HybridRetrievalService } from './hybrid-retrieval.service.js';
import { RerankerService } from './reranker.service.js';

@Module({
  imports: [PipelineModule],
  controllers: [AiController],
  providers: [
    AiChatService,
    ChatSessionService,
    HybridRetrievalService,
    RerankerService,
  ],
})
export class AiModule {}
