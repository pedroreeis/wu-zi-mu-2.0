require('dotenv/config');

const { ShardingManager } = require('discord.js')
const manager = new ShardingManager('./wuzimu.js', {

    token: process.env.DISCORD_TOKEN,
    totalShards: parseInt(process.env.SHARD_COUNT) || 'auto'
})

manager.spawn()
manager.on('shardCreate', shard => console.log(`Launching shard ${shard.id}`))
