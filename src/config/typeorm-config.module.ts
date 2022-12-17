import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { Module } from "@nestjs/common";
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService): TypeOrmModuleOptions => ({
        type: "postgres",
        database: config.get<string>("DB_NAME"),
        host: config.get("DB_HOST"),
        port: Number(config.get("DB_PORT")) || 5432,
        username: config.get("DB_USERNAME"),
        password: config.get("DB_PASSWORD"),
        autoLoadEntities: true,
        synchronize: config.get("DB_SYNC"),
      }),
    }),
  ],
})
export class TypeOrmConfigModule {}
