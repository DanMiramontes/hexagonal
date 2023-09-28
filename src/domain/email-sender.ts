export interface EmailSender {
  send(eamil: string, text: string): Promise<string>;
}
