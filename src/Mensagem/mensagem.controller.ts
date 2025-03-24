import { Controller, Get } from '@nestjs/common';
import { MensagemService } from './mensagem.service';

@Controller()
export class MensagemController {
  constructor(private readonly mensagemService: MensagemService) {}

  @Get()
  getHello(): string {
    return this.mensagemService.getHello();
  }
}
