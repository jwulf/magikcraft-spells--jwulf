
const magik = magikcraft.io;

function runTests() {
    let testCount, testRunning, asyncTest, currentTest, asyncTimeout;
    const tests = [];

    function runTest(){
        if (testRunning || tests.length == 0) {
            return;
        }
        testRunning = true;
        const test = tests.pop();
        _test(test.name, test.fn, (err, result) => {
            if (err) {
                magik.dixit('Error!');
                err.forEach(msg => magik.dixit(msg));
            } else {
                magik.dixit(result);
            }
            testRunning = false;
            runTest();
        });
    }

    function _test(name, fn, cb) {
        testCount = 0;
        currentTest = name;
        magik.dixit(`Testing ${name}...`);
        try{
            if (fn) {
                asyncTest = (fn.length > 0);
                if (!asyncTest) {
                    fn();
                    cb(null, `§a${name} passed ${testCount} assertions`);
                } else { // asyncTest
                    asyncTimeout = magik.setTimeout(() => {
                        magik.dixit(`§6${currentTest} timed out on #${testCount}`);
                    }, 8000);
                    fn(() => {
                        cb(null, `§a${name} passed ${testCount} assertions`);
                        magik.clearTimeout(asyncTimeout);
                    });
                }
             } else {
                 return;
             }
        } catch(e) {
            cb([`§6${name} failed test #${testCount}`, e.message]);
        }
    }

    const test = (name, fn) => {
        tests.push({ name, fn });
        runTest();
    }

    const expect = value => ({
        toBe: expected => {
            testCount ++;
            if (value !== expected) {
                const msg = `Expected: ${expected}. Actual: ${value}`;
                if (asyncTest) {
                    magik.dixit(`§6${currentTest} failed test #${testCount}`);
                    magik.dixit(msg);
                }
                throw new Error(msg);
            }
            return true;
        }
    });

    const run = cmd => {
        const plugin = magik.getPlugin();
        const sender = magik.getSender();
        plugin.getServer().dispatchCommand(sender, cmd);
    }
    magik.dixit(`§6=============================`);
    magik.dixit(`§3Testing Magik API version ${magik.version()}`);
    
    test('magik.hic()', () => {
        run(`mv tp world-intro`);
        const here = magik.hic();
        expect(here.getX()).toBe(-258.0);
        expect(here.getY()).toBe(71.0);
        expect(here.getZ()).toBe(-70.0);
        expect(here.getPitch()).toBe(0.0);
        expect(here.getYaw()).toBe(0.0);
        expect(here.getWorld().getName()).toBe('world-intro'); 
    });

    test('magik.aspecto()', () => {
        run(`mv tp world-intro`);
        const there = magik.aspecto();
        expect(there.getX()).toBe(-258.0);
        expect(there.getY()).toBe(73.0);
        expect(there.getZ()).toBe(-47.0);
        expect(there.getPitch()).toBe(0.0);
        expect(there.getYaw()).toBe(0.0);
    });

    test('magik.ianuae()', done => {
        run(`mv tp world-intro`);
        const there = magik.aspecto();
        magik.ianuae(there);
        magik.setTimeout(() => {
            const here = magik.hic();
            expect(Math.round(here.getX())).toBe(-258);
            expect(here.getY()).toBe(73.0);
            expect(here.getZ()).toBe(-47.0);
            done();
        }, 1000);
    });

    test('magik.memento()', () => {
        run(`mv tp world-intro`);
        const _here = magik.hic();
        magik.memento('intro', _here);
        const here = magik.exmemento('intro');
        expect(here.getX()).toBe(-258.0);
        expect(here.getY()).toBe(71.0);
        expect(here.getZ()).toBe(-70.0);
        expect(here.getPitch()).toBe(0.0);
        expect(here.getYaw()).toBe(0.0);
        expect(here.getWorld().getName()).toBe('world-intro'); 
    });

    test('eventbus', () => {
        const here = magik.hic();
        let _bridge;
        const bridge = {
            X: -264.30257126150656,
            Y: 66,
            Z: -34.658305468652806,
            Yaw: -0.750007152557373,
            Pitch: 8.850008010864258
        };

        here.setX(bridge.X);
        here.setY(bridge.Y);
        here.setZ(bridge.Z);
        here.setYaw(bridge.Yaw);
        here.setPitch(bridge.Pitch);
        magik.ianuae(here);

        const there = magik.hic();
        expect(there.getX()).toBe(bridge.X);
        expect(there.getY()).toBe(bridge.Y);
        expect(there.getZ()).toBe(bridge.Z);
        expect(there.getYaw()).toBe(bridge.Yaw);
        expect(there.getPitch()).toBe(bridge.Pitch);

        eventbus.subscribe('_test', (msg) => {
            _bridge = msg.data;
        });
        eventbus.publish('_test', magik.toJSON(there));
        
        run(`mv tp world-intro`);
        const _here = magik.hic();
        expect(_here.getX()).toBe(-258.0);
        expect(_here.getY()).toBe(71.0);
        expect(_here.getZ()).toBe(-70.0);
        expect(_here.getPitch()).toBe(0.0);
        expect(_here.getYaw()).toBe(0.0);
        expect(_here.getWorld().getName()).toBe('world-intro'); 

        magik.ianuae(magik.fromJSON(_bridge));
        const _there = magik.hic();
        expect(_there.getX()).toBe(bridge.X);
        expect(_there.getY()).toBe(bridge.Y);
        expect(_there.getZ()).toBe(bridge.Z);
        expect(_there.getYaw()).toBe(bridge.Yaw);
        expect(_there.getPitch()).toBe(bridge.Pitch);

    });

    test('Eventemitter', () => {
        const e = new EventEmitter(), test_data = 'test data', event = '_event';
        let line;
        expect(line).toBe(undefined);
        e.on('_event', data => line = data);
        e.emit('_event', test_data);
        expect(line).toBe(test_data);
    });

    test('Promise', done => {
        const testString = "Hello World";
        const a = new Promise((resolve, reject) => resolve(testString));
        a.then(msg => {
            expect(msg).toBe(testString);
            done();
        });
    })
}
