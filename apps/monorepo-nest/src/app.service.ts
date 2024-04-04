import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
 constructor(@Inject('MAIL_SERVICE') private clienteMail:ClientProxy){}

  getHello(): string {
    return 'Hola soy la app!';
  }
  newUser(user:any) {
  this.clienteMail.emit('new_mail',user)
    return 'sent_queue'
  }
}