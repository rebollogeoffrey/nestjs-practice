import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateArticlesTable1690969833057 implements MigrationInterface {
  name = 'CreateArticlesTable1690969833057';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`articles_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`content\` varchar(255) NOT NULL, \`author\` varchar(255) NOT NULL, \`creationDate\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`articles_entity\``);
  }
}
