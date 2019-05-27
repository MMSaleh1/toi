webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RootProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RootProvider = /** @class */ (function () {
    function RootProvider(http) {
        this.http = http;
        console.log('Hello RootProvider Provider');
    }
    RootProvider.APIURL4 = "http://edge2018-001-site12.gtempurl.com/api/";
    RootProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RootProvider);
    return RootProvider;
}());

//# sourceMappingURL=root.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* unused harmony export Address */
/* unused harmony export state */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__root_root__ = __webpack_require__(104);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = /** @class */ (function (_super) {
    __extends(UserProvider, _super);
    function UserProvider(http, storage) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.storage = storage;
        _this.userApiController = 'users/';
        _this.logInActionString = "user_login?";
        _this.regesterActionString = "user_reg?";
        _this.getSaltActionString = "get_salt?";
        _this.customerRoleActionString = "custmoer_role?";
        _this.addPhonenumber = "add_phone?";
        _this.addressApiController = "address/";
        _this.addAddressActionString = "add_address?";
        _this.stateApiController = "State/";
        _this.getStatesActionString = "get_states?";
        _this.addressUserLinkActionString = "link_user_address?";
        _this.getUserAddressActionString = "get_user_address?";
        _this.rateApiController = 'product/';
        _this.rateActionString = "add_review?";
        return _this;
    }
    UserProvider.prototype.RegesterNop = function (Username, password, email, PhoneNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var date = new Date();
                        console.log(date);
                        var F = false;
                        var T = true;
                        var temp = "" + __WEBPACK_IMPORTED_MODULE_3__root_root__["a" /* RootProvider */].APIURL4 + _this.userApiController + _this.regesterActionString + "Username=" + email + "&Email=" + email + "&Password=" + password + "&PasswordFormatId=1&IsTaxExempt=" + F + "&AffiliateId=0&VendorId=0&HasShoppingCartItems=" + F + "&Active=" + T + "&Deleted=" + F + "&IsSystemAccount=" + F + "&LastActivityDateUtc=" + date.toJSON();
                        console.log(temp);
                        _this.http.get(temp).subscribe(function (data) {
                            console.log(data);
                            if (data != null && data != undefined && data.length > 0) {
                                var customerRoleTemp = "" + __WEBPACK_IMPORTED_MODULE_3__root_root__["a" /* RootProvider */].APIURL4 + _this.userApiController + _this.customerRoleActionString + "customer_id=" + data[0].ID;
                                _this.http.get(customerRoleTemp).subscribe(function (d2) {
                                    console.log(d2);
                                });
                                var customerPhoneTemp = "" + __WEBPACK_IMPORTED_MODULE_3__root_root__["a" /* RootProvider */].APIURL4 + _this.userApiController + _this.addPhonenumber + "EntityId=" + data[0].ID + "&Value=" + PhoneNumber;
                                console.log(customerPhoneTemp);
                                _this.http.get(customerPhoneTemp).subscribe(function (data) {
                                    console.log(data);
                                });
                                _this.user = User.getInstance(data[0].ID, Username, password, email);
                                resolve(data[0].ID);
                            }
                            else {
                                resolve("-1");
                            }
                        });
                    })];
            });
        });
    };
    UserProvider.prototype.loginNop = function (email, password, salt) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var temp = "" + __WEBPACK_IMPORTED_MODULE_3__root_root__["a" /* RootProvider */].APIURL4 + _this.userApiController + _this.logInActionString + "Email=" + email + "&Password=" + password + "&salt=" + salt;
                        console.log(temp);
                        _this.http.get(temp).subscribe(function (data) {
                            if (data != null && data != undefined && data.length > 0) {
                                console.log(data[0].Id + "  : " + data[0].Username + "  :  " + data[0].Password + "  :  " + data[0].Email);
                                _this.user = User.getInstance(data[0].Id, data[0].Username, data[0].Password, data[0].Email);
                                console.log(_this.user);
                                resolve(true);
                            }
                            else {
                                resolve(false);
                            }
                        });
                    })];
            });
        });
    };
    UserProvider.prototype.getSualt = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var temp;
            return __generator(this, function (_a) {
                temp = "" + __WEBPACK_IMPORTED_MODULE_3__root_root__["a" /* RootProvider */].APIURL4 + this.userApiController + this.getSaltActionString + "Email=" + email + "&Username=\"\"";
                console.log(temp);
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.http.get(temp).subscribe(function (data) {
                            if (data) {
                                resolve(data[0].PasswordSalt);
                            }
                            else {
                                resolve(-1);
                            }
                        }, function (err) {
                            console.log(err);
                            resolve(-1);
                        });
                    })];
            });
        });
    };
    UserProvider.prototype.getState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var temp, states;
            return __generator(this, function (_a) {
                temp = "" + __WEBPACK_IMPORTED_MODULE_3__root_root__["a" /* RootProvider */].APIURL4 + this.stateApiController + this.getStatesActionString;
                states = new Array();
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.http.get(temp).subscribe(function (data) {
                            console.log(data);
                            if (data != undefined && data.length > 0) {
                                for (var i = 0; i < data.length; i++) {
                                    states.push(new state(data[i].Id, data[i].CountryId, data[i].Name));
                                }
                                resolve(states);
                            }
                            else {
                                resolve([]);
                            }
                        }, function (err) {
                            console.log(err);
                            resolve([]);
                        });
                    })];
            });
        });
    };
    UserProvider.prototype.getStateById = function (states, id) {
        var chosen;
        states.forEach(function (element) {
            if (element.id == id) {
                chosen = element;
            }
        });
        return chosen;
    };
    UserProvider.prototype.getStateByName = function (states, name) {
        var chosen;
        states.forEach(function (element) {
            if (element.name.toLowerCase() === name.toLowerCase()) {
                console.log(element.name.toLowerCase() === name.toLowerCase());
                chosen = element;
            }
        });
        return chosen;
    };
    UserProvider.prototype.getUser = function () {
        return User.getInstance();
    };
    UserProvider.prototype.addAddress = function (address, zipCode, email, stateId, userId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var temp;
            return __generator(this, function (_a) {
                temp = "" + __WEBPACK_IMPORTED_MODULE_3__root_root__["a" /* RootProvider */].APIURL4 + this.addressApiController + this.addAddressActionString + "Email=" + email + "&Company=\"\"&StateProvinceId=" + stateId + "&Address1=" + address.toString() + "&Address2=\"\"&ZipPostalCode=" + zipCode + "&PhoneNumber=\"\"&FaxNumber=\"\"";
                console.log(temp);
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.http.get(temp).subscribe(function (data) {
                            console.log(data.length);
                            if (data != undefined && data.length > 0) {
                                address.id = data[0].ID;
                                _this.user = _this.getUser();
                                _this.user.addSavedAddress(address);
                                _this.storage.set('user', _this.user);
                                var userLinkApi = "" + __WEBPACK_IMPORTED_MODULE_3__root_root__["a" /* RootProvider */].APIURL4 + _this.addressApiController + _this.addressUserLinkActionString + "Customer_Id=" + userId + "&Address_Id=" + address.id;
                                console.log(userLinkApi);
                                _this.http.get(userLinkApi).subscribe(function (data) {
                                    console.log(data);
                                    resolve(address.id);
                                });
                            }
                            resolve(null);
                        });
                        resolve(null);
                    })];
            });
        });
    };
    UserProvider.prototype.getAddress = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var temp;
            return __generator(this, function (_a) {
                temp = "" + __WEBPACK_IMPORTED_MODULE_3__root_root__["a" /* RootProvider */].APIURL4 + this.addressApiController + this.getUserAddressActionString + "Customer_Id=" + userId;
                console.log(temp);
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.http.get(temp).subscribe(function (data) {
                            console.log(data);
                            var userAddress = new Array();
                            if (data != undefined && data.length > 0) {
                                for (var i = 0; i < data.length; i++) {
                                    userAddress.push(new Address());
                                    userAddress[i].fromString(data[i].Address1);
                                    userAddress[i].id = data[i].Address_Id;
                                    userAddress[i].zipCode = data[i].ZipPostalCode;
                                }
                                _this.user = _this.getUser();
                                console.log(_this.user);
                                _this.user.addresses = userAddress;
                                resolve(userAddress);
                            }
                            else {
                                resolve(userAddress);
                            }
                        }), function (err) {
                            resolve(err);
                        };
                    })];
            });
        });
    };
    UserProvider.prototype.rate = function (productId, rate, title, body) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var temp;
            return __generator(this, function (_a) {
                temp = "" + __WEBPACK_IMPORTED_MODULE_3__root_root__["a" /* RootProvider */].APIURL4 + this.rateApiController + this.rateActionString + "CustomerId=" + this.user.id + "&ProductId=" + productId + "&Rating=" + rate + "&Title=" + title + "&ReviewText=" + body;
                console.log(temp);
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.http.get(temp).subscribe(function (data) {
                            resolve(data);
                        }, function (err) {
                            resolve(err);
                        });
                    })];
            });
        });
    };
    UserProvider.prototype.removeAddress = function (address) {
        this.user.removeSavedAddress(address);
        this.storage.set('user', this.user);
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], UserProvider);
    return UserProvider;
}(__WEBPACK_IMPORTED_MODULE_3__root_root__["a" /* RootProvider */]));

var User = /** @class */ (function () {
    function User(id, name, gender, password, email, phone, lName, fName, address) {
        if (id === void 0) { id = "-1"; }
        if (name === void 0) { name = ""; }
        if (gender === void 0) { gender = "Male"; }
        if (password === void 0) { password = ""; }
        if (email === void 0) { email = ""; }
        if (phone === void 0) { phone = ""; }
        if (lName === void 0) { lName = ""; }
        if (fName === void 0) { fName = ""; }
        if (address === void 0) { address = new Array(); }
        if (User.isCreating) {
            throw new Error("An Instance Of User Singleton Already Exists");
        }
        else {
            this.setData(id, name, password, email, gender, phone, address);
            User.isCreating = true;
        }
    }
    User.prototype.setData = function (id, name, password, email, gender, phone, address) {
        if (id === void 0) { id = "-1"; }
        if (name === void 0) { name = ""; }
        if (password === void 0) { password = ""; }
        if (email === void 0) { email = ""; }
        if (gender === void 0) { gender = "Male"; }
        if (phone === void 0) { phone = ""; }
        if (address === void 0) { address = new Array(); }
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.addresses = new Array();
        this.addresses = address;
        this.password = password;
        this.email = email;
        this.phone = phone;
    };
    User.getInstance = function (id, name, password, email, gender, phone, fName, lName, address) {
        if (id === void 0) { id = "-1"; }
        if (name === void 0) { name = ""; }
        if (password === void 0) { password = ""; }
        if (email === void 0) { email = ""; }
        if (gender === void 0) { gender = "ذكر"; }
        if (phone === void 0) { phone = ""; }
        if (fName === void 0) { fName = ""; }
        if (lName === void 0) { lName = ""; }
        if (address === void 0) { address = new Array(); }
        if (User.isCreating === false && id != "-1") {
            //User.isCreating = false;
            User.instance = new User(id, name, gender, password, email, phone, lName, fName, address);
            console.log(console.log(User.instance));
        }
        if (id != "-1") {
            User.instance.setData(id, name, password, email, gender, phone, address);
        }
        return User.instance;
    };
    User.prototype.addSavedAddress = function (address) {
        this.addresses.push(address);
    };
    User.prototype.removeSavedAddress = function (u) {
        var pos = -1;
        for (var i = 0; i < this.addresses.length; i++) {
            if (this.addresses[i] === u) {
                pos = i;
            }
        }
        if (pos >= 0) {
            this.addresses.splice(pos, 1);
        }
    };
    User.instance = null;
    User.isCreating = false;
    return User;
}());

var Address = /** @class */ (function () {
    function Address(houseNum, street, block, district, city, country, zipCode) {
        if (houseNum === void 0) { houseNum = ""; }
        if (street === void 0) { street = ""; }
        if (block === void 0) { block = ""; }
        if (district === void 0) { district = ""; }
        if (city === void 0) { city = ""; }
        if (country === void 0) { country = ""; }
        if (zipCode === void 0) { zipCode = ""; }
        this.houseNum = houseNum;
        this.street = street;
        this.Block = block;
        this.district = district;
        this.city = city;
        this.country = country;
        this.zipCode = zipCode;
    }
    Address.prototype.toString = function () {
        return this.houseNum + "," + this.street + "," + this.Block + "," + this.district + "," + this.city + "," + this.country;
    };
    Address.prototype.fromString = function (address) {
        var temp = new Array();
        var start = 0;
        var end = 0;
        for (var i = 0; i <= address.length; i++) {
            if (address[i] == ',') {
                temp.push(address.slice(start, i));
                start = i + 1;
            }
            if (i == address.length) {
                temp.push(address.slice(start, i));
            }
        }
        this.houseNum = temp[0];
        this.street = temp[1];
        this.Block = temp[2];
        this.district = temp[3];
        this.city = temp[4];
        this.country = temp[5];
    };
    return Address;
}());

var state = /** @class */ (function () {
    function state(id, counteryId, name) {
        this.id = id;
        this.countryId = counteryId;
        this.name = name;
    }
    return state;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PasswordPage = /** @class */ (function () {
    function PasswordPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PasswordPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    PasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password',template:/*ion-inline-start:"/Users/amrtaha/Desktop/Salon Template Source Code/src/pages/password/password.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Forgot Password?\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-img" padding>\n\n    <div class="" padding-top>\n\n        <div class="" padding text-center>\n\n\n\n            <p style="margin-bottom: 2.5rem" class="text-theme fadeInUp animated delay-2">Don\'t worry, it will take less than 1 min.</p>\n\n            <p class="text-white fadeInUp animated delay-4">Enter your registered Email address, <br>We\'ll send you intruction on sms how to<br>reset password.</p>\n\n            <br>\n\n        </div>\n\n        <div class="difault-form">\n\n            <ion-list>\n\n                <ion-item class="fadeInUp animated delay-6">\n\n                    <ion-input type="text" placeholder="Enter your Email address"></ion-input>\n\n                </ion-item>\n\n                <br>\n\n                <button ion-button full class="btn bg-theme fadeInUp animated delay-8" (click)="home()">Submit</button>\n\n            </ion-list>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/amrtaha/Desktop/Salon Template Source Code/src/pages/password/password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], PasswordPage);
    return PasswordPage;
}());

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyappointmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyappointmentPage = /** @class */ (function () {
    function MyappointmentPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.appointment = "upcoming";
    }
    MyappointmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myappointment',template:/*ion-inline-start:"/Users/amrtaha/Desktop/Salon Template Source Code/src/pages/myappointment/myappointment.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title padding-top padding-bottom>\n\n            My Appointment\n\n            <span>\n\n            <ion-icon name="md-notifications" class="text-white"></ion-icon>\n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n    <div class="defult-tab bg-white">\n\n        <ion-segment [(ngModel)]="appointment">\n\n            <ion-segment-button value="upcoming" class="text-white">\n\n                Upcoming\n\n            </ion-segment-button>\n\n            <ion-segment-button value="past" class="text-white">\n\n                Past\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </div>\n\n</ion-header>\n\n\n\n<ion-content padding class="bg-img">\n\n    <div [ngSwitch]="appointment">\n\n        <div *ngSwitchCase="\'upcoming\'" class="fadeInUp animated delay-1">\n\n            <ion-card class="fadeInUp animated delay-2">\n\n                <ion-card-header>\n\n                    <ion-row>\n\n                        <ion-col col-4>\n\n                            <div class="text">\n\n                                <p>Thursday</p>\n\n                                <h6>13<sup>th</sup> June</h6>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col col-4>\n\n                            <div class="text">\n\n                                <p>Time</p>\n\n                                <h6>4:30pm</h6>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col col-4>\n\n                            <div class="text">\n\n                                <p>For</p>\n\n                                <h6>My Self</h6>\n\n                            </div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <div class="text">\n\n                        <p>Appointment</p>\n\n                        <h6 class="d-flex">Hair Strainghning\n\n                            <ion-icon name="md-more"></ion-icon>\n\n                        </h6>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n\n\n            <ion-card class="fadeInUp animated delay-4">\n\n                <ion-card-header>\n\n                    <ion-row>\n\n                        <ion-col col-4>\n\n                            <div class="text">\n\n                                <p>Thursday</p>\n\n                                <h6>13<sup>th</sup> June</h6>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col col-4>\n\n                            <div class="text">\n\n                                <p>Time</p>\n\n                                <h6>4:30pm</h6>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col col-4>\n\n                            <div class="text">\n\n                                <p>For</p>\n\n                                <h6>Friend</h6>\n\n                            </div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <div class="text">\n\n                        <p>Appointment</p>\n\n                        <h6 class="d-flex">Pedicure Manicure\n\n                            <ion-icon name="md-more"></ion-icon>\n\n                        </h6>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </div>\n\n\n\n        <div *ngSwitchCase="\'past\'" class="fadeInUp animated delay-1">\n\n            <ion-card class="fadeInUp animated delay-2">\n\n                <ion-card-header>\n\n                    <ion-row>\n\n                        <ion-col col-4>\n\n                            <div class="text">\n\n                                <p>Thursday</p>\n\n                                <h6>13<sup>th</sup> June</h6>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col col-4>\n\n                            <div class="text">\n\n                                <p>Time</p>\n\n                                <h6>4:30pm</h6>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col col-4>\n\n                            <div class="text">\n\n                                <p>For</p>\n\n                                <h6>Friend</h6>\n\n                            </div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <div class="text">\n\n                        <p>Appointment</p>\n\n                        <h6 class="d-flex">Pedicure Manicure\n\n                            <ion-icon name="md-more"></ion-icon>\n\n                        </h6>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n\n\n            <ion-card class="fadeInUp animated delay-4">\n\n                <ion-card-header>\n\n                    <ion-row>\n\n                        <ion-col col-4>\n\n                            <div class="text">\n\n                                <p>Thursday</p>\n\n                                <h6>13<sup>th</sup> June</h6>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col col-4>\n\n                            <div class="text">\n\n                                <p>Time</p>\n\n                                <h6>4:30pm</h6>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col col-4>\n\n                            <div class="text">\n\n                                <p>For</p>\n\n                                <h6>My Self</h6>\n\n                            </div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <div class="text">\n\n                        <p>Appointment</p>\n\n                        <h6 class="d-flex">Hair Strainghning\n\n                            <ion-icon name="md-more"></ion-icon>\n\n                        </h6>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </div>\n\n    </div>\n\n\n\n    <div class="fixed">\n\n        <button ion-button full class="btn bg-theme">Book a New Appointment</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/amrtaha/Desktop/Salon Template Source Code/src/pages/myappointment/myappointment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MyappointmentPage);
    return MyappointmentPage;
}());

//# sourceMappingURL=myappointment.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/amrtaha/Desktop/Salon Template Source Code/src/pages/about/about.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            About us\n\n            <span>\n\n            <ion-icon name="md-notifications" class="text-white"></ion-icon>\n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-img">\n\n    <ion-card class="fadeInUp animated delay-2">\n\n        <ion-card-content>\n\n            <h2>About Us</h2>\n\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.</p>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="fadeInUp animated delay-4">\n\n        <ion-card-content>\n\n            <h2>Our Gallery</h2>\n\n            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.</p>\n\n            <div class="scroll-gallery" style="height:100px;">\n\n                <ion-scroll scrollX="true" style="height:100px;white-space: nowrap;">\n\n                    <img src="assets/imgs/g-1.png">\n\n                    <img src="assets/imgs/g-2.png">\n\n                    <img src="assets/imgs/g-3.png">\n\n                    <img src="assets/imgs/g-1.png">\n\n                    <img src="assets/imgs/g-2.png">\n\n                    <img src="assets/imgs/g-3.png">\n\n                </ion-scroll>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="fadeInUp animated delay-6">\n\n        <ion-card-content>\n\n            <h2>Our Story</h2>\n\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/amrtaha/Desktop/Salon Template Source Code/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestimonialsPage = /** @class */ (function () {
    function TestimonialsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TestimonialsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-testimonials',template:/*ion-inline-start:"/Users/amrtaha/Desktop/Salon Template Source Code/src/pages/testimonials/testimonials.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Testimonials\n\n            <span>\n\n            <ion-icon name="md-notifications" class="text-white"></ion-icon>\n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-img">\n\n    <ion-card class="fadeInUp animated delay-2">\n\n        <ion-card-content>\n\n            <figure><img src="assets/imgs/t1.png"></figure>\n\n            <div>\n\n                <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy."</p>\n\n                <h2>Emili Williamson</h2>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="fadeInUp animated delay-4">\n\n        <ion-card-content>\n\n            <figure><img src="assets/imgs/t2.png"></figure>\n\n            <div>\n\n                <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy."</p>\n\n                <h2>Romeza George</h2>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="fadeInUp animated delay-6">\n\n        <ion-card-content>\n\n            <figure><img src="assets/imgs/t3.png"></figure>\n\n            <div>\n\n                <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy."</p>\n\n                <h2>Perry Taylor</h2>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="fadeInUp animated delay-8">\n\n        <ion-card-content>\n\n            <figure><img src="assets/imgs/t4.png"></figure>\n\n            <div>\n\n                <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy."</p>\n\n                <h2>Emili Williamson</h2>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/amrtaha/Desktop/Salon Template Source Code/src/pages/testimonials/testimonials.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], TestimonialsPage);
    return TestimonialsPage;
}());

//# sourceMappingURL=testimonials.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blogdetail_blogdetail__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogPage = /** @class */ (function () {
    function BlogPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BlogPage.prototype.blogdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__blogdetail_blogdetail__["a" /* BlogdetailPage */]);
    };
    BlogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-blog',template:/*ion-inline-start:"/Users/amrtaha/Desktop/Salon Template Source Code/src/pages/blog/blog.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Blog\n\n            <span>\n\n            <ion-icon name="md-notifications" class="text-white"></ion-icon>\n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-img">\n\n    <ion-card (click)="blogdetail()" class="fadeInUp animated delay-2">\n\n        <ion-card-content>\n\n            <figure><img src="assets/imgs/b1.png"></figure>\n\n            <div>\n\n                <p><small>30 March 2018</small></p>\n\n                <h2>Set Bridal Makeup Golas With Lakme This Shaadi Season</h2>\n\n                <p class="fix-height">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.</p>\n\n\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card (click)="blogdetail()" class="fadeInUp animated delay-4">\n\n        <ion-card-content>\n\n            <figure><img src="assets/imgs/b2.png"></figure>\n\n            <div>\n\n                <p><small>30 March 2018</small></p>\n\n                <h2>Have a fashionable summer wedding - trends to follow!</h2>\n\n                <p class="fix-height">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.</p>\n\n\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card (click)="blogdetail()" class="fadeInUp animated delay-6">\n\n        <ion-card-content>\n\n            <figure><img src="assets/imgs/b3.png"></figure>\n\n            <div>\n\n                <p><small>30 March 2018</small></p>\n\n                <h2>Smoothening at Mosoon Salon Guideline</h2>\n\n                <p class="fix-height">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.</p>\n\n\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card (click)="blogdetail()" class="fadeInUp animated delay-8">\n\n        <ion-card-content>\n\n            <figure><img src="assets/imgs/b4.png"></figure>\n\n            <div>\n\n                <p><small>30 March 2018</small></p>\n\n                <h2>Set Bridal Makeup Golas With Lakme This Shaadi Season</h2>\n\n                <p class="fix-height">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.</p>\n\n\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/amrtaha/Desktop/Salon Template Source Code/src/pages/blog/blog.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], BlogPage);
    return BlogPage;
}());

//# sourceMappingURL=blog.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogdetailPage = /** @class */ (function () {
    function BlogdetailPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BlogdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-blogdetail',template:/*ion-inline-start:"/Users/amrtaha/Desktop/Salon Template Source Code/src/pages/blogdetail/blogdetail.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            &nbsp;\n\n        </ion-title>\n\n\n\n    </ion-navbar>\n\n    <img src="assets/imgs/bd-1.png">\n\n    <h2 class="text-white">Set Bridal Makeup Golas With Lakme This Shaadi Season</h2>\n\n</ion-header>\n\n\n\n<ion-content class="bg-img">\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <p class="fadeInUp animated delay-1"><small>30 March 2018</small></p>\n\n\n\n            <p class="fadeInUp animated delay-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.</p>\n\n            <p class="fadeInUp animated delay-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.</p>\n\n            <p class="fadeInUp animated delay-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.</p>\n\n            <p class="fadeInUp animated delay-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.</p>\n\n            <p class="fadeInUp animated delay-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.</p>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/amrtaha/Desktop/Salon Template Source Code/src/pages/blogdetail/blogdetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], BlogdetailPage);
    return BlogdetailPage;
}());

//# sourceMappingURL=blogdetail.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/amrtaha/Desktop/Salon Template Source Code/src/pages/contact/contact.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Contact Us<span>\n\n            <ion-icon name="md-notifications" class="text-white"></ion-icon>\n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-img">\n\n    <ion-card class="fadeInUp animated delay-2">\n\n        <ion-card-content>\n\n            <h2>Connect with us</h2>\n\n            <ion-list no-lines>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <ion-icon name="md-mail" class="text-theme"></ion-icon>\n\n                    </ion-avatar>\n\n                    <p>Mail us</p>\n\n                    <h3>hellow@cityhurch.com</h3>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <ion-icon name="md-call" class="text-theme"></ion-icon>\n\n                    </ion-avatar>\n\n                    <p>Call us</p>\n\n                    <h3>+1 987 675 3210</h3>\n\n                </ion-item>\n\n            </ion-list>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="fadeInUp animated delay-4">\n\n        <ion-card-content>\n\n            <h2>Or Write us</h2>\n\n            <ion-textarea placeholder="Wright your Message"></ion-textarea>\n\n            <button ion-button full class="btn bg-theme">Sumnit</button>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="fadeInUp animated delay-6">\n\n        <ion-card-content>\n\n            <h2 style="display: flex;align-items: center;">Our Location<small style="margin-left: auto;">Get Direction</small></h2>\n\n            <p class="address">Queenspot near ABXZ Bank, XT Road<br>New York, USA</p>\n\n            <div class="map">\n\n                <img src="assets/imgs/map.png">\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/amrtaha/Desktop/Salon Template Source Code/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ProfilePage.prototype.signin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/amrtaha/Desktop/Salon Template Source Code/src/pages/profile/profile.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            My Profile\n\n            <span (click)="signin()">\n\n            Logout\n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-img">\n\n    <ion-card class="fadeInUp animated delay-2">\n\n        <ion-card-content>\n\n            <ion-list>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <ion-icon name="md-person" class="text-theme"></ion-icon>\n\n                    </ion-avatar>\n\n                    <ion-label floating>Full Name</ion-label>\n\n                    <ion-input type="text" placeholder="Your Name" value="Sam Smith"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <ion-icon name="md-mail" class="text-theme"></ion-icon>\n\n                    </ion-avatar>\n\n                    <ion-label floating>Email Address</ion-label>\n\n                    <ion-input type="email" placeholder="Your Email Address" value="samsmith@gmail.com"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <ion-icon name="md-call" class="text-theme"></ion-icon>\n\n                    </ion-avatar>\n\n                    <ion-label floating>Contact Number</ion-label>\n\n                    <ion-input type="text" placeholder="Your COntact Number" value="+1 987 654 3210"></ion-input>\n\n                </ion-item>\n\n            </ion-list>\n\n            <button ion-button full class="btn bg-theme">Sumnit</button>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/amrtaha/Desktop/Salon Template Source Code/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appointment_appointment__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServicesPage = /** @class */ (function () {
    function ServicesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ServicesPage.prototype.appointment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__appointment_appointment__["a" /* AppointmentPage */]);
    };
    ServicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-services',template:/*ion-inline-start:"/Users/amrtaha/Desktop/Salon Template Source Code/src/pages/services/services.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <img src="assets/imgs/hair-care.png">\n\n        <ion-title>\n\n            Hair Care\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="bg-img">\n\n    <ion-card (click)="appointment()" class="fadeInUp animated delay-1">\n\n        <figure><img src="assets/imgs/hair-1.png"></figure>\n\n        <h3>Hair Wash</h3>\n\n    </ion-card>\n\n    <ion-card (click)="appointment()" class="fadeInUp animated delay-2">\n\n        <figure><img src="assets/imgs/hair-2.png"></figure>\n\n        <h3>Hair Color</h3>\n\n    </ion-card>\n\n    <ion-card (click)="appointment()" class="fadeInUp animated delay-3">\n\n        <figure><img src="assets/imgs/hair-3.png"></figure>\n\n        <h3>Hair Straightening</h3>\n\n    </ion-card>\n\n    <ion-card (click)="appointment()" class="fadeInUp animated delay-4">\n\n        <figure><img src="assets/imgs/hair-4.png"></figure>\n\n        <h3>Hair Cutting</h3>\n\n    </ion-card>\n\n    <ion-card (click)="appointment()" class="fadeInUp animated delay-5">\n\n        <figure><img src="assets/imgs/hair-1.png"></figure>\n\n        <h3>Styling Hair</h3>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/amrtaha/Desktop/Salon Template Source Code/src/pages/services/services.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ServicesPage);
    return ServicesPage;
}());

//# sourceMappingURL=services.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppointmentPage = /** @class */ (function () {
    function AppointmentPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.self = "me";
    }
    AppointmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appointment',template:/*ion-inline-start:"/Users/amrtaha/Desktop/Salon Template Source Code/src/pages/appointment/appointment.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title padding-top padding-bottom>\n\n            Hair Straightning\n\n            <span>\n\n            <ion-icon name="md-notifications" class="text-white"></ion-icon>\n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n    <p text-center class="text-white">April, 2018</p>\n\n    <ion-scroll scrollX="true" style="height:60px;white-space: nowrap;">\n\n        <h4 text-center class="text-white">12<span>WED</span></h4>\n\n        <h4 text-center class="text-white active">13<span>THU</span></h4>\n\n        <h4 text-center class="text-white">14<span>FRI</span></h4>\n\n        <h4 text-center class="text-white">15<span>SAT</span></h4>\n\n        <h4 text-center class="text-white">16<span>SUN</span></h4>\n\n        <h4 text-center class="text-white">17<span>MON</span></h4>\n\n        <h4 text-center class="text-white">18<span>TUE</span></h4>\n\n        <h4 text-center class="text-white">19<span>WED</span></h4>\n\n        <h4 text-center class="text-white">20<span>THU</span></h4>\n\n    </ion-scroll>\n\n</ion-header>\n\n\n\n<ion-content class="bg-img" padding>\n\n    <div class="time">\n\n        <h2 class="text-white">Availble Times</h2>\n\n        <ion-row>\n\n            <ion-col col-4>\n\n                <ion-card class="text-white zoomIn animated delay-1">\n\n                    <p>10:00AM</p>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n                <ion-card class="text-white zoomIn animated delay-2">\n\n                    <p>11:00AM</p>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n                <ion-card class="text-white disable zoomIn animated delay-3">\n\n                    <p>12:00AM</p>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n                <ion-card class="text-white zoomIn animated delay-4">\n\n                    <p>01:30PM</p>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n                <ion-card class="text-white zoomIn animated delay-5">\n\n                    <p>02:15PM</p>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n                <ion-card class="text-white zoomIn animated delay-6">\n\n                    <p>03:00PM</p>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n                <ion-card class="text-white active zoomIn animated delay-7">\n\n                    <p>04:30PM</p>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n                <ion-card class="text-white zoomIn animated delay-8">\n\n                    <p>05:00PM</p>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n                <ion-card class="text-white zoomIn animated delay-9">\n\n                    <p>06:15PM</p>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n                <ion-card class="text-white zoomIn animated delay-10">\n\n                    <p>01:30PM</p>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n                <ion-card class="text-white zoomIn animated delay-11">\n\n                    <p>02:00PM</p>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n                <ion-card class="text-white zoomIn animated delay-12">\n\n                    <p>03:00PM</p>\n\n                </ion-card>\n\n            </ion-col>\n\n        </ion-row>\n\n        <div class="select_box fadeInUp animated delay-12">\n\n            <ion-list>\n\n                <ion-item>\n\n                    <ion-label class="text-white">Appointment for</ion-label>\n\n                    <ion-select [(ngModel)]="self" class="text-white">\n\n                        <ion-option value="me">My Self</ion-option>\n\n                        <ion-option value="other">Other</ion-option>\n\n                    </ion-select>\n\n                </ion-item>\n\n            </ion-list>\n\n        </div>\n\n    </div>\n\n    <div class="fixed">\n\n        <button ion-button full class="btn bg-theme">Book an Appointment</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/amrtaha/Desktop/Salon Template Source Code/src/pages/appointment/appointment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AppointmentPage);
    return AppointmentPage;
}());

//# sourceMappingURL=appointment.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsApiProvider; });
/* unused harmony export Category */
/* unused harmony export Vendor */
/* unused harmony export Product */
/* unused harmony export Specs */
/* unused harmony export specialSpecs */
/* unused harmony export ImageProcess */
/* unused harmony export review */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__root_root__ = __webpack_require__(104);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/*
  Generated class for the ItemsApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ItemsApiProvider = /** @class */ (function (_super) {
    __extends(ItemsApiProvider, _super);
    function ItemsApiProvider(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.productApiController = "product/";
        _this.productsActionString = "get_all_products?";
        _this.categoriesApiController = "maincategory/";
        _this.categoriesActionString = "get_main_category?";
        _this.subCategoriesApiController = "sub_category/";
        _this.subCategoriesActionString = "get_sub_category?";
        _this.vendorsApiController = "vendor/";
        _this.vendorActionString = "get_all_vendors?";
        return _this;
    }
    ItemsApiProvider.prototype.getCategoriesNop = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var subcat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSubCategoriesNop()];
                    case 1:
                        subcat = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve) {
                                _this.http.get("" + __WEBPACK_IMPORTED_MODULE_2__root_root__["a" /* RootProvider */].APIURL4 + _this.categoriesApiController + _this.categoriesActionString).subscribe(function (data) {
                                    if (data == null || data.length == 0) {
                                        resolve([]);
                                    }
                                    else {
                                        var catArray = new Array();
                                        for (var i = 0; i < data.length; i++) {
                                            var tempcats = new Array();
                                            if (data[i].Deleted == false) {
                                                if (subcat.length != 0) {
                                                    for (var j = 0; j < subcat.length; j++) {
                                                        if (data[i].Id == subcat[j].parent) {
                                                            tempcats.push(subcat[j]);
                                                        }
                                                    }
                                                }
                                                catArray.push(new Category(data[i].Name, data[i].Id, tempcats, data[i].PictureBinary, data[i].MimeType, data[i].ParentCategoryId, data[i].Deleted, true));
                                            }
                                        }
                                        resolve(catArray);
                                    }
                                });
                            })];
                }
            });
        });
    };
    ItemsApiProvider.prototype.getVendors = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var temp = "" + __WEBPACK_IMPORTED_MODULE_2__root_root__["a" /* RootProvider */].APIURL4 + _this.vendorsApiController + _this.vendorActionString;
                        _this.http.get(temp).subscribe(function (data) {
                            if (data == undefined || data.length == 0) {
                                resolve([]);
                            }
                            else {
                                var vendors = new Array();
                                for (var i = 0; i < data.length; i++) {
                                    data[i].Deleted == false ? vendors.push(new Vendor(data[i].vendor_id, data[i].Name, data[i].Description, data[i].Deleted, data[i].PictureBinary, data[i].AltAttribute, data[i].TitleAttribute, data[i].IsNew, data[i].Email)) : '';
                                }
                                resolve(vendors);
                            }
                        });
                    })];
            });
        });
    };
    ItemsApiProvider.prototype.getItemsNop = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var comps;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getVendors()];
                    case 1:
                        comps = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve) {
                                // console.log(`${RootProvider.APIURL4}Product`);
                                _this.http.get("" + __WEBPACK_IMPORTED_MODULE_2__root_root__["a" /* RootProvider */].APIURL4 + _this.productApiController + _this.productsActionString + "product").subscribe(function (data) {
                                    if (data == undefined || data.length == 0) {
                                        resolve([]);
                                    }
                                    else {
                                        var items = new Array();
                                        //for(let i = 0 ; i < data.length ; i++){
                                        //  items[i] = new Product(data[i].item_name,data[i].item_id,data[i].item_type_id,data[i].item_img1,data[i].item_img2,data[i].inventory,data[i].measure_unit,data[i].item_long_desc,data[i].distributor_id,data[i].price ,data[i].offer_id , data[i].offer_name,data[i].discount_percentage,data[i].item_distributor_id,data[i].company_id);
                                        //}
                                        for (var i = 0; i < data.length; i++) {
                                            if (!data[i].Deleted) {
                                                var specs = new Specs(data[i].Weight, data[i].Length, data[i].Height, data[i].Width);
                                                items.push(new Product(data[i].Name, data[i].Id, data[i].CategoryId, data[i].StockQuantity, specs, data[i].ShortDescription, data[i].VendorId, data[i].Price, data[i].FullDescription, data[i].ShowOnHomePage, data[i].AllowCustomerReviews, data[i].ApprovedRatingSum, data[i].NotApprovedRatingSum, data[i].IsShipEnabled, data[i].IsFreeShipping, data[i].AdditionalShippingCharge, data[i].DeliveryDateId, data[i].OrderMaximumQuantity, data[i].OrderMinimumQuantity, data[i].OldPrice, data[i].IsNew, data[i].MarkAsNewStartDateTimeUtc, data[i].MarkAsNewEndDateTimeUtc, data[i].PictureBinary, data[i].MimeType, data[i].rating, data[i].num_of_customers));
                                            }
                                        }
                                        for (var i = 0; i < items.length; i++) {
                                            for (var j = 0; j < comps.length; j++) {
                                                if (items[i].distributerId == comps[j].id) {
                                                    items[i].company_name = comps[j].name;
                                                }
                                            }
                                        }
                                        resolve(items);
                                    }
                                });
                            })];
                }
            });
        });
    };
    ItemsApiProvider.prototype.getSubCategoriesNop = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var items;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getItemsNop()];
                    case 1:
                        items = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve) {
                                _this.http.get("" + __WEBPACK_IMPORTED_MODULE_2__root_root__["a" /* RootProvider */].APIURL4 + _this.subCategoriesApiController + _this.subCategoriesActionString).subscribe(function (data) {
                                    // console.log(data);
                                    if (data == null || data.length == 0) {
                                        resolve([]);
                                    }
                                    else {
                                        var subcat = new Array();
                                        for (var i = 0; i < data.length; i++) {
                                            var Subitems = new Array();
                                            if (data[i].Deleted == false) {
                                                for (var j = 0; j < items.length; j++) {
                                                    if (data[i].Id == items[j].product_subcat) {
                                                        Subitems.push(items[j]);
                                                    }
                                                }
                                                subcat.push(new Category(data[i].Name, data[i].Id, Subitems, data[i].PictureBinary, data[i].MimeType, data[i].ParentCategoryId, data[i].Deleted));
                                            }
                                        }
                                        for (var i = 0; i < subcat.length; i++) {
                                            var tempChildren = new Array();
                                            for (var j = 0; j < subcat.length; j++) {
                                                if (subcat[i].id === subcat[j].parent) {
                                                    tempChildren.push(subcat[j]);
                                                }
                                            }
                                            if (tempChildren.length > 0) {
                                                subcat[i].hasSubCates = true;
                                                subcat[i].children = new Array();
                                                subcat[i].children = tempChildren;
                                            }
                                        }
                                        console.log(subcat);
                                        resolve(subcat);
                                        // console.log(subcat);
                                    }
                                });
                            })];
                }
            });
        });
    };
    ItemsApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ItemsApiProvider);
    return ItemsApiProvider;
}(__WEBPACK_IMPORTED_MODULE_2__root_root__["a" /* RootProvider */]));

var Category = /** @class */ (function () {
    function Category(name, id, children, NewsCategoryImage, MimeType, Parent, deleted, hasSubCate) {
        if (name === void 0) { name = ""; }
        if (id === void 0) { id = ""; }
        if (NewsCategoryImage === void 0) { NewsCategoryImage = ""; }
        if (Parent === void 0) { Parent = ""; }
        if (hasSubCate === void 0) { hasSubCate = false; }
        this.parentShow = false;
        this.name = name;
        this.id = id;
        this.image = ImageProcess.stringToImage(NewsCategoryImage, MimeType);
        this.parentShow = false;
        this.parent = Parent;
        this.open = false;
        this.deleted = deleted;
        this.children = children ? children : new Array();
        this.hasSubCates = hasSubCate;
    }
    return Category;
}());

var Vendor = /** @class */ (function () {
    function Vendor(id, name, descrpition, deleted, pictureBinary, AltAttribute, titleAttribute, isNew, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.descr = descrpition;
        this.deleted = deleted;
        this.image = ImageProcess.stringToImage(pictureBinary, "image/jpeg");
        this.altAttribute = AltAttribute;
        this.titleAttribute = titleAttribute;
        this.isNew = isNew;
    }
    return Vendor;
}());

var Product = /** @class */ (function () {
    function Product(prod_name, itemId, prod_sub_category, quantity, specs, prod_desc, distributorId, price, longDesc, showOnHome, allaCustomerReview, approvedRatingSum, notApprovedRattingSum, isShipEnabled, isFreeShipping, additionalShippingCharge, DeliveryDateId, orderMaxQuant, orderMinQuant, oldPrice, New, newFromUTC, newToUTC, prod_image1, imageMimeType, rating, customerCount) {
        //////////////////////////////////////////////
        //////////////////////////////
        this.discount = 0;
        this.love = false;
        this.id = itemId;
        this.name = prod_name;
        this.description = prod_desc;
        this.specs = specs;
        this.image1 = ImageProcess.stringToImage(prod_image1, imageMimeType); //'assets/img/categories/girl/jewellery/jewellery01.jpg';
        this.quant = quantity;
        this.distributerId = distributorId;
        this.product_subcat = prod_sub_category;
        this.currentPrice = price;
        this.longDescription = longDesc;
        this.showOnHome = showOnHome;
        this.allowCustomerReviews = allaCustomerReview;
        this.approvedRatingSum = approvedRatingSum;
        this.notApprovedRattingSum = notApprovedRattingSum;
        this.isShipEnabled = isShipEnabled;
        this.isNew = New;
        this.isFreeShipping = isFreeShipping;
        this.additionalShippingCharge = additionalShippingCharge;
        this.DeliveryDateId = DeliveryDateId;
        this.orderMaxQuant = orderMaxQuant;
        this.orderMinQuant = orderMinQuant;
        this.newFromUTC = newFromUTC;
        this.newToUTC = newToUTC;
        this.price = oldPrice;
        this.rating = (rating == null) ? 0 : rating;
        this.customerCount = customerCount;
    }
    return Product;
}());

var Specs = /** @class */ (function () {
    function Specs(weight, length, height, width, additonalSpecs) {
        if (additonalSpecs === void 0) { additonalSpecs = new Array(); }
        this.weight = weight;
        this.length = length;
        this.height = height;
        this.width = width;
        this.additionalSpecs = new Array();
        this.additionalSpecs = additonalSpecs;
    }
    return Specs;
}());

var specialSpecs = /** @class */ (function () {
    function specialSpecs() {
    }
    return specialSpecs;
}());

var ImageProcess = /** @class */ (function () {
    function ImageProcess() {
    }
    ImageProcess.stringToImage = function (imageData, mimeType, base) {
        if (base === void 0) { base = "base64"; }
        return "data:" + mimeType + ";" + base + "," + imageData;
    };
    return ImageProcess;
}());

var review = /** @class */ (function () {
    function review(wName, rTitle, rBody, date) {
        this.writerName = wName;
        this.reviewTitle = rTitle;
        this.reviewBody = rBody;
        this.creationDate = date;
    }
    return review;
}());

//# sourceMappingURL=items-api.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, formBuilder, loadCtrl, userProvider) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.loadCtrl = loadCtrl;
        this.userProvider = userProvider;
        this.buildForm();
    }
    SignupPage.prototype.buildForm = function () {
        this.regesterForm = this.formBuilder.group({
            userName: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)]],
            passwordConfirm: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(11), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(11)]],
        });
    };
    SignupPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    SignupPage.prototype.signin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */]);
    };
    SignupPage.prototype.onSubmit = function () {
        console.log(this.pwValidity());
    };
    SignupPage.prototype.pwValidity = function () {
        return this.regesterForm.value.password == this.regesterForm.value.passwordConfirm ? true : false;
    };
    SignupPage.prototype.onRegester = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, add;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadCtrl.create({
                            content: 'Logging in ,Please Wait'
                        });
                        if (!(this.regesterForm.value.passwordConfirm != this.regesterForm.value.password)) return [3 /*break*/, 1];
                        alert("Password does Not Match");
                        return [3 /*break*/, 4];
                    case 1:
                        if (!this.regesterForm.valid) return [3 /*break*/, 3];
                        loading.present();
                        return [4 /*yield*/, this.userProvider.RegesterNop(this.regesterForm.value.userName, this.regesterForm.value.password, this.regesterForm.value.email, this.regesterForm.value.phone)];
                    case 2:
                        add = _a.sent();
                        console.log(add);
                        loading.dismiss();
                        if (add != "-1") {
                            console.log(this.userProvider.user);
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                        }
                        else {
                            alert("this user name is used Please try a new one");
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        alert("Invaled fields");
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/amrtaha/Desktop/Salon Template Source Code/src/pages/signup/signup.html"*/'<ion-content class="bg-img" padding>\n\n    <div padding>\n\n        <div class="logo bg-white fadeInUp animated delay-1" text-center>\n\n            <!-- <figure> <img src="assets/imgs/logo.png"></figure> -->\n\n            <div class="Header-Name">Glam & Go</div>\n\n        </div>\n\n        <h2 class="heading text-white fadeInUp animated delay-2" text-center>Register now</h2>\n\n        <form [formGroup]="regesterForm" (ngSubmit)="onRegester()"  >\n\n        <div class="difault-form">\n\n            <ion-list>\n\n                <ion-item class="fadeInUp animated delay-3">\n\n                    <ion-input formControlName="userName" type="text" placeholder="User Name"></ion-input>\n\n                </ion-item>\n\n                <ion-item class="fadeInUp animated delay-4">\n\n                    <ion-input formControlName="email" type="email" placeholder="Email Address"></ion-input>\n\n                </ion-item>\n\n                <ion-item class="fadeInUp animated delay-5">\n\n                    <ion-input formControlName="password" type="password" placeholder="Password"></ion-input>\n\n                </ion-item>\n\n                <ion-item class="fadeInUp animated delay-5">\n\n                    <ion-input formControlName="passwordConfirm" type="password" placeholder="Confirm Password"></ion-input>\n\n                </ion-item>\n\n                <ion-item class="fadeInUp animated delay-6">\n\n                    <ion-input formControlName="phone" type="text" placeholder="Phone number"></ion-input>\n\n                </ion-item>\n\n                <br>\n\n                <button ion-button full class="btn bg-theme fadeInUp animated delay-6" type="submit" >Register now</button>\n\n                <p text-center class="text-white fadeInUp animated delay-7">Aready register? <strong (tap)="signin()">Sign in</strong></p>\n\n            </ion-list>\n\n        </div>\n\n        </form>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/amrtaha/Desktop/Salon Template Source Code/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_user_user__["b" /* UserProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_appointment_appointment__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_blog_blog__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_blogdetail_blogdetail__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_myappointment_myappointment__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_password_password__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_services_services__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_signin_signin__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_testimonials_testimonials__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_root_root__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_items_api_items_api__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_user_user__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_appointment_appointment__["a" /* AppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_blog_blog__["a" /* BlogPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_blogdetail_blogdetail__["a" /* BlogdetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_myappointment_myappointment__["a" /* MyappointmentPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_services_services__["a" /* ServicesPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_testimonials_testimonials__["a" /* TestimonialsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_appointment_appointment__["a" /* AppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_blog_blog__["a" /* BlogPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_blogdetail_blogdetail__["a" /* BlogdetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_myappointment_myappointment__["a" /* MyappointmentPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_services_services__["a" /* ServicesPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_testimonials_testimonials__["a" /* TestimonialsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_root_root__["a" /* RootProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_items_api_items_api__["a" /* ItemsApiProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_user_user__["b" /* UserProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HomePage } from '../pages/home/home';

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__["a" /* SigninPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/amrtaha/Desktop/Salon Template Source Code/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/amrtaha/Desktop/Salon Template Source Code/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__password_password__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_user__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl, formBuilder, loadCtrl, userProvider, storage) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.loadCtrl = loadCtrl;
        this.userProvider = userProvider;
        this.storage = storage;
        this.buildForm();
    }
    SigninPage.prototype.buildForm = function () {
        this.loginForm = this.formBuilder.group({
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
        });
    };
    SigninPage.prototype.password = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__password_password__["a" /* PasswordPage */]);
    };
    SigninPage.prototype.signup = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    SigninPage.prototype.onSignin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, salt, bool, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        loading = this.loadCtrl.create({
                            content: 'Logging in ,Please Wait'
                        });
                        if (!this.loginForm.valid) return [3 /*break*/, 7];
                        loading.present();
                        return [4 /*yield*/, this.userProvider.getSualt(this.loginForm.value.email)];
                    case 1:
                        salt = _b.sent();
                        console.log(salt);
                        bool = false;
                        if (!(salt != -1 && salt != -2)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.userProvider.loginNop(this.loginForm.value.email, this.loginForm.value.password, salt)];
                    case 2:
                        bool = _b.sent();
                        _b.label = 3;
                    case 3:
                        if (!(bool == true)) return [3 /*break*/, 5];
                        loading.dismiss();
                        this.user = __WEBPACK_IMPORTED_MODULE_7__providers_user_user__["a" /* User */].getInstance();
                        this.storage.set('user', this.user);
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                        _a = this.user;
                        return [4 /*yield*/, this.userProvider.getAddress(this.user.id)];
                    case 4:
                        _a.addresses = _b.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        loading.dismiss();
                        alert('Wrong user name or password');
                        _b.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        alert('Wrong user name or password');
                        _b.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/Users/amrtaha/Desktop/Salon Template Source Code/src/pages/signin/signin.html"*/'<!--\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Sign In\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n-->\n\n\n\n<ion-content class="bg-img" padding>\n\n    <div padding>\n\n        <div class="logo bg-white fadeInUp animated delay-1" text-center>\n\n            <!-- <figure> <img src="assets/imgs/logo.png"></figure> -->\n\n            <div class="Header-Name">Glam & Go</div>\n\n        </div>\n\n        <h2 class="heading text-white fadeInUp animated delay-2" text-center>Sign in now</h2>\n\n        <form [formGroup]="loginForm" (ngSubmit)="onSignin()"  >\n\n        <div class="difault-form">\n\n              \n\n            <ion-list>\n\n                <ion-item class="fadeInUp animated delay-3">\n\n                    <ion-input formControlName="email" type="email" placeholder="Email Address"></ion-input>\n\n                </ion-item>\n\n                <ion-item class="fadeInUp animated delay-4">\n\n                    <ion-input formControlName="password" type="password" placeholder="Password"></ion-input>\n\n                    <!-- <small class="password">Forgot?</small> -->\n\n                </ion-item>\n\n                <!-- <small class="password fadeInUp animated delay-5" (click)="password()">Forgot?</small> -->\n\n                <br>\n\n                <button ion-button full class="btn bg-theme fadeInUp animated delay-6" >Sign in</button>\n\n            </ion-list>\n\n            <p class="text-white fadeInUp animated delay-7" text-center>New user? <span (click)="signup()"> Register Now</span></p>\n\n        </div>\n\n        </form>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/amrtaha/Desktop/Salon Template Source Code/src/pages/signin/signin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__providers_user_user__["b" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myappointment_myappointment__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__testimonials_testimonials__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blog_blog__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_contact__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_services__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_items_api_items_api__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, itemProv) {
        this.navCtrl = navCtrl;
        this.itemProv = itemProv;
        this.ready = false;
        this.cates = new Array();
    }
    HomePage.prototype.getItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.itemProv.getCategoriesNop()];
                    case 1:
                        _a.cates = _b.sent();
                        this.ready = true;
                        console.log(this.cates);
                        return [2 /*return*/, true];
                }
            });
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.getItems();
    };
    HomePage.prototype.myappointment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__myappointment_myappointment__["a" /* MyappointmentPage */]);
    };
    HomePage.prototype.about = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */]);
    };
    HomePage.prototype.testimonials = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__testimonials_testimonials__["a" /* TestimonialsPage */]);
    };
    HomePage.prototype.blog = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__blog_blog__["a" /* BlogPage */]);
    };
    HomePage.prototype.contact = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__contact_contact__["a" /* ContactPage */]);
    };
    HomePage.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__profile_profile__["a" /* ProfilePage */]);
    };
    HomePage.prototype.services = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__services_services__["a" /* ServicesPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/amrtaha/Desktop/Salon Template Source Code/src/pages/home/home.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title padding-top padding-bottom>\n\n            <!-- <img src="assets/imgs/logo-home.png" width="140"> -->\n\n            <div class="Header-Name">Glam & Go</div>\n\n            <span>\n\n            <ion-icon name="md-notifications" class="text-white"></ion-icon>\n\n            </span>\n\n        </ion-title>\n\n        <ion-scroll scrollX="true" style="height:76px;white-space: nowrap;">\n\n            <ion-card class="menu-items" (click)="about()">\n\n                <ion-card-content>\n\n                    <img src="assets/imgs/img_about_us.png"> About us\n\n                </ion-card-content>\n\n            </ion-card>\n\n            <ion-card class="menu-items" (click)="testimonials()">\n\n                <ion-card-content>\n\n                    <img src="assets/imgs/img_testimonials.png"> Testimonials\n\n                </ion-card-content>\n\n            </ion-card>\n\n            <ion-card class="menu-items" (click)="myappointment()">\n\n                <ion-card-content>\n\n                    <img src="assets/imgs/img_appointments.png"> Appointments\n\n                </ion-card-content>\n\n            </ion-card>\n\n            <ion-card class="menu-items" (click)="blog()">\n\n                <ion-card-content>\n\n                    <img src="assets/imgs/img_blogs.png"> Blog\n\n                </ion-card-content>\n\n            </ion-card>\n\n            <ion-card class="menu-items" (click)="contact()">\n\n                <ion-card-content>\n\n                    <img src="assets/imgs/img_contact_us.png"> Contact us\n\n                </ion-card-content>\n\n            </ion-card>\n\n            <ion-card class="menu-items" (click)="profile()">\n\n                <ion-card-content>\n\n                    <img src="assets/imgs/img_my_profile.png"> My Profile\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-scroll>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="bg-img">\n\n\n\n    <h2 class="text-white">Make an Appointment</h2>\n\n    <ion-scroll [scrollY]="true" *ngIf=\'ready\' class="vertical-scroll">\n\n            <ion-card *ngFor="let item of cates" class="fadeInUp animated delay-1">\n\n                    <figure><img [src]="item.image"></figure>\n\n                    <h3>{{item.name}}</h3>\n\n                </ion-card>\n\n    </ion-scroll>\n\n    <!-- <ion-card (click)="services()" class="fadeInUp animated delay-1">\n\n        <figure><img src="assets/imgs/makeup.png"></figure>\n\n        <h3>Make Up</h3>\n\n    </ion-card>\n\n    <ion-card (click)="services()" class="fadeInUp animated delay-2">\n\n        <figure><img src="assets/imgs/hair-care.png"></figure>\n\n        <h3>Hair Care</h3>\n\n    </ion-card>\n\n    <ion-card (click)="services()" class="fadeInUp animated delay-3">\n\n        <figure><img src="assets/imgs/bridal.png"></figure>\n\n        <h3>Bridal</h3>\n\n    </ion-card>\n\n    <ion-card (click)="services()" class="fadeInUp animated delay-4">\n\n        <figure><img src="assets/imgs/other.png"></figure>\n\n        <h3>Other</h3>\n\n    </ion-card> -->\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/amrtaha/Desktop/Salon Template Source Code/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_9__providers_items_api_items_api__["a" /* ItemsApiProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map