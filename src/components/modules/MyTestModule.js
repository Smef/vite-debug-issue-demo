import SecondaryModule from './SecondaryModule.js'
export default {
    writeHello: () => {
        console.log('Hello from the module!');
    },
    server: {
        host: '0.0.0.0'
    }
}