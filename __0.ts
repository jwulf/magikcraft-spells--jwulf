const magik = magikcraft.io;

const events =require('events')
//import * as events from 'events'

events.projectileHit(evt => {
     console.log('ProjectileHit')
     const pig = Java.type("org.bukkit.entity.EntityType").PIG;
    
    const where = magik.aspecto();
    const world = where.getWorld();

    const zombie = world.spawnEntity(where, pig); 
    return true
    
})

magik.dixit('Event registered')


function spawnPig(evt) {
     console.log('ProjectileHit')
     const pig = Java.type("org.bukkit.entity.EntityType").PIG;
    
    const where = magik.aspecto();
    const world = where.getWorld();
    magik.dixit(world.toString())

    const zombie = world.spawnEntity(where, pig); 
    return true
    
}