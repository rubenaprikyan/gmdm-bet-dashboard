import { PrismaClient } from '@prisma/client';

/**
 * Singleton Class For DataSource
 */
class CustomDataSource {
  private static instance: PrismaClient;

  /**
   * creates new instance of DataSource, if there is already created it just returns
   * @param config
   */
  public static getInstance(config?: unknown): PrismaClient {
    if (CustomDataSource.instance) {
      return CustomDataSource.instance;
    }

    CustomDataSource.instance = new PrismaClient(config as never);

    return CustomDataSource.instance;
  }

  public static async initialize(config: unknown): Promise<void> {
    CustomDataSource.instance = new PrismaClient(config as never);

    return Promise.resolve();
  }
}

export default CustomDataSource;

export type DataSource = PrismaClient;
