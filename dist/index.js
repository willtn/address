(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "funfix-core"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var funfix_core_1 = require("funfix-core");
    var Address = /** @class */ (function () {
        function Address(id, line1, line2, zip, city, state, countryCode, comment, coordinates, geocoder) {
            if (id === void 0) { id = 'AAAAAAAAAAAAAAAAAAAAAA'; }
            if (line1 === void 0) { line1 = funfix_core_1.Option.none(); }
            if (line2 === void 0) { line2 = funfix_core_1.Option.none(); }
            if (zip === void 0) { zip = funfix_core_1.Option.none(); }
            if (city === void 0) { city = funfix_core_1.Option.none(); }
            if (state === void 0) { state = funfix_core_1.Option.none(); }
            if (countryCode === void 0) { countryCode = funfix_core_1.Option.none(); }
            if (comment === void 0) { comment = funfix_core_1.Option.none(); }
            if (coordinates === void 0) { coordinates = funfix_core_1.Option.none(); }
            if (geocoder === void 0) { geocoder = funfix_core_1.Option.none(); }
            this.id = id;
            this.line1 = line1;
            this.line2 = line2;
            this.zip = zip;
            this.city = city;
            this.state = state;
            this.countryCode = countryCode;
            this.comment = comment;
            this.coordinates = coordinates;
            this.geocoder = geocoder;
        }
        Address.fromRaw = function (raw) {
            return new Address(raw.id, funfix_core_1.Option.of(raw.line1), funfix_core_1.Option.of(raw.line2), funfix_core_1.Option.of(raw.zip), funfix_core_1.Option.of(raw.city), funfix_core_1.Option.of(raw.state), funfix_core_1.Option.of(raw.countryCode), funfix_core_1.Option.of(raw.comment), funfix_core_1.Option.of(raw.coordinates), funfix_core_1.Option.of(raw.geocoder));
        };
        Address.toRaw = function (address) {
            return {
                city: address.city.orUndefined(),
                comment: address.comment.orUndefined(),
                coordinates: address.coordinates.orUndefined(),
                countryCode: address.countryCode.orUndefined(),
                geocoder: address.countryCode.orUndefined(),
                id: address.id,
                line1: address.line1.orUndefined(),
                line2: address.line2.orUndefined(),
                state: address.state.orUndefined(),
                zip: address.zip.orUndefined()
            };
        };
        return Address;
    }());
    exports.Address = Address;
});
//# sourceMappingURL=index.js.map