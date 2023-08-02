import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesEntity } from './articles.entity/articles.entity';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articleService: ArticlesService) {}

  @Get(':id')
  getArticleById(@Param() articleId: number) {
    return this.articleService.getArticle(articleId);
  }

  @Get()
  getAllArticles() {
    return this.articleService.getArticles();
  }

  @Post()
  createArticle(@Body() article: ArticlesEntity) {
    return this.articleService.saveArticle(article);
  }

  @Put(':id')
  updateArticle(
    @Param() articleId: number,
    @Body()
    articleContent: {
      title: string;
      content: string;
      author: string;
      creationDate: string;
    },
  ) {
    const article = { id: articleId, ...articleContent };
    return this.articleService.saveArticle(article);
  }

  @Delete(':id')
  deleteArticle(@Param() articleId: number) {
    return this.articleService.deleteArticle(articleId);
  }
}
