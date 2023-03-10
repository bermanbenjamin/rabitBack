import { ConsoleLogger } from '@nestjs/common';

export class RabitLogger extends ConsoleLogger {
  constructor(context: string) {
    super(context);
  }

  log(message: string) {
    super.log(`${message}`);
  }

  warn;
}
