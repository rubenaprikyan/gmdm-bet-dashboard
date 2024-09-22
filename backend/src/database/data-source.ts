// import { DataSource } from 'typeorm';
// import models

/**
 * Singleton Class For DataSource
 */
class CustomDataSource {
  private static instance: DataSource;

  /**
   * creates new instance of DataSource, if there is already created it just returns
   * @param config
   */
  public static getInstance(config): DataSource {
    if (CustomDataSource.instance) {
      return CustomDataSource.instance;
    }

    CustomDataSource.instance = new DataSource({
      ...config,
      synchronize: true,
      logging: true,
      entities: [/* Models here */],
    });

    return CustomDataSource.instance;
  }
}

export default CustomDataSource;
