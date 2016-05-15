/// <reference path="./interfaces.d.ts" />

let dir = {
    a: "├──",
    b: "└──",
    c: "│",
    d: ""
};

let deatultOptions: ILoggerSettings = {
    request: {
        bindings: {
            activated: false,
            cache: false,
            constraint: false,
            dynamicValue: false,
            factory: false,
            implementationType: false,
            onActivation: false,
            provider: false,
            scope: false,
            serviceIdentifier: false,
            type: false
        },
        result: false,
        serviceIdentifier: false,
        target: {
            metadata: false,
            name: false,
            serviceIdentifier: false
        }
    }
};

function consoleRenderer(out: string) {
    console.log(out);
}

function makeLoggerMiddleware(settings?: ILoggerSettings, renderer?: (out: string) => void) {

    let logger = function (next: (context: inversify.IContext) => any) {
        return function (context: inversify.IContext) {

            if (settings === undefined) { settings = deatultOptions; };
            if (renderer === undefined) { renderer = consoleRenderer; };

            let result = next(context);
            console.log(dir);
            return result;

        };
    };

    return logger;

}

export default makeLoggerMiddleware;
