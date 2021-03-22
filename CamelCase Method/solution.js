String.prototype.camelCase = function () {
    return this.split(" ")
        .map(function (x) {
        return x[0] !== undefined ? x[0].toUpperCase() + x.slice(1) : "";
    })
        .join("");
};
