declare const java: any;

const magik = magikcraft.io;

const Runtime = java.lang.Runtime;
function gitCommit() {
	 const p = Runtime.getRuntime().exec(["bash","-c","ls /home/"]);
     magik.dixit(p);
}
