const isNode = (eval(`typeof magikcraft == 'undefined'`))
const say = (isNode) ? console.log : magikcraft.io.dixit;
const _setTimeout = (isNode) ? setTimeout : magikcraft.io.setTimeout;

const NanoFlux = require('nanoflux-fusion');

function redux() {
    const fusionStore = NanoFlux.getFusionStore();

    function init() {
        NanoFlux.createFusionator({
            increment: state => ({ counter: state.counter + 1 }),
            decrement: state => ({ counter: state.counter - 1 }),
            add: (state, args) => ({counter: state.counter+args[0]}),
            reset: state => ({ counter: 0 })
        },
        { counter: 0});

        const subscription = fusionStore.subscribe(this, state =>
            say(`Counter: ${state.counter}`)
        );
    }

    const initialised = (!!fusionStore.getState());
    if (!initialised) {
        init();
    }

    const increment = NanoFlux.getFusionActor("increment");
    const decrement = NanoFlux.getFusionActor("decrement");
    const add = NanoFlux.getFusionActor("add");
    const reset = NanoFlux.getFusionActor("reset");

    say('Start test');

    if (initialised) {
        reset();
    }

    [
        () => increment(),
        () => increment(),
        () => increment(),
        () => decrement(),
        () => decrement(),
        () => increment(),
        () => add(10),
        () => say('Done!')
    ].forEach((fn, i) => _setTimeout(fn, i * 1000));
}

(isNode && redux());