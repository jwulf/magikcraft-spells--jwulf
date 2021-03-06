const magik = magikcraft.io;
const Collectors = java.util.stream.Collectors;

function main(name, period = 5000) {
    const world = magik.aspecto().world
    const target = world.getLivingEntities()
        .stream()
        .filter(entity => entity.getName() == name)
        .collect(Collectors.toList())
    if (target.length > 0) {
        cancelTracker()
        track(target[0], period)
    } else {
        echo(self, `${name} not found`)
    }
}

function cancelTracker() {
    const tracker = magik.memento.getItem('tracker')
    if (tracker) {
        echo(self, `Cancelling ${tracker}`)
        clearInterval(tracker);
    }
}

function track(target, period) {
    magik.memento.setItem("target", target)
    magik.memento.setItem('tracker',
        setInterval(() => {
            self.setCompassTarget(target.location)
            // echo(self, `Tracking ${target.getName()}`)
        }, period))
    echo(self, `Tracking ${target.getName()} every ${period/1000}s`)
}