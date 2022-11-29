"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const users_module_1 = require("./users/users.module");
const common_1 = require("@nestjs/common");
const countries_module_1 = require("./countries/countries.module");
const seed_module_1 = require("./seed/seed.module");
const mongoose_1 = require("@nestjs/mongoose");
const common_module_1 = require("./common/common.module");
const groups_module_1 = require("./groups/groups.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            common_module_1.CommonModule,
            users_module_1.UsersModule,
            countries_module_1.CountriesModule,
            seed_module_1.SeedModule,
            mongoose_1.MongooseModule.forRoot("mongodb+srv://kravmaga:Holagmail01@cluster0.silh5ua.mongodb.net/?retryWrites=true&w=majority", {
                authMechanism: "SCRAM-SHA-1",
            }),
            groups_module_1.GroupsModule,
        ],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map