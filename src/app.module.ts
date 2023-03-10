import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { FirebaseAuthStrategy } from './auth/firebase.auth.strategy';
import { HabitModule } from './habit/habit.module';
import { PrismaService } from './prisma.service';
import { RoutineModule } from './routine/routine.module';
import { ToDoModule } from './toDo/todo.module';
import { UserModule } from './user/user.module';

@Global()
@Module({
  imports: [
    UserModule,
    HabitModule,
    ToDoModule,
    RoutineModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/@generated/schema.gql'),
      buildSchemaOptions: { dateScalarMode: 'timestamp' },
    }),
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
  ],
  providers: [PrismaService, FirebaseAuthStrategy],
})
export class AppModule {}
