import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateFakeArticles1690971528592 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP DATABASE IF EXISTS db_nestjs_practice`);
    await queryRunner.query(`CREATE DATABASE db_nestjs_practice`);
    await queryRunner.query(`USE db_nestjs_practice`);
    await queryRunner.query(
      `CREATE TABLE \`articles_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`content\` varchar(255) NOT NULL, \`author\` varchar(255) NOT NULL, \`creationDate\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `INSERT INTO \`articles_entity\` (\`title\`,\`content\`,\`author\`,\`creationDate\`) VALUES ('Ceci est un test','tesssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssst','Testeur','23/06/2023 17:05:26')`,
    );
    await queryRunner.query(
      `INSERT INTO \`articles_entity\` (\`title\`,\`content\`,\`author\`,\`creationDate\`) VALUES ('Ceci est un test2','tesssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssst2','Testeur2','23/06/2023 17:05:26')`,
    );
    await queryRunner.query(
      `INSERT INTO \`articles_entity\` (\`title\`,\`content\`,\`author\`,\`creationDate\`) VALUES ('Ceci est un test5','tesssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssst5','Testeur','23/06/2023 17:05:26')`,
    );
    await queryRunner.query(
      `INSERT INTO \`articles_entity\` (\`title\`,\`content\`,\`author\`,\`creationDate\`) VALUES ('Ceci est un test7','tesssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssst7','Testeur','23/06/2023 17:05:26')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // console.log('queryRunner :>> ', queryRunner);
    await queryRunner.query(`DROP TABLE \`articles_entity\``);
  }
}
