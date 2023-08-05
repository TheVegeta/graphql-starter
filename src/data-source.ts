import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "db.sqlite",
  synchronize: false,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});
