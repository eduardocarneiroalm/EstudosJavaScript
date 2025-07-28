//callbacks

function performe(name, exec) {
    console.log(name, "executou uma função");
    exec();
}

performe("Carlos", () => {
    console.log("olá")
});