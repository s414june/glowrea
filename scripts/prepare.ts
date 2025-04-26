import process from 'node:process'
import fs from 'fs-extra'
import { emojiPrefix, iconifyEmojiPackage } from '../config/emojis'

const dereference = process.platform === 'win32' ? true : undefined

await fs.copy(`node_modules/${iconifyEmojiPackage}/icons`, `public/emojis/${emojiPrefix}`, { overwrite: true, dereference })
