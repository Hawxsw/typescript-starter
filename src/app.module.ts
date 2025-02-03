import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeadsModule } from './leads/leads.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [LeadsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
