import { Injectable } from '@nestjs/common';

@Injectable()
export class MensagemService {
  getHello(): string {
    return 'Boa noite a todos!';
  }
}
