import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('test')
  getTest() {
    return {
      success: true,
      message: 'NestJS API is working',
      data: [
        {
          id: 1,
          name: 'Product One',
          price: 100,
        },
        {
          id: 2,
          name: 'Product Two',
          price: 200,
        },
        {
          id: 3,
          name: 'Product Three',
          price: 300,
        },
      ],
    };
  }
}