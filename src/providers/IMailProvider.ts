export interface IMessage{
    to: IAddress;
    from: IAddress;
    subject: string;
    body: string;
}

interface IAddress{
    email: string;
    name: string;
}

export interface IMailProvider{
    sendMail(message: IMessage): Promise<void>;
}