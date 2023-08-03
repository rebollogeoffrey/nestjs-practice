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
  getArticleById(@Param() params) {
    const articleId: number = parseInt(params.id);
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
    @Param() params,
    @Body()
    body: {
      title: string;
      content: string;
      author: string;
      creationDate: string;
    },
  ) {
    const article = { id: parseInt(params.id), ...body };
    return this.articleService.updateArticle(article, params.id);
  }

  @Delete(':id')
  deleteArticle(@Param() id: number) {
    return this.articleService.deleteArticle(id);
  }
}
