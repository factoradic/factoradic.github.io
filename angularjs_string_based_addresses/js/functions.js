String.prototype.capitalize = function () {
    return this.replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase();
    });
};

String.prototype.normalize = function () {
    return this.replace(/-/g, ' ').capitalize();
};
