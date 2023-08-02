import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArticlesEntity } from './articles.entity/articles.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(ArticlesEntity)
    private articleRepository: Repository<ArticlesEntity>,
  ) {}
  getArticles(): Promise<ArticlesEntity[]> {
    return this.articleRepository.find();
  }

  getArticle(id: number): Promise<ArticlesEntity[]> {
    return this.articleRepository.find({
      select: ['title', 'content', 'author', 'creationDate'],
      where: [{ id: id }],
    });
  }

  saveArticle(article: ArticlesEntity): Promise<ArticlesEntity> {
    return this.articleRepository.save(article);
  }

  updateArticle(article: ArticlesEntity, articleId: number) {
    return this.articleRepository.update(articleId, article);
  }

  deleteArticle(id: number) {
    return this.articleRepository.delete(id);
  }
}
