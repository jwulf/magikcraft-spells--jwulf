const magik = magikcraft.io;

function main() {
	const target: LivingEntity = magik.memento.getItem("target")
    const world = target.getWorld()
    world.createExplosion(target.location, 1)
    echo(self, `Terminating ${target.getName()}!`)
}
