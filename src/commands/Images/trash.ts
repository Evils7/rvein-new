import { Args, Command } from '@sapphire/framework';
import { Message, MessageAttachment } from 'discord.js';
import DIG from 'discord-image-generation';

export class SubCommand extends Command {
  public constructor(context: Command.Context, options: Command.Options) {
    super(context, {
        ...options,
        name: 'trash',
        description: 'makes someone trash.',
      });
  }
  public async messageRun(message: Message, args: Args) {
      let sa = await args.pick('user').catch(() => message.author);
      let avatar = sa.avatarURL({ dynamic: false, format:'png'})

      let img = await new DIG.Trash().getImage(`${avatar}`)
  let attach = new MessageAttachment(img, "blur.png");;
  message.channel.send({ files: [attach]})
  }
}