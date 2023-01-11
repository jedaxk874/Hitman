import { join } from 'path'
import { BaseCommand, Command, Message } from '../../Structures'

@Command('dk', {
    description: "Displays bot's info",
    usage: 'dk',
    category: 'general',
    cooldown: 10,
    exp: 100
})
export default class extends BaseCommand {
    public override execute = async ({ reply }: Message): Promise<void> => {
        const
        }
        const image = this.client.assets.get('chisato') as Buffer
        const uptime = this.client.utils.formatSeconds(process.uptime())
        const text = `*Chisato-WhatsApp* \n\n📡 *Description: ${description}*\n\n🛠️ *Commands:* ${this.handler.commands.size}\n\n🛡️ *Uptime:* ${uptime}`
        return void (await reply(image, 'image', undefined, undefined, text, undefined, {
            title: this.client.utils.capitalize(name),
            thumbnail: image,
            mediaType: 1,
            sourceUrl: homepage
        }))
    }
}
