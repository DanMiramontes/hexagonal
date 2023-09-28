import { EmailSender } from "../domain/email-sender";
export class FakeEmailSender implements EmailSender {
  async send(email: string, text: string): Promise<string> {
    console.log(`Simulating email to ${email}, text ${text}`);
    return `Simulating email to ${email}, text ${text}`;
  }
}
