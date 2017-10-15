const magik = magikcraft.io;

function clearTimers() {
    magik.getPlugin().scheduler.cancelAllTasks();
}
