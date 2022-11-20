"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleException = void 0;
const common_1 = require("@nestjs/common");
function handleException(error, termToFind) {
    if (error.code === 11000) {
        throw new common_1.BadRequestException(`El ${termToFind} ya existe en la base de datos ${JSON.stringify(error.keyValue)}`);
    }
    console.log(error);
    throw new common_1.InternalServerErrorException();
}
exports.handleException = handleException;
//# sourceMappingURL=handleExetions.exception.js.map