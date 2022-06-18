import { Args, Command } from '@sapphire/framework';
import { Message, MessageAttachment } from 'discord.js';
import DIG from 'discord-image-generation';

export class SubCommand extends Command {
  public constructor(context: Command.Context, options: Command.Options) {
    super(context, {
        ...options,
        name: 'bed',
        description: 'No description provided.',
      });
  }
  public async messageRun(message: Message, args: Args) {
      let sa = await args.pick('user').catch(() => message.author);
      let avatar = sa.avatarURL({ dynamic: false, format:'png'})

      let img = await new DIG.Bed().getImage(`${avatar}`, `${message.author.avatarURL()}`)
  let attach = new MessageAttachment(img, "blur.png");;
  message.channel.send({ files: [attach]})
  }
}