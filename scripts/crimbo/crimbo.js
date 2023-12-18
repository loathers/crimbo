"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = function(fn, res) {
  return function() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
};
var __export = function(target, all) {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = function(to, from, except, desc) {
  if (from && typeof from == "object" || typeof from == "function")
    for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++)
      key = keys[i], !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: function(k) {
        return from[k];
      }.bind(null, key), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = function(mod) {
  return __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
};

// kolmafia-polyfill.js
var kolmafia, console, init_kolmafia_polyfill = __esm({
  "kolmafia-polyfill.js": function() {
    "use strict";
    kolmafia = require("kolmafia"), console = {
      log: kolmafia.print
    };
  }
});

// src/main.ts
var main_exports = {};
__export(main_exports, {
  main: function() {
    return main;
  }
});
module.exports = __toCommonJS(main_exports);
init_kolmafia_polyfill();

// node_modules/grimoire-kolmafia/dist/index.js
init_kolmafia_polyfill();

// node_modules/grimoire-kolmafia/dist/args.js
init_kolmafia_polyfill();
var import_kolmafia = require("kolmafia");
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
}
function _arrayLikeToArray(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
var Args = /* @__PURE__ */ function() {
  function Args2() {
    _classCallCheck(this, Args2);
  }
  return _createClass(Args2, null, [{
    key: "custom",
    value: function(spec, _parser, valueHelpName) {
      var _a, _b, raw_options = (_a = spec.options) === null || _a === void 0 ? void 0 : _a.map(function(option) {
        return option[0];
      });
      if ("default" in spec && raw_options && !raw_options.includes(spec.default))
        throw "Invalid default value ".concat(spec.default);
      return _objectSpread(_objectSpread({}, spec), {}, {
        valueHelpName: valueHelpName,
        parser: function(value) {
          var parsed_value = _parser(value);
          return parsed_value === void 0 || parsed_value instanceof ParseError ? parsed_value : raw_options && !raw_options.includes(parsed_value) ? new ParseError("received ".concat(value, " which was not in the allowed options")) : parsed_value;
        },
        options: (_b = spec.options) === null || _b === void 0 ? void 0 : _b.map(function(a) {
          return ["".concat(a[0]), a[1]];
        })
      });
    }
  }, {
    key: "arrayFromArg",
    value: function(spec, argFromSpec) {
      var _a, _b, _c, spec_without_default = _objectSpread({}, spec);
      "default" in spec_without_default && delete spec_without_default.default;
      var arg = argFromSpec.call(this, spec_without_default), raw_options = (_a = spec.options) === null || _a === void 0 ? void 0 : _a.map(function(option) {
        return option[0];
      });
      if ("default" in spec && raw_options) {
        var _iterator = _createForOfIteratorHelper(spec.default), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var default_entry = _step.value;
            if (!raw_options.includes(default_entry))
              throw "Invalid default value ".concat(spec.default);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      var separator = (_b = spec.separator) !== null && _b !== void 0 ? _b : ",", arrayParser = function(value) {
        var values = value.split(separator);
        spec.noTrim || (values = values.map(function(v) {
          return v.trim();
        }));
        var result = values.map(function(v) {
          return arg.parser(v);
        }), error = result.find(function(v) {
          return v instanceof ParseError;
        });
        if (error)
          return error;
        var failure_index = result.indexOf(void 0);
        return failure_index !== -1 ? new ParseError("components expected ".concat(arg.valueHelpName, " but could not parse ").concat(values[failure_index])) : result;
      };
      return _objectSpread(_objectSpread({}, spec), {}, {
        valueHelpName: "".concat(arg.valueHelpName).concat(separator, " ").concat(arg.valueHelpName).concat(separator, " ..."),
        parser: arrayParser,
        options: (_c = spec.options) === null || _c === void 0 ? void 0 : _c.map(function(a) {
          return ["".concat(a[0]), a[1]];
        })
      });
    }
  }, {
    key: "string",
    value: function(spec) {
      return this.custom(spec, function(value) {
        return value;
      }, "TEXT");
    }
  }, {
    key: "strings",
    value: function(spec) {
      return this.arrayFromArg(spec, this.string);
    }
  }, {
    key: "number",
    value: function(spec) {
      return this.custom(spec, function(value) {
        return isNaN(Number(value)) ? void 0 : Number(value);
      }, "NUMBER");
    }
  }, {
    key: "numbers",
    value: function(spec) {
      return this.arrayFromArg(spec, this.number);
    }
  }, {
    key: "boolean",
    value: function(spec) {
      return this.custom(spec, function(value) {
        if (value.toLowerCase() === "true")
          return !0;
        if (value.toLowerCase() === "false")
          return !1;
      }, "BOOLEAN");
    }
  }, {
    key: "booleans",
    value: function(spec) {
      return this.arrayFromArg(spec, this.boolean);
    }
  }, {
    key: "flag",
    value: function(spec) {
      return this.custom(spec, function(value) {
        if (value.toLowerCase() === "true")
          return !0;
        if (value.toLowerCase() === "false")
          return !1;
      }, "FLAG");
    }
  }, {
    key: "class",
    value: function(spec) {
      return this.custom(spec, function(value) {
        var match = import_kolmafia.Class.get(value);
        if (match.toString().toUpperCase() === value.toString().toUpperCase() || !isNaN(Number(value)))
          return match;
      }, "CLASS");
    }
  }, {
    key: "classes",
    value: function(spec) {
      return this.arrayFromArg(spec, this.class);
    }
  }, {
    key: "effect",
    value: function(spec) {
      return this.custom(spec, import_kolmafia.Effect.get, "EFFECT");
    }
  }, {
    key: "effects",
    value: function(spec) {
      return this.arrayFromArg(spec, this.effect);
    }
  }, {
    key: "familiar",
    value: function(spec) {
      return this.custom(spec, import_kolmafia.Familiar.get, "FAMILIAR");
    }
  }, {
    key: "familiars",
    value: function(spec) {
      return this.arrayFromArg(spec, this.familiar);
    }
  }, {
    key: "item",
    value: function(spec) {
      return this.custom(spec, import_kolmafia.Item.get, "ITEM");
    }
  }, {
    key: "items",
    value: function(spec) {
      return this.arrayFromArg(spec, this.item);
    }
  }, {
    key: "location",
    value: function(spec) {
      return this.custom(spec, import_kolmafia.Location.get, "LOCATION");
    }
  }, {
    key: "locations",
    value: function(spec) {
      return this.arrayFromArg(spec, this.location);
    }
  }, {
    key: "monster",
    value: function(spec) {
      return this.custom(spec, import_kolmafia.Monster.get, "MONSTER");
    }
  }, {
    key: "monsters",
    value: function(spec) {
      return this.arrayFromArg(spec, this.monster);
    }
  }, {
    key: "path",
    value: function(spec) {
      return this.custom(spec, import_kolmafia.Path.get, "PATH");
    }
  }, {
    key: "paths",
    value: function(spec) {
      return this.arrayFromArg(spec, this.path);
    }
  }, {
    key: "skill",
    value: function(spec) {
      return this.custom(spec, import_kolmafia.Skill.get, "SKILL");
    }
  }, {
    key: "skills",
    value: function(spec) {
      return this.arrayFromArg(spec, this.skill);
    }
  }, {
    key: "group",
    value: function(groupName, args2) {
      return {
        name: groupName,
        args: args2
      };
    }
  }, {
    key: "create",
    value: function(scriptName, scriptHelp, args2, options) {
      var _objectSpread22;
      _traverse(args2, function(keySpec, key) {
        if (key === "help" || keySpec.key === "help")
          throw "help is a reserved argument name";
      });
      var argsWithHelp = _objectSpread(_objectSpread({}, args2), {}, {
        help: this.flag({
          help: "Show this message and exit.",
          setting: ""
        })
      }), res = _objectSpread(_objectSpread({}, _loadDefaultValues(argsWithHelp)), {}, (_objectSpread22 = {}, _defineProperty(_objectSpread22, specSymbol, argsWithHelp), _defineProperty(_objectSpread22, scriptSymbol, scriptName), _defineProperty(_objectSpread22, scriptHelpSymbol, scriptHelp), _defineProperty(_objectSpread22, optionsSymbol, options != null ? options : {}), _objectSpread22));
      if (options != null && options.positionalArgs) {
        var keys = [], metadata = Args2.getMetadata(res);
        metadata.traverse(function(keySpec, key) {
          var _a;
          keys.push((_a = keySpec.key) !== null && _a !== void 0 ? _a : key);
        });
        var _iterator2 = _createForOfIteratorHelper(options.positionalArgs), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var arg = _step2.value;
            if (!keys.includes(arg))
              throw "Unknown key for positional arg: ".concat(arg);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return res;
    }
  }, {
    key: "fill",
    value: function(args2, command) {
      var includeSettings = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, _a, metadata = Args2.getMetadata(args2), keys = /* @__PURE__ */ new Set(), flags = /* @__PURE__ */ new Set();
      if (metadata.traverse(function(keySpec, key) {
        var _a2, name = (_a2 = keySpec.key) !== null && _a2 !== void 0 ? _a2 : key;
        if (flags.has(name) || keys.has(name))
          throw "Duplicate arg key ".concat(name, " is not allowed");
        keySpec.valueHelpName === "FLAG" ? flags.add(name) : keys.add(name);
      }), includeSettings && metadata.traverseAndMaybeSet(args2, function(keySpec, key) {
        var _a2, _b, setting = (_a2 = keySpec.setting) !== null && _a2 !== void 0 ? _a2 : "".concat(metadata.scriptName, "_").concat((_b = keySpec.key) !== null && _b !== void 0 ? _b : key);
        if (setting !== "") {
          var value_str = (0, import_kolmafia.getProperty)(setting);
          if (value_str !== "")
            return parseAndValidate(keySpec, "Setting ".concat(setting), value_str);
        }
      }), !(command === void 0 || command === "")) {
        var parsed = new CommandParser(command, keys, flags, (_a = metadata.options.positionalArgs) !== null && _a !== void 0 ? _a : []).parse();
        metadata.traverseAndMaybeSet(args2, function(keySpec, key) {
          var _a2, argKey = (_a2 = keySpec.key) !== null && _a2 !== void 0 ? _a2 : key, value_str = parsed.get(argKey);
          if (value_str !== void 0)
            return parseAndValidate(keySpec, "Argument ".concat(argKey), value_str);
        });
      }
    }
  }, {
    key: "parse",
    value: function(scriptName, scriptHelp, spec, command, options) {
      var args2 = this.create(scriptName, scriptHelp, spec, options);
      return this.fill(args2, command), args2;
    }
  }, {
    key: "showHelp",
    value: function(args2, maxOptionsToDisplay) {
      var _a, metadata = Args2.getMetadata(args2);
      (0, import_kolmafia.printHtml)("".concat(metadata.scriptHelp)), (0, import_kolmafia.printHtml)(""), (0, import_kolmafia.printHtml)("<b>".concat((_a = metadata.options.defaultGroupName) !== null && _a !== void 0 ? _a : "Options", ":</b>")), metadata.traverse(function(arg, key) {
        var _a2, _b, _c, _d, _e;
        if (!arg.hidden) {
          var nameText = "<font color='".concat((0, import_kolmafia.isDarkMode)() ? "yellow" : "blue", "'>").concat((_a2 = arg.key) !== null && _a2 !== void 0 ? _a2 : key, "</font>"), valueText = arg.valueHelpName === "FLAG" ? "" : "<font color='purple'>".concat(arg.valueHelpName, "</font>"), helpText = (_b = arg.help) !== null && _b !== void 0 ? _b : "", defaultText = "default" in arg ? "<font color='#888888'>[default: ".concat(arg.default, "]</font>") : "", settingText = arg.setting === "" ? "" : "<font color='#888888'>[setting: ".concat((_c = arg.setting) !== null && _c !== void 0 ? _c : "".concat(metadata.scriptName, "_").concat((_d = arg.key) !== null && _d !== void 0 ? _d : key), "]</font>");
          (0, import_kolmafia.printHtml)("&nbsp;&nbsp;".concat([nameText, valueText, "-", helpText, defaultText, settingText].join(" ")));
          var valueOptions = (_e = arg.options) !== null && _e !== void 0 ? _e : [];
          if (valueOptions.length < (maxOptionsToDisplay != null ? maxOptionsToDisplay : Number.MAX_VALUE)) {
            var _iterator3 = _createForOfIteratorHelper(valueOptions), _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                var option = _step3.value;
                option.length === 1 || option[1] === void 0 ? (0, import_kolmafia.printHtml)("&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>".concat(nameText, "</font> ").concat(option[0])) : (0, import_kolmafia.printHtml)("&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>".concat(nameText, "</font> ").concat(option[0], " - ").concat(option[1]));
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }
      }, function(group) {
        (0, import_kolmafia.printHtml)(""), (0, import_kolmafia.printHtml)("<b>".concat(group.name, ":</b>"));
      });
    }
  }, {
    key: "getMetadata",
    value: function(args2) {
      return new WrappedArgMetadata(args2);
    }
  }]), Args2;
}(), ParseError = /* @__PURE__ */ _createClass(function ParseError2(message) {
  _classCallCheck(this, ParseError2), this.message = message;
}), specSymbol = Symbol("spec"), scriptSymbol = Symbol("script"), scriptHelpSymbol = Symbol("scriptHelp"), optionsSymbol = Symbol("options");
function parseAndValidate(arg, source, value) {
  var parsed_value;
  try {
    parsed_value = arg.parser(value);
  } catch (_a) {
    parsed_value = void 0;
  }
  if (parsed_value === void 0)
    throw "".concat(source, " expected ").concat(arg.valueHelpName, " but could not parse ").concat(value);
  if (parsed_value instanceof ParseError)
    throw "".concat(source, " ").concat(parsed_value.message);
  return parsed_value;
}
var WrappedArgMetadata = /* @__PURE__ */ function() {
  function WrappedArgMetadata2(args2) {
    _classCallCheck(this, WrappedArgMetadata2), this.spec = args2[specSymbol], this.scriptName = args2[scriptSymbol], this.scriptHelp = args2[scriptHelpSymbol], this.options = args2[optionsSymbol];
  }
  return _createClass(WrappedArgMetadata2, [{
    key: "loadDefaultValues",
    value: function() {
      return _loadDefaultValues(this.spec);
    }
  }, {
    key: "traverseAndMaybeSet",
    value: function(result, setTo) {
      return _traverseAndMaybeSet(this.spec, result, setTo);
    }
  }, {
    key: "traverse",
    value: function(process, onGroup) {
      return _traverse(this.spec, process, onGroup);
    }
  }]), WrappedArgMetadata2;
}();
function _loadDefaultValues(spec) {
  var result = {};
  for (var k in spec) {
    var argSpec = spec[k];
    "args" in argSpec ? result[k] = _loadDefaultValues(argSpec.args) : "default" in argSpec ? result[k] = argSpec.default : result[k] = void 0;
  }
  return result;
}
function _traverseAndMaybeSet(spec, result, setTo) {
  var groups = [];
  for (var k in spec) {
    var argSpec = spec[k];
    if ("args" in argSpec)
      groups.push([argSpec, k]);
    else {
      var value = setTo(argSpec, k);
      if (value === void 0)
        continue;
      result[k] = value;
    }
  }
  for (var _i = 0, _groups = groups; _i < _groups.length; _i++) {
    var group_and_key = _groups[_i];
    _traverseAndMaybeSet(group_and_key[0].args, result[group_and_key[1]], setTo);
  }
}
function _traverse(spec, process, onGroup) {
  var groups = [];
  for (var k in spec) {
    var argSpec = spec[k];
    "args" in argSpec ? groups.push([argSpec, k]) : process(argSpec, k);
  }
  for (var _i2 = 0, _groups2 = groups; _i2 < _groups2.length; _i2++) {
    var group_and_key = _groups2[_i2];
    onGroup == null || onGroup(group_and_key[0], group_and_key[1]), _traverse(group_and_key[0].args, process, onGroup);
  }
}
var CommandParser = /* @__PURE__ */ function() {
  function CommandParser2(command, keys, flags, positionalArgs) {
    _classCallCheck(this, CommandParser2), this.command = command, this.index = 0, this.keys = keys, this.flags = flags, this.positionalArgs = positionalArgs, this.positionalArgsParsed = 0;
  }
  return _createClass(CommandParser2, [{
    key: "parse",
    value: function() {
      var _a, _b, _c, _d;
      this.index = 0;
      for (var result = /* @__PURE__ */ new Map(); !this.finished(); ) {
        var parsing_negative_flag = !1;
        this.peek() === "!" && (parsing_negative_flag = !0, this.consume(["!"]));
        var startIndex = this.index, key = this.parseKey();
        if (result.has(key))
          throw "Duplicate key ".concat(key, " (first set to ").concat((_a = result.get(key)) !== null && _a !== void 0 ? _a : "", ")");
        if (this.flags.has(key)) {
          if (result.set(key, parsing_negative_flag ? "false" : "true"), this.peek() === "=")
            throw "Flag ".concat(key, " cannot be assigned a value");
          this.finished() || this.consume([" "]), this.prevUnquotedKey = void 0;
        } else if (this.keys.has(key)) {
          this.consume(["=", " "]);
          var value = this.parseValue();
          ["'", '"'].includes((_b = this.prev()) !== null && _b !== void 0 ? _b : "") ? this.prevUnquotedKey = void 0 : this.prevUnquotedKey = key, this.finished() || this.consume([" "]), result.set(key, value);
        } else if (this.positionalArgsParsed < this.positionalArgs.length && this.peek() !== "=") {
          var positionalKey = this.positionalArgs[this.positionalArgsParsed];
          this.positionalArgsParsed++, this.index = startIndex;
          var _value = this.parseValue();
          if (["'", '"'].includes((_c = this.prev()) !== null && _c !== void 0 ? _c : "") ? this.prevUnquotedKey = void 0 : this.prevUnquotedKey = key, this.finished() || this.consume([" "]), result.has(positionalKey))
            throw "Cannot assign ".concat(_value, " to ").concat(positionalKey, " (positionally) since ").concat(positionalKey, " was already set to ").concat((_d = result.get(positionalKey)) !== null && _d !== void 0 ? _d : "");
          result.set(positionalKey, _value);
        } else
          throw this.prevUnquotedKey && this.peek() !== "=" ? "Unknown argument: ".concat(key, " (if this should have been parsed as part of ").concat(this.prevUnquotedKey, ", you should surround the entire value in quotes)") : "Unknown argument: ".concat(key);
      }
      return result;
    }
  }, {
    key: "finished",
    value: function() {
      return this.index >= this.command.length;
    }
  }, {
    key: "peek",
    value: function() {
      if (!(this.index >= this.command.length))
        return this.command.charAt(this.index);
    }
  }, {
    key: "prev",
    value: function() {
      if (!(this.index <= 0) && !(this.index >= this.command.length + 1))
        return this.command.charAt(this.index - 1);
    }
  }, {
    key: "consume",
    value: function(allowed) {
      var _a;
      if (this.finished())
        throw "Expected ".concat(allowed);
      allowed.includes((_a = this.peek()) !== null && _a !== void 0 ? _a : "") && (this.index += 1);
    }
  }, {
    key: "findNext",
    value: function(searchValue) {
      var result = this.command.length, _iterator4 = _createForOfIteratorHelper(searchValue), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var value = _step4.value, index = this.command.indexOf(value, this.index);
          index !== -1 && index < result && (result = index);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return result;
    }
  }, {
    key: "parseKey",
    value: function() {
      var keyEnd = this.findNext(["=", " "]), key = this.command.substring(this.index, keyEnd);
      return this.index = keyEnd, key;
    }
  }, {
    key: "parseValue",
    value: function() {
      var _a, _b, valueEnder = " ", quotes = ["'", '"'];
      quotes.includes((_a = this.peek()) !== null && _a !== void 0 ? _a : "") && (valueEnder = (_b = this.peek()) !== null && _b !== void 0 ? _b : "", this.consume([valueEnder]));
      var valueEnd = this.findNext([valueEnder]), value = this.command.substring(this.index, valueEnd);
      if (valueEnder !== " " && valueEnd === this.command.length)
        throw "No closing ".concat(valueEnder, " found for ").concat(valueEnder).concat(value);
      return this.index = valueEnd, valueEnder !== " " && this.consume([valueEnder]), value;
    }
  }]), CommandParser2;
}();

// node_modules/grimoire-kolmafia/dist/combat.js
init_kolmafia_polyfill();
var import_kolmafia20 = require("kolmafia");

// node_modules/libram/dist/index.js
init_kolmafia_polyfill();

// node_modules/libram/dist/combat.js
init_kolmafia_polyfill();
var import_kolmafia6 = require("kolmafia");

// node_modules/libram/dist/lib.js
init_kolmafia_polyfill();
var import_kolmafia5 = require("kolmafia");

// node_modules/libram/dist/logger.js
init_kolmafia_polyfill();
var import_kolmafia2 = require("kolmafia"), _defaultHandlers;
function _classCallCheck2(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties2(Constructor.prototype, protoProps), staticProps && _defineProperties2(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _defineProperty2(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
var LogLevels;
(function(LogLevels2) {
  LogLevels2[LogLevels2.NONE = 0] = "NONE", LogLevels2[LogLevels2.ERROR = 1] = "ERROR", LogLevels2[LogLevels2.WARNING = 2] = "WARNING", LogLevels2[LogLevels2.INFO = 3] = "INFO", LogLevels2[LogLevels2.DEBUG = 4] = "DEBUG";
})(LogLevels || (LogLevels = {}));
var defaultHandlers = (_defaultHandlers = {}, _defineProperty2(_defaultHandlers, LogLevels.INFO, function(message) {
  (0, import_kolmafia2.printHtml)("<b>[Libram Info]</b> ".concat(message)), (0, import_kolmafia2.logprint)("[Libram] ".concat(message));
}), _defineProperty2(_defaultHandlers, LogLevels.WARNING, function(message) {
  (0, import_kolmafia2.printHtml)('<span style="background: orange; color: white;"><b>[Libram Warning]</b> '.concat(message, "</span>")), (0, import_kolmafia2.logprint)("[Libram] ".concat(message));
}), _defineProperty2(_defaultHandlers, LogLevels.ERROR, function(error) {
  (0, import_kolmafia2.printHtml)('<span style="background: red; color: white;"><b>[Libram Error]</b> '.concat(error.toString(), "</span>")), (0, import_kolmafia2.logprint)("[Libram] ".concat(error));
}), _defineProperty2(_defaultHandlers, LogLevels.DEBUG, function(message) {
  (0, import_kolmafia2.printHtml)('<span style="background: red; color: white;"><b>[Libram Debug]</b> '.concat(message, "</span>")), (0, import_kolmafia2.logprint)("[Libram] ".concat(message));
}), _defaultHandlers), Logger = /* @__PURE__ */ function() {
  function Logger2() {
    _classCallCheck2(this, Logger2), _defineProperty2(this, "handlers", defaultHandlers);
  }
  return _createClass2(Logger2, [{
    key: "level",
    get: function() {
      return Logger2.currentLevel;
    }
  }, {
    key: "setLevel",
    value: function(level) {
      Logger2.currentLevel = level;
    }
  }, {
    key: "setHandler",
    value: function(level, callback) {
      this.handlers[level] = callback;
    }
  }, {
    key: "log",
    value: function(level, message) {
      this.level >= level && this.handlers[level](message);
    }
  }, {
    key: "info",
    value: function(message) {
      this.log(LogLevels.INFO, message);
    }
  }, {
    key: "warning",
    value: function(message) {
      this.log(LogLevels.WARNING, message);
    }
  }, {
    key: "error",
    value: function(message) {
      this.log(LogLevels.ERROR, message);
    }
  }, {
    key: "debug",
    value: function(message) {
      this.log(LogLevels.DEBUG, message);
    }
  }]), Logger2;
}();
_defineProperty2(Logger, "currentLevel", LogLevels.ERROR);
var logger_default = new Logger();

// node_modules/libram/dist/property.js
init_kolmafia_polyfill();
var import_kolmafia3 = require("kolmafia");

// node_modules/libram/dist/propertyTyping.js
init_kolmafia_polyfill();

// node_modules/libram/dist/propertyTypes.js
init_kolmafia_polyfill();
var booleanProperties = ["abortOnChoiceWhenNotInChoice", "addChatCommandLine", "addCreationQueue", "addStatusBarToFrames", "allowCloseableDesktopTabs", "allowNegativeTally", "allowNonMoodBurning", "allowSummonBurning", "autoHighlightOnFocus", "broadcastEvents", "cacheMallSearches", "chatBeep", "chatLinksUseRelay", "compactChessboard", "copyAsHTML", "customizedTabs", "debugBuy", "debugConsequences", "debugFoxtrotRemoval", "debugPathnames", "debugTopMenuStyle", "gapProtection", "gitInstallDependencies", "gitShowCommitMessages", "gitUpdateOnLogin", "greenScreenProtection", "guiUsesOneWindow", "hideServerDebugText", "logAcquiredItems", "logBattleAction", "logBrowserInteractions", "logChatMessages", "logChatRequests", "logCleanedHTML", "logDecoratedResponses", "logFamiliarActions", "logGainMessages", "logReadableHTML", "logPreferenceChange", "logMonsterHealth", "logReverseOrder", "logStatGains", "logStatusEffects", "logStatusOnLogin", "macroDebug", "macroLens", "mementoListActive", "mergeHobopolisChat", "pingLogin", "pingStealthyTimein", "printStackOnAbort", "proxySet", "relayAddSounds", "relayAddsCustomCombat", "relayAddsDiscoHelper", "relayAddsGraphicalCLI", "relayAddsQuickScripts", "relayAddsRestoreLinks", "relayAddsUpArrowLinks", "relayAddsUseLinks", "relayAddsWikiLinks", "relayAllowRemoteAccess", "relayBrowserOnly", "relayCacheUncacheable", "relayFormatsChatText", "relayHidesJunkMallItems", "relayMaintainsEffects", "relayMaintainsHealth", "relayMaintainsMana", "relayOverridesImages", "relayRunsAfterAdventureScript", "relayRunsBeforeBattleScript", "relayRunsBeforePVPScript", "relayScriptButtonFirst", "relayTextualizesEffects", "relayTrimsZapList", "relayUsesInlineLinks", "relayUsesIntegratedChat", "relayWarnOnRecoverFailure", "removeMalignantEffects", "saveSettingsOnSet", "sharePriceData", "showAllRequests", "showExceptionalRequests", "stealthLogin", "svnAlwaysAdd", "svnAlwaysOverwrite", "svnInstallDependencies", "svnShowCommitMessages", "svnUpdateOnLogin", "switchEquipmentForBuffs", "syncAfterSvnUpdate", "useChatToolbar", "useContactsFrame", "useDevServer", "useDockIconBadge", "useHugglerChannel", "useImageCache", "useLastUserAgent", "useSystemTrayIcon", "useTabbedChatFrame", "useToolbars", "useCachedVolcanoMaps", "useZoneComboBox", "verboseSpeakeasy", "verboseFloundry", "wrapLongLines", "_gitUpdated", "_svnRepoFileFetched", "_svnUpdated", "antagonisticSnowmanKitAvailable", "arcadeGameHints", "armoryUnlocked", "autoForbidIgnoringStores", "autoCraft", "autoQuest", "autoEntangle", "autoGarish", "autoManaRestore", "autoFillMayoMinder", "autoPinkyRing", "autoPlantHardcore", "autoPlantSoftcore", "autoPotionID", "autoRepairBoxServants", "autoSatisfyWithCloset", "autoSatisfyWithCoinmasters", "autoSatisfyWithMall", "autoSatisfyWithNPCs", "autoSatisfyWithStash", "autoSatisfyWithStorage", "autoSetConditions", "autoSteal", "autoTuxedo", "backupCameraReverserEnabled", "badMoonEncounter01", "badMoonEncounter02", "badMoonEncounter03", "badMoonEncounter04", "badMoonEncounter05", "badMoonEncounter06", "badMoonEncounter07", "badMoonEncounter08", "badMoonEncounter09", "badMoonEncounter10", "badMoonEncounter11", "badMoonEncounter12", "badMoonEncounter13", "badMoonEncounter14", "badMoonEncounter15", "badMoonEncounter16", "badMoonEncounter17", "badMoonEncounter18", "badMoonEncounter19", "badMoonEncounter20", "badMoonEncounter21", "badMoonEncounter22", "badMoonEncounter23", "badMoonEncounter24", "badMoonEncounter25", "badMoonEncounter26", "badMoonEncounter27", "badMoonEncounter28", "badMoonEncounter29", "badMoonEncounter30", "badMoonEncounter31", "badMoonEncounter32", "badMoonEncounter33", "badMoonEncounter34", "badMoonEncounter35", "badMoonEncounter36", "badMoonEncounter37", "badMoonEncounter38", "badMoonEncounter39", "badMoonEncounter40", "badMoonEncounter41", "badMoonEncounter42", "badMoonEncounter43", "badMoonEncounter44", "badMoonEncounter45", "badMoonEncounter46", "badMoonEncounter47", "badMoonEncounter48", "barrelShrineUnlocked", "bigBrotherRescued", "blackBartsBootyAvailable", "bondAdv", "bondBeach", "bondBeat", "bondBooze", "bondBridge", "bondDesert", "bondDR", "bondDrunk1", "bondDrunk2", "bondHoney", "bondHP", "bondInit", "bondItem1", "bondItem2", "bondItem3", "bondJetpack", "bondMartiniDelivery", "bondMartiniPlus", "bondMartiniTurn", "bondMeat", "bondMox1", "bondMox2", "bondMPregen", "bondMus1", "bondMus2", "bondMys1", "bondMys2", "bondSpleen", "bondStat", "bondStat2", "bondStealth", "bondStealth2", "bondSymbols", "bondWar", "bondWeapon2", "bondWpn", "booPeakLit", "bootsCharged", "breakfastCompleted", "burrowgrubHiveUsed", "calzoneOfLegendEaten", "canteenUnlocked", "chaosButterflyThrown", "chatbotScriptExecuted", "chateauAvailable", "chatLiterate", "chatServesUpdates", "checkJackassHardcore", "checkJackassSoftcore", "clanAttacksEnabled", "coldAirportAlways", "considerShadowNoodles", "controlRoomUnlock", "concertVisited", "controlPanel1", "controlPanel2", "controlPanel3", "controlPanel4", "controlPanel5", "controlPanel6", "controlPanel7", "controlPanel8", "controlPanel9", "corralUnlocked", "dailyDungeonDone", "dampOldBootPurchased", "daycareOpen", "deepDishOfLegendEaten", "demonSummoned", "dinseyAudienceEngagement", "dinseyGarbagePirate", "dinseyRapidPassEnabled", "dinseyRollercoasterNext", "dinseySafetyProtocolsLoose", "doghouseBoarded", "dontStopForCounters", "drippingHallUnlocked", "drippyShieldUnlocked", "edUsedLash", "eldritchFissureAvailable", "eldritchHorrorAvailable", "errorOnAmbiguousFold", "essenceOfAnnoyanceAvailable", "essenceOfBearAvailable", "expressCardUsed", "falloutShelterChronoUsed", "falloutShelterCoolingTankUsed", "fireExtinguisherBatHoleUsed", "fireExtinguisherChasmUsed", "fireExtinguisherCyrptUsed", "fireExtinguisherDesertUsed", "fireExtinguisherHaremUsed", "fistTeachingsHaikuDungeon", "fistTeachingsPokerRoom", "fistTeachingsBarroomBrawl", "fistTeachingsConservatory", "fistTeachingsBatHole", "fistTeachingsFunHouse", "fistTeachingsMenagerie", "fistTeachingsSlums", "fistTeachingsFratHouse", "fistTeachingsRoad", "fistTeachingsNinjaSnowmen", "flickeringPixel1", "flickeringPixel2", "flickeringPixel3", "flickeringPixel4", "flickeringPixel5", "flickeringPixel6", "flickeringPixel7", "flickeringPixel8", "floristFriarAvailable", "floristFriarChecked", "frAlways", "frCemetaryUnlocked", "friarsBlessingReceived", "frMountainsUnlocked", "frSwampUnlocked", "frVillageUnlocked", "frWoodUnlocked", "getawayCampsiteUnlocked", "ghostPencil1", "ghostPencil2", "ghostPencil3", "ghostPencil4", "ghostPencil5", "ghostPencil6", "ghostPencil7", "ghostPencil8", "ghostPencil9", "gingerAdvanceClockUnlocked", "gingerBlackmailAccomplished", "gingerbreadCityAvailable", "gingerExtraAdventures", "gingerNegativesDropped", "gingerSewersUnlocked", "gingerSubwayLineUnlocked", "gingerRetailUnlocked", "glitchItemAvailable", "grabCloversHardcore", "grabCloversSoftcore", "guideToSafariAvailable", "guyMadeOfBeesDefeated", "hallowienerDefiledNook", "hallowienerGuanoJunction", "hallowienerKnollGym", "hallowienerMadnessBakery", "hallowienerMiddleChamber", "hallowienerOvergrownLot", "hallowienerSkeletonStore", "hallowienerSmutOrcs", "hallowienerSonofaBeach", "hallowienerVolcoino", "hardcorePVPWarning", "harvestBatteriesHardcore", "harvestBatteriesSoftcore", "hasAutumnaton", "hasBartender", "hasChef", "hasCocktailKit", "hasCosmicBowlingBall", "hasDetectiveSchool", "hasMaydayContract", "hasOven", "hasRange", "hasShaker", "hasSushiMat", "hasTwinkleVision", "haveBoxingDaydreamHardcore", "haveBoxingDaydreamSoftcore", "hermitHax0red", "holidayHalsBookAvailable", "horseryAvailable", "hotAirportAlways", "implementGlitchItem", "intenseCurrents", "itemBoughtPerAscension637", "itemBoughtPerAscension8266", "itemBoughtPerAscension10790", "itemBoughtPerAscension10794", "itemBoughtPerAscension10795", "itemBoughtPerCharacter6423", "itemBoughtPerCharacter6428", "itemBoughtPerCharacter6429", "kingLiberated", "lastPirateInsult1", "lastPirateInsult2", "lastPirateInsult3", "lastPirateInsult4", "lastPirateInsult5", "lastPirateInsult6", "lastPirateInsult7", "lastPirateInsult8", "lawOfAveragesAvailable", "leafletCompleted", "ledCandleDropped", "libraryCardUsed", "lockPicked", "logBastilleBattalionBattles", "loginRecoveryHardcore", "loginRecoverySoftcore", "lovebugsUnlocked", "loveTunnelAvailable", "lowerChamberUnlock", "madnessBakeryAvailable", "makePocketWishesHardcore", "makePocketWishesSoftcore", "manualOfNumberologyAvailable", "mappingMonsters", "mapToAnemoneMinePurchased", "mapToKokomoAvailable", "mapToMadnessReefPurchased", "mapToTheDiveBarPurchased", "mapToTheMarinaraTrenchPurchased", "mapToTheSkateParkPurchased", "maraisBeaverUnlock", "maraisCorpseUnlock", "maraisDarkUnlock", "maraisVillageUnlock", "maraisWildlifeUnlock", "maraisWizardUnlock", "maximizerAlwaysCurrent", "maximizerCreateOnHand", "maximizerCurrentMallPrices", "maximizerFoldables", "maximizerIncludeAll", "maximizerNoAdventures", "middleChamberUnlock", "milkOfMagnesiumActive", "moonTuned", "neverendingPartyAlways", "noncombatForcerActive", "oasisAvailable", "odeBuffbotCheck", "oilPeakLit", "oscusSodaUsed", "outrageousSombreroUsed", "overgrownLotAvailable", "ownsFloristFriar", "ownsSpeakeasy", "pathedSummonsHardcore", "pathedSummonsSoftcore", "pizzaOfLegendEaten", "popularTartUnlocked", "potatoAlarmClockUsed", "prAlways", "prayedForGlamour", "prayedForProtection", "prayedForVigor", "primaryLabCheerCoreGrabbed", "pyramidBombUsed", "rageGlandVented", "readManualHardcore", "readManualSoftcore", "relayShowSpoilers", "relayShowWarnings", "rememberDesktopSize", "replicaChateauAvailable", "replicaNeverendingPartyAlways", "replicaWitchessSetAvailable", "requireBoxServants", "requireSewerTestItems", "restUsingCampAwayTent", "restUsingChateau", "ROMOfOptimalityAvailable", "safePickpocket", "schoolOfHardKnocksDiplomaAvailable", "scriptCascadingMenus", "serverAddsCustomCombat", "SHAWARMAInitiativeUnlocked", "showForbiddenStores", "showGainsPerUnit", "showIgnoringStorePrices", "showNoSummonOnly", "showTurnFreeOnly", "skeletonStoreAvailable", "sleazeAirportAlways", "snojoAvailable", "sortByEffect", "sortByRoom", "spacegateAlways", "spacegateVaccine1", "spacegateVaccine2", "spacegateVaccine3", "spaceInvaderDefeated", "spelunkyHints", "spiceMelangeUsed", "spookyAirportAlways", "stenchAirportAlways", "stopForFixedWanderer", "stopForUltraRare", "styxPixieVisited", "superconductorDefeated", "suppressInappropriateNags", "suppressPowerPixellation", "suppressMallPriceCacheMessages", "telegraphOfficeAvailable", "telescopeLookedHigh", "timeTowerAvailable", "trackLightsOut", "uneffectWithHotTub", "universalSeasoningActive", "universalSeasoningAvailable", "useBookOfEverySkillHardcore", "useBookOfEverySkillSoftcore", "useCrimboToysHardcore", "useCrimboToysSoftcore", "verboseMaximizer", "visitLoungeHardcore", "visitLoungeSoftcore", "visitRumpusHardcore", "visitRumpusSoftcore", "voteAlways", "wildfireBarrelCaulked", "wildfireDusted", "wildfireFracked", "wildfirePumpGreased", "wildfireSprinkled", "yearbookCameraPending", "youRobotScavenged", "_2002MrStoreCreditsCollected", "_affirmationCookieEaten", "_affirmationHateUsed", "_airFryerUsed", "_akgyxothUsed", "_alienAnimalMilkUsed", "_alienPlantPodUsed", "_allYearSucker", "_aprilShower", "_armyToddlerCast", "_aug1Cast", "_aug2Cast", "_aug3Cast", "_aug4Cast", "_aug5Cast", "_aug6Cast", "_aug7Cast", "_aug8Cast", "_aug9Cast", "_aug10Cast", "_aug11Cast", "_aug12Cast", "_aug13Cast", "_aug14Cast", "_aug15Cast", "_aug16Cast", "_aug17Cast", "_aug18Cast", "_aug19Cast", "_aug20Cast", "_aug21Cast", "_aug22Cast", "_aug23Cast", "_aug24Cast", "_aug25Cast", "_aug26Cast", "_aug27Cast", "_aug28Cast", "_aug29Cast", "_aug30Cast", "_aug31Cast", "_augTodayCast", "_authorsInkUsed", "_baconMachineUsed", "_bagOfCandy", "_bagOfCandyUsed", "_bagOTricksUsed", "_ballastTurtleUsed", "_ballInACupUsed", "_ballpit", "_barrelPrayer", "_bastilleLastBattleWon", "_beachCombing", "_bendHellUsed", "_blackMonolithUsed", "_blankoutUsed", "_bonersSummoned", "_bookOfEverySkillUsed", "_borrowedTimeUsed", "_bowleggedSwaggerUsed", "_bowlFullOfJellyUsed", "_boxOfHammersUsed", "_brainPreservationFluidUsed", "_brassDreadFlaskUsed", "_cameraUsed", "_canSeekBirds", "_carboLoaded", "_cargoPocketEmptied", "_ceciHatUsed", "_chateauDeskHarvested", "_chateauMonsterFought", "_chibiChanged", "_chronerCrossUsed", "_chronerTriggerUsed", "_chubbyAndPlumpUsed", "_circadianRhythmsRecalled", "_circleDrumUsed", "_clanFortuneBuffUsed", "_claraBellUsed", "_coalPaperweightUsed", "_cocoaDispenserUsed", "_cocktailShakerUsed", "_coldAirportToday", "_coldOne", "_communismUsed", "_confusingLEDClockUsed", "_controlPanelUsed", "_cookbookbatRecipeDrops", "_corruptedStardustUsed", "_cosmicSixPackConjured", "_crappyCameraUsed", "_creepyVoodooDollUsed", "_crimboTraining", "_crimboTree", "_cursedKegUsed", "_cursedMicrowaveUsed", "_dailyDungeonMalwareUsed", "_darkChocolateHeart", "_daycareFights", "_daycareNap", "_daycareSpa", "_daycareToday", "_defectiveTokenChecked", "_defectiveTokenUsed", "_dinseyGarbageDisposed", "_discoKnife", "_distentionPillUsed", "_dnaHybrid", "_docClocksThymeCocktailDrunk", "_drippingHallDoor1", "_drippingHallDoor2", "_drippingHallDoor3", "_drippingHallDoor4", "_drippyCaviarUsed", "_drippyNuggetUsed", "_drippyPilsnerUsed", "_drippyPlumUsed", "_drippyWineUsed", "_eldritchHorrorEvoked", "_eldritchTentacleFought", "_entauntaunedToday", "_envyfishEggUsed", "_epicMcTwistUsed", "_essentialTofuUsed", "_etchedHourglassUsed", "_eternalCarBatteryUsed", "_everfullGlassUsed", "_eyeAndATwistUsed", "_fancyChessSetUsed", "_falloutShelterSpaUsed", "_fancyHotDogEaten", "_farmerItemsCollected", "_favoriteBirdVisited", "_firedJokestersGun", "_fireExtinguisherRefilled", "_fireStartingKitUsed", "_fireworksShop", "_fireworksShopHatBought", "_fireworksShopEquipmentBought", "_fireworkUsed", "_fishyPipeUsed", "_floundryItemCreated", "_floundryItemUsed", "_freePillKeeperUsed", "_frToday", "_fudgeSporkUsed", "_garbageItemChanged", "_gingerBiggerAlligators", "_gingerbreadCityToday", "_gingerbreadClockAdvanced", "_gingerbreadClockVisited", "_gingerbreadColumnDestroyed", "_gingerbreadMobHitUsed", "_glennGoldenDiceUsed", "_glitchItemImplemented", "_gnollEyeUsed", "_governmentPerDiemUsed", "_grimBuff", "_guildManualUsed", "_guzzlrQuestAbandoned", "_hardKnocksDiplomaUsed", "_hippyMeatCollected", "_hobbyHorseUsed", "_holidayFunUsed", "_holoWristCrystal", "_hotAirportToday", "_hungerSauceUsed", "_hyperinflatedSealLungUsed", "_iceHotelRoomsRaided", "_iceSculptureUsed", "_incredibleSelfEsteemCast", "_infernoDiscoVisited", "_internetDailyDungeonMalwareBought", "_internetGallonOfMilkBought", "_internetPlusOneBought", "_internetPrintScreenButtonBought", "_internetViralVideoBought", "_interviewIsabella", "_interviewMasquerade", "_interviewVlad", "_inquisitorsUnidentifiableObjectUsed", "_ironicMoustache", "_jackassPlumberGame", "_jarlsCheeseSummoned", "_jarlsCreamSummoned", "_jarlsDoughSummoned", "_jarlsEggsSummoned", "_jarlsFruitSummoned", "_jarlsMeatSummoned", "_jarlsPotatoSummoned", "_jarlsVeggiesSummoned", "_jingleBellUsed", "_jukebox", "_kgbFlywheelCharged", "_kgbLeftDrawerUsed", "_kgbOpened", "_kgbRightDrawerUsed", "_kolConSixPackUsed", "_kolhsCutButNotDried", "_kolhsIsskayLikeAnAshtray", "_kolhsPoeticallyLicenced", "_kolhsSchoolSpirited", "_kudzuSaladEaten", "_lastCombatLost", "_lastCombatWon", "_latteBanishUsed", "_latteCopyUsed", "_latteDrinkUsed", "_leafAntEggCrafted", "_leafDayShortenerCrafted", "_leafTattooCrafted", "_leavesJumped", "_legendaryBeat", "_licenseToChillUsed", "_lodestoneUsed", "_lookingGlass", "_loveTunnelToday", "_loveTunnelUsed", "_luckyGoldRingVolcoino", "_lunchBreak", "_lupineHormonesUsed", "_lyleFavored", "_madLiquorDrunk", "_madTeaParty", "_mafiaMiddleFingerRingUsed", "_managerialManipulationUsed", "_mansquitoSerumUsed", "_mapToACandyRichBlockUsed", "_maydayDropped", "_mayoDeviceRented", "_mayoTankSoaked", "_meatballMachineUsed", "_meatifyMatterUsed", "_milkOfMagnesiumUsed", "_mimeArmyShotglassUsed", "_missGravesVermouthDrunk", "_missileLauncherUsed", "_molehillMountainUsed", "_momFoodReceived", "_mrBurnsgerEaten", "_muffinOrderedToday", "_mushroomGardenVisited", "_neverendingPartyToday", "_newYouQuestCompleted", "_olympicSwimmingPool", "_olympicSwimmingPoolItemFound", "_overflowingGiftBasketUsed", "_partyHard", "_pastaAdditive", "_perfectFreezeUsed", "_perfectlyFairCoinUsed", "_petePartyThrown", "_peteRiotIncited", "_photocopyUsed", "_pickyTweezersUsed", "_pingPongGame", "_pirateBellowUsed", "_pirateForkUsed", "_pixelOrbUsed", "_plumbersMushroomStewEaten", "_pneumaticityPotionUsed", "_portableSteamUnitUsed", "_pottedTeaTreeUsed", "_prToday", "_psychoJarFilled", "_psychoJarUsed", "_psychokineticHugUsed", "_rainStickUsed", "_redwoodRainStickUsed", "_replicaSnowconeTomeUsed", "_replicaResolutionLibramUsed", "_replicaSmithsTomeUsed", "_requestSandwichSucceeded", "_rhinestonesAcquired", "_seaJellyHarvested", "_setOfJacksUsed", "_sewingKitUsed", "_sexChanged", "_shadowAffinityToday", "_shadowForestLooted", "_shrubDecorated", "_silverDreadFlaskUsed", "_sitCourseCompleted", "_skateBuff1", "_skateBuff2", "_skateBuff3", "_skateBuff4", "_skateBuff5", "_sleazeAirportToday", "_sobrieTeaUsed", "_softwareGlitchTurnReceived", "_sotParcelReturned", "_spacegateMurderbot", "_spacegateRuins", "_spacegateSpant", "_spacegateToday", "_spacegateVaccine", "_spaghettiBreakfast", "_spaghettiBreakfastEaten", "_spinmasterLatheVisited", "_spinningWheel", "_spookyAirportToday", "_stabonicScrollUsed", "_steelyEyedSquintUsed", "_stenchAirportToday", "_stinkyCheeseBanisherUsed", "_strangeStalagmiteUsed", "_streamsCrossed", "_stuffedPocketwatchUsed", "_styxSprayUsed", "_summonAnnoyanceUsed", "_summonCarrotUsed", "_summonResortPassUsed", "_sweetToothUsed", "_syntheticDogHairPillUsed", "_tacoFlierUsed", "_telegraphOfficeToday", "_templeHiddenPower", "_tempuraAirUsed", "_thesisDelivered", "_tiedUpFlamingLeafletFought", "_tiedUpFlamingMonsteraFought", "_tiedUpLeaviathanFought", "_timeSpinnerReplicatorUsed", "_toastSummoned", "_tonicDjinn", "_treasuryEliteMeatCollected", "_treasuryHaremMeatCollected", "_trivialAvocationsGame", "_tryptophanDartUsed", "_turtlePowerCast", "_twelveNightEnergyUsed", "_ultraMegaSourBallUsed", "_victorSpoilsUsed", "_villainLairCanLidUsed", "_villainLairColorChoiceUsed", "_villainLairDoorChoiceUsed", "_villainLairFirecrackerUsed", "_villainLairSymbologyChoiceUsed", "_villainLairWebUsed", "_vmaskBanisherUsed", "_voraciTeaUsed", "_volcanoItemRedeemed", "_volcanoSuperduperheatedMetal", "_voteToday", "_VYKEACafeteriaRaided", "_VYKEALoungeRaided", "_walfordQuestStartedToday", "_warbearBankUsed", "_warbearBreakfastMachineUsed", "_warbearGyrocopterUsed", "_warbearSodaMachineUsed", "_wildfireBarrelHarvested", "_witchessBuff", "_workshedItemUsed", "_zombieClover", "_preventScurvy", "lockedItem4637", "lockedItem4638", "lockedItem4639", "lockedItem4646", "lockedItem4647", "unknownRecipe3542", "unknownRecipe3543", "unknownRecipe3544", "unknownRecipe3545", "unknownRecipe3546", "unknownRecipe3547", "unknownRecipe3548", "unknownRecipe3749", "unknownRecipe3751", "unknownRecipe4172", "unknownRecipe4173", "unknownRecipe4174", "unknownRecipe5060", "unknownRecipe5061", "unknownRecipe5062", "unknownRecipe5063", "unknownRecipe5064", "unknownRecipe5066", "unknownRecipe5067", "unknownRecipe5069", "unknownRecipe5070", "unknownRecipe5072", "unknownRecipe5073", "unknownRecipe5670", "unknownRecipe5671", "unknownRecipe6501", "unknownRecipe6564", "unknownRecipe6565", "unknownRecipe6566", "unknownRecipe6567", "unknownRecipe6568", "unknownRecipe6569", "unknownRecipe6570", "unknownRecipe6571", "unknownRecipe6572", "unknownRecipe6573", "unknownRecipe6574", "unknownRecipe6575", "unknownRecipe6576", "unknownRecipe6577", "unknownRecipe6578", "unknownRecipe7752", "unknownRecipe7753", "unknownRecipe7754", "unknownRecipe7755", "unknownRecipe7756", "unknownRecipe7757", "unknownRecipe7758", "unknownRecipe10970", "unknownRecipe10971", "unknownRecipe10972", "unknownRecipe10973", "unknownRecipe10974", "unknownRecipe10975", "unknownRecipe10976", "unknownRecipe10977", "unknownRecipe10978", "unknownRecipe10988", "unknownRecipe10989", "unknownRecipe10990", "unknownRecipe10991", "unknownRecipe10992", "unknownRecipe11000"], numericProperties = ["coinMasterIndex", "dailyDeedsVersion", "defaultDropdown1", "defaultDropdown2", "defaultDropdownSplit", "defaultLimit", "fixedThreadPoolSize", "itemManagerIndex", "lastBuffRequestType", "lastGlobalCounterDay", "lastImageCacheClear", "pingDefaultTestPings", "pingLoginCount", "pingLoginGoal", "pingLoginThreshold", "pingTestPings", "previousUpdateRevision", "relayDelayForSVN", "relaySkillButtonCount", "scriptButtonPosition", "statusDropdown", "svnThreadPoolSize", "toolbarPosition", "_beachTides", "_g9Effect", "8BitBonusTurns", "8BitScore", "addingScrolls", "affirmationCookiesEaten", "aminoAcidsUsed", "antagonisticSnowmanKitCost", "ascensionsToday", "asolDeferredPoints", "asolPointsPigSkinner", "asolPointsCheeseWizard", "asolPointsJazzAgent", "autoAbortThreshold", "autoAntidote", "autoBuyPriceLimit", "autumnatonQuestTurn", "availableCandyCredits", "availableDimes", "availableFunPoints", "availableMrStore2002Credits", "availableQuarters", "availableStoreCredits", "availableSwagger", "averageSwagger", "awolMedicine", "awolPointsBeanslinger", "awolPointsCowpuncher", "awolPointsSnakeoiler", "awolDeferredPointsBeanslinger", "awolDeferredPointsCowpuncher", "awolDeferredPointsSnakeoiler", "awolVenom", "bagOTricksCharges", "ballpitBonus", "bankedKarma", "bartenderTurnsUsed", "basementMallPrices", "basementSafetyMargin", "batmanFundsAvailable", "batmanBonusInitialFunds", "batmanTimeLeft", "bearSwagger", "beeCounter", "beGregariousCharges", "beGregariousFightsLeft", "birdformCold", "birdformHot", "birdformRoc", "birdformSleaze", "birdformSpooky", "birdformStench", "blackBartsBootyCost", "blackPuddingsDefeated", "blackForestProgress", "blankOutUsed", "bloodweiserDrunk", "bondPoints", "bondVillainsDefeated", "boneAbacusVictories", "bookOfFactsGummi", "bookOfFactsPinata", "booPeakProgress", "borisPoints", "breakableHandling", "breakableHandling1964", "breakableHandling9691", "breakableHandling9692", "breakableHandling9699", "breathitinCharges", "brodenBacteria", "brodenSprinkles", "buffBotMessageDisposal", "buffBotPhilanthropyType", "buffJimmyIngredients", "burnoutsDefeated", "burrowgrubSummonsRemaining", "camelSpit", "camerasUsed", "campAwayDecoration", "candyWitchTurnsUsed", "candyWitchCandyTotal", "carboLoading", "catBurglarBankHeists", "cellarLayout", "charitableDonations", "chasmBridgeProgress", "chefTurnsUsed", "chessboardsCleared", "chibiAlignment", "chibiBirthday", "chibiFitness", "chibiIntelligence", "chibiLastVisit", "chibiSocialization", "chilledToTheBone", "cinchoSaltAndLime", "cinderellaMinutesToMidnight", "cinderellaScore", "cocktailSummons", "commerceGhostCombats", "controlPanelOmega", "cornucopiasOpened", "cosmicBowlingBallReturnCombats", "cozyCounter6332", "cozyCounter6333", "cozyCounter6334", "craftingClay", "craftingLeather", "craftingStraw", "crimbo16BeardChakraCleanliness", "crimbo16BootsChakraCleanliness", "crimbo16BungChakraCleanliness", "crimbo16CrimboHatChakraCleanliness", "crimbo16GutsChakraCleanliness", "crimbo16HatChakraCleanliness", "crimbo16JellyChakraCleanliness", "crimbo16LiverChakraCleanliness", "crimbo16NippleChakraCleanliness", "crimbo16NoseChakraCleanliness", "crimbo16ReindeerChakraCleanliness", "crimbo16SackChakraCleanliness", "crimboTrainingSkill", "crimboTreeDays", "cubelingProgress", "currentExtremity", "currentHedgeMazeRoom", "currentMojoFilters", "currentNunneryMeat", "currentPortalEnergy", "currentReplicaStoreYear", "cursedMagnifyingGlassCount", "cyrptAlcoveEvilness", "cyrptCrannyEvilness", "cyrptNicheEvilness", "cyrptNookEvilness", "cyrptTotalEvilness", "darkGyfftePoints", "daycareEquipment", "daycareInstructors", "daycareLastScavenge", "daycareToddlers", "dbNemesisSkill1", "dbNemesisSkill2", "dbNemesisSkill3", "desertExploration", "desktopHeight", "desktopWidth", "dinseyFilthLevel", "dinseyFunProgress", "dinseyNastyBearsDefeated", "dinseySocialJusticeIProgress", "dinseySocialJusticeIIProgress", "dinseyTouristsFed", "dinseyToxicMultiplier", "doctorBagQuestLights", "doctorBagUpgrades", "dreadScroll1", "dreadScroll2", "dreadScroll3", "dreadScroll4", "dreadScroll5", "dreadScroll6", "dreadScroll7", "dreadScroll8", "dripAdventuresSinceAscension", "drippingHallAdventuresSinceAscension", "drippingTreesAdventuresSinceAscension", "drippyBatsUnlocked", "drippyJuice", "drippyOrbsClaimed", "drunkenSwagger", "edDefeatAbort", "edPoints", "eldritchTentaclesFought", "electricKoolAidEaten", "elfGratitude", "encountersUntilDMTChoice", "encountersUntilYachtzeeChoice", "encountersUntilNEPChoice", "encountersUntilSRChoice", "ensorceleeLevel", "entauntaunedColdRes", "essenceOfAnnoyanceCost", "essenceOfBearCost", "extraRolloverAdventures", "falloutShelterLevel", "familiarSweat", "fingernailsClipped", "fistSkillsKnown", "flyeredML", "fossilB", "fossilD", "fossilN", "fossilP", "fossilS", "fossilW", "fratboysDefeated", "frenchGuardTurtlesFreed", "funGuyMansionKills", "garbageChampagneCharge", "garbageFireProgress", "garbageShirtCharge", "garbageTreeCharge", "garlandUpgrades", "getsYouDrunkTurnsLeft", "ghostPepperTurnsLeft", "gingerDigCount", "gingerLawChoice", "gingerMuscleChoice", "gingerTrainScheduleStudies", "gladiatorBallMovesKnown", "gladiatorBladeMovesKnown", "gladiatorNetMovesKnown", "glitchItemCost", "glitchItemImplementationCount", "glitchItemImplementationLevel", "glitchSwagger", "gloverPoints", "gnasirProgress", "goldenMrAccessories", "gongPath", "gooseDronesRemaining", "goreCollected", "gourdItemCount", "greyYouPoints", "grimoire1Summons", "grimoire2Summons", "grimoire3Summons", "grimstoneCharge", "guardTurtlesFreed", "guideToSafariCost", "guyMadeOfBeesCount", "guzzlrBronzeDeliveries", "guzzlrDeliveryProgress", "guzzlrGoldDeliveries", "guzzlrPlatinumDeliveries", "haciendaLayout", "hallowiener8BitRealm", "hallowienerCoinspiracy", "hareMillisecondsSaved", "hareTurnsUsed", "heavyRainsStartingThunder", "heavyRainsStartingRain", "heavyRainsStartingLightning", "heroDonationBoris", "heroDonationJarlsberg", "heroDonationSneakyPete", "hiddenApartmentProgress", "hiddenBowlingAlleyProgress", "hiddenHospitalProgress", "hiddenOfficeProgress", "hiddenTavernUnlock", "highTopPumped", "hippiesDefeated", "holidayHalsBookCost", "holidaySwagger", "homemadeRobotUpgrades", "homebodylCharges", "hpAutoRecovery", "hpAutoRecoveryTarget", "iceSwagger", "jarlsbergPoints", "jungCharge", "junglePuns", "knownAscensions", "kolhsTotalSchoolSpirited", "lastAnticheeseDay", "lastArcadeAscension", "lastBadMoonReset", "lastBangPotionReset", "lastBattlefieldReset", "lastBeardBuff", "lastBreakfast", "lastCartographyBooPeak", "lastCartographyCastleTop", "lastCartographyDarkNeck", "lastCartographyDefiledNook", "lastCartographyFratHouse", "lastCartographyFratHouseVerge", "lastCartographyGuanoJunction", "lastCartographyHauntedBilliards", "lastCartographyHippyCampVerge", "lastCartographyZeppelinProtesters", "lastCastleGroundUnlock", "lastCastleTopUnlock", "lastCellarReset", "lastChanceThreshold", "lastChasmReset", "lastColosseumRoundWon", "lastCouncilVisit", "lastCounterDay", "lastDesertUnlock", "lastDispensaryOpen", "lastDMTDuplication", "lastDwarfFactoryReset", "lastEVHelmetValue", "lastEVHelmetReset", "lastEmptiedStorage", "lastFilthClearance", "lastGoofballBuy", "lastGuildStoreOpen", "lastGuyMadeOfBeesReset", "lastFratboyCall", "lastFriarCeremonyAscension", "lastFriarsElbowNC", "lastFriarsHeartNC", "lastFriarsNeckNC", "lastHippyCall", "lastIslandUnlock", "lastKeyotronUse", "lastKingLiberation", "lastLightsOutTurn", "lastMushroomPlot", "lastMiningReset", "lastNemesisReset", "lastPaperStripReset", "lastPirateEphemeraReset", "lastPirateInsultReset", "lastPlusSignUnlock", "lastQuartetAscension", "lastQuartetRequest", "lastSecondFloorUnlock", "lastShadowForgeUnlockAdventure", "lastSkateParkReset", "lastStillBeatingSpleen", "lastTavernAscension", "lastTavernSquare", "lastTelescopeReset", "lastTempleAdventures", "lastTempleButtonsUnlock", "lastTempleUnlock", "lastThingWithNoNameDefeated", "lastTowelAscension", "lastTr4pz0rQuest", "lastTrainsetConfiguration", "lastVioletFogMap", "lastVoteMonsterTurn", "lastWartDinseyDefeated", "lastWuTangDefeated", "lastYearbookCameraAscension", "lastZapperWand", "lastZapperWandExplosionDay", "lawOfAveragesCost", "legacyPoints", "libramSummons", "lightsOutAutomation", "louvreDesiredGoal", "louvreGoal", "lovebugsAridDesert", "lovebugsBeachBuck", "lovebugsBooze", "lovebugsChroner", "lovebugsCoinspiracy", "lovebugsCyrpt", "lovebugsFreddy", "lovebugsFunFunds", "lovebugsHoboNickel", "lovebugsItemDrop", "lovebugsMeat", "lovebugsMeatDrop", "lovebugsMoxie", "lovebugsMuscle", "lovebugsMysticality", "lovebugsOilPeak", "lovebugsOrcChasm", "lovebugsPowder", "lovebugsWalmart", "lttQuestDifficulty", "lttQuestStageCount", "manaBurnSummonThreshold", "manaBurningThreshold", "manaBurningTrigger", "manorDrawerCount", "manualOfNumberologyCost", "mapToKokomoCost", "masksUnlocked", "maximizerMRUSize", "maximizerCombinationLimit", "maximizerEquipmentLevel", "maximizerEquipmentScope", "maximizerMaxPrice", "maximizerPriceLevel", "maxManaBurn", "mayflyExperience", "mayoLevel", "meansuckerPrice", "merkinVocabularyMastery", "miniAdvClass", "miniMartinisDrunk", "moleTunnelLevel", "mothershipProgress", "mpAutoRecovery", "mpAutoRecoveryTarget", "munchiesPillsUsed", "mushroomGardenCropLevel", "nextParanormalActivity", "nextQuantumFamiliarOwnerId", "nextQuantumFamiliarTurn", "noobPoints", "noobDeferredPoints", "noodleSummons", "nsContestants1", "nsContestants2", "nsContestants3", "nuclearAutumnPoints", "numericSwagger", "nunsVisits", "oilPeakProgress", "optimalSwagger", "optimisticCandleProgress", "palindomeDudesDefeated", "parasolUsed", "pendingMapReflections", "pingpongSkill", "pirateSwagger", "plantingDay", "plumberBadgeCost", "plumberCostumeCost", "plumberPoints", "poolSharkCount", "poolSkill", "primaryLabGooIntensity", "prismaticSummons", "procrastinatorLanguageFluency", "promptAboutCrafting", "puzzleChampBonus", "pyramidPosition", "quantumPoints", "reagentSummons", "reanimatorArms", "reanimatorLegs", "reanimatorSkulls", "reanimatorWeirdParts", "reanimatorWings", "recentLocations", "redSnapperProgress", "relayPort", "relocatePygmyJanitor", "relocatePygmyLawyer", "rockinRobinProgress", "ROMOfOptimalityCost", "rumpelstiltskinKidsRescued", "rumpelstiltskinTurnsUsed", "rwbMonsterCount", "safariSwagger", "sausageGrinderUnits", "schoolOfHardKnocksDiplomaCost", "schoolSwagger", "scrapbookCharges", "screechCombats", "scriptMRULength", "seaodesFound", "SeasoningSwagger", "sexChanges", "shenInitiationDay", "shockingLickCharges", "singleFamiliarRun", "skillBurn3", "skillBurn90", "skillBurn153", "skillBurn154", "skillBurn155", "skillBurn1019", "skillBurn5017", "skillBurn6014", "skillBurn6015", "skillBurn6016", "skillBurn6020", "skillBurn6021", "skillBurn6022", "skillBurn6023", "skillBurn6024", "skillBurn6026", "skillBurn6028", "skillBurn7323", "skillBurn14008", "skillBurn14028", "skillBurn14038", "skillBurn15011", "skillBurn15028", "skillBurn17005", "skillBurn22034", "skillBurn22035", "skillBurn23301", "skillBurn23302", "skillBurn23303", "skillBurn23304", "skillBurn23305", "skillBurn23306", "skillLevel46", "skillLevel47", "skillLevel48", "skillLevel117", "skillLevel118", "skillLevel121", "skillLevel128", "skillLevel134", "skillLevel144", "skillLevel180", "skillLevel188", "skillLevel227", "skillLevel7254", "slimelingFullness", "slimelingStacksDropped", "slimelingStacksDue", "smoresEaten", "smutOrcNoncombatProgress", "sneakyPetePoints", "snojoMoxieWins", "snojoMuscleWins", "snojoMysticalityWins", "sourceAgentsDefeated", "sourceEnlightenment", "sourceInterval", "sourcePoints", "sourceTerminalGram", "sourceTerminalPram", "sourceTerminalSpam", "spaceBabyLanguageFluency", "spacePirateLanguageFluency", "spelunkyNextNoncombat", "spelunkySacrifices", "spelunkyWinCount", "spookyPuttyCopiesMade", "spookyVHSTapeMonsterTurn", "statbotUses", "sugarCounter4178", "sugarCounter4179", "sugarCounter4180", "sugarCounter4181", "sugarCounter4182", "sugarCounter4183", "sugarCounter4191", "summonAnnoyanceCost", "sweat", "tacoDanCocktailSauce", "tacoDanFishMeat", "tavernLayout", "telescopeUpgrades", "tempuraSummons", "timeSpinnerMedals", "timesRested", "tomeSummons", "totalCharitableDonations", "trainsetPosition", "turtleBlessingTurns", "twinPeakProgress", "twoCRSPoints", "unicornHornInflation", "universalSeasoningCost", "usable1HWeapons", "usable1xAccs", "usable2HWeapons", "usable3HWeapons", "usableAccessories", "usableHats", "usableOffhands", "usableOther", "usablePants", "usableShirts", "valueOfAdventure", "valueOfInventory", "valueOfStill", "valueOfTome", "vintnerCharge", "vintnerWineLevel", "violetFogGoal", "walfordBucketProgress", "warehouseProgress", "welcomeBackAdv", "whetstonesUsed", "wolfPigsEvicted", "wolfTurnsUsed", "writingDesksDefeated", "xoSkeleltonXProgress", "xoSkeleltonOProgress", "yearbookCameraAscensions", "yearbookCameraUpgrades", "youRobotBody", "youRobotBottom", "youRobotLeft", "youRobotPoints", "youRobotRight", "youRobotTop", "zeppelinProtestors", "zigguratLianas", "zombiePoints", "_absintheDrops", "_abstractionDropsCrown", "_aguaDrops", "_xenomorphCharge", "_ancestralRecallCasts", "_antihangoverBonus", "_astralDrops", "_augSkillsCast", "_automatedFutureManufactures", "_autumnatonQuests", "_backUpUses", "_badlyRomanticArrows", "_badgerCharge", "_balefulHowlUses", "_banderRunaways", "_bastilleCheese", "_bastilleGames", "_bastilleGameTurn", "_bastilleLastCheese", "_beanCannonUses", "_bearHugs", "_beerLensDrops", "_bellydancerPickpockets", "_benettonsCasts", "_birdsSoughtToday", "_bookOfFactsWishes", "_bookOfFactsTatters", "_boomBoxFights", "_boomBoxSongsLeft", "_bootStomps", "_boxingGloveArrows", "_brickoEyeSummons", "_brickoFights", "_campAwayCloudBuffs", "_campAwaySmileBuffs", "_candySummons", "_captainHagnkUsed", "_carnieCandyDrops", "_carrotNoseDrops", "_catBurglarCharge", "_catBurglarHeistsComplete", "_cheerleaderSteam", "_chestXRayUsed", "_chibiAdventures", "_chipBags", "_chocolateCigarsUsed", "_chocolateCoveredPingPongBallsUsed", "_chocolateSculpturesUsed", "_chocolatesUsed", "_chronolithActivations", "_chronolithNextCost", "_cinchUsed", "_cinchoRests", "_circadianRhythmsAdventures", "_clanFortuneConsultUses", "_clipartSummons", "_cloversPurchased", "_coldMedicineConsults", "_coldMedicineEquipmentTaken", "_companionshipCasts", "_cookbookbatCrafting", "_cosmicBowlingSkillsUsed", "_crimbo21ColdResistance", "_dailySpecialPrice", "_daycareGymScavenges", "_daycareRecruits", "_deckCardsDrawn", "_deluxeKlawSummons", "_demandSandwich", "_detectiveCasesCompleted", "_disavowed", "_dnaPotionsMade", "_donhosCasts", "_douseFoeUses", "_dreamJarDrops", "_drunkPygmyBanishes", "_edDefeats", "_edLashCount", "_elronsCasts", "_enamorangs", "_energyCollected", "_expertCornerCutterUsed", "_extraTimeUsed", "_favorRareSummons", "_feastUsed", "_feelinTheRhythm", "_feelPrideUsed", "_feelExcitementUsed", "_feelHatredUsed", "_feelLonelyUsed", "_feelNervousUsed", "_feelEnvyUsed", "_feelDisappointedUsed", "_feelSuperiorUsed", "_feelLostUsed", "_feelNostalgicUsed", "_feelPeacefulUsed", "_fingertrapArrows", "_fireExtinguisherCharge", "_fragrantHerbsUsed", "_freeBeachWalksUsed", "_frButtonsPressed", "_fudgeWaspFights", "_gapBuffs", "_garbageFireDrops", "_garbageFireDropsCrown", "_genieFightsUsed", "_genieWishesUsed", "_gibbererAdv", "_gibbererCharge", "_gingerbreadCityTurns", "_glarkCableUses", "_glitchMonsterFights", "_gnomeAdv", "_godLobsterFights", "_goldenMoneyCharge", "_gongDrops", "_gothKidCharge", "_gothKidFights", "_greyYouAdventures", "_grimBrotherCharge", "_grimFairyTaleDrops", "_grimFairyTaleDropsCrown", "_grimoireConfiscatorSummons", "_grimoireGeekySummons", "_grimstoneMaskDrops", "_grimstoneMaskDropsCrown", "_grooseCharge", "_grooseDrops", "_grubbyWoolDrops", "_guzzlrDeliveries", "_guzzlrGoldDeliveries", "_guzzlrPlatinumDeliveries", "_hareAdv", "_hareCharge", "_highTopPumps", "_hipsterAdv", "_hoardedCandyDropsCrown", "_hoboUnderlingSummons", "_holoWristDrops", "_holoWristProgress", "_hotAshesDrops", "_hotJellyUses", "_hotTubSoaks", "_humanMuskUses", "_iceballUses", "_inigosCasts", "_jerksHealthMagazinesUsed", "_jiggleCheese", "_jiggleCream", "_jiggleLife", "_jiggleSteak", "_jitbCharge", "_juneCleaverFightsLeft", "_juneCleaverEncounters", "_juneCleaverStench", "_juneCleaverSpooky", "_juneCleaverSleaze", "_juneCleaverHot", "_juneCleaverCold", "_juneCleaverSkips", "_jungDrops", "_kgbClicksUsed", "_kgbDispenserUses", "_kgbTranquilizerDartUses", "_klawSummons", "_kloopCharge", "_kloopDrops", "_kolhsAdventures", "_kolhsSavedByTheBell", "_lastDailyDungeonRoom", "_lastSausageMonsterTurn", "_lastZomboEye", "_latteRefillsUsed", "_leafblowerML", "_leafLassosCrafted", "_leafMonstersFought", "_leavesBurned", "_legionJackhammerCrafting", "_llamaCharge", "_longConUsed", "_lovebugsBeachBuck", "_lovebugsChroner", "_lovebugsCoinspiracy", "_lovebugsFreddy", "_lovebugsFunFunds", "_lovebugsHoboNickel", "_lovebugsWalmart", "_loveChocolatesUsed", "_lynyrdSnareUses", "_machineTunnelsAdv", "_macrometeoriteUses", "_mafiaThumbRingAdvs", "_mapToACandyRichBlockDrops", "_mayflowerDrops", "_mayflySummons", "_mediumSiphons", "_meteoriteAdesUsed", "_meteorShowerUses", "_micrometeoriteUses", "_mildEvilPerpetrated", "_miniMartiniDrops", "_monkeyPawWishesUsed", "_monsterHabitatsFightsLeft", "_monsterHabitatsRecalled", "_monstersMapped", "_mushroomGardenFights", "_nanorhinoCharge", "_navelRunaways", "_neverendingPartyFreeTurns", "_newYouQuestSharpensDone", "_newYouQuestSharpensToDo", "_nextColdMedicineConsult", "_nextQuantumAlignment", "_nightmareFuelCharges", "_noobSkillCount", "_nuclearStockpileUsed", "_oilExtracted", "_olfactionsUsed", "_optimisticCandleDropsCrown", "_oreDropsCrown", "_otoscopeUsed", "_oysterEggsFound", "_pantsgivingBanish", "_pantsgivingCount", "_pantsgivingCrumbs", "_pantsgivingFullness", "_pasteDrops", "_peteJukeboxFixed", "_peteJumpedShark", "_petePeeledOut", "_pieDrops", "_piePartsCount", "_pixieCharge", "_pocketProfessorLectures", "_poisonArrows", "_pokeGrowFertilizerDrops", "_poolGames", "_powderedGoldDrops", "_powderedMadnessUses", "_powerfulGloveBatteryPowerUsed", "_powerPillDrops", "_powerPillUses", "_precisionCasts", "_questPartyFairItemsOpened", "_radlibSummons", "_raindohCopiesMade", "_rapidPrototypingUsed", "_raveStealCount", "_reflexHammerUsed", "_resolutionAdv", "_resolutionRareSummons", "_riftletAdv", "_robinEggDrops", "_roboDrops", "_rogueProgramCharge", "_romanticFightsLeft", "_saberForceMonsterCount", "_saberForceUses", "_saberMod", "_saltGrainsConsumed", "_sandwormCharge", "_saplingsPlanted", "_sausageFights", "_sausagesEaten", "_sausagesMade", "_sealFigurineUses", "_sealScreeches", "_sealsSummoned", "_shadowBricksUsed", "_shadowRiftCombats", "_shatteringPunchUsed", "_shortOrderCookCharge", "_shrubCharge", "_sloppyDinerBeachBucks", "_smilesOfMrA", "_smithsnessSummons", "_snojoFreeFights", "_snojoParts", "_snokebombUsed", "_snowconeSummons", "_snowglobeDrops", "_snowSuitCount", "_sourceTerminalDigitizeMonsterCount", "_sourceTerminalDigitizeUses", "_sourceTerminalDuplicateUses", "_sourceTerminalEnhanceUses", "_sourceTerminalExtrudes", "_sourceTerminalPortscanUses", "_spaceFurDropsCrown", "_spacegatePlanetIndex", "_spacegateTurnsLeft", "_spaceJellyfishDrops", "_speakeasyDrinksDrunk", "_speakeasyFreeFights", "_spelunkerCharges", "_spelunkingTalesDrops", "_spikolodonSpikeUses", "_spookyJellyUses", "_stackLumpsUses", "_steamCardDrops", "_stickerSummons", "_stinkyCheeseCount", "_stressBallSqueezes", "_sugarSummons", "_sweatOutSomeBoozeUsed", "_taffyRareSummons", "_taffyYellowSummons", "_thanksgettingFoodsEaten", "_thingfinderCasts", "_thinknerdPackageDrops", "_thorsPliersCrafting", "_timeHelmetAdv", "_timeSpinnerMinutesUsed", "_tokenDrops", "_transponderDrops", "_turkeyBlastersUsed", "_turkeyBooze", "_turkeyMuscle", "_turkeyMyst", "_turkeyMoxie", "_unaccompaniedMinerUsed", "_unconsciousCollectiveCharge", "_universalSeasoningsUsed", "_universeCalculated", "_universeImploded", "_usedReplicaBatoomerang", "_vampyreCloakeFormUses", "_villainLairProgress", "_vitachocCapsulesUsed", "_vmaskAdv", "_voidFreeFights", "_volcanoItem1", "_volcanoItem2", "_volcanoItem3", "_volcanoItemCount1", "_volcanoItemCount2", "_volcanoItemCount3", "_voteFreeFights", "_VYKEACompanionLevel", "_warbearAutoAnvilCrafting", "_waxGlobDrops", "_whiteRiceDrops", "_witchessFights", "_xoHugsUsed", "_yellowPixelDropsCrown", "_zapCount", "_zombieSmashPocketsUsed"], monsterProperties = ["beGregariousMonster", "cameraMonster", "chateauMonster", "clumsinessGroveBoss", "crappyCameraMonster", "crudeMonster", "enamorangMonster", "envyfishMonster", "glacierOfJerksBoss", "holdHandsMonster", "iceSculptureMonster", "lastCopyableMonster", "longConMonster", "maelstromOfLoversBoss", "makeFriendsMonster", "merkinLockkeyMonster", "monkeyPointMonster", "motifMonster", "nosyNoseMonster", "olfactedMonster", "photocopyMonster", "rainDohMonster", "romanticTarget", "rufusDesiredEntity", "rwbMonster", "screencappedMonster", "spookyPuttyMonster", "spookyVHSTapeMonster", "stenchCursedMonster", "superficiallyInterestedMonster", "waxMonster", "yearbookCameraTarget", "_gallapagosMonster", "_jiggleCreamedMonster", "_latteMonster", "_monsterHabitatsMonster", "_nanorhinoBanishedMonster", "_newYouQuestMonster", "_relativityMonster", "_saberForceMonster", "_sourceTerminalDigitizeMonster", "_voteMonster"], locationProperties = ["autumnatonQuestLocation", "currentJunkyardLocation", "doctorBagQuestLocation", "ghostLocation", "guzzlrQuestLocation", "lastAdventure", "nextAdventure", "nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "rwbLocation", "sourceOracleTarget", "_floundryBassLocation", "_floundryCarpLocation", "_floundryCodLocation", "_floundryHatchetfishLocation", "_floundryTroutLocation", "_floundryTunaLocation", "_sotParcelLocation"], stringProperties = ["autoLogin", "browserBookmarks", "chatFontSize", "combatHotkey0", "combatHotkey1", "combatHotkey2", "combatHotkey3", "combatHotkey4", "combatHotkey5", "combatHotkey6", "combatHotkey7", "combatHotkey8", "combatHotkey9", "commandBufferGCLI", "commandBufferTabbedChat", "commandLineNamespace", "dailyDeedsOptions", "defaultBorderColor", "displayName", "externalEditor", "getBreakfast", "headerStates", "highlightList", "http.proxyHost", "http.proxyPassword", "http.proxyPort", "http.proxyUser", "https.proxyHost", "https.proxyPassword", "https.proxyPort", "https.proxyUser", "initialDesktop", "initialFrames", "lastRelayUpdate", "lastUserAgent", "lastUsername", "logPreferenceChangeFilter", "loginScript", "loginServerName", "loginWindowLogo", "logoutScript", "pingDefaultTestPage", "pingLatest", "pingLoginAbort", "pingLoginCheck", "pingLoginFail", "pingLongest", "pingShortest", "pingTestPage", "previousNotifyList", "previousUpdateVersion", "saveState", "saveStateActive", "scriptList", "swingLookAndFeel", "userAgent", "8BitColor", "afterAdventureScript", "autoOlfact", "autoPutty", "autumnatonUpgrades", "backupCameraMode", "banishedMonsters", "banishedPhyla", "banishingShoutMonsters", "batmanStats", "batmanZone", "batmanUpgrades", "battleAction", "beachHeadsUnlocked", "beforePVPScript", "betweenBattleScript", "boomBoxSong", "breakfastAlways", "breakfastHardcore", "breakfastSoftcore", "buffBotCasting", "buyScript", "cargoPocketsEmptied", "cargoPocketScraps", "chatbotScript", "chatPlayerScript", "chibiName", "choiceAdventureScript", "chosenTrip", "clanFortuneReply1", "clanFortuneReply2", "clanFortuneReply3", "clanFortuneWord1", "clanFortuneWord2", "clanFortuneWord3", "commerceGhostItem", "counterScript", "copperheadClubHazard", "crimbotChassis", "crimbotArm", "crimbotPropulsion", "crystalBallPredictions", "csServicesPerformed", "currentAstralTrip", "currentDistillateMods", "currentEasyBountyItem", "currentHardBountyItem", "currentHippyStore", "currentJunkyardTool", "currentLlamaForm", "currentMood", "currentPVPSeason", "currentPvpVictories", "currentSpecialBountyItem", "currentSITSkill", "customCombatScript", "cyrusAdjectives", "defaultFlowerLossMessage", "defaultFlowerWinMessage", "demonName1", "demonName2", "demonName3", "demonName4", "demonName5", "demonName6", "demonName7", "demonName8", "demonName9", "demonName10", "demonName11", "demonName12", "demonName13", "dinseyGatorStenchDamage", "dinseyRollercoasterStats", "doctorBagQuestItem", "dolphinItem", "duckAreasCleared", "duckAreasSelected", "edPiece", "enamorangMonsterTurn", "ensorcelee", "EVEDirections", "extraCosmeticModifiers", "familiarScript", "forbiddenStores", "gameProBossSpecialPower", "gooseReprocessed", "grimoireSkillsHardcore", "grimoireSkillsSoftcore", "grimstoneMaskPath", "guzzlrQuestClient", "guzzlrQuestBooze", "guzzlrQuestTier", "harvestGardenHardcore", "harvestGardenSoftcore", "hpAutoRecoveryItems", "invalidBuffMessage", "jickSwordModifier", "juneCleaverQueue", "kingLiberatedScript", "lassoTraining", "lastBangPotion819", "lastBangPotion820", "lastBangPotion821", "lastBangPotion822", "lastBangPotion823", "lastBangPotion824", "lastBangPotion825", "lastBangPotion826", "lastBangPotion827", "lastChanceBurn", "lastChessboard", "lastCombatEnvironments", "lastDwarfDiceRolls", "lastDwarfDigitRunes", "lastDwarfEquipmentRunes", "lastDwarfFactoryItem118", "lastDwarfFactoryItem119", "lastDwarfFactoryItem120", "lastDwarfFactoryItem360", "lastDwarfFactoryItem361", "lastDwarfFactoryItem362", "lastDwarfFactoryItem363", "lastDwarfFactoryItem364", "lastDwarfFactoryItem365", "lastDwarfFactoryItem910", "lastDwarfFactoryItem3199", "lastDwarfOfficeItem3208", "lastDwarfOfficeItem3209", "lastDwarfOfficeItem3210", "lastDwarfOfficeItem3211", "lastDwarfOfficeItem3212", "lastDwarfOfficeItem3213", "lastDwarfOfficeItem3214", "lastDwarfOreRunes", "lastDwarfHopper1", "lastDwarfHopper2", "lastDwarfHopper3", "lastDwarfHopper4", "lastEncounter", "lastMacroError", "lastMessageId", "lastPaperStrip3144", "lastPaperStrip4138", "lastPaperStrip4139", "lastPaperStrip4140", "lastPaperStrip4141", "lastPaperStrip4142", "lastPaperStrip4143", "lastPaperStrip4144", "lastPirateEphemera", "lastPorkoBoard", "lastPorkoPayouts", "lastPorkoExpected", "lastSlimeVial3885", "lastSlimeVial3886", "lastSlimeVial3887", "lastSlimeVial3888", "lastSlimeVial3889", "lastSlimeVial3890", "lastSlimeVial3891", "lastSlimeVial3892", "lastSlimeVial3893", "lastSlimeVial3894", "lastSlimeVial3895", "lastSlimeVial3896", "latteIngredients", "latteModifier", "latteUnlocks", "ledCandleMode", "libramSkillsHardcore", "libramSkillsSoftcore", "louvreOverride", "lovePotion", "lttQuestName", "maximizerList", "maximizerMRUList", "mayoInMouth", "mayoMinderSetting", "merkinQuestPath", "mineLayout1", "mineLayout2", "mineLayout3", "mineLayout4", "mineLayout5", "mineLayout6", "mpAutoRecoveryItems", "muffinOnOrder", "nextDistillateMods", "nextQuantumFamiliarName", "nextQuantumFamiliarOwner", "nsChallenge2", "nsChallenge3", "nsChallenge4", "nsChallenge5", "nsTowerDoorKeysUsed", "oceanAction", "oceanDestination", "parkaMode", "pastaThrall1", "pastaThrall2", "pastaThrall3", "pastaThrall4", "pastaThrall5", "pastaThrall6", "pastaThrall7", "pastaThrall8", "peteMotorbikeTires", "peteMotorbikeGasTank", "peteMotorbikeHeadlight", "peteMotorbikeCowling", "peteMotorbikeMuffler", "peteMotorbikeSeat", "pieStuffing", "plantingDate", "plantingLength", "plantingScript", "plumberCostumeWorn", "pokefamBoosts", "postAscensionScript", "preAscensionScript", "questClumsinessGrove", "questDoctorBag", "questECoBucket", "questESlAudit", "questESlBacteria", "questESlCheeseburger", "questESlCocktail", "questESlDebt", "questESlFish", "questESlMushStash", "questESlSalt", "questESlSprinkles", "questESpClipper", "questESpEVE", "questESpFakeMedium", "questESpGore", "questESpJunglePun", "questESpOutOfOrder", "questESpSerum", "questESpSmokes", "questEStFishTrash", "questEStGiveMeFuel", "questEStNastyBears", "questEStSocialJusticeI", "questEStSocialJusticeII", "questEStSuperLuber", "questEStWorkWithFood", "questEStZippityDooDah", "questEUNewYou", "questF01Primordial", "questF02Hyboria", "questF03Future", "questF04Elves", "questF05Clancy", "questG01Meatcar", "questG02Whitecastle", "questG03Ego", "questG04Nemesis", "questG05Dark", "questG06Delivery", "questG07Myst", "questG08Moxie", "questG09Muscle", "questGlacierOfJerks", "questGuzzlr", "questI01Scapegoat", "questI02Beat", "questL02Larva", "questL03Rat", "questL04Bat", "questL05Goblin", "questL06Friar", "questL07Cyrptic", "questL08Trapper", "questL09Topping", "questL10Garbage", "questL11Black", "questL11Business", "questL11Curses", "questL11Desert", "questL11Doctor", "questL11MacGuffin", "questL11Manor", "questL11Palindome", "questL11Pyramid", "questL11Ron", "questL11Shen", "questL11Spare", "questL11Worship", "questL12HippyFrat", "questL12War", "questL13Final", "questL13Warehouse", "questLTTQuestByWire", "questM01Untinker", "questM02Artist", "questM03Bugbear", "questM05Toot", "questM06Gourd", "questM07Hammer", "questM08Baker", "questM09Rocks", "questM10Azazel", "questM11Postal", "questM12Pirate", "questM13Escape", "questM14Bounty", "questM15Lol", "questM16Temple", "questM17Babies", "questM18Swamp", "questM19Hippy", "questM20Necklace", "questM21Dance", "questM22Shirt", "questM23Meatsmith", "questM24Doc", "questM25Armorer", "questM26Oracle", "questMaelstromOfLovers", "questPAGhost", "questRufus", "questS01OldGuy", "questS02Monkees", "raveCombo1", "raveCombo2", "raveCombo3", "raveCombo4", "raveCombo5", "raveCombo6", "recoveryScript", "relayCounters", "retroCapeSuperhero", "retroCapeWashingInstructions", "royalty", "rufusDesiredArtifact", "rufusDesiredItems", "rufusQuestTarget", "rufusQuestType", "scriptMRUList", "seahorseName", "shadowLabyrinthGoal", "shadowRiftIngress", "shenQuestItem", "shrubGarland", "shrubGifts", "shrubLights", "shrubTopper", "sideDefeated", "sidequestArenaCompleted", "sidequestFarmCompleted", "sidequestJunkyardCompleted", "sidequestLighthouseCompleted", "sidequestNunsCompleted", "sidequestOrchardCompleted", "skateParkStatus", "snowsuit", "sourceTerminalChips", "sourceTerminalEducate1", "sourceTerminalEducate2", "sourceTerminalEnquiry", "sourceTerminalEducateKnown", "sourceTerminalEnhanceKnown", "sourceTerminalEnquiryKnown", "sourceTerminalExtrudeKnown", "spadingData", "spadingScript", "speakeasyName", "spelunkyStatus", "spelunkyUpgrades", "spookyravenRecipeUsed", "stationaryButton1", "stationaryButton2", "stationaryButton3", "stationaryButton4", "stationaryButton5", "streamCrossDefaultTarget", "sweetSynthesisBlacklist", "telescope1", "telescope2", "telescope3", "telescope4", "telescope5", "testudinalTeachings", "textColors", "thanksMessage", "tomeSkillsHardcore", "tomeSkillsSoftcore", "trackVoteMonster", "trainsetConfiguration", "trapperOre", "umbrellaState", "umdLastObtained", "vintnerWineEffect", "vintnerWineName", "vintnerWineType", "violetFogLayout", "volcanoMaze1", "volcanoMaze2", "volcanoMaze3", "volcanoMaze4", "volcanoMaze5", "walfordBucketItem", "warProgress", "watchedPreferences", "workteaClue", "yourFavoriteBird", "yourFavoriteBirdMods", "youRobotCPUUpgrades", "_automatedFutureSide", "_bastilleBoosts", "_bastilleChoice1", "_bastilleChoice2", "_bastilleChoice3", "_bastilleCurrentStyles", "_bastilleEnemyCastle", "_bastilleEnemyName", "_bastilleLastBattleResults", "_bastilleLastEncounter", "_bastilleStats", "_beachHeadsUsed", "_beachLayout", "_beachMinutes", "_birdOfTheDay", "_birdOfTheDayMods", "_bittycar", "_campAwaySmileBuffSign", "_citizenZone", "_citizenZoneMods", "_cloudTalkMessage", "_cloudTalkSmoker", "_coatOfPaintModifier", "_dailySpecial", "_deckCardsSeen", "_feastedFamiliars", "_floristPlantsUsed", "_frAreasUnlocked", "_frHoursLeft", "_frMonstersKilled", "_horsery", "_horseryCrazyMox", "_horseryCrazyMus", "_horseryCrazyMys", "_horseryCrazyName", "_horseryCurrentName", "_horseryDarkName", "_horseryNormalName", "_horseryPaleName", "_jickJarAvailable", "_jiggleCheesedMonsters", "_lastCombatStarted", "_lastPirateRealmIsland", "_locketMonstersFought", "_mummeryMods", "_mummeryUses", "_newYouQuestSkill", "_noHatModifier", "_pantogramModifier", "_pottedPowerPlant", "_questESp", "_questPartyFair", "_questPartyFairProgress", "_questPartyFairQuest", "_roboDrinks", "_roninStoragePulls", "_spacegateAnimalLife", "_spacegateCoordinates", "_spacegateGear", "_spacegateHazards", "_spacegateIntelligentLife", "_spacegatePlanetName", "_spacegatePlantLife", "_stolenAccordions", "_tempRelayCounters", "_timeSpinnerFoodAvailable", "_unknownEasyBountyItem", "_unknownHardBountyItem", "_unknownSpecialBountyItem", "_untakenEasyBountyItem", "_untakenHardBountyItem", "_untakenSpecialBountyItem", "_userMods", "_villainLairColor", "_villainLairKey", "_voteLocal1", "_voteLocal2", "_voteLocal3", "_voteLocal4", "_voteMonster1", "_voteMonster2", "_voteModifier", "_VYKEACompanionType", "_VYKEACompanionRune", "_VYKEACompanionName"], numericOrStringProperties = ["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing", "choiceAdventure2", "choiceAdventure3", "choiceAdventure4", "choiceAdventure5", "choiceAdventure6", "choiceAdventure7", "choiceAdventure8", "choiceAdventure9", "choiceAdventure10", "choiceAdventure11", "choiceAdventure12", "choiceAdventure14", "choiceAdventure15", "choiceAdventure16", "choiceAdventure17", "choiceAdventure18", "choiceAdventure19", "choiceAdventure20", "choiceAdventure21", "choiceAdventure22", "choiceAdventure23", "choiceAdventure24", "choiceAdventure25", "choiceAdventure26", "choiceAdventure27", "choiceAdventure28", "choiceAdventure29", "choiceAdventure40", "choiceAdventure41", "choiceAdventure42", "choiceAdventure45", "choiceAdventure46", "choiceAdventure47", "choiceAdventure71", "choiceAdventure72", "choiceAdventure73", "choiceAdventure74", "choiceAdventure75", "choiceAdventure76", "choiceAdventure77", "choiceAdventure86", "choiceAdventure87", "choiceAdventure88", "choiceAdventure89", "choiceAdventure90", "choiceAdventure91", "choiceAdventure105", "choiceAdventure106", "choiceAdventure107", "choiceAdventure108", "choiceAdventure109", "choiceAdventure110", "choiceAdventure111", "choiceAdventure112", "choiceAdventure113", "choiceAdventure114", "choiceAdventure115", "choiceAdventure116", "choiceAdventure117", "choiceAdventure118", "choiceAdventure120", "choiceAdventure123", "choiceAdventure125", "choiceAdventure126", "choiceAdventure127", "choiceAdventure129", "choiceAdventure131", "choiceAdventure132", "choiceAdventure135", "choiceAdventure136", "choiceAdventure137", "choiceAdventure138", "choiceAdventure139", "choiceAdventure140", "choiceAdventure141", "choiceAdventure142", "choiceAdventure143", "choiceAdventure144", "choiceAdventure145", "choiceAdventure146", "choiceAdventure147", "choiceAdventure148", "choiceAdventure149", "choiceAdventure151", "choiceAdventure152", "choiceAdventure153", "choiceAdventure154", "choiceAdventure155", "choiceAdventure156", "choiceAdventure157", "choiceAdventure158", "choiceAdventure159", "choiceAdventure160", "choiceAdventure161", "choiceAdventure162", "choiceAdventure163", "choiceAdventure164", "choiceAdventure165", "choiceAdventure166", "choiceAdventure167", "choiceAdventure168", "choiceAdventure169", "choiceAdventure170", "choiceAdventure171", "choiceAdventure172", "choiceAdventure177", "choiceAdventure178", "choiceAdventure180", "choiceAdventure181", "choiceAdventure182", "choiceAdventure184", "choiceAdventure185", "choiceAdventure186", "choiceAdventure187", "choiceAdventure188", "choiceAdventure189", "choiceAdventure191", "choiceAdventure197", "choiceAdventure198", "choiceAdventure199", "choiceAdventure200", "choiceAdventure201", "choiceAdventure202", "choiceAdventure203", "choiceAdventure204", "choiceAdventure205", "choiceAdventure206", "choiceAdventure207", "choiceAdventure208", "choiceAdventure211", "choiceAdventure212", "choiceAdventure213", "choiceAdventure214", "choiceAdventure215", "choiceAdventure216", "choiceAdventure217", "choiceAdventure218", "choiceAdventure219", "choiceAdventure220", "choiceAdventure221", "choiceAdventure222", "choiceAdventure223", "choiceAdventure224", "choiceAdventure225", "choiceAdventure230", "choiceAdventure272", "choiceAdventure273", "choiceAdventure276", "choiceAdventure277", "choiceAdventure278", "choiceAdventure279", "choiceAdventure280", "choiceAdventure281", "choiceAdventure282", "choiceAdventure283", "choiceAdventure284", "choiceAdventure285", "choiceAdventure286", "choiceAdventure287", "choiceAdventure288", "choiceAdventure289", "choiceAdventure290", "choiceAdventure291", "choiceAdventure292", "choiceAdventure293", "choiceAdventure294", "choiceAdventure295", "choiceAdventure296", "choiceAdventure297", "choiceAdventure298", "choiceAdventure299", "choiceAdventure302", "choiceAdventure303", "choiceAdventure304", "choiceAdventure305", "choiceAdventure306", "choiceAdventure307", "choiceAdventure308", "choiceAdventure309", "choiceAdventure310", "choiceAdventure311", "choiceAdventure317", "choiceAdventure318", "choiceAdventure319", "choiceAdventure320", "choiceAdventure321", "choiceAdventure322", "choiceAdventure326", "choiceAdventure327", "choiceAdventure328", "choiceAdventure329", "choiceAdventure330", "choiceAdventure331", "choiceAdventure332", "choiceAdventure333", "choiceAdventure334", "choiceAdventure335", "choiceAdventure336", "choiceAdventure337", "choiceAdventure338", "choiceAdventure339", "choiceAdventure340", "choiceAdventure341", "choiceAdventure342", "choiceAdventure343", "choiceAdventure344", "choiceAdventure345", "choiceAdventure346", "choiceAdventure347", "choiceAdventure348", "choiceAdventure349", "choiceAdventure350", "choiceAdventure351", "choiceAdventure352", "choiceAdventure353", "choiceAdventure354", "choiceAdventure355", "choiceAdventure356", "choiceAdventure357", "choiceAdventure358", "choiceAdventure360", "choiceAdventure361", "choiceAdventure362", "choiceAdventure363", "choiceAdventure364", "choiceAdventure365", "choiceAdventure366", "choiceAdventure367", "choiceAdventure372", "choiceAdventure376", "choiceAdventure387", "choiceAdventure388", "choiceAdventure389", "choiceAdventure390", "choiceAdventure391", "choiceAdventure392", "choiceAdventure393", "choiceAdventure395", "choiceAdventure396", "choiceAdventure397", "choiceAdventure398", "choiceAdventure399", "choiceAdventure400", "choiceAdventure401", "choiceAdventure402", "choiceAdventure403", "choiceAdventure423", "choiceAdventure424", "choiceAdventure425", "choiceAdventure426", "choiceAdventure427", "choiceAdventure428", "choiceAdventure429", "choiceAdventure430", "choiceAdventure431", "choiceAdventure432", "choiceAdventure433", "choiceAdventure435", "choiceAdventure438", "choiceAdventure439", "choiceAdventure442", "choiceAdventure444", "choiceAdventure445", "choiceAdventure446", "choiceAdventure447", "choiceAdventure448", "choiceAdventure449", "choiceAdventure451", "choiceAdventure452", "choiceAdventure453", "choiceAdventure454", "choiceAdventure455", "choiceAdventure456", "choiceAdventure457", "choiceAdventure458", "choiceAdventure460", "choiceAdventure461", "choiceAdventure462", "choiceAdventure463", "choiceAdventure464", "choiceAdventure465", "choiceAdventure467", "choiceAdventure468", "choiceAdventure469", "choiceAdventure470", "choiceAdventure471", "choiceAdventure472", "choiceAdventure473", "choiceAdventure474", "choiceAdventure475", "choiceAdventure477", "choiceAdventure478", "choiceAdventure480", "choiceAdventure483", "choiceAdventure484", "choiceAdventure485", "choiceAdventure486", "choiceAdventure488", "choiceAdventure489", "choiceAdventure490", "choiceAdventure491", "choiceAdventure496", "choiceAdventure497", "choiceAdventure502", "choiceAdventure503", "choiceAdventure504", "choiceAdventure505", "choiceAdventure506", "choiceAdventure507", "choiceAdventure509", "choiceAdventure510", "choiceAdventure511", "choiceAdventure512", "choiceAdventure513", "choiceAdventure514", "choiceAdventure515", "choiceAdventure517", "choiceAdventure518", "choiceAdventure519", "choiceAdventure521", "choiceAdventure522", "choiceAdventure523", "choiceAdventure527", "choiceAdventure528", "choiceAdventure529", "choiceAdventure530", "choiceAdventure531", "choiceAdventure532", "choiceAdventure533", "choiceAdventure534", "choiceAdventure535", "choiceAdventure536", "choiceAdventure538", "choiceAdventure539", "choiceAdventure542", "choiceAdventure543", "choiceAdventure544", "choiceAdventure546", "choiceAdventure548", "choiceAdventure549", "choiceAdventure550", "choiceAdventure551", "choiceAdventure552", "choiceAdventure553", "choiceAdventure554", "choiceAdventure556", "choiceAdventure557", "choiceAdventure558", "choiceAdventure559", "choiceAdventure560", "choiceAdventure561", "choiceAdventure562", "choiceAdventure563", "choiceAdventure564", "choiceAdventure565", "choiceAdventure566", "choiceAdventure567", "choiceAdventure568", "choiceAdventure569", "choiceAdventure571", "choiceAdventure572", "choiceAdventure573", "choiceAdventure574", "choiceAdventure575", "choiceAdventure576", "choiceAdventure577", "choiceAdventure578", "choiceAdventure579", "choiceAdventure581", "choiceAdventure582", "choiceAdventure583", "choiceAdventure584", "choiceAdventure594", "choiceAdventure595", "choiceAdventure596", "choiceAdventure597", "choiceAdventure598", "choiceAdventure599", "choiceAdventure600", "choiceAdventure603", "choiceAdventure604", "choiceAdventure616", "choiceAdventure634", "choiceAdventure640", "choiceAdventure654", "choiceAdventure655", "choiceAdventure656", "choiceAdventure657", "choiceAdventure658", "choiceAdventure664", "choiceAdventure669", "choiceAdventure670", "choiceAdventure671", "choiceAdventure672", "choiceAdventure673", "choiceAdventure674", "choiceAdventure675", "choiceAdventure676", "choiceAdventure677", "choiceAdventure678", "choiceAdventure679", "choiceAdventure681", "choiceAdventure683", "choiceAdventure684", "choiceAdventure685", "choiceAdventure686", "choiceAdventure687", "choiceAdventure688", "choiceAdventure689", "choiceAdventure690", "choiceAdventure691", "choiceAdventure692", "choiceAdventure693", "choiceAdventure694", "choiceAdventure695", "choiceAdventure696", "choiceAdventure697", "choiceAdventure698", "choiceAdventure700", "choiceAdventure701", "choiceAdventure705", "choiceAdventure706", "choiceAdventure707", "choiceAdventure708", "choiceAdventure709", "choiceAdventure710", "choiceAdventure711", "choiceAdventure712", "choiceAdventure713", "choiceAdventure714", "choiceAdventure715", "choiceAdventure716", "choiceAdventure717", "choiceAdventure721", "choiceAdventure725", "choiceAdventure729", "choiceAdventure733", "choiceAdventure737", "choiceAdventure741", "choiceAdventure745", "choiceAdventure749", "choiceAdventure753", "choiceAdventure771", "choiceAdventure778", "choiceAdventure780", "choiceAdventure781", "choiceAdventure783", "choiceAdventure784", "choiceAdventure785", "choiceAdventure786", "choiceAdventure787", "choiceAdventure788", "choiceAdventure789", "choiceAdventure791", "choiceAdventure793", "choiceAdventure794", "choiceAdventure795", "choiceAdventure796", "choiceAdventure797", "choiceAdventure803", "choiceAdventure805", "choiceAdventure808", "choiceAdventure809", "choiceAdventure813", "choiceAdventure815", "choiceAdventure830", "choiceAdventure832", "choiceAdventure833", "choiceAdventure834", "choiceAdventure835", "choiceAdventure837", "choiceAdventure838", "choiceAdventure839", "choiceAdventure840", "choiceAdventure841", "choiceAdventure842", "choiceAdventure851", "choiceAdventure852", "choiceAdventure853", "choiceAdventure854", "choiceAdventure855", "choiceAdventure856", "choiceAdventure857", "choiceAdventure858", "choiceAdventure866", "choiceAdventure873", "choiceAdventure875", "choiceAdventure876", "choiceAdventure877", "choiceAdventure878", "choiceAdventure879", "choiceAdventure880", "choiceAdventure881", "choiceAdventure882", "choiceAdventure888", "choiceAdventure889", "choiceAdventure918", "choiceAdventure919", "choiceAdventure920", "choiceAdventure921", "choiceAdventure923", "choiceAdventure924", "choiceAdventure925", "choiceAdventure926", "choiceAdventure927", "choiceAdventure928", "choiceAdventure929", "choiceAdventure930", "choiceAdventure931", "choiceAdventure932", "choiceAdventure940", "choiceAdventure941", "choiceAdventure942", "choiceAdventure943", "choiceAdventure944", "choiceAdventure945", "choiceAdventure946", "choiceAdventure950", "choiceAdventure955", "choiceAdventure957", "choiceAdventure958", "choiceAdventure959", "choiceAdventure960", "choiceAdventure961", "choiceAdventure962", "choiceAdventure963", "choiceAdventure964", "choiceAdventure965", "choiceAdventure966", "choiceAdventure970", "choiceAdventure973", "choiceAdventure974", "choiceAdventure975", "choiceAdventure976", "choiceAdventure977", "choiceAdventure979", "choiceAdventure980", "choiceAdventure981", "choiceAdventure982", "choiceAdventure983", "choiceAdventure988", "choiceAdventure989", "choiceAdventure993", "choiceAdventure998", "choiceAdventure1000", "choiceAdventure1003", "choiceAdventure1005", "choiceAdventure1006", "choiceAdventure1007", "choiceAdventure1008", "choiceAdventure1009", "choiceAdventure1010", "choiceAdventure1011", "choiceAdventure1012", "choiceAdventure1013", "choiceAdventure1015", "choiceAdventure1016", "choiceAdventure1017", "choiceAdventure1018", "choiceAdventure1019", "choiceAdventure1020", "choiceAdventure1021", "choiceAdventure1022", "choiceAdventure1023", "choiceAdventure1026", "choiceAdventure1027", "choiceAdventure1028", "choiceAdventure1029", "choiceAdventure1030", "choiceAdventure1031", "choiceAdventure1032", "choiceAdventure1033", "choiceAdventure1034", "choiceAdventure1035", "choiceAdventure1036", "choiceAdventure1037", "choiceAdventure1038", "choiceAdventure1039", "choiceAdventure1040", "choiceAdventure1041", "choiceAdventure1042", "choiceAdventure1044", "choiceAdventure1045", "choiceAdventure1046", "choiceAdventure1048", "choiceAdventure1051", "choiceAdventure1052", "choiceAdventure1053", "choiceAdventure1054", "choiceAdventure1055", "choiceAdventure1056", "choiceAdventure1057", "choiceAdventure1059", "choiceAdventure1060", "choiceAdventure1061", "choiceAdventure1062", "choiceAdventure1065", "choiceAdventure1067", "choiceAdventure1068", "choiceAdventure1069", "choiceAdventure1070", "choiceAdventure1071", "choiceAdventure1073", "choiceAdventure1077", "choiceAdventure1080", "choiceAdventure1081", "choiceAdventure1082", "choiceAdventure1083", "choiceAdventure1084", "choiceAdventure1085", "choiceAdventure1091", "choiceAdventure1094", "choiceAdventure1095", "choiceAdventure1096", "choiceAdventure1097", "choiceAdventure1102", "choiceAdventure1106", "choiceAdventure1107", "choiceAdventure1108", "choiceAdventure1110", "choiceAdventure1114", "choiceAdventure1115", "choiceAdventure1116", "choiceAdventure1118", "choiceAdventure1119", "choiceAdventure1120", "choiceAdventure1121", "choiceAdventure1122", "choiceAdventure1123", "choiceAdventure1171", "choiceAdventure1172", "choiceAdventure1173", "choiceAdventure1174", "choiceAdventure1175", "choiceAdventure1193", "choiceAdventure1195", "choiceAdventure1196", "choiceAdventure1197", "choiceAdventure1198", "choiceAdventure1199", "choiceAdventure1202", "choiceAdventure1203", "choiceAdventure1204", "choiceAdventure1205", "choiceAdventure1206", "choiceAdventure1207", "choiceAdventure1208", "choiceAdventure1209", "choiceAdventure1210", "choiceAdventure1211", "choiceAdventure1212", "choiceAdventure1213", "choiceAdventure1214", "choiceAdventure1215", "choiceAdventure1219", "choiceAdventure1222", "choiceAdventure1223", "choiceAdventure1224", "choiceAdventure1225", "choiceAdventure1226", "choiceAdventure1227", "choiceAdventure1228", "choiceAdventure1229", "choiceAdventure1236", "choiceAdventure1237", "choiceAdventure1238", "choiceAdventure1239", "choiceAdventure1240", "choiceAdventure1241", "choiceAdventure1242", "choiceAdventure1243", "choiceAdventure1244", "choiceAdventure1245", "choiceAdventure1246", "choiceAdventure1247", "choiceAdventure1248", "choiceAdventure1249", "choiceAdventure1250", "choiceAdventure1251", "choiceAdventure1252", "choiceAdventure1253", "choiceAdventure1254", "choiceAdventure1255", "choiceAdventure1256", "choiceAdventure1266", "choiceAdventure1280", "choiceAdventure1281", "choiceAdventure1282", "choiceAdventure1283", "choiceAdventure1284", "choiceAdventure1285", "choiceAdventure1286", "choiceAdventure1287", "choiceAdventure1288", "choiceAdventure1289", "choiceAdventure1290", "choiceAdventure1291", "choiceAdventure1292", "choiceAdventure1293", "choiceAdventure1294", "choiceAdventure1295", "choiceAdventure1296", "choiceAdventure1297", "choiceAdventure1298", "choiceAdventure1299", "choiceAdventure1300", "choiceAdventure1301", "choiceAdventure1302", "choiceAdventure1303", "choiceAdventure1304", "choiceAdventure1305", "choiceAdventure1307", "choiceAdventure1310", "choiceAdventure1312", "choiceAdventure1313", "choiceAdventure1314", "choiceAdventure1315", "choiceAdventure1316", "choiceAdventure1317", "choiceAdventure1318", "choiceAdventure1319", "choiceAdventure1321", "choiceAdventure1322", "choiceAdventure1323", "choiceAdventure1324", "choiceAdventure1325", "choiceAdventure1326", "choiceAdventure1327", "choiceAdventure1328", "choiceAdventure1332", "choiceAdventure1333", "choiceAdventure1335", "choiceAdventure1340", "choiceAdventure1341", "choiceAdventure1345", "choiceAdventure1389", "choiceAdventure1392", "choiceAdventure1397", "choiceAdventure1399", "choiceAdventure1405", "choiceAdventure1411", "choiceAdventure1415", "choiceAdventure1427", "choiceAdventure1428", "choiceAdventure1429", "choiceAdventure1430", "choiceAdventure1431", "choiceAdventure1432", "choiceAdventure1433", "choiceAdventure1434", "choiceAdventure1436", "choiceAdventure1460", "choiceAdventure1461", "choiceAdventure1467", "choiceAdventure1468", "choiceAdventure1469", "choiceAdventure1470", "choiceAdventure1471", "choiceAdventure1472", "choiceAdventure1473", "choiceAdventure1474", "choiceAdventure1475", "choiceAdventure1486", "choiceAdventure1487", "choiceAdventure1488", "choiceAdventure1489", "choiceAdventure1491", "choiceAdventure1494", "choiceAdventure1505"], familiarProperties = ["commaFamiliar", "nextQuantumFamiliar", "stillsuitFamiliar"], statProperties = ["nsChallenge1", "snojoSetting"], phylumProperties = ["dnaSyringe", "locketPhylum", "redSnapperPhylum", "_circadianRhythmsPhylum"];

// node_modules/libram/dist/propertyTyping.js
var booleanPropertiesSet = new Set(booleanProperties), numericPropertiesSet = new Set(numericProperties), numericOrStringPropertiesSet = new Set(numericOrStringProperties), stringPropertiesSet = new Set(stringProperties), locationPropertiesSet = new Set(locationProperties), monsterPropertiesSet = new Set(monsterProperties), familiarPropertiesSet = new Set(familiarProperties), statPropertiesSet = new Set(statProperties), phylumPropertiesSet = new Set(phylumProperties);
function isBooleanProperty(property) {
  return booleanPropertiesSet.has(property);
}
function isNumericProperty(property) {
  return numericPropertiesSet.has(property);
}
function isNumericOrStringProperty(property) {
  return numericOrStringPropertiesSet.has(property);
}
function isStringProperty(property) {
  return stringPropertiesSet.has(property);
}
function isLocationProperty(property) {
  return locationPropertiesSet.has(property);
}
function isMonsterProperty(property) {
  return monsterPropertiesSet.has(property);
}
function isFamiliarProperty(property) {
  return familiarPropertiesSet.has(property);
}
function isStatProperty(property) {
  return statPropertiesSet.has(property);
}
function isPhylumProperty(property) {
  return phylumPropertiesSet.has(property);
}

// node_modules/libram/dist/property.js
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys2(Object(source), !0).forEach(function(key) {
      _defineProperty3(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _classCallCheck3(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass3(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties3(Constructor.prototype, protoProps), staticProps && _defineProperties3(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _defineProperty3(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray2(o, minLen);
  }
}
function _arrayLikeToArray2(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _arr = [], _n = !0, _d = !1, _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !(i && _arr.length === i)); _n = !0)
        ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        !_n && _i.return != null && _i.return();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
var createPropertyGetter = function(transform) {
  return function(property, default_) {
    var value = (0, import_kolmafia3.getProperty)(property);
    return default_ !== void 0 && value === "" ? default_ : transform(value, property);
  };
}, createMafiaClassPropertyGetter = function(Type, toType) {
  return createPropertyGetter(function(value) {
    if (value === "")
      return null;
    var v = toType(value);
    return v === Type.none ? null : v;
  });
}, getString = createPropertyGetter(function(value) {
  return value;
}), getCommaSeparated = createPropertyGetter(function(value) {
  return value.split(/, ?/);
}), getBoolean = createPropertyGetter(function(value) {
  return value === "true";
}), getNumber = createPropertyGetter(function(value) {
  return Number(value);
}), getBounty = createMafiaClassPropertyGetter(import_kolmafia3.Bounty, import_kolmafia3.toBounty), getClass = createMafiaClassPropertyGetter(import_kolmafia3.Class, import_kolmafia3.toClass), getCoinmaster = createMafiaClassPropertyGetter(import_kolmafia3.Coinmaster, import_kolmafia3.toCoinmaster), getEffect = createMafiaClassPropertyGetter(import_kolmafia3.Effect, import_kolmafia3.toEffect), getElement = createMafiaClassPropertyGetter(import_kolmafia3.Element, import_kolmafia3.toElement), getFamiliar = createMafiaClassPropertyGetter(import_kolmafia3.Familiar, import_kolmafia3.toFamiliar), getItem = createMafiaClassPropertyGetter(import_kolmafia3.Item, import_kolmafia3.toItem), getLocation = createMafiaClassPropertyGetter(import_kolmafia3.Location, import_kolmafia3.toLocation), getMonster = createMafiaClassPropertyGetter(import_kolmafia3.Monster, import_kolmafia3.toMonster), getPhylum = createMafiaClassPropertyGetter(import_kolmafia3.Phylum, import_kolmafia3.toPhylum), getServant = createMafiaClassPropertyGetter(import_kolmafia3.Servant, import_kolmafia3.toServant), getSkill = createMafiaClassPropertyGetter(import_kolmafia3.Skill, import_kolmafia3.toSkill), getSlot = createMafiaClassPropertyGetter(import_kolmafia3.Slot, import_kolmafia3.toSlot), getStat = createMafiaClassPropertyGetter(import_kolmafia3.Stat, import_kolmafia3.toStat), getThrall = createMafiaClassPropertyGetter(import_kolmafia3.Thrall, import_kolmafia3.toThrall);
function get(property, _default) {
  var value = getString(property);
  if (isBooleanProperty(property)) {
    var _getBoolean;
    return (_getBoolean = getBoolean(property, _default)) !== null && _getBoolean !== void 0 ? _getBoolean : !1;
  } else if (isNumericProperty(property)) {
    var _getNumber;
    return (_getNumber = getNumber(property, _default)) !== null && _getNumber !== void 0 ? _getNumber : 0;
  } else {
    if (isNumericOrStringProperty(property))
      return value.match(/^\d+$/) ? parseInt(value) : value;
    if (isLocationProperty(property))
      return getLocation(property, _default);
    if (isMonsterProperty(property))
      return getMonster(property, _default);
    if (isFamiliarProperty(property))
      return getFamiliar(property, _default);
    if (isStatProperty(property))
      return getStat(property, _default);
    if (isPhylumProperty(property))
      return getPhylum(property, _default);
    if (isStringProperty(property))
      return value;
  }
  return _default instanceof import_kolmafia3.Location ? getLocation(property, _default) : _default instanceof import_kolmafia3.Monster ? getMonster(property, _default) : _default instanceof import_kolmafia3.Familiar ? getFamiliar(property, _default) : _default instanceof import_kolmafia3.Stat ? getStat(property, _default) : _default instanceof import_kolmafia3.Phylum ? getPhylum(property, _default) : typeof _default == "boolean" ? value === "true" ? !0 : value === "false" ? !1 : _default : typeof _default == "number" ? value === "" ? _default : parseInt(value) : value === "" ? _default === void 0 ? "" : _default : value;
}
function _set(property, value) {
  var stringValue = value === null ? "" : value.toString();
  return (0, import_kolmafia3.setProperty)(property, stringValue), value;
}
function setProperties(properties) {
  for (var _i = 0, _Object$entries = Object.entries(properties); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), prop = _Object$entries$_i[0], value = _Object$entries$_i[1];
    _set(prop, value);
  }
}
function withProperties(properties, callback) {
  var propertiesBackup = Object.fromEntries(Object.entries(properties).map(function(_ref) {
    var _ref2 = _slicedToArray(_ref, 1), prop = _ref2[0];
    return [prop, get(prop)];
  }));
  setProperties(properties);
  try {
    return callback();
  } finally {
    setProperties(propertiesBackup);
  }
}
function withProperty(property, value, callback) {
  return withProperties(_defineProperty3({}, property, value), callback);
}
function withChoices(choices2, callback) {
  var properties = Object.fromEntries(Object.entries(choices2).map(function(_ref32) {
    var _ref4 = _slicedToArray(_ref32, 2), choice = _ref4[0], option = _ref4[1];
    return ["choiceAdventure".concat(choice), option];
  }));
  return withProperties(properties, callback);
}
function withChoice(choice, value, callback) {
  return withChoices(_defineProperty3({}, choice, value), callback);
}
var PropertiesManager = /* @__PURE__ */ function() {
  function PropertiesManager2() {
    _classCallCheck3(this, PropertiesManager2), _defineProperty3(this, "properties", {});
  }
  return _createClass3(PropertiesManager2, [{
    key: "storedValues",
    get: function() {
      return this.properties;
    }
  }, {
    key: "set",
    value: function(propertiesToSet) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(propertiesToSet); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2), propertyName = _Object$entries2$_i[0], propertyValue = _Object$entries2$_i[1];
        propertyName in this.properties || (this.properties[propertyName] = (0, import_kolmafia3.propertyExists)(propertyName) ? get(propertyName) : PropertiesManager2.EMPTY_PREFERENCE), _set(propertyName, propertyValue);
      }
    }
  }, {
    key: "setChoices",
    value: function(choicesToSet) {
      this.set(Object.fromEntries(Object.entries(choicesToSet).map(function(_ref52) {
        var _ref62 = _slicedToArray(_ref52, 2), choiceNumber = _ref62[0], choiceValue = _ref62[1];
        return ["choiceAdventure".concat(choiceNumber), choiceValue];
      })));
    }
  }, {
    key: "setChoice",
    value: function(choiceToSet, value) {
      this.setChoices(_defineProperty3({}, choiceToSet, value));
    }
  }, {
    key: "reset",
    value: function() {
      for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++)
        properties[_key] = arguments[_key];
      for (var _i3 = 0, _properties = properties; _i3 < _properties.length; _i3++) {
        var property = _properties[_i3];
        if (property in this.properties) {
          var value = this.properties[property];
          value === PropertiesManager2.EMPTY_PREFERENCE ? (0, import_kolmafia3.removeProperty)(property) : value ? _set(property, value) : _set(property, "");
        }
      }
    }
  }, {
    key: "resetAll",
    value: function() {
      setProperties(this.properties);
    }
  }, {
    key: "clear",
    value: function() {
      for (var _len2 = arguments.length, properties = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
        properties[_key2] = arguments[_key2];
      for (var _i4 = 0, _properties2 = properties; _i4 < _properties2.length; _i4++) {
        var property = _properties2[_i4];
        this.properties[property] && delete this.properties[property];
      }
    }
  }, {
    key: "clearAll",
    value: function() {
      this.properties = {};
    }
  }, {
    key: "setMinimumValue",
    value: function(property, value) {
      return get(property, 0) < value ? (this.set(_defineProperty3({}, property, value)), !0) : !1;
    }
  }, {
    key: "setMaximumValue",
    value: function(property, value) {
      return get(property, 0) > value ? (this.set(_defineProperty3({}, property, value)), !0) : !1;
    }
  }, {
    key: "clone",
    value: function() {
      var newGuy = new PropertiesManager2();
      return newGuy.properties = this.storedValues, newGuy;
    }
  }, {
    key: "clamp",
    value: function(property, min, max) {
      if (max < min)
        return !1;
      var start = get(property);
      return this.setMinimumValue(property, min), this.setMaximumValue(property, max), start !== get(property);
    }
  }, {
    key: "equals",
    value: function(other) {
      var thisProps = Object.entries(this.storedValues), otherProps = new Map(Object.entries(other.storedValues));
      if (thisProps.length !== otherProps.size)
        return !1;
      for (var _i5 = 0, _thisProps = thisProps; _i5 < _thisProps.length; _i5++) {
        var _thisProps$_i = _slicedToArray(_thisProps[_i5], 2), propertyName = _thisProps$_i[0], propertyValue = _thisProps$_i[1];
        if (otherProps.get(propertyName) === propertyValue)
          return !1;
      }
      return !0;
    }
  }, {
    key: "merge",
    value: function(other) {
      var newGuy = new PropertiesManager2();
      return newGuy.properties = _objectSpread2(_objectSpread2({}, this.properties), other.properties), newGuy;
    }
  }], [{
    key: "merge",
    value: function() {
      for (var _len3 = arguments.length, mergees = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)
        mergees[_key3] = arguments[_key3];
      return mergees.length === 0 ? new PropertiesManager2() : mergees.reduce(function(a, b) {
        return a.merge(b);
      });
    }
  }]), PropertiesManager2;
}();
_defineProperty3(PropertiesManager, "EMPTY_PREFERENCE", Symbol("empty preference"));

// node_modules/libram/dist/template-string.js
init_kolmafia_polyfill();
var import_kolmafia4 = require("kolmafia");

// node_modules/libram/dist/utils.js
init_kolmafia_polyfill();
function _createForOfIteratorHelper2(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray3(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _slicedToArray2(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray3(arr, i) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit2(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _arr = [], _n = !0, _d = !1, _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !(i && _arr.length === i)); _n = !0)
        ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        !_n && _i.return != null && _i.return();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray3(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray3(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray3(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray3(o, minLen);
  }
}
function _iterableToArray(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray3(arr);
}
function _arrayLikeToArray3(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
function sum(addends, x) {
  return addends.reduce(function(subtotal, element) {
    return subtotal + (typeof x == "function" ? x(element) : element[x]);
  }, 0);
}
function sumNumbers(addends) {
  return sum(addends, function(x) {
    return x;
  });
}
function arrayContains(item5, array) {
  return array.includes(item5);
}
function setEqual(a, b) {
  var sortedA = _toConsumableArray(a).sort(), sortedB = _toConsumableArray(b).sort();
  return a.length === b.length && sortedA.every(function(item5, index) {
    return item5 === sortedB[index];
  });
}
function invertMap(map) {
  var returnValue = /* @__PURE__ */ new Map(), _iterator = _createForOfIteratorHelper2(map), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _step$value = _slicedToArray2(_step.value, 2), key = _step$value[0], value = _step$value[1];
      returnValue.set(value, key);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return returnValue;
}
function splitByCommasWithEscapes(str) {
  var returnValue = [], ignoreNext = !1, currentString = "", _iterator2 = _createForOfIteratorHelper2(str.split("")), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var char = _step2.value;
      char === "\\" ? ignoreNext = !0 : (char == "," && !ignoreNext ? (returnValue.push(currentString.trim()), currentString = "") : currentString += char, ignoreNext = !1);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return returnValue.push(currentString.trim()), returnValue;
}
function maxBy(array, optimizer) {
  var reverse = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  if (!array.length)
    throw new Error("Cannot call maxBy on an empty array!");
  return typeof optimizer == "function" ? _toConsumableArray(array).reduce(function(_ref62, other) {
    var value = _ref62.value, item5 = _ref62.item, otherValue = optimizer(other);
    return value >= otherValue !== reverse ? {
      value: value,
      item: item5
    } : {
      value: otherValue,
      item: other
    };
  }, {
    item: array[0],
    value: optimizer(array[0])
  }).item : array.reduce(function(a, b) {
    return a[optimizer] >= b[optimizer] !== reverse ? a : b;
  });
}
function arrayEquals(left, right) {
  return left.length !== right.length ? !1 : left.every(function(element, index) {
    return element === right[index];
  });
}
function undelay(delayedObject) {
  for (var _len = arguments.length, args2 = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)
    args2[_key - 1] = arguments[_key];
  return typeof delayedObject == "function" ? delayedObject.apply(void 0, args2) : delayedObject;
}
function makeByXFunction(source) {
  return function(options) {
    var _options$val, val = undelay(source);
    return "default" in options ? (_options$val = options[val]) !== null && _options$val !== void 0 ? _options$val : options.default : options[val];
  };
}
function flat(arr) {
  var depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1 / 0, flatArray = [], _iterator3 = _createForOfIteratorHelper2(arr), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      var item5 = _step3.value;
      Array.isArray(item5) && depth > 0 ? flatArray = flatArray.concat(flat(item5, depth - 1)) : flatArray.push(item5);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return flatArray;
}

// node_modules/libram/dist/template-string.js
var concatTemplateString = function(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)
    placeholders[_key - 1] = arguments[_key];
  return literals.raw.reduce(function(acc, literal, i) {
    var _placeholders$i;
    return acc + literal + ((_placeholders$i = placeholders[i]) !== null && _placeholders$i !== void 0 ? _placeholders$i : "");
  }, "");
}, handleTypeGetError = function(Type, error) {
  var message = "".concat(error), match = message.match(RegExp("Bad ".concat(Type.name.toLowerCase(), " value: .*")));
  match ? (0, import_kolmafia4.print)("".concat(match[0], "; if you're certain that this ").concat(Type.name, " exists and is spelled correctly, please update KoLMafia"), "red") : (0, import_kolmafia4.print)(message);
}, createSingleConstant = function(Type) {
  var tagFunction = function(literals) {
    for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)
      placeholders[_key2 - 1] = arguments[_key2];
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    try {
      return Type.get(input);
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    (0, import_kolmafia4.abort)();
  };
  return tagFunction.none = Type.none, tagFunction;
}, createPluralConstant = function(Type) {
  var tagFunction = function(literals) {
    for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++)
      placeholders[_key3 - 1] = arguments[_key3];
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    if (input === "")
      return Type.all();
    try {
      return Type.get(splitByCommasWithEscapes(input));
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    (0, import_kolmafia4.abort)();
  };
  return tagFunction.all = function() {
    return Type.all();
  }, tagFunction;
}, $bounty = createSingleConstant(import_kolmafia4.Bounty), $bounties = createPluralConstant(import_kolmafia4.Bounty), $class = createSingleConstant(import_kolmafia4.Class), $classes = createPluralConstant(import_kolmafia4.Class), $coinmaster = createSingleConstant(import_kolmafia4.Coinmaster), $coinmasters = createPluralConstant(import_kolmafia4.Coinmaster), $effect = createSingleConstant(import_kolmafia4.Effect), $effects = createPluralConstant(import_kolmafia4.Effect), $element = createSingleConstant(import_kolmafia4.Element), $elements = createPluralConstant(import_kolmafia4.Element), $familiar = createSingleConstant(import_kolmafia4.Familiar), $familiars = createPluralConstant(import_kolmafia4.Familiar), $item = createSingleConstant(import_kolmafia4.Item), $items = createPluralConstant(import_kolmafia4.Item), $location = createSingleConstant(import_kolmafia4.Location), $locations = createPluralConstant(import_kolmafia4.Location), $modifier = createSingleConstant(import_kolmafia4.Modifier), $modifiers = createPluralConstant(import_kolmafia4.Modifier), $monster = createSingleConstant(import_kolmafia4.Monster), $monsters = createPluralConstant(import_kolmafia4.Monster), $phylum = createSingleConstant(import_kolmafia4.Phylum), $phyla = createPluralConstant(import_kolmafia4.Phylum), $servant = createSingleConstant(import_kolmafia4.Servant), $servants = createPluralConstant(import_kolmafia4.Servant), $skill = createSingleConstant(import_kolmafia4.Skill), $skills = createPluralConstant(import_kolmafia4.Skill), $slot = createSingleConstant(import_kolmafia4.Slot), $slots = createPluralConstant(import_kolmafia4.Slot), $stat = createSingleConstant(import_kolmafia4.Stat), $stats = createPluralConstant(import_kolmafia4.Stat), $thrall = createSingleConstant(import_kolmafia4.Thrall), $thralls = createPluralConstant(import_kolmafia4.Thrall), $path = createSingleConstant(import_kolmafia4.Path), $paths = createPluralConstant(import_kolmafia4.Path);

// node_modules/libram/dist/lib.js
var _templateObject;
var _templateObject5, _templateObject6;
var _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34;
function _defineProperties4(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass4(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties4(Constructor.prototype, protoProps), staticProps && _defineProperties4(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _classCallCheck4(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _inherits(subClass, superClass) {
  if (typeof superClass != "function" && superClass !== null)
    throw new TypeError("Super expression must either be null or a function");
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf(subClass, superClass);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else
      result = Super.apply(this, arguments);
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call == "object" || typeof call == "function"))
    return call;
  if (call !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self;
}
function _wrapNativeSuper(Class5) {
  var _cache = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper = function(Class6) {
    if (Class6 === null || !_isNativeFunction(Class6))
      return Class6;
    if (typeof Class6 != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof _cache != "undefined") {
      if (_cache.has(Class6))
        return _cache.get(Class6);
      _cache.set(Class6, Wrapper);
    }
    function Wrapper() {
      return _construct(Class6, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(Class6.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, Class6);
  }, _wrapNativeSuper(Class5);
}
function _construct(Parent, args2, Class5) {
  return _isNativeReflectConstruct() ? _construct = Reflect.construct.bind() : _construct = function(Parent2, args3, Class6) {
    var a = [null];
    a.push.apply(a, args3);
    var Constructor = Function.bind.apply(Parent2, a), instance = new Constructor();
    return Class6 && _setPrototypeOf(instance, Class6.prototype), instance;
  }, _construct.apply(null, arguments);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch (e) {
    return !1;
  }
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf(o, p) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf(o, p);
}
function _getPrototypeOf(o) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  }, _getPrototypeOf(o);
}
function _slicedToArray3(arr, i) {
  return _arrayWithHoles3(arr) || _iterableToArrayLimit3(arr, i) || _unsupportedIterableToArray4(arr, i) || _nonIterableRest3();
}
function _nonIterableRest3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray4(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray4(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray4(o, minLen);
  }
}
function _arrayLikeToArray4(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit3(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _arr = [], _n = !0, _d = !1, _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !(i && _arr.length === i)); _n = !0)
        ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        !_n && _i.return != null && _i.return();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles3(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _taggedTemplateLiteral(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function isSong(skillOrEffect) {
  if (skillOrEffect instanceof import_kolmafia5.Effect && skillOrEffect.attributes.includes("song"))
    return !0;
  var skill = skillOrEffect instanceof import_kolmafia5.Effect ? (0, import_kolmafia5.toSkill)(skillOrEffect) : skillOrEffect;
  return skill.class === $class(_templateObject || (_templateObject = _taggedTemplateLiteral(["Accordion Thief"]))) && skill.buff;
}
function getRemainingStomach() {
  return (0, import_kolmafia5.fullnessLimit)() - (0, import_kolmafia5.myFullness)();
}
function have(thing) {
  var quantity = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  if (thing instanceof import_kolmafia5.Effect)
    return (0, import_kolmafia5.haveEffect)(thing) >= quantity;
  if (thing instanceof import_kolmafia5.Familiar)
    return (0, import_kolmafia5.haveFamiliar)(thing);
  if (thing instanceof import_kolmafia5.Item)
    return (0, import_kolmafia5.availableAmount)(thing) >= quantity;
  if (thing instanceof import_kolmafia5.Servant)
    return (0, import_kolmafia5.haveServant)(thing);
  if (thing instanceof import_kolmafia5.Skill)
    return (0, import_kolmafia5.haveSkill)(thing);
  if (thing instanceof import_kolmafia5.Thrall) {
    var thrall = (0, import_kolmafia5.myThrall)();
    return thrall.id === thing.id && thrall.level >= quantity;
  }
  return !1;
}
function haveInCampground(item5) {
  return Object.keys((0, import_kolmafia5.getCampground)()).map(function(i) {
    return import_kolmafia5.Item.get(i);
  }).includes(item5);
}
var Wanderer;
(function(Wanderer2) {
  Wanderer2.Digitize = "Digitize Monster", Wanderer2.Enamorang = "Enamorang Monster", Wanderer2.Familiar = "Familiar", Wanderer2.Holiday = "Holiday Monster", Wanderer2.Kramco = "Kramco", Wanderer2.Nemesis = "Nemesis Assassin", Wanderer2.Portscan = "portscan.edu", Wanderer2.Romantic = "Romantic Monster", Wanderer2.Vote = "Vote Monster";
})(Wanderer || (Wanderer = {}));
var deterministicWanderers = [Wanderer.Digitize, Wanderer.Portscan];
function getKramcoWandererChance() {
  var fights = get("_sausageFights"), lastFight = get("_lastSausageMonsterTurn"), totalTurns = (0, import_kolmafia5.totalTurnsPlayed)();
  if (fights < 1)
    return lastFight === totalTurns && (0, import_kolmafia5.myTurncount)() < 1 ? 0.5 : 1;
  var turnsSinceLastFight = totalTurns - lastFight;
  return Math.min(1, (turnsSinceLastFight + 1) / (5 + fights * 3 + Math.max(0, fights - 5) ** 3));
}
function getFoldGroup(item5) {
  return Object.entries((0, import_kolmafia5.getRelated)(item5, "fold")).sort(function(_ref, _ref2) {
    var _ref32 = _slicedToArray3(_ref, 2), a = _ref32[1], _ref4 = _slicedToArray3(_ref2, 2), b = _ref4[1];
    return a - b;
  }).map(function(_ref52) {
    var _ref62 = _slicedToArray3(_ref52, 1), i = _ref62[0];
    return import_kolmafia5.Item.get(i);
  });
}
function uneffect(effect) {
  return (0, import_kolmafia5.cliExecute)("uneffect ".concat(effect.name));
}
var EnsureError = /* @__PURE__ */ function(_Error) {
  _inherits(EnsureError2, _Error);
  var _super = _createSuper(EnsureError2);
  function EnsureError2(cause, reason) {
    var _this;
    return _classCallCheck4(this, EnsureError2), _this = _super.call(this, "Failed to ensure ".concat(cause.name, "!").concat(reason ? " ".concat(reason) : "")), _this.name = "Ensure Error", _this;
  }
  return _createClass4(EnsureError2);
}(/* @__PURE__ */ _wrapNativeSuper(Error));
function ensureEffect(ef) {
  var turns = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  if ((0, import_kolmafia5.haveEffect)(ef) < turns) {
    if (ef.default === null)
      throw new EnsureError(ef, "No default action");
    if (!(0, import_kolmafia5.cliExecute)(ef.default) || (0, import_kolmafia5.haveEffect)(ef) === 0)
      throw new EnsureError(ef);
  }
}
var valueMap = /* @__PURE__ */ new Map(), MALL_VALUE_MODIFIER = 0.9;
function getSaleValue() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++)
    items[_key] = arguments[_key];
  return items.map(function(item5) {
    return valueMap.has(item5) || (item5.discardable ? valueMap.set(item5, (0, import_kolmafia5.mallPrice)(item5) > Math.max(2 * (0, import_kolmafia5.autosellPrice)(item5), 100) ? MALL_VALUE_MODIFIER * (0, import_kolmafia5.mallPrice)(item5) : (0, import_kolmafia5.autosellPrice)(item5)) : valueMap.set(item5, (0, import_kolmafia5.mallPrice)(item5) > 100 ? MALL_VALUE_MODIFIER * (0, import_kolmafia5.mallPrice)(item5) : 0)), valueMap.get(item5) || 0;
  }).reduce(function(s, price) {
    return s + price;
  }, 0) / items.length;
}
function findLeprechaunMultiplier(familiar3) {
  if (familiar3 === $familiar(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Mutant Cactus Bud"]))))
    return (0, import_kolmafia5.numericModifier)(familiar3, "Leprechaun Effectiveness", 1, $item.none);
  if (familiar3 === $familiar(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Reanimated Reanimator"]))))
    return 0;
  var meatBonus = (0, import_kolmafia5.numericModifier)(familiar3, "Meat Drop", 1, $item.none);
  return meatBonus === 0 ? 0 : Math.pow(Math.sqrt(meatBonus / 2 + 55 / 4 + 3) - Math.sqrt(55) / 2, 2);
}
var holidayWanderers = /* @__PURE__ */ new Map([["El Dia De Los Muertos Borrachos", $monsters(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", $monsters(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", $monsters(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
function getTodaysHolidayWanderers() {
  return flat((0, import_kolmafia5.holiday)().split("/").map(function(holiday2) {
    var _holidayWanderers$get;
    return (_holidayWanderers$get = holidayWanderers.get(holiday2)) !== null && _holidayWanderers$get !== void 0 ? _holidayWanderers$get : [];
  }));
}
function canVisitUrl() {
  return (0, import_kolmafia5.currentRound)() ? (logger_default.debug("Current round is ".concat((0, import_kolmafia5.currentRound)(), "; you're in combat.")), !1) : (0, import_kolmafia5.inMultiFight)() ? (logger_default.debug("You're in a multifight."), !1) : (0, import_kolmafia5.choiceFollowsFight)() ? (logger_default.debug("A choice follows this fight."), !1) : (0, import_kolmafia5.handlingChoice)() ? (logger_default.debug("You're currently in a choice adventure"), !1) : !0;
}
var telescopeStats = /* @__PURE__ */ new Map([["standing around flexing their muscles and using grip exercisers", $stat(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Muscle"])))], ["sitting around playing chess and solving complicated-looking logic puzzles", $stat(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Mysticality"])))], ["all wearing sunglasses and dancing", $stat(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Moxie"])))]]), telescopeElements = /* @__PURE__ */ new Map([["people, all of whom appear to be on fire", $element(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["hot"])))], ["people, surrounded by a cloud of eldritch mist", $element(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["spooky"])))], ["greasy-looking people furtively skulking around", $element(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["sleaze"])))], ["people, surrounded by garbage and clouds of flies", $element(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["stench"])))], ["people, clustered around a group of igloos", $element(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap1 = /* @__PURE__ */ new Map([["smoldering bushes on the outskirts of a hedge maze", $element(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["hot"])))], ["creepy-looking black bushes on the outskirts of a hedge maze", $element(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["spooky"])))], ["purplish, greasy-looking hedges", $element(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["sleaze"])))], ["nasty-looking, dripping green bushes on the outskirts of a hedge maze", $element(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["stench"])))], ["frost-rimed bushes on the outskirts of a hedge maze", $element(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap2 = /* @__PURE__ */ new Map([["smoke rising from deeper within the maze", $element(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["hot"])))], ["a miasma of eldritch vapors rising from deeper within the maze", $element(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["spooky"])))], ["a greasy purple cloud hanging over the center of the maze", $element(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["sleaze"])))], ["a cloud of green gas hovering over the maze", $element(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["stench"])))], ["wintry mists rising from deeper within the maze", $element(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap3 = /* @__PURE__ */ new Map([["with lava slowly oozing out of it", $element(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["hot"])))], ["surrounded by creepy black mist", $element(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["spooky"])))], ["that occasionally vomits out a greasy ball of hair", $element(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["sleaze"])))], ["disgorging a really surprising amount of sewage", $element(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["stench"])))], ["occasionally disgorging a bunch of ice cubes", $element(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["cold"])))]]);
var byStat = makeByXFunction(function() {
  return (0, import_kolmafia5.myPrimestat)().toString();
}), byClass = makeByXFunction(function() {
  return (0, import_kolmafia5.myClass)().toString();
});
function directlyUse(item5) {
  return (0, import_kolmafia5.visitUrl)("inv_use.php?which=3&whichitem=".concat(item5.id, "&pwd"));
}

// node_modules/libram/dist/overlappingNames.js
init_kolmafia_polyfill();
var overlappingItemNames = ["spider web", "really sticky spider web", "dictionary", "NG", "Cloaca-Cola", "yo-yo", "top", "ball", "kite", "yo", "red potion", "blue potion", "bowling ball", "adder", "red button", "pile of sand", "mushroom", "deluxe mushroom"], overlappingSkillNames = ["Shoot", "Thrust-Smack", "Headbutt", "Toss", "Knife in the Dark", "Sing", "Disarm", "LIGHT", "BURN", "Extract", "Meteor Shower", "Snipe", "Cleave", "Boil", "Slice", "Rainbow"];

// node_modules/libram/dist/combat.js
function _get() {
  return typeof Reflect != "undefined" && Reflect.get ? _get = Reflect.get.bind() : _get = function(target, property, receiver) {
    var base = _superPropBase(target, property);
    if (!!base) {
      var desc = Object.getOwnPropertyDescriptor(base, property);
      return desc.get ? desc.get.call(arguments.length < 3 ? target : receiver) : desc.value;
    }
  }, _get.apply(this, arguments);
}
function _superPropBase(object, property) {
  for (; !Object.prototype.hasOwnProperty.call(object, property) && (object = _getPrototypeOf2(object), object !== null); )
    ;
  return object;
}
function _createForOfIteratorHelper3(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray5(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e2) {
    didErr = !0, err = _e2;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _toConsumableArray2(arr) {
  return _arrayWithoutHoles2(arr) || _iterableToArray2(arr) || _unsupportedIterableToArray5(arr) || _nonIterableSpread2();
}
function _nonIterableSpread2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray5(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray5(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray5(o, minLen);
  }
}
function _iterableToArray2(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles2(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray5(arr);
}
function _arrayLikeToArray5(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _defineProperty4(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _defineProperties5(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass5(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties5(Constructor.prototype, protoProps), staticProps && _defineProperties5(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _classCallCheck5(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _inherits2(subClass, superClass) {
  if (typeof superClass != "function" && superClass !== null)
    throw new TypeError("Super expression must either be null or a function");
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf2(subClass, superClass);
}
function _createSuper2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct2();
  return function() {
    var Super = _getPrototypeOf2(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf2(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else
      result = Super.apply(this, arguments);
    return _possibleConstructorReturn2(this, result);
  };
}
function _possibleConstructorReturn2(self, call) {
  if (call && (typeof call == "object" || typeof call == "function"))
    return call;
  if (call !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized2(self);
}
function _assertThisInitialized2(self) {
  if (self === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self;
}
function _wrapNativeSuper2(Class5) {
  var _cache = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper2 = function(Class6) {
    if (Class6 === null || !_isNativeFunction2(Class6))
      return Class6;
    if (typeof Class6 != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof _cache != "undefined") {
      if (_cache.has(Class6))
        return _cache.get(Class6);
      _cache.set(Class6, Wrapper);
    }
    function Wrapper() {
      return _construct2(Class6, arguments, _getPrototypeOf2(this).constructor);
    }
    return Wrapper.prototype = Object.create(Class6.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf2(Wrapper, Class6);
  }, _wrapNativeSuper2(Class5);
}
function _construct2(Parent, args2, Class5) {
  return _isNativeReflectConstruct2() ? _construct2 = Reflect.construct.bind() : _construct2 = function(Parent2, args3, Class6) {
    var a = [null];
    a.push.apply(a, args3);
    var Constructor = Function.bind.apply(Parent2, a), instance = new Constructor();
    return Class6 && _setPrototypeOf2(instance, Class6.prototype), instance;
  }, _construct2.apply(null, arguments);
}
function _isNativeReflectConstruct2() {
  if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch (e) {
    return !1;
  }
}
function _isNativeFunction2(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf2(o, p) {
  return _setPrototypeOf2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf2(o, p);
}
function _getPrototypeOf2(o) {
  return _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  }, _getPrototypeOf2(o);
}
var MACRO_NAME = "Script Autoattack Macro";
function getMacroId() {
  var name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : MACRO_NAME, macroMatches = (0, import_kolmafia6.xpath)((0, import_kolmafia6.visitUrl)("account_combatmacros.php"), '//select[@name="macroid"]/option[text()="'.concat(name, '"]/@value'));
  if (macroMatches.length === 0) {
    (0, import_kolmafia6.visitUrl)("account_combatmacros.php?action=new");
    var newMacroText = (0, import_kolmafia6.visitUrl)("account_combatmacros.php?macroid=0&name=".concat(name, "&macrotext=abort&action=save"));
    return parseInt((0, import_kolmafia6.xpath)(newMacroText, "//input[@name=".concat(name, "]/@value"))[0], 10);
  } else
    return parseInt(macroMatches[0], 10);
}
function itemOrNameToItem(itemOrName) {
  return typeof itemOrName == "string" ? import_kolmafia6.Item.get(itemOrName) : itemOrName;
}
function itemOrItemsBallsMacroName(itemOrItems) {
  if (Array.isArray(itemOrItems))
    return itemOrItems.map(itemOrItemsBallsMacroName).join(", ");
  var item5 = itemOrNameToItem(itemOrItems);
  return overlappingItemNames.includes(item5.name) ? item5.id.toFixed(0) : item5.name;
}
function itemOrItemsBallsMacroPredicate(itemOrItems) {
  return Array.isArray(itemOrItems) ? itemOrItems.map(itemOrItemsBallsMacroPredicate).join(" && ") : "hascombatitem ".concat(itemOrItems);
}
function skillOrNameToSkill(skillOrName) {
  return typeof skillOrName == "string" ? import_kolmafia6.Skill.get(skillOrName) : skillOrName;
}
function skillBallsMacroName(skillOrName) {
  var skill = skillOrNameToSkill(skillOrName);
  return skill.name.match(/^[A-Za-z ]+$/) && !overlappingSkillNames.includes(skill.name) ? skill.name : skill.id;
}
var InvalidMacroError = /* @__PURE__ */ function(_Error) {
  _inherits2(InvalidMacroError2, _Error);
  var _super = _createSuper2(InvalidMacroError2);
  function InvalidMacroError2() {
    return _classCallCheck5(this, InvalidMacroError2), _super.apply(this, arguments);
  }
  return _createClass5(InvalidMacroError2);
}(/* @__PURE__ */ _wrapNativeSuper2(Error)), Macro = /* @__PURE__ */ function() {
  function Macro3() {
    _classCallCheck5(this, Macro3), _defineProperty4(this, "components", []), _defineProperty4(this, "name", MACRO_NAME);
  }
  return _createClass5(Macro3, [{
    key: "toString",
    value: function() {
      return (this.components.join(";") + ";").replace(/;;+/g, ";");
    }
  }, {
    key: "rename",
    value: function(name) {
      return this.name = name, this;
    }
  }, {
    key: "save",
    value: function() {
      _set(Macro3.SAVED_MACRO_PROPERTY, this.toString());
    }
  }, {
    key: "step",
    value: function() {
      for (var _ref, _this$components, _len = arguments.length, nextSteps = new Array(_len), _key = 0; _key < _len; _key++)
        nextSteps[_key] = arguments[_key];
      var nextStepsStrings = (_ref = []).concat.apply(_ref, _toConsumableArray2(nextSteps.map(function(x) {
        return x instanceof Macro3 ? x.components : [x];
      })));
      return (_this$components = this.components).push.apply(_this$components, _toConsumableArray2(nextStepsStrings.filter(function(s) {
        return s.length > 0;
      }))), this;
    }
  }, {
    key: "submit",
    value: function() {
      var final = this.toString();
      return (0, import_kolmafia6.visitUrl)("fight.php?action=macro&macrotext=".concat((0, import_kolmafia6.urlEncode)(final)), !0, !0);
    }
  }, {
    key: "setAutoAttack",
    value: function() {
      var id = Macro3.cachedMacroIds.get(this.name);
      id === void 0 && (id = getMacroId(this.name), Macro3.cachedMacroIds.set(this.name, id)), !((0, import_kolmafia6.getAutoAttack)() === 99e6 + id && this.toString() === Macro3.cachedAutoAttacks.get(this.name)) && ((0, import_kolmafia6.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&name=").concat((0, import_kolmafia6.urlEncode)(this.name), "&macrotext=").concat((0, import_kolmafia6.urlEncode)(this.toString()), "&action=save"), !0, !0), (0, import_kolmafia6.visitUrl)("account.php?am=1&action=autoattack&value=".concat(99e6 + id, "&ajax=1")), Macro3.cachedAutoAttacks.set(this.name, this.toString()));
    }
  }, {
    key: "setAutoAttackAs",
    value: function(name) {
      this.name = name, this.setAutoAttack();
    }
  }, {
    key: "abort",
    value: function() {
      return this.step("abort");
    }
  }, {
    key: "abortWithWarning",
    value: function(warning) {
      return this.step('abort "'.concat(warning, '"'));
    }
  }, {
    key: "runaway",
    value: function() {
      return this.step("runaway");
    }
  }, {
    key: "if_",
    value: function(condition, ifTrue) {
      return this.step("if ".concat(Macro3.makeBALLSPredicate(condition))).step(ifTrue).step("endif");
    }
  }, {
    key: "ifNot",
    value: function(condition, ifTrue) {
      return this.step("if !(".concat(Macro3.makeBALLSPredicate(condition), ")")).step(ifTrue).step("endif");
    }
  }, {
    key: "while_",
    value: function(condition, contents) {
      return this.step("while ".concat(condition)).step(contents).step("endwhile");
    }
  }, {
    key: "externalIf",
    value: function(condition, ifTrue, ifFalse) {
      return condition ? this.step(ifTrue) : ifFalse ? this.step(ifFalse) : this;
    }
  }, {
    key: "repeat",
    value: function() {
      return this.step("repeat");
    }
  }, {
    key: "skill",
    value: function() {
      for (var _len2 = arguments.length, skills = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
        skills[_key2] = arguments[_key2];
      return this.step.apply(this, _toConsumableArray2(skills.map(function(skill2) {
        return "skill ".concat(skillBallsMacroName(skill2));
      })));
    }
  }, {
    key: "trySkill",
    value: function() {
      for (var _len3 = arguments.length, skills = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)
        skills[_key3] = arguments[_key3];
      return this.step.apply(this, _toConsumableArray2(skills.map(function(skill) {
        return Macro3.if_("hasskill ".concat(skillBallsMacroName(skill)), Macro3.skill(skill));
      })));
    }
  }, {
    key: "trySkillRepeat",
    value: function() {
      for (var _len4 = arguments.length, skills = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++)
        skills[_key4] = arguments[_key4];
      return this.step.apply(this, _toConsumableArray2(skills.map(function(skill) {
        return Macro3.if_("hasskill ".concat(skillBallsMacroName(skill)), Macro3.skill(skill).repeat());
      })));
    }
  }, {
    key: "item",
    value: function() {
      for (var _len5 = arguments.length, items = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++)
        items[_key5] = arguments[_key5];
      return this.step.apply(this, _toConsumableArray2(items.map(function(itemOrItems) {
        return "use ".concat(itemOrItemsBallsMacroName(itemOrItems));
      })));
    }
  }, {
    key: "tryItem",
    value: function() {
      for (var _len6 = arguments.length, items = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++)
        items[_key6] = arguments[_key6];
      return this.step.apply(this, _toConsumableArray2(items.map(function(item5) {
        return Macro3.if_(itemOrItemsBallsMacroPredicate(item5), "use ".concat(itemOrItemsBallsMacroName(item5)));
      })));
    }
  }, {
    key: "attack",
    value: function() {
      return this.step("attack");
    }
  }, {
    key: "ifHolidayWanderer",
    value: function(macro) {
      var todaysWanderers = getTodaysHolidayWanderers();
      return todaysWanderers.length === 0 ? this : this.if_(todaysWanderers.map(function(monster) {
        return "monsterid ".concat(monster.id);
      }).join(" || "), macro);
    }
  }, {
    key: "ifNotHolidayWanderer",
    value: function(macro) {
      var todaysWanderers = getTodaysHolidayWanderers();
      return todaysWanderers.length === 0 ? this.step(macro) : this.if_(todaysWanderers.map(function(monster) {
        return "!monsterid ".concat(monster.id);
      }).join(" && "), macro);
    }
  }], [{
    key: "rename",
    value: function(name) {
      return new this().rename(name);
    }
  }, {
    key: "load",
    value: function() {
      var _this;
      return (_this = new this()).step.apply(_this, _toConsumableArray2(get(Macro3.SAVED_MACRO_PROPERTY).split(";")));
    }
  }, {
    key: "clearSaved",
    value: function() {
      (0, import_kolmafia6.removeProperty)(Macro3.SAVED_MACRO_PROPERTY);
    }
  }, {
    key: "step",
    value: function() {
      var _this2;
      return (_this2 = new this()).step.apply(_this2, arguments);
    }
  }, {
    key: "clearAutoAttackMacros",
    value: function() {
      var _iterator = _createForOfIteratorHelper3(Macro3.cachedAutoAttacks.keys()), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _Macro$cachedMacroIds, name = _step.value, id = (_Macro$cachedMacroIds = Macro3.cachedMacroIds.get(name)) !== null && _Macro$cachedMacroIds !== void 0 ? _Macro$cachedMacroIds : getMacroId(name);
          (0, import_kolmafia6.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&action=edit&what=Delete&confirm=1")), Macro3.cachedAutoAttacks.delete(name), Macro3.cachedMacroIds.delete(name);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "abort",
    value: function() {
      return new this().abort();
    }
  }, {
    key: "abortWithWarning",
    value: function(warning) {
      return new this().abortWithWarning(warning);
    }
  }, {
    key: "runaway",
    value: function() {
      return new this().runaway();
    }
  }, {
    key: "makeBALLSPredicate",
    value: function(condition) {
      var ballsCondition = "";
      if (condition instanceof import_kolmafia6.Monster)
        ballsCondition = "monsterid ".concat(condition.id);
      else if (condition instanceof Array)
        ballsCondition = condition.map(function(mon) {
          return "monsterid ".concat(mon.id);
        }).join(" || "), ballsCondition = "(".concat(ballsCondition, ")");
      else if (condition instanceof import_kolmafia6.Effect)
        ballsCondition = "haseffect ".concat(condition.id);
      else if (condition instanceof import_kolmafia6.Skill)
        ballsCondition = "hasskill ".concat(skillBallsMacroName(condition));
      else if (condition instanceof import_kolmafia6.Item) {
        if (!condition.combat)
          throw new InvalidMacroError("Item ".concat(condition, " cannot be made a valid BALLS predicate (it is not combat-usable)"));
        ballsCondition = "hascombatitem ".concat(itemOrItemsBallsMacroName(condition));
      } else if (condition instanceof import_kolmafia6.Location) {
        var snarfblat = condition.id;
        if (snarfblat < 1)
          throw new InvalidMacroError("Location ".concat(condition, " cannot be made a valid BALLS predicate (it has no location id)"));
        ballsCondition = "snarfblat ".concat(snarfblat);
      } else if (condition instanceof import_kolmafia6.Class) {
        if (condition.id > 6)
          throw new InvalidMacroError("Class ".concat(condition, " cannot be made a valid BALLS predicate (it is not a standard class)"));
        ballsCondition = condition.toString().replaceAll(" ", "").toLowerCase();
      } else
        condition instanceof import_kolmafia6.Stat ? ballsCondition = "".concat(condition.toString().toLowerCase(), "class") : ballsCondition = condition;
      return ballsCondition;
    }
  }, {
    key: "if_",
    value: function(condition, ifTrue) {
      return new this().if_(condition, ifTrue);
    }
  }, {
    key: "ifNot",
    value: function(condition, ifTrue) {
      return new this().ifNot(condition, ifTrue);
    }
  }, {
    key: "while_",
    value: function(condition, contents) {
      return new this().while_(condition, contents);
    }
  }, {
    key: "externalIf",
    value: function(condition, ifTrue, ifFalse) {
      return new this().externalIf(condition, ifTrue, ifFalse);
    }
  }, {
    key: "skill",
    value: function() {
      var _this3;
      return (_this3 = new this()).skill.apply(_this3, arguments);
    }
  }, {
    key: "trySkill",
    value: function() {
      var _this4;
      return (_this4 = new this()).trySkill.apply(_this4, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function() {
      var _this5;
      return (_this5 = new this()).trySkillRepeat.apply(_this5, arguments);
    }
  }, {
    key: "item",
    value: function() {
      var _this6;
      return (_this6 = new this()).item.apply(_this6, arguments);
    }
  }, {
    key: "tryItem",
    value: function() {
      var _this7;
      return (_this7 = new this()).tryItem.apply(_this7, arguments);
    }
  }, {
    key: "attack",
    value: function() {
      return new this().attack();
    }
  }, {
    key: "ifHolidayWanderer",
    value: function(macro) {
      return new this().ifHolidayWanderer(macro);
    }
  }, {
    key: "ifNotHolidayWanderer",
    value: function(macro) {
      return new this().ifNotHolidayWanderer(macro);
    }
  }]), Macro3;
}();
_defineProperty4(Macro, "SAVED_MACRO_PROPERTY", "libram_savedMacro");
_defineProperty4(Macro, "cachedMacroIds", /* @__PURE__ */ new Map());
_defineProperty4(Macro, "cachedAutoAttacks", /* @__PURE__ */ new Map());
var StrictMacro = /* @__PURE__ */ function(_Macro) {
  _inherits2(StrictMacro2, _Macro);
  var _super2 = _createSuper2(StrictMacro2);
  function StrictMacro2() {
    return _classCallCheck5(this, StrictMacro2), _super2.apply(this, arguments);
  }
  return _createClass5(StrictMacro2, [{
    key: "skill",
    value: function() {
      for (var _get22, _len7 = arguments.length, skills = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++)
        skills[_key7] = arguments[_key7];
      return (_get22 = _get(_getPrototypeOf2(StrictMacro2.prototype), "skill", this)).call.apply(_get22, [this].concat(skills));
    }
  }, {
    key: "item",
    value: function() {
      for (var _get3, _len8 = arguments.length, items = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++)
        items[_key8] = arguments[_key8];
      return (_get3 = _get(_getPrototypeOf2(StrictMacro2.prototype), "item", this)).call.apply(_get3, [this].concat(items));
    }
  }, {
    key: "trySkill",
    value: function() {
      for (var _get4, _len9 = arguments.length, skills = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++)
        skills[_key9] = arguments[_key9];
      return (_get4 = _get(_getPrototypeOf2(StrictMacro2.prototype), "trySkill", this)).call.apply(_get4, [this].concat(skills));
    }
  }, {
    key: "tryItem",
    value: function() {
      for (var _get5, _len10 = arguments.length, items = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++)
        items[_key10] = arguments[_key10];
      return (_get5 = _get(_getPrototypeOf2(StrictMacro2.prototype), "tryItem", this)).call.apply(_get5, [this].concat(items));
    }
  }, {
    key: "trySkillRepeat",
    value: function() {
      for (var _get6, _len11 = arguments.length, skills = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++)
        skills[_key11] = arguments[_key11];
      return (_get6 = _get(_getPrototypeOf2(StrictMacro2.prototype), "trySkillRepeat", this)).call.apply(_get6, [this].concat(skills));
    }
  }], [{
    key: "skill",
    value: function() {
      var _this8;
      return (_this8 = new this()).skill.apply(_this8, arguments);
    }
  }, {
    key: "item",
    value: function() {
      var _this9;
      return (_this9 = new this()).item.apply(_this9, arguments);
    }
  }, {
    key: "trySkill",
    value: function() {
      var _this10;
      return (_this10 = new this()).trySkill.apply(_this10, arguments);
    }
  }, {
    key: "tryItem",
    value: function() {
      var _this11;
      return (_this11 = new this()).tryItem.apply(_this11, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function() {
      var _this12;
      return (_this12 = new this()).trySkillRepeat.apply(_this12, arguments);
    }
  }]), StrictMacro2;
}(Macro);

// node_modules/libram/dist/maximize.js
init_kolmafia_polyfill();
var import_kolmafia7 = require("kolmafia");
var _templateObject2, _templateObject210, _templateObject3, _templateObject4, _templateObject52, _templateObject62, _templateObject7, _templateObject8, _templateObject92, _templateObject102, _templateObject112, _templateObject122, _templateObject132, _templateObject142, _templateObject152, _templateObject162, _templateObject172, _templateObject182, _templateObject192, _templateObject202, _templateObject212, _templateObject222, _templateObject232, _templateObject242, _templateObject252, _templateObject262, _templateObject272, _templateObject282, _templateObject292, _templateObject302, _templateObject312, _templateObject322, _templateObject332, _templateObject342, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50;
function _slicedToArray4(arr, i) {
  return _arrayWithHoles4(arr) || _iterableToArrayLimit4(arr, i) || _unsupportedIterableToArray6(arr, i) || _nonIterableRest4();
}
function _nonIterableRest4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit4(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _arr = [], _n = !0, _d = !1, _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !(i && _arr.length === i)); _n = !0)
        ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        !_n && _i.return != null && _i.return();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles4(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap), privateMap.set(obj, value);
}
function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
  return _classApplyDescriptorGet(receiver, descriptor);
}
function _classApplyDescriptorGet(receiver, descriptor) {
  return descriptor.get ? descriptor.get.call(receiver) : descriptor.value;
}
function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
  return _classApplyDescriptorSet(receiver, descriptor, value), value;
}
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver))
    throw new TypeError("attempted to " + action + " private field on non-instance");
  return privateMap.get(receiver);
}
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set)
    descriptor.set.call(receiver, value);
  else {
    if (!descriptor.writable)
      throw new TypeError("attempted to set read only private field");
    descriptor.value = value;
  }
}
function _defineProperties6(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass6(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties6(Constructor.prototype, protoProps), staticProps && _defineProperties6(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _classCallCheck6(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _createForOfIteratorHelper4(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray6(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _taggedTemplateLiteral2(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function ownKeys3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys3(Object(source), !0).forEach(function(key) {
      _defineProperty5(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys3(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty5(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toConsumableArray3(arr) {
  return _arrayWithoutHoles3(arr) || _iterableToArray3(arr) || _unsupportedIterableToArray6(arr) || _nonIterableSpread3();
}
function _nonIterableSpread3() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray6(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray6(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray6(o, minLen);
  }
}
function _iterableToArray3(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles3(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray6(arr);
}
function _arrayLikeToArray6(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function toMaximizerName(_ref) {
  var name = _ref.name, id = _ref.id;
  return name.includes(";") ? "\xB6".concat(id) : name;
}
function mergeMaximizeOptions(defaultOptions, addendums) {
  var _addendums$updateOnFa, _addendums$updateOnCa, _addendums$useOutfitC, _addendums$forceEquip, _addendums$preventEqu, _addendums$bonusEquip, _addendums$onlySlot, _addendums$preventSlo, _addendums$forceUpdat, _addendums$modes;
  return {
    updateOnFamiliarChange: (_addendums$updateOnFa = addendums.updateOnFamiliarChange) !== null && _addendums$updateOnFa !== void 0 ? _addendums$updateOnFa : defaultOptions.updateOnFamiliarChange,
    updateOnCanEquipChanged: (_addendums$updateOnCa = addendums.updateOnCanEquipChanged) !== null && _addendums$updateOnCa !== void 0 ? _addendums$updateOnCa : defaultOptions.updateOnCanEquipChanged,
    useOutfitCaching: (_addendums$useOutfitC = addendums.useOutfitCaching) !== null && _addendums$useOutfitC !== void 0 ? _addendums$useOutfitC : defaultOptions.useOutfitCaching,
    forceEquip: [].concat(_toConsumableArray3(defaultOptions.forceEquip), _toConsumableArray3((_addendums$forceEquip = addendums.forceEquip) !== null && _addendums$forceEquip !== void 0 ? _addendums$forceEquip : [])),
    preventEquip: [].concat(_toConsumableArray3(defaultOptions.preventEquip), _toConsumableArray3((_addendums$preventEqu = addendums.preventEquip) !== null && _addendums$preventEqu !== void 0 ? _addendums$preventEqu : [])).filter(function(item5) {
      var _addendums$forceEquip2;
      return !defaultOptions.forceEquip.includes(item5) && !((_addendums$forceEquip2 = addendums.forceEquip) !== null && _addendums$forceEquip2 !== void 0 && _addendums$forceEquip2.includes(item5));
    }),
    bonusEquip: new Map([].concat(_toConsumableArray3(defaultOptions.bonusEquip), _toConsumableArray3((_addendums$bonusEquip = addendums.bonusEquip) !== null && _addendums$bonusEquip !== void 0 ? _addendums$bonusEquip : []))),
    onlySlot: (_addendums$onlySlot = addendums.onlySlot) !== null && _addendums$onlySlot !== void 0 ? _addendums$onlySlot : defaultOptions.onlySlot,
    preventSlot: [].concat(_toConsumableArray3(defaultOptions.preventSlot), _toConsumableArray3((_addendums$preventSlo = addendums.preventSlot) !== null && _addendums$preventSlo !== void 0 ? _addendums$preventSlo : [])),
    forceUpdate: (_addendums$forceUpdat = addendums.forceUpdate) !== null && _addendums$forceUpdat !== void 0 ? _addendums$forceUpdat : defaultOptions.forceUpdate,
    modes: _objectSpread3(_objectSpread3({}, defaultOptions.modes), (_addendums$modes = addendums.modes) !== null && _addendums$modes !== void 0 ? _addendums$modes : {})
  };
}
var defaultMaximizeOptions = {
  updateOnFamiliarChange: !0,
  updateOnCanEquipChanged: !0,
  useOutfitCaching: !0,
  forceEquip: [],
  preventEquip: [],
  bonusEquip: /* @__PURE__ */ new Map(),
  onlySlot: [],
  preventSlot: [],
  forceUpdate: !1,
  modes: {}
};
function setDefaultMaximizeOptions(options) {
  Object.assign(defaultMaximizeOptions, options);
}
var modeableCommands = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka", "jillcandle"], modeableItems = {
  backupcamera: $item(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral2(["backup camera"]))),
  umbrella: $item(_templateObject210 || (_templateObject210 = _taggedTemplateLiteral2(["unbreakable umbrella"]))),
  snowsuit: $item(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral2(["Snow Suit"]))),
  edpiece: $item(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral2(["The Crown of Ed the Undying"]))),
  retrocape: $item(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral2(["unwrapped knock-off retro superhero cape"]))),
  parka: $item(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral2(["Jurassic Parka"]))),
  jillcandle: $item(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral2(["LED candle"])))
}, modeableState = {
  backupcamera: function() {
    return (0, import_kolmafia7.getProperty)("backupCameraMode");
  },
  umbrella: function() {
    return (0, import_kolmafia7.getProperty)("umbrellaState");
  },
  snowsuit: function() {
    return (0, import_kolmafia7.getProperty)("snowsuit");
  },
  edpiece: function() {
    return (0, import_kolmafia7.getProperty)("edPiece");
  },
  retrocape: function() {
    return (0, import_kolmafia7.getProperty)("retroCapeSuperhero") + " " + (0, import_kolmafia7.getProperty)("retroCapeWashingInstructions");
  },
  parka: function() {
    return (0, import_kolmafia7.getProperty)("parkaMode");
  },
  jillcandle: function() {
    return (0, import_kolmafia7.getProperty)("ledCandleMode");
  }
};
function getCurrentModes() {
  var modes = {}, _iterator = _createForOfIteratorHelper4(modeableCommands), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var key = _step.value;
      (0, import_kolmafia7.haveEquipped)(modeableItems[key]) && (modes[key] = modeableState[key]());
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return modes;
}
function applyModes(modes) {
  var _iterator2 = _createForOfIteratorHelper4(modeableCommands), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var command = _step2.value;
      (0, import_kolmafia7.haveEquipped)(modeableItems[command]) && modes[command] !== void 0 && modeableState[command]() !== modes[command] && (0, import_kolmafia7.cliExecute)(command + " " + modes[command]);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
var cachedSlots = $slots(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral2(["hat, weapon, off-hand, back, shirt, pants, acc1, acc2, acc3, familiar"]))), CacheEntry = /* @__PURE__ */ _createClass6(function CacheEntry2(equipment, rider, familiar3, canEquipItemCount2, modes) {
  _classCallCheck6(this, CacheEntry2), _defineProperty5(this, "equipment", void 0), _defineProperty5(this, "rider", void 0), _defineProperty5(this, "familiar", void 0), _defineProperty5(this, "canEquipItemCount", void 0), _defineProperty5(this, "modes", void 0), this.equipment = equipment, this.rider = rider, this.familiar = familiar3, this.canEquipItemCount = canEquipItemCount2, this.modes = modes;
}), _outfitSlots = /* @__PURE__ */ new WeakMap(), _useHistory = /* @__PURE__ */ new WeakMap(), _maxSize = /* @__PURE__ */ new WeakMap(), OutfitLRUCache = /* @__PURE__ */ function() {
  function OutfitLRUCache2(maxSize) {
    _classCallCheck6(this, OutfitLRUCache2), _classPrivateFieldInitSpec(this, _outfitSlots, {
      writable: !0,
      value: []
    }), _classPrivateFieldInitSpec(this, _useHistory, {
      writable: !0,
      value: []
    }), _classPrivateFieldInitSpec(this, _maxSize, {
      writable: !0,
      value: void 0
    }), _classPrivateFieldSet(this, _maxSize, maxSize);
  }
  return _createClass6(OutfitLRUCache2, [{
    key: "checkConsistent",
    value: function() {
      if (_classPrivateFieldGet(this, _useHistory).length !== _classPrivateFieldGet(this, _outfitSlots).length || !_toConsumableArray3(_classPrivateFieldGet(this, _useHistory)).sort().every(function(value, index) {
        return value === index;
      }))
        throw new Error("Outfit cache consistency failed.");
    }
  }, {
    key: "promote",
    value: function(index) {
      _classPrivateFieldSet(this, _useHistory, [index].concat(_toConsumableArray3(_classPrivateFieldGet(this, _useHistory).filter(function(i) {
        return i !== index;
      })))), this.checkConsistent();
    }
  }, {
    key: "get",
    value: function(key) {
      var index = _classPrivateFieldGet(this, _outfitSlots).indexOf(key);
      if (!(index < 0))
        return this.promote(index), "".concat(OutfitLRUCache2.OUTFIT_PREFIX, " ").concat(index);
    }
  }, {
    key: "insert",
    value: function(key) {
      var lastUseIndex = void 0;
      if (_classPrivateFieldGet(this, _outfitSlots).length >= _classPrivateFieldGet(this, _maxSize)) {
        if (lastUseIndex = _classPrivateFieldGet(this, _useHistory).pop(), lastUseIndex === void 0)
          throw new Error("Outfit cache consistency failed.");
        return _classPrivateFieldGet(this, _useHistory).splice(0, 0, lastUseIndex), _classPrivateFieldGet(this, _outfitSlots)[lastUseIndex] = key, this.checkConsistent(), "".concat(OutfitLRUCache2.OUTFIT_PREFIX, " ").concat(lastUseIndex);
      } else {
        var index = _classPrivateFieldGet(this, _outfitSlots).push(key) - 1;
        return _classPrivateFieldGet(this, _useHistory).splice(0, 0, index), this.checkConsistent(), "".concat(OutfitLRUCache2.OUTFIT_PREFIX, " ").concat(index);
      }
    }
  }, {
    key: "clear",
    value: function() {
      _classPrivateFieldSet(this, _outfitSlots, []), _classPrivateFieldSet(this, _useHistory, []);
    }
  }]), OutfitLRUCache2;
}();
_defineProperty5(OutfitLRUCache, "OUTFIT_PREFIX", "Script Outfit");
function saveOutfit(name) {
  (0, import_kolmafia7.cliExecute)("outfit save ".concat(name));
}
var cachedObjectives = {}, outfitCache = new OutfitLRUCache(6), cachedStats = [0, 0, 0], cachedCanEquipItemCount = 0;
function canEquipItemCount() {
  var stats = $stats(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral2(["Muscle, Mysticality, Moxie"]))).map(function(stat) {
    return Math.min((0, import_kolmafia7.myBasestat)(stat), 300);
  });
  return stats.every(function(value, index) {
    return value === cachedStats[index];
  }) || (cachedStats = stats, cachedCanEquipItemCount = import_kolmafia7.Item.all().filter(function(item5) {
    return (0, import_kolmafia7.canEquip)(item5);
  }).length), cachedCanEquipItemCount;
}
function checkCache(cacheKey, options) {
  var entry = cachedObjectives[cacheKey];
  return entry ? options.updateOnFamiliarChange && (0, import_kolmafia7.myFamiliar)() !== entry.familiar ? (logger_default.warning("Equipment found in maximize cache but familiar is different."), null) : options.updateOnCanEquipChanged && entry.canEquipItemCount !== canEquipItemCount() ? (logger_default.warning("Equipment found in maximize cache but equippable item list is out of date."), null) : entry : null;
}
function applyCached(entry, options) {
  var outfitName = options.useOutfitCaching ? outfitCache.get(entry) : void 0;
  if (outfitName) {
    (0, import_kolmafia7.isWearingOutfit)(outfitName) || (0, import_kolmafia7.outfit)(outfitName);
    var familiarEquip = entry.equipment.get($slot(_templateObject102 || (_templateObject102 = _taggedTemplateLiteral2(["familiar"]))));
    familiarEquip && (0, import_kolmafia7.equip)($slot(_templateObject112 || (_templateObject112 = _taggedTemplateLiteral2(["familiar"]))), familiarEquip);
  } else {
    var _iterator3 = _createForOfIteratorHelper4(entry.equipment), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        var _step3$value = _slicedToArray4(_step3.value, 2), slot = _step3$value[0], item5 = _step3$value[1];
        (0, import_kolmafia7.equippedItem)(slot) !== item5 && (0, import_kolmafia7.availableAmount)(item5) > 0 && (0, import_kolmafia7.equip)(slot, item5);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (verifyCached(entry) && options.useOutfitCaching) {
      var _outfitName = outfitCache.insert(entry);
      logger_default.info("Saving equipment to outfit ".concat(_outfitName, ".")), saveOutfit(_outfitName);
    }
  }
  (0, import_kolmafia7.equippedAmount)($item(_templateObject122 || (_templateObject122 = _taggedTemplateLiteral2(["Crown of Thrones"])))) > 0 && entry.rider.get($item(_templateObject132 || (_templateObject132 = _taggedTemplateLiteral2(["Crown of Thrones"])))) && (0, import_kolmafia7.enthroneFamiliar)(entry.rider.get($item(_templateObject142 || (_templateObject142 = _taggedTemplateLiteral2(["Crown of Thrones"])))) || $familiar.none), (0, import_kolmafia7.equippedAmount)($item(_templateObject152 || (_templateObject152 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) > 0 && entry.rider.get($item(_templateObject162 || (_templateObject162 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) && (0, import_kolmafia7.bjornifyFamiliar)(entry.rider.get($item(_templateObject172 || (_templateObject172 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) || $familiar.none), applyModes(_objectSpread3(_objectSpread3({}, entry.modes), options.modes));
}
var slotStructure = [$slots(_templateObject182 || (_templateObject182 = _taggedTemplateLiteral2(["hat"]))), $slots(_templateObject192 || (_templateObject192 = _taggedTemplateLiteral2(["back"]))), $slots(_templateObject202 || (_templateObject202 = _taggedTemplateLiteral2(["shirt"]))), $slots(_templateObject212 || (_templateObject212 = _taggedTemplateLiteral2(["weapon, off-hand"]))), $slots(_templateObject222 || (_templateObject222 = _taggedTemplateLiteral2(["pants"]))), $slots(_templateObject232 || (_templateObject232 = _taggedTemplateLiteral2(["acc1, acc2, acc3"]))), $slots(_templateObject242 || (_templateObject242 = _taggedTemplateLiteral2(["familiar"])))];
function verifyCached(entry) {
  var warn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, success = !0, _iterator4 = _createForOfIteratorHelper4(slotStructure), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var slotGroup = _step4.value, desiredSlots = slotGroup.map(function(slot) {
        var _entry$equipment$get;
        return [slot, (_entry$equipment$get = entry.equipment.get(slot)) !== null && _entry$equipment$get !== void 0 ? _entry$equipment$get : null];
      }).filter(function(_ref2) {
        var _ref32 = _slicedToArray4(_ref2, 2), item5 = _ref32[1];
        return item5 !== null;
      }), desiredSet = desiredSlots.map(function(_ref4) {
        var _ref52 = _slicedToArray4(_ref4, 2), item5 = _ref52[1];
        return item5;
      }), equippedSet = desiredSlots.map(function(_ref62) {
        var _ref7 = _slicedToArray4(_ref62, 1), slot = _ref7[0];
        return (0, import_kolmafia7.equippedItem)(slot);
      });
      setEqual(desiredSet, equippedSet) || (warn && logger_default.warning("Failed to apply cached ".concat(desiredSet.join(", "), " in ").concat(slotGroup.join(", "), ".")), success = !1);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return (0, import_kolmafia7.equippedAmount)($item(_templateObject252 || (_templateObject252 = _taggedTemplateLiteral2(["Crown of Thrones"])))) > 0 && entry.rider.get($item(_templateObject262 || (_templateObject262 = _taggedTemplateLiteral2(["Crown of Thrones"])))) && entry.rider.get($item(_templateObject272 || (_templateObject272 = _taggedTemplateLiteral2(["Crown of Thrones"])))) !== (0, import_kolmafia7.myEnthronedFamiliar)() && (warn && logger_default.warning("Failed to apply ".concat(entry.rider.get($item(_templateObject282 || (_templateObject282 = _taggedTemplateLiteral2(["Crown of Thrones"])))), " in ").concat($item(_templateObject292 || (_templateObject292 = _taggedTemplateLiteral2(["Crown of Thrones"]))), ".")), success = !1), (0, import_kolmafia7.equippedAmount)($item(_templateObject302 || (_templateObject302 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) > 0 && entry.rider.get($item(_templateObject312 || (_templateObject312 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) && entry.rider.get($item(_templateObject322 || (_templateObject322 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) !== (0, import_kolmafia7.myBjornedFamiliar)() && (warn && logger_default.warning("Failed to apply".concat(entry.rider.get($item(_templateObject332 || (_templateObject332 = _taggedTemplateLiteral2(["Buddy Bjorn"])))), " in ").concat($item(_templateObject342 || (_templateObject342 = _taggedTemplateLiteral2(["Buddy Bjorn"]))), ".")), success = !1), success;
}
function saveCached(cacheKey, options) {
  var equipment = /* @__PURE__ */ new Map(), rider = /* @__PURE__ */ new Map(), _iterator5 = _createForOfIteratorHelper4(cachedSlots), _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
      var _slot2 = _step5.value;
      equipment.set(_slot2, (0, import_kolmafia7.equippedItem)(_slot2));
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  if ((0, import_kolmafia7.equippedAmount)($item(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral2(["card sleeve"])))) > 0 && equipment.set($slot(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral2(["card-sleeve"]))), (0, import_kolmafia7.equippedItem)($slot(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral2(["card-sleeve"]))))), (0, import_kolmafia7.equippedAmount)($item(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral2(["Crown of Thrones"])))) > 0 && rider.set($item(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral2(["Crown of Thrones"]))), (0, import_kolmafia7.myEnthronedFamiliar)()), (0, import_kolmafia7.equippedAmount)($item(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) > 0 && rider.set($item(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral2(["Buddy Bjorn"]))), (0, import_kolmafia7.myBjornedFamiliar)()), options.preventSlot && options.preventSlot.length > 0) {
    var _iterator6 = _createForOfIteratorHelper4(options.preventSlot), _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
        var slot = _step6.value;
        equipment.delete(slot);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    options.preventSlot.includes($slot(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral2(["buddy-bjorn"])))) && rider.delete($item(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral2(["Buddy Bjorn"])))), options.preventSlot.includes($slot(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral2(["crown-of-thrones"])))) && rider.delete($item(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral2(["Crown of Thrones"]))));
  }
  if (options.onlySlot && options.onlySlot.length > 0) {
    var _iterator7 = _createForOfIteratorHelper4(import_kolmafia7.Slot.all()), _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
        var _slot = _step7.value;
        options.onlySlot.includes(_slot) || equipment.delete(_slot);
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    options.onlySlot.includes($slot(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral2(["buddy-bjorn"])))) || rider.delete($item(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral2(["Buddy Bjorn"])))), options.onlySlot.includes($slot(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral2(["crown-of-thrones"])))) || rider.delete($item(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral2(["Crown of Thrones"]))));
  }
  var entry = new CacheEntry(equipment, rider, (0, import_kolmafia7.myFamiliar)(), canEquipItemCount(), _objectSpread3(_objectSpread3({}, getCurrentModes()), options.modes));
  if (cachedObjectives[cacheKey] = entry, options.useOutfitCaching) {
    var outfitName = outfitCache.insert(entry);
    logger_default.info("Saving equipment to outfit ".concat(outfitName, ".")), saveOutfit(outfitName);
  }
}
function maximizeCached(objectives) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, fullOptions = mergeMaximizeOptions(defaultMaximizeOptions, options), forceEquip = fullOptions.forceEquip, preventEquip = fullOptions.preventEquip, bonusEquip = fullOptions.bonusEquip, onlySlot = fullOptions.onlySlot, preventSlot = fullOptions.preventSlot, forceUpdate = fullOptions.forceUpdate, objective = _toConsumableArray3(new Set([].concat(_toConsumableArray3(objectives.sort()), _toConsumableArray3(forceEquip.map(function(item5) {
    return '"equip '.concat(toMaximizerName(item5), '"');
  }).sort()), _toConsumableArray3(preventEquip.map(function(item5) {
    return '-"equip '.concat(toMaximizerName(item5), '"');
  }).sort()), _toConsumableArray3(onlySlot.map(function(slot) {
    return "".concat(slot);
  }).sort()), _toConsumableArray3(preventSlot.map(function(slot) {
    return "-".concat(slot);
  }).sort()), _toConsumableArray3(Array.from(bonusEquip.entries()).filter(function(_ref8) {
    var _ref9 = _slicedToArray4(_ref8, 2), bonus = _ref9[1];
    return bonus !== 0;
  }).map(function(_ref10) {
    var _ref11 = _slicedToArray4(_ref10, 2), item5 = _ref11[0], bonus = _ref11[1];
    return "".concat(Math.round(bonus * 100) / 100, ' "bonus ').concat(toMaximizerName(item5), '"');
  }).sort())))).join(", "), untouchedSlots = cachedSlots.filter(function(slot) {
    return preventSlot.includes(slot) || onlySlot.length > 0 && !onlySlot.includes(slot);
  }), cacheKey = [objective].concat(_toConsumableArray3(untouchedSlots.map(function(slot) {
    return "".concat(slot, ":").concat((0, import_kolmafia7.equippedItem)(slot));
  }).sort()), [have($effect(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral2(["Offhand Remarkable"]))))]).join("; "), cacheEntry = checkCache(cacheKey, fullOptions);
  if (cacheEntry && !forceUpdate) {
    if (verifyCached(cacheEntry, !1))
      return !0;
    if (logger_default.info("Equipment found in maximize cache, equipping..."), applyCached(cacheEntry, fullOptions), verifyCached(cacheEntry))
      return logger_default.info("Equipped cached ".concat(cacheKey)), !0;
    logger_default.warning("Maximize cache application failed, maximizing...");
  }
  var result = (0, import_kolmafia7.maximize)(objective, !1);
  return saveCached(cacheKey, fullOptions), result;
}
var _maximizeParameters = /* @__PURE__ */ new WeakMap(), _maximizeOptions = /* @__PURE__ */ new WeakMap(), Requirement = /* @__PURE__ */ function() {
  function Requirement2(maximizeParameters, maximizeOptions) {
    _classCallCheck6(this, Requirement2), _classPrivateFieldInitSpec(this, _maximizeParameters, {
      writable: !0,
      value: void 0
    }), _classPrivateFieldInitSpec(this, _maximizeOptions, {
      writable: !0,
      value: void 0
    }), _classPrivateFieldSet(this, _maximizeParameters, maximizeParameters), _classPrivateFieldSet(this, _maximizeOptions, maximizeOptions);
  }
  return _createClass6(Requirement2, [{
    key: "maximizeParameters",
    get: function() {
      return _classPrivateFieldGet(this, _maximizeParameters);
    }
  }, {
    key: "maximizeOptions",
    get: function() {
      return _classPrivateFieldGet(this, _maximizeOptions);
    }
  }, {
    key: "merge",
    value: function(other) {
      var _optionsA$forceEquip, _other$maximizeOption, _optionsA$preventEqui, _other$maximizeOption3, _optionsA$bonusEquip$, _optionsA$bonusEquip, _optionsB$bonusEquip$, _optionsB$bonusEquip, _optionsA$onlySlot, _optionsB$onlySlot, _optionsA$preventSlot, _optionsB$preventSlot, optionsA = this.maximizeOptions, optionsB = other.maximizeOptions;
      return new Requirement2([].concat(_toConsumableArray3(this.maximizeParameters), _toConsumableArray3(other.maximizeParameters)), {
        updateOnFamiliarChange: optionsA.updateOnFamiliarChange || other.maximizeOptions.updateOnFamiliarChange,
        updateOnCanEquipChanged: optionsA.updateOnCanEquipChanged || other.maximizeOptions.updateOnCanEquipChanged,
        forceEquip: [].concat(_toConsumableArray3((_optionsA$forceEquip = optionsA.forceEquip) !== null && _optionsA$forceEquip !== void 0 ? _optionsA$forceEquip : []), _toConsumableArray3((_other$maximizeOption = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption !== void 0 ? _other$maximizeOption : [])).filter(function(x) {
          var _other$maximizeOption2;
          return !((_other$maximizeOption2 = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption2 !== void 0 && _other$maximizeOption2.includes(x));
        }),
        preventEquip: [].concat(_toConsumableArray3((_optionsA$preventEqui = optionsA.preventEquip) !== null && _optionsA$preventEqui !== void 0 ? _optionsA$preventEqui : []), _toConsumableArray3((_other$maximizeOption3 = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption3 !== void 0 ? _other$maximizeOption3 : [])).filter(function(x) {
          var _other$maximizeOption4;
          return !((_other$maximizeOption4 = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption4 !== void 0 && _other$maximizeOption4.includes(x));
        }),
        bonusEquip: new Map([].concat(_toConsumableArray3((_optionsA$bonusEquip$ = (_optionsA$bonusEquip = optionsA.bonusEquip) === null || _optionsA$bonusEquip === void 0 ? void 0 : _optionsA$bonusEquip.entries()) !== null && _optionsA$bonusEquip$ !== void 0 ? _optionsA$bonusEquip$ : []), _toConsumableArray3((_optionsB$bonusEquip$ = (_optionsB$bonusEquip = optionsB.bonusEquip) === null || _optionsB$bonusEquip === void 0 ? void 0 : _optionsB$bonusEquip.entries()) !== null && _optionsB$bonusEquip$ !== void 0 ? _optionsB$bonusEquip$ : []))),
        onlySlot: [].concat(_toConsumableArray3((_optionsA$onlySlot = optionsA.onlySlot) !== null && _optionsA$onlySlot !== void 0 ? _optionsA$onlySlot : []), _toConsumableArray3((_optionsB$onlySlot = optionsB.onlySlot) !== null && _optionsB$onlySlot !== void 0 ? _optionsB$onlySlot : [])),
        preventSlot: [].concat(_toConsumableArray3((_optionsA$preventSlot = optionsA.preventSlot) !== null && _optionsA$preventSlot !== void 0 ? _optionsA$preventSlot : []), _toConsumableArray3((_optionsB$preventSlot = optionsB.preventSlot) !== null && _optionsB$preventSlot !== void 0 ? _optionsB$preventSlot : [])),
        forceUpdate: optionsA.forceUpdate || optionsB.forceUpdate
      });
    }
  }, {
    key: "maximize",
    value: function() {
      return maximizeCached(this.maximizeParameters, this.maximizeOptions);
    }
  }], [{
    key: "merge",
    value: function(allRequirements) {
      return allRequirements.reduce(function(x, y) {
        return x.merge(y);
      }, new Requirement2([], {}));
    }
  }, {
    key: "maximize",
    value: function() {
      for (var _len = arguments.length, requirements = new Array(_len), _key = 0; _key < _len; _key++)
        requirements[_key] = arguments[_key];
      Requirement2.merge(requirements).maximize();
    }
  }]), Requirement2;
}();

// node_modules/libram/dist/resources/index.js
init_kolmafia_polyfill();

// node_modules/libram/dist/resources/2010/CrownOfThrones.js
var CrownOfThrones_exports = {};
__export(CrownOfThrones_exports, {
  createModifierValueFunction: function() {
    return createModifierValueFunction;
  },
  createRiderMode: function() {
    return createRiderMode;
  },
  getModifier: function() {
    return getModifier;
  },
  hasRiderMode: function() {
    return hasRiderMode;
  },
  pickRider: function() {
    return pickRider;
  },
  ridingFamiliars: function() {
    return ridingFamiliars;
  },
  valueRider: function() {
    return valueRider;
  }
});
init_kolmafia_polyfill();
var import_kolmafia8 = require("kolmafia");
var _templateObject51, _templateObject211, _templateObject310, _templateObject410, _templateObject53, _templateObject63, _templateObject72, _templateObject82, _templateObject93, _templateObject103, _templateObject113, _templateObject123, _templateObject133, _templateObject143, _templateObject153, _templateObject163, _templateObject173, _templateObject183, _templateObject193, _templateObject203, _templateObject213, _templateObject223, _templateObject233, _templateObject243, _templateObject253, _templateObject263, _templateObject273, _templateObject283, _templateObject293, _templateObject303, _templateObject313, _templateObject323, _templateObject333, _templateObject343, _templateObject352, _templateObject362, _templateObject372, _templateObject382, _templateObject392, _templateObject402, _templateObject412, _templateObject422, _templateObject432, _templateObject442, _templateObject452, _templateObject462, _templateObject472, _templateObject482, _templateObject492, _templateObject502, _templateObject512, _templateObject522, _templateObject532, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject622, _templateObject632, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject722, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject822, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject922, _templateObject932, _templateObject94, _templateObject95, _templateObject96, _templateObject97, _templateObject98, _templateObject99;
function ownKeys4(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys4(Object(source), !0).forEach(function(key) {
      _defineProperty6(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys4(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty6(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toConsumableArray4(arr) {
  return _arrayWithoutHoles4(arr) || _iterableToArray4(arr) || _unsupportedIterableToArray7(arr) || _nonIterableSpread4();
}
function _nonIterableSpread4() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray7(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray7(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray7(o, minLen);
  }
}
function _iterableToArray4(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles4(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray7(arr);
}
function _arrayLikeToArray7(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral3(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var ridingFamiliars = [{
  familiar: $familiar(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral3(["Puck Man"]))),
  drops: $items(_templateObject211 || (_templateObject211 = _taggedTemplateLiteral3(["yellow pixel"]))),
  probability: 0.25,
  dropPredicate: function() {
    return get("_yellowPixelDropsCrown") < 25;
  }
}, {
  familiar: $familiar(_templateObject310 || (_templateObject310 = _taggedTemplateLiteral3(["Ms. Puck Man"]))),
  drops: $items(_templateObject410 || (_templateObject410 = _taggedTemplateLiteral3(["yellow pixel"]))),
  probability: 0.25,
  dropPredicate: function() {
    return get("_yellowPixelDropsCrown") < 25;
  }
}, {
  familiar: $familiar(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral3(["Grimstone Golem"]))),
  drops: $items(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral3(["grimstone mask"]))),
  probability: 0.5,
  dropPredicate: function() {
    return get("_grimstoneMaskDropsCrown") < 1;
  }
}, {
  familiar: $familiar(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral3(["Knob Goblin Organ Grinder"]))),
  drops: 30,
  probability: 1
}, {
  familiar: $familiar(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral3(["Happy Medium"]))),
  drops: 30,
  probability: 1
}, {
  familiar: $familiar(_templateObject93 || (_templateObject93 = _taggedTemplateLiteral3(["Garbage Fire"]))),
  drops: $items(_templateObject103 || (_templateObject103 = _taggedTemplateLiteral3(["burning newspaper"]))),
  probability: 0.5,
  dropPredicate: function() {
    return get("_garbageFireDropsCrown") < 3;
  }
}, {
  familiar: $familiar(_templateObject113 || (_templateObject113 = _taggedTemplateLiteral3(["Machine Elf"]))),
  drops: $items(_templateObject123 || (_templateObject123 = _taggedTemplateLiteral3(["abstraction: sensation, abstraction: thought, abstraction: action, abstraction: category, abstraction: perception, abstraction: purpose"]))),
  probability: 0.2,
  dropPredicate: function() {
    return get("_abstractionDropsCrown") < 25;
  }
}, {
  familiar: $familiar(_templateObject133 || (_templateObject133 = _taggedTemplateLiteral3(["Trick-or-Treating Tot"]))),
  drops: $items(_templateObject143 || (_templateObject143 = _taggedTemplateLiteral3(["hoarded candy wad"]))),
  probability: 0.5,
  dropPredicate: function() {
    return get("_hoardedCandyDropsCrown") < 3;
  }
}, {
  familiar: $familiar(_templateObject153 || (_templateObject153 = _taggedTemplateLiteral3(["Warbear Drone"]))),
  drops: $items(_templateObject163 || (_templateObject163 = _taggedTemplateLiteral3(["warbear whosit"]))),
  probability: 1 / 4.5
}, {
  familiar: $familiar(_templateObject173 || (_templateObject173 = _taggedTemplateLiteral3(["Li'l Xenomorph"]))),
  drops: $items(_templateObject183 || (_templateObject183 = _taggedTemplateLiteral3(["lunar isotope"]))),
  probability: 0.05
}, {
  familiar: $familiar(_templateObject193 || (_templateObject193 = _taggedTemplateLiteral3(["Pottery Barn Owl"]))),
  drops: $items(_templateObject203 || (_templateObject203 = _taggedTemplateLiteral3(["volcanic ash"]))),
  probability: 0.1
}, {
  familiar: $familiar(_templateObject213 || (_templateObject213 = _taggedTemplateLiteral3(["Grim Brother"]))),
  drops: $items(_templateObject223 || (_templateObject223 = _taggedTemplateLiteral3(["grim fairy tale"]))),
  probability: 1,
  dropPredicate: function() {
    return get("_grimFairyTaleDropsCrown") < 2;
  }
}, {
  familiar: $familiar(_templateObject233 || (_templateObject233 = _taggedTemplateLiteral3(["Optimistic Candle"]))),
  drops: $items(_templateObject243 || (_templateObject243 = _taggedTemplateLiteral3(["glob of melted wax"]))),
  probability: 1,
  dropPredicate: function() {
    return get("_optimisticCandleDropsCrown") < 3;
  }
}, {
  familiar: $familiar(_templateObject253 || (_templateObject253 = _taggedTemplateLiteral3(["Adventurous Spelunker"]))),
  drops: $items(_templateObject263 || (_templateObject263 = _taggedTemplateLiteral3(["teflon ore, velcro ore, vinyl ore, cardboard ore, styrofoam ore, bubblewrap ore"]))),
  probability: 1,
  dropPredicate: function() {
    return get("_oreDropsCrown") < 6;
  }
}, {
  familiar: $familiar(_templateObject273 || (_templateObject273 = _taggedTemplateLiteral3(["Twitching Space Critter"]))),
  drops: $items(_templateObject283 || (_templateObject283 = _taggedTemplateLiteral3(["space beast fur"]))),
  probability: 1,
  dropPredicate: function() {
    return get("_spaceFurDropsCrown") < 1;
  }
}, {
  familiar: $familiar(_templateObject293 || (_templateObject293 = _taggedTemplateLiteral3(["Party Mouse"]))),
  drops: 50,
  probability: 0.05
}, {
  familiar: $familiar(_templateObject303 || (_templateObject303 = _taggedTemplateLiteral3(["Yule Hound"]))),
  drops: $items(_templateObject313 || (_templateObject313 = _taggedTemplateLiteral3(["candy cane"]))),
  probability: 1
}, {
  familiar: $familiar(_templateObject323 || (_templateObject323 = _taggedTemplateLiteral3(["Gluttonous Green Ghost"]))),
  drops: $items(_templateObject333 || (_templateObject333 = _taggedTemplateLiteral3(["bean burrito, enchanted bean burrito, jumping bean burrito"]))),
  probability: 1
}, {
  familiar: $familiar(_templateObject343 || (_templateObject343 = _taggedTemplateLiteral3(["Reassembled Blackbird"]))),
  drops: $items(_templateObject352 || (_templateObject352 = _taggedTemplateLiteral3(["blackberry"]))),
  probability: 1
}, {
  familiar: $familiar(_templateObject362 || (_templateObject362 = _taggedTemplateLiteral3(["Reconstituted Crow"]))),
  drops: $items(_templateObject372 || (_templateObject372 = _taggedTemplateLiteral3(["blackberry"]))),
  probability: 1
}, {
  familiar: $familiar(_templateObject382 || (_templateObject382 = _taggedTemplateLiteral3(["Hunchbacked Minion"]))),
  drops: /* @__PURE__ */ new Map([[$item(_templateObject392 || (_templateObject392 = _taggedTemplateLiteral3(["disembodied brain"]))), 0.02], [$item(_templateObject402 || (_templateObject402 = _taggedTemplateLiteral3(["skeleton bone"]))), 0.98]]),
  probability: 1
}, {
  familiar: $familiar(_templateObject412 || (_templateObject412 = _taggedTemplateLiteral3(["Reanimated Reanimator"]))),
  drops: $items(_templateObject422 || (_templateObject422 = _taggedTemplateLiteral3(["hot wing, broken skull"]))),
  probability: 1
}, {
  familiar: $familiar(_templateObject432 || (_templateObject432 = _taggedTemplateLiteral3(["Attention-Deficit Demon"]))),
  drops: $items(_templateObject442 || (_templateObject442 = _taggedTemplateLiteral3(["chorizo brownies, white chocolate and tomato pizza, carob chunk noodles"]))),
  probability: 1
}, {
  familiar: $familiar(_templateObject452 || (_templateObject452 = _taggedTemplateLiteral3(["Piano Cat"]))),
  drops: $items(_templateObject462 || (_templateObject462 = _taggedTemplateLiteral3(["beertini, papaya slung, salty slug, tomato daiquiri"]))),
  probability: 1
}, {
  familiar: $familiar(_templateObject472 || (_templateObject472 = _taggedTemplateLiteral3(["Golden Monkey"]))),
  drops: $items(_templateObject482 || (_templateObject482 = _taggedTemplateLiteral3(["gold nuggets"]))),
  probability: 0.5
}, {
  familiar: $familiar(_templateObject492 || (_templateObject492 = _taggedTemplateLiteral3(["Robot Reindeer"]))),
  drops: $items(_templateObject502 || (_templateObject502 = _taggedTemplateLiteral3(["candy cane, eggnog, fruitcake, gingerbread bugbear"]))),
  probability: 0.3
}, {
  familiar: $familiar(_templateObject512 || (_templateObject512 = _taggedTemplateLiteral3(["Stocking Mimic"]))),
  drops: $items(_templateObject522 || (_templateObject522 = _taggedTemplateLiteral3(["Angry Farmer candy, Cold Hots candy, Rock Pops, Tasty Fun Good rice candy, Wint-O-Fresh mint"]))),
  probability: 0.3
}, {
  familiar: $familiar(_templateObject532 || (_templateObject532 = _taggedTemplateLiteral3(["BRICKO chick"]))),
  drops: $items(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral3(["BRICKO brick"]))),
  probability: 1
}, {
  familiar: $familiar(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral3(["Cotton Candy Carnie"]))),
  drops: $items(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral3(["cotton candy pinch"]))),
  probability: 1
}, {
  familiar: $familiar(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral3(["Untamed Turtle"]))),
  drops: $items(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral3(["snailmail bits, turtlemail bits, turtle wax"]))),
  probability: 0.35
}, {
  familiar: $familiar(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral3(["Astral Badger"]))),
  drops: $items(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral3(["spooky mushroom, Knob mushroom, Knoll mushroom"]))),
  probability: 1
}, {
  familiar: $familiar(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral3(["Green Pixie"]))),
  drops: $items(_templateObject622 || (_templateObject622 = _taggedTemplateLiteral3(["bottle of tequila"]))),
  probability: 0.2
}, {
  familiar: $familiar(_templateObject632 || (_templateObject632 = _taggedTemplateLiteral3(["Angry Goat"]))),
  drops: $items(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral3(["goat cheese pizza"]))),
  probability: 1
}, {
  familiar: $familiar(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral3(["Adorable Seal Larva"]))),
  drops: $items(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral3(["stench nuggets, spooky nuggets, hot nuggets, cold nuggets, sleaze nuggets"]))),
  probability: 0.35
}, {
  familiar: $familiar(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral3(["Ancient Yuletide Troll"]))),
  drops: $items(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral3(["candy cane, eggnog, fruitcake, gingerbread bugbear"]))),
  probability: 0.3
}, {
  familiar: $familiar(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral3(["Sweet Nutcracker"]))),
  drops: $items(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral3(["candy cane, eggnog, fruitcake, gingerbread bugbear"]))),
  probability: 0.3
}, {
  familiar: $familiar(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral3(["Casagnova Gnome"]))),
  drops: 0,
  probability: 0
}, {
  familiar: $familiar(_templateObject722 || (_templateObject722 = _taggedTemplateLiteral3(["Coffee Pixie"]))),
  drops: 0,
  probability: 0
}, {
  familiar: $familiar(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral3(["Dancing Frog"]))),
  drops: 0,
  probability: 0
}, {
  familiar: $familiar(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral3(["Grouper Groupie"]))),
  drops: 0,
  probability: 0
}, {
  familiar: $familiar(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral3(["Hand Turkey"]))),
  drops: 30,
  probability: 1
}, {
  familiar: $familiar(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral3(["Hippo Ballerina"]))),
  drops: 0,
  probability: 0
}, {
  familiar: $familiar(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral3(["Jitterbug"]))),
  drops: 0,
  probability: 0
}, {
  familiar: $familiar(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral3(["Leprechaun"]))),
  drops: 30,
  probability: 1
}, {
  familiar: $familiar(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral3(["Obtuse Angel"]))),
  drops: 0,
  probability: 0
}, {
  familiar: $familiar(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral3(["Psychedelic Bear"]))),
  drops: 0,
  probability: 0
}, {
  familiar: $familiar(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral3(["Robortender"]))),
  drops: 0,
  probability: 0
}, {
  familiar: $familiar(_templateObject822 || (_templateObject822 = _taggedTemplateLiteral3(["Ghost of Crimbo Commerce"]))),
  drops: 30,
  probability: 1
}, {
  familiar: $familiar(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral3(["Hobo Monkey"]))),
  drops: 0,
  probability: 0
}, {
  familiar: $familiar(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral3(["Rockin' Robin"]))),
  drops: 60,
  probability: 1
}, {
  familiar: $familiar(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral3(["Feral Kobold"]))),
  drops: 30,
  probability: 1
}, {
  familiar: $familiar(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral3(["Oily Woim"]))),
  drops: 30,
  probability: 1
}, {
  familiar: $familiar(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral3(["Cat Burglar"]))),
  drops: 0,
  probability: 0
}, {
  familiar: $familiar(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral3(["Misshapen Animal Skeleton"]))),
  drops: 30,
  probability: 1
}, {
  familiar: $familiar(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral3(["Gelatinous Cubeling"]))),
  drops: 0,
  probability: 0
}, {
  familiar: $familiar(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral3(["Frozen Gravy Fairy"]))),
  drops: $items(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral3(["cold nuggets"]))),
  probability: 1
}, {
  familiar: $familiar(_templateObject922 || (_templateObject922 = _taggedTemplateLiteral3(["Stinky Gravy Fairy"]))),
  drops: $items(_templateObject932 || (_templateObject932 = _taggedTemplateLiteral3(["stench nuggets"]))),
  probability: 1
}, {
  familiar: $familiar(_templateObject94 || (_templateObject94 = _taggedTemplateLiteral3(["Sleazy Gravy Fairy"]))),
  drops: $items(_templateObject95 || (_templateObject95 = _taggedTemplateLiteral3(["sleaze nuggets"]))),
  probability: 1
}, {
  familiar: $familiar(_templateObject96 || (_templateObject96 = _taggedTemplateLiteral3(["Spooky Gravy Fairy"]))),
  drops: $items(_templateObject97 || (_templateObject97 = _taggedTemplateLiteral3(["spooky nuggets"]))),
  probability: 1
}, {
  familiar: $familiar(_templateObject98 || (_templateObject98 = _taggedTemplateLiteral3(["Flaming Gravy Fairy"]))),
  drops: $items(_templateObject99 || (_templateObject99 = _taggedTemplateLiteral3(["hot nuggets"]))),
  probability: 1
}], FULL_RIDING_LIST = [].concat(ridingFamiliars, _toConsumableArray4(import_kolmafia8.Familiar.all().filter(function(f) {
  return !ridingFamiliars.some(function(_ref) {
    var familiar3 = _ref.familiar;
    return familiar3 === f;
  });
}).map(function(familiar3) {
  return {
    familiar: familiar3,
    drops: 0,
    probability: 1
  };
})));
function valueRider(rider, modifierValueFunction, dropsValueFunction) {
  var ignoreLimitedDrops = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, dropValue2 = !rider.dropPredicate || rider.dropPredicate() && !ignoreLimitedDrops ? rider.probability * (typeof rider.drops == "number" ? rider.drops : dropsValueFunction(rider.drops)) : 0, modifierValue = modifierValueFunction(rider.familiar);
  return dropValue2 + modifierValue;
}
var riderModes = /* @__PURE__ */ new Map(), DEFAULTS = {
  modifierValueFunction: function() {
    return 0;
  },
  dropsValueFunction: function() {
    return 0;
  },
  ignoreLimitedDrops: !1,
  excludeCurrentFamiliar: !0
};
function createRiderMode(name, details) {
  return riderModes.set(name, _objectSpread4(_objectSpread4({}, DEFAULTS), details));
}
function hasRiderMode(name) {
  return riderModes.has(name);
}
var riderLists = /* @__PURE__ */ new Map();
function pickRider(mode) {
  var modeData = riderModes.get(mode);
  if (!modeData)
    return null;
  var modifierValueFunction = modeData.modifierValueFunction, dropsValueFunction = modeData.dropsValueFunction, ignoreLimitedDrops = modeData.ignoreLimitedDrops, excludeCurrentFamiliar = modeData.excludeCurrentFamiliar;
  riderLists.has(mode) || riderLists.set(mode, FULL_RIDING_LIST.filter(function(_ref2) {
    var familiar3 = _ref2.familiar;
    return have(familiar3);
  }).sort(function(a, b) {
    return valueRider(b, modifierValueFunction, dropsValueFunction, ignoreLimitedDrops) - valueRider(a, modifierValueFunction, dropsValueFunction, ignoreLimitedDrops);
  }));
  var list = riderLists.get(mode);
  if (list) {
    var riderToReturn = list.find(function(_ref32) {
      var _dropPredicate, dropPredicate = _ref32.dropPredicate, familiar3 = _ref32.familiar;
      return ((_dropPredicate = dropPredicate == null ? void 0 : dropPredicate()) !== null && _dropPredicate !== void 0 ? _dropPredicate : !0) && (!excludeCurrentFamiliar || (0, import_kolmafia8.myFamiliar)() !== familiar3);
    });
    return riderToReturn != null ? riderToReturn : null;
  }
  return null;
}
function getModifier(modifier, familiar3) {
  return (0, import_kolmafia8.numericModifier)("Throne:".concat(familiar3), modifier);
}
function createModifierValueFunction(modifiers, functions) {
  return function(familiar3) {
    return sum(modifiers, function(modifier) {
      return functions[modifier](getModifier(modifier, familiar3));
    });
  };
}

// node_modules/libram/dist/Copier.js
init_kolmafia_polyfill();
function _defineProperties7(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass7(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties7(Constructor.prototype, protoProps), staticProps && _defineProperties7(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _classCallCheck7(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperty7(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
var Copier = /* @__PURE__ */ _createClass7(function Copier2(couldCopy, prepare, canCopy, copiedMonster, fightCopy) {
  _classCallCheck7(this, Copier2), _defineProperty7(this, "couldCopy", void 0), _defineProperty7(this, "prepare", void 0), _defineProperty7(this, "canCopy", void 0), _defineProperty7(this, "copiedMonster", void 0), _defineProperty7(this, "fightCopy", null), this.couldCopy = couldCopy, this.prepare = prepare, this.canCopy = canCopy, this.copiedMonster = copiedMonster, fightCopy && (this.fightCopy = fightCopy);
});

// node_modules/libram/dist/resources/2016/SourceTerminal.js
var SourceTerminal_exports = {};
__export(SourceTerminal_exports, {
  Buffs: function() {
    return Buffs;
  },
  Digitize: function() {
    return Digitize;
  },
  Items: function() {
    return Items;
  },
  RolloverBuffs: function() {
    return RolloverBuffs;
  },
  Skills: function() {
    return Skills;
  },
  canDigitize: function() {
    return canDigitize;
  },
  couldDigitize: function() {
    return couldDigitize;
  },
  duplicateUsesRemaining: function() {
    return duplicateUsesRemaining;
  },
  educate: function() {
    return educate;
  },
  enhance: function() {
    return enhance;
  },
  enhanceBuffDuration: function() {
    return enhanceBuffDuration;
  },
  enhanceUsesRemaining: function() {
    return enhanceUsesRemaining;
  },
  enquiry: function() {
    return enquiry;
  },
  enquiryBuffDuration: function() {
    return enquiryBuffDuration;
  },
  extrude: function() {
    return extrude;
  },
  getChips: function() {
    return getChips;
  },
  getDigitizeMonster: function() {
    return getDigitizeMonster;
  },
  getDigitizeMonsterCount: function() {
    return getDigitizeMonsterCount;
  },
  getDigitizeUses: function() {
    return getDigitizeUses;
  },
  getDigitizeUsesRemaining: function() {
    return getDigitizeUsesRemaining;
  },
  getDuplicateUses: function() {
    return getDuplicateUses;
  },
  getEnhanceUses: function() {
    return getEnhanceUses;
  },
  getMaximumDigitizeUses: function() {
    return getMaximumDigitizeUses;
  },
  getPortscanUses: function() {
    return getPortscanUses;
  },
  getSkills: function() {
    return getSkills;
  },
  have: function() {
    return have2;
  },
  isCurrentSkill: function() {
    return isCurrentSkill;
  },
  maximumDuplicateUses: function() {
    return maximumDuplicateUses;
  },
  maximumEnhanceUses: function() {
    return maximumEnhanceUses;
  },
  prepareDigitize: function() {
    return prepareDigitize;
  }
});
init_kolmafia_polyfill();
var import_kolmafia9 = require("kolmafia");
var _templateObject100, _templateObject214, _templateObject311, _templateObject411, _templateObject510, _templateObject610, _templateObject710, _templateObject810, _templateObject910, _templateObject104, _templateObject114, _templateObject124, _templateObject134, _templateObject144, _templateObject154, _templateObject164, _templateObject174, _templateObject184, _templateObject194, _templateObject204, _templateObject215, _templateObject224, _templateObject234, _templateObject244, _templateObject254, _templateObject264, _templateObject274;
function _createForOfIteratorHelper5(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray8(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e2) {
    didErr = !0, err = _e2;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray8(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray8(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray8(o, minLen);
  }
}
function _arrayLikeToArray8(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral4(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var item = $item(_templateObject100 || (_templateObject100 = _taggedTemplateLiteral4(["Source terminal"])));
function have2() {
  return haveInCampground(item);
}
var Buffs = {
  Items: $effect(_templateObject214 || (_templateObject214 = _taggedTemplateLiteral4(["items.enh"]))),
  Meat: $effect(_templateObject311 || (_templateObject311 = _taggedTemplateLiteral4(["meat.enh"]))),
  Init: $effect(_templateObject411 || (_templateObject411 = _taggedTemplateLiteral4(["init.enh"]))),
  Critical: $effect(_templateObject510 || (_templateObject510 = _taggedTemplateLiteral4(["critical.enh"]))),
  Damage: $effect(_templateObject610 || (_templateObject610 = _taggedTemplateLiteral4(["damage.enh"]))),
  Substats: $effect(_templateObject710 || (_templateObject710 = _taggedTemplateLiteral4(["substats.enh"])))
};
function enhance(buff) {
  return Object.values(Buffs).includes(buff) ? (0, import_kolmafia9.cliExecute)("terminal enhance ".concat(buff.name)) : !1;
}
var RolloverBuffs = {
  Familiar: $effect(_templateObject810 || (_templateObject810 = _taggedTemplateLiteral4(["familiar.enq"]))),
  Monsters: $effect(_templateObject910 || (_templateObject910 = _taggedTemplateLiteral4(["monsters.enq"]))),
  Protect: $effect(_templateObject104 || (_templateObject104 = _taggedTemplateLiteral4(["protect.enq"]))),
  Stats: $effect(_templateObject114 || (_templateObject114 = _taggedTemplateLiteral4(["stats.enq"])))
};
function enquiry(rolloverBuff) {
  return Object.values(RolloverBuffs).includes(rolloverBuff) ? (0, import_kolmafia9.cliExecute)("terminal enquiry ".concat(rolloverBuff.name)) : !1;
}
var Skills = {
  Extract: $skill(_templateObject124 || (_templateObject124 = _taggedTemplateLiteral4(["Extract"]))),
  Digitize: $skill(_templateObject134 || (_templateObject134 = _taggedTemplateLiteral4(["Digitize"]))),
  Compress: $skill(_templateObject144 || (_templateObject144 = _taggedTemplateLiteral4(["Compress"]))),
  Duplicate: $skill(_templateObject154 || (_templateObject154 = _taggedTemplateLiteral4(["Duplicate"]))),
  Portscan: $skill(_templateObject164 || (_templateObject164 = _taggedTemplateLiteral4(["Portscan"]))),
  Turbo: $skill(_templateObject174 || (_templateObject174 = _taggedTemplateLiteral4(["Turbo"])))
};
function educate(skills) {
  var skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  if (arrayEquals(skillsArray, getSkills()))
    return !0;
  var _iterator = _createForOfIteratorHelper5(skillsArray), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var skill = _step.value;
      if (!Object.values(Skills).includes(skill))
        return !1;
      (0, import_kolmafia9.cliExecute)("terminal educate ".concat(skill.name.toLowerCase(), ".edu"));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return !0;
}
function getSkills() {
  return ["sourceTerminalEducate1", "sourceTerminalEducate2"].map(function(p) {
    return get(p);
  }).filter(function(s) {
    return s !== "";
  }).map(function(s) {
    return import_kolmafia9.Skill.get(s.slice(0, -4));
  });
}
function isCurrentSkill(skills) {
  var currentSkills = getSkills(), skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  return skillsArray.every(function(skill) {
    return currentSkills.includes(skill);
  });
}
var Items = /* @__PURE__ */ new Map([[$item(_templateObject184 || (_templateObject184 = _taggedTemplateLiteral4(["browser cookie"]))), "food.ext"], [$item(_templateObject194 || (_templateObject194 = _taggedTemplateLiteral4(["hacked gibson"]))), "booze.ext"], [$item(_templateObject204 || (_templateObject204 = _taggedTemplateLiteral4(["Source shades"]))), "goggles.ext"], [$item(_templateObject215 || (_templateObject215 = _taggedTemplateLiteral4(["Source terminal GRAM chip"]))), "gram.ext"], [$item(_templateObject224 || (_templateObject224 = _taggedTemplateLiteral4(["Source terminal PRAM chip"]))), "pram.ext"], [$item(_templateObject234 || (_templateObject234 = _taggedTemplateLiteral4(["Source terminal SPAM chip"]))), "spam.ext"], [$item(_templateObject244 || (_templateObject244 = _taggedTemplateLiteral4(["Source terminal CRAM chip"]))), "cram.ext"], [$item(_templateObject254 || (_templateObject254 = _taggedTemplateLiteral4(["Source terminal DRAM chip"]))), "dram.ext"], [$item(_templateObject264 || (_templateObject264 = _taggedTemplateLiteral4(["Source terminal TRAM chip"]))), "tram.ext"], [$item(_templateObject274 || (_templateObject274 = _taggedTemplateLiteral4(["software bug"]))), "familiar.ext"]]);
function extrude(item5) {
  var fileName = Items.get(item5);
  return fileName ? (0, import_kolmafia9.cliExecute)("terminal extrude ".concat(fileName)) : !1;
}
function getChips() {
  return get("sourceTerminalChips").split(",");
}
function getDigitizeUses() {
  return get("_sourceTerminalDigitizeUses");
}
function getDigitizeMonster() {
  return get("_sourceTerminalDigitizeMonster");
}
function getDigitizeMonsterCount() {
  return get("_sourceTerminalDigitizeMonsterCount");
}
function getMaximumDigitizeUses() {
  var chips = getChips();
  return 1 + (chips.includes("TRAM") ? 1 : 0) + (chips.includes("TRIGRAM") ? 1 : 0);
}
function getDigitizeUsesRemaining() {
  return getMaximumDigitizeUses() - getDigitizeUses();
}
function couldDigitize() {
  return getDigitizeUses() < getMaximumDigitizeUses();
}
function prepareDigitize() {
  return isCurrentSkill(Skills.Digitize) ? !0 : educate(Skills.Digitize);
}
function canDigitize() {
  return couldDigitize() && getSkills().includes(Skills.Digitize);
}
var Digitize = new Copier(function() {
  return couldDigitize();
}, function() {
  return prepareDigitize();
}, function() {
  return canDigitize();
}, function() {
  return getDigitizeMonster();
});
function getDuplicateUses() {
  return get("_sourceTerminalDuplicateUses");
}
function getEnhanceUses() {
  return get("_sourceTerminalEnhanceUses");
}
function getPortscanUses() {
  return get("_sourceTerminalPortscanUses");
}
function maximumDuplicateUses() {
  return (0, import_kolmafia9.myPath)() === import_kolmafia9.Path.get("The Source") ? 5 : 1;
}
function duplicateUsesRemaining() {
  return maximumDuplicateUses() - getDuplicateUses();
}
function maximumEnhanceUses() {
  return 1 + getChips().filter(function(chip) {
    return ["CRAM", "SCRAM"].includes(chip);
  }).length;
}
function enhanceUsesRemaining() {
  return maximumEnhanceUses() - getEnhanceUses();
}
function enhanceBuffDuration() {
  return 25 + get("sourceTerminalPram") * 5 + (getChips().includes("INGRAM") ? 25 : 0);
}
function enquiryBuffDuration() {
  return 50 + 10 * get("sourceTerminalGram") + (getChips().includes("DIAGRAM") ? 50 : 0);
}

// node_modules/libram/dist/resources/2017/Robortender.js
var Robortender_exports = {};
__export(Robortender_exports, {
  currentDrinks: function() {
    return currentDrinks;
  },
  drinks: function() {
    return drinks;
  },
  dropChance: function() {
    return dropChance;
  },
  dropFrom: function() {
    return dropFrom;
  },
  feed: function() {
    return feed;
  },
  have: function() {
    return have3;
  },
  majorDrinks: function() {
    return majorDrinks;
  },
  minorDrinks: function() {
    return minorDrinks;
  }
});
init_kolmafia_polyfill();
var import_kolmafia10 = require("kolmafia");
var _templateObject101, _templateObject216, _templateObject314, _templateObject413, _templateObject511, _templateObject611, _templateObject711, _templateObject811, _templateObject911, _templateObject105, _templateObject115, _templateObject125, _templateObject135, _templateObject145, _templateObject155, _templateObject165, _templateObject175, _templateObject185, _templateObject195, _templateObject205, _templateObject217, _templateObject225, _templateObject235, _templateObject245, _templateObject255, _templateObject265, _templateObject275, _templateObject284, _templateObject294, _templateObject304, _templateObject315, _templateObject324, _templateObject334, _templateObject344, _templateObject353, _templateObject363, _templateObject373;
function _toConsumableArray5(arr) {
  return _arrayWithoutHoles5(arr) || _iterableToArray5(arr) || _unsupportedIterableToArray9(arr) || _nonIterableSpread5();
}
function _nonIterableSpread5() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray9(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray9(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray9(o, minLen);
  }
}
function _iterableToArray5(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles5(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray9(arr);
}
function _arrayLikeToArray9(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral5(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var familiar = $familiar(_templateObject101 || (_templateObject101 = _taggedTemplateLiteral5(["Robortender"])));
function have3() {
  return (0, import_kolmafia10.haveFamiliar)(familiar);
}
var phylumDrops = /* @__PURE__ */ new Map([
  [$phylum(_templateObject216 || (_templateObject216 = _taggedTemplateLiteral5(["Bug"]))), $item(_templateObject314 || (_templateObject314 = _taggedTemplateLiteral5(["pickled grasshopper"])))],
  [$phylum(_templateObject413 || (_templateObject413 = _taggedTemplateLiteral5(["Constellation"]))), import_kolmafia10.Item.get(9348)],
  [$phylum(_templateObject511 || (_templateObject511 = _taggedTemplateLiteral5(["Demon"]))), $item(_templateObject611 || (_templateObject611 = _taggedTemplateLiteral5(["bottle of novelty hot sauce"])))],
  [$phylum(_templateObject711 || (_templateObject711 = _taggedTemplateLiteral5(["Elemental"]))), $item(_templateObject811 || (_templateObject811 = _taggedTemplateLiteral5(["elemental sugarcube"])))],
  [$phylum(_templateObject911 || (_templateObject911 = _taggedTemplateLiteral5(["Elf"]))), $item(_templateObject105 || (_templateObject105 = _taggedTemplateLiteral5(["peppermint sprig"])))],
  [$phylum(_templateObject115 || (_templateObject115 = _taggedTemplateLiteral5(["Fish"]))), $item(_templateObject125 || (_templateObject125 = _taggedTemplateLiteral5(["bottle of clam juice"])))],
  [$phylum(_templateObject135 || (_templateObject135 = _taggedTemplateLiteral5(["Goblin"]))), $item(_templateObject145 || (_templateObject145 = _taggedTemplateLiteral5(["cocktail mushroom"])))],
  [$phylum(_templateObject155 || (_templateObject155 = _taggedTemplateLiteral5(["Hippy"]))), $item(_templateObject165 || (_templateObject165 = _taggedTemplateLiteral5(["shot of granola liqueur"])))],
  [$phylum(_templateObject175 || (_templateObject175 = _taggedTemplateLiteral5(["Hobo"]))), $item(_templateObject185 || (_templateObject185 = _taggedTemplateLiteral5(["can of cherry-flavored sterno"])))],
  [$phylum(_templateObject195 || (_templateObject195 = _taggedTemplateLiteral5(["Horror"]))), $item(_templateObject205 || (_templateObject205 = _taggedTemplateLiteral5(["lump of black ichor"])))],
  [$phylum(_templateObject217 || (_templateObject217 = _taggedTemplateLiteral5(["Humanoid"]))), $item(_templateObject225 || (_templateObject225 = _taggedTemplateLiteral5(["bottle of gregnadigne"])))],
  [$phylum(_templateObject235 || (_templateObject235 = _taggedTemplateLiteral5(["Mer-kin"]))), import_kolmafia10.Item.get(9358)],
  [$phylum(_templateObject245 || (_templateObject245 = _taggedTemplateLiteral5(["Orc"]))), $item(_templateObject255 || (_templateObject255 = _taggedTemplateLiteral5(["baby oil shooter"])))],
  [$phylum(_templateObject265 || (_templateObject265 = _taggedTemplateLiteral5(["Penguin"]))), $item(_templateObject275 || (_templateObject275 = _taggedTemplateLiteral5(["fish head"])))],
  [$phylum(_templateObject284 || (_templateObject284 = _taggedTemplateLiteral5(["Pirate"]))), $item(_templateObject294 || (_templateObject294 = _taggedTemplateLiteral5(["limepatch"])))],
  [$phylum(_templateObject304 || (_templateObject304 = _taggedTemplateLiteral5(["Plant"]))), $item(_templateObject315 || (_templateObject315 = _taggedTemplateLiteral5(["pile of dirt"])))],
  [$phylum(_templateObject324 || (_templateObject324 = _taggedTemplateLiteral5(["Slime"]))), $item(_templateObject334 || (_templateObject334 = _taggedTemplateLiteral5(["slime shooter"])))],
  [$phylum(_templateObject344 || (_templateObject344 = _taggedTemplateLiteral5(["Weird"]))), $item(_templateObject353 || (_templateObject353 = _taggedTemplateLiteral5(["imaginary lemon"])))]
]);
function dropFrom(target) {
  var _phylumDrops$get, phylum = target instanceof import_kolmafia10.Monster ? target.phylum : target;
  return (_phylumDrops$get = phylumDrops.get(phylum)) !== null && _phylumDrops$get !== void 0 ? _phylumDrops$get : $item.none;
}
function dropChance() {
  var _dropNumber, dropNumber = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : get("_roboDrops");
  return (_dropNumber = [1, 0.5, 0.4, 0.4, 0.4, 0.3, 0.3, 0.3][dropNumber]) !== null && _dropNumber !== void 0 ? _dropNumber : 0.2;
}
var minorDrinks = $items(_templateObject363 || (_templateObject363 = _taggedTemplateLiteral5(["literal grasshopper, double entendre, Phlegethon, Siberian sunrise, mentholated wine, low tide martini, shroomtini, morning dew, whiskey squeeze, great old fashioned, Gnomish sagngria, vodka stinger, extremely slippery nipple, piscatini, Churchill, soilzerac, London frog, nothingtini"]))), majorDrinks = $items(_templateObject373 || (_templateObject373 = _taggedTemplateLiteral5(["eighth plague, single entendre, reverse Tantalus, elemental caipiroska, Feliz Navidad, Bloody Nora, moreltini, hell in a bucket, Newark, R'lyeh, Gnollish sangria, vodka barracuda, Mysterious Island iced tea, drive-by shooting, gunner's daughter, dirt julep, Simepore slime, Phil Collins"]))), drinks = [].concat(_toConsumableArray5(minorDrinks), _toConsumableArray5(majorDrinks));
function currentDrinks() {
  var pref = get("_roboDrinks");
  return pref ? pref.split(",").filter(function(x) {
    return x.trim();
  }).map(function(name) {
    return (0, import_kolmafia10.toItem)(name);
  }).filter(function(drink) {
    return drinks.includes(drink);
  }) : [];
}
function feed(beverage) {
  if (currentDrinks().includes(beverage))
    return !0;
  if (currentDrinks().length >= 5 || !drinks.includes(beverage) || !(0, import_kolmafia10.itemAmount)(beverage) || !have3())
    return !1;
  var priorFamiliar = (0, import_kolmafia10.myFamiliar)();
  return (0, import_kolmafia10.useFamiliar)(familiar), (0, import_kolmafia10.visitUrl)("inventory.php?action=robooze&which=1&whichitem=".concat(beverage.id)), (0, import_kolmafia10.useFamiliar)(priorFamiliar), currentDrinks().includes(beverage);
}

// node_modules/libram/dist/counter.js
var counter_exports = {};
__export(counter_exports, {
  exists: function() {
    return exists;
  },
  get: function() {
    return get2;
  },
  set: function() {
    return set;
  }
});
init_kolmafia_polyfill();
var import_kolmafia11 = require("kolmafia");
function get2(counter) {
  var value = (0, import_kolmafia11.getCounter)(counter);
  return value === -1 ? (0, import_kolmafia11.getCounters)(counter, -1, -1).trim() === "" ? 1 / 0 : -1 : value;
}
function exists(counter) {
  return (0, import_kolmafia11.getCounter)(counter) !== -1 || (0, import_kolmafia11.getCounters)(counter, -1, -1).trim() !== "";
}
function set(counter, duration) {
  return (0, import_kolmafia11.cliExecute)("counters add ".concat(duration, " ").concat(counter)), get2(counter) !== null;
}

// node_modules/libram/dist/resources/2018/SongBoom.js
var SongBoom_exports = {};
__export(SongBoom_exports, {
  dropProgress: function() {
    return dropProgress;
  },
  have: function() {
    return have4;
  },
  setSong: function() {
    return setSong;
  },
  song: function() {
    return song;
  },
  songBoomSongs: function() {
    return songBoomSongs;
  },
  songChangesLeft: function() {
    return songChangesLeft;
  }
});
init_kolmafia_polyfill();
var import_kolmafia12 = require("kolmafia");
var _templateObject106;
function _taggedTemplateLiteral6(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var item2 = $item(_templateObject106 || (_templateObject106 = _taggedTemplateLiteral6(["SongBoom\u2122 BoomBox"])));
function have4() {
  return have(item2);
}
var keywords = {
  "Eye of the Giger": "spooky",
  "Food Vibrations": "food",
  "Remainin' Alive": "dr",
  "These Fists Were Made for Punchin'": "damage",
  "Total Eclipse of Your Meat": "meat"
}, songBoomSongs = new Set(Object.keys(keywords));
function song() {
  var stored = get("boomBoxSong");
  return songBoomSongs.has(stored) ? stored : null;
}
function songChangesLeft() {
  return get("_boomBoxSongsLeft");
}
function setSong(newSong) {
  if (song() !== newSong) {
    if (songChangesLeft() === 0)
      throw new Error("Out of song changes!");
    return (0, import_kolmafia12.cliExecute)("boombox ".concat(newSong ? keywords[newSong] : "none")), !0;
  } else
    return !1;
}
function dropProgress() {
  return get("_boomBoxFights");
}

// node_modules/libram/dist/resources/2019/Snapper.js
var Snapper_exports = {};
__export(Snapper_exports, {
  getProgress: function() {
    return getProgress;
  },
  getTrackedPhylum: function() {
    return getTrackedPhylum;
  },
  have: function() {
    return have5;
  },
  itemPhylum: function() {
    return itemPhylum;
  },
  phylumItem: function() {
    return phylumItem;
  },
  trackPhylum: function() {
    return trackPhylum;
  }
});
init_kolmafia_polyfill();
var import_kolmafia13 = require("kolmafia");
function _slicedToArray5(arr, i) {
  return _arrayWithHoles5(arr) || _iterableToArrayLimit5(arr, i) || _unsupportedIterableToArray10(arr, i) || _nonIterableRest5();
}
function _nonIterableRest5() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit5(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _arr = [], _n = !0, _d = !1, _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !(i && _arr.length === i)); _n = !0)
        ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        !_n && _i.return != null && _i.return();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles5(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _toConsumableArray6(arr) {
  return _arrayWithoutHoles6(arr) || _iterableToArray6(arr) || _unsupportedIterableToArray10(arr) || _nonIterableSpread6();
}
function _nonIterableSpread6() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray10(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray10(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray10(o, minLen);
  }
}
function _iterableToArray6(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles6(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray10(arr);
}
function _arrayLikeToArray10(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var familiar2 = import_kolmafia13.Familiar.get("Red-Nosed Snapper"), phylumItem = /* @__PURE__ */ new Map([[import_kolmafia13.Phylum.get("beast"), import_kolmafia13.Item.get("patch of extra-warm fur")], [import_kolmafia13.Phylum.get("bug"), import_kolmafia13.Item.get("a bug's lymph")], [import_kolmafia13.Phylum.get("constellation"), import_kolmafia13.Item.get("micronova")], [import_kolmafia13.Phylum.get("construct"), import_kolmafia13.Item.get("industrial lubricant")], [import_kolmafia13.Phylum.get("demon"), import_kolmafia13.Item.get("infernal snowball")], [import_kolmafia13.Phylum.get("dude"), import_kolmafia13.Item.get("human musk")], [import_kolmafia13.Phylum.get("elemental"), import_kolmafia13.Item.get("livid energy")], [import_kolmafia13.Phylum.get("elf"), import_kolmafia13.Item.get("peppermint syrup")], [import_kolmafia13.Phylum.get("fish"), import_kolmafia13.Item.get("fish sauce")], [import_kolmafia13.Phylum.get("goblin"), import_kolmafia13.Item.get("guffin")], [import_kolmafia13.Phylum.get("hippy"), import_kolmafia13.Item.get("organic potpourri")], [import_kolmafia13.Phylum.get("hobo"), import_kolmafia13.Item.get("beggin' cologne")], [import_kolmafia13.Phylum.get("horror"), import_kolmafia13.Item.get("powdered madness")], [import_kolmafia13.Phylum.get("humanoid"), import_kolmafia13.Item.get("vial of humanoid growth hormone")], [import_kolmafia13.Phylum.get("mer-kin"), import_kolmafia13.Item.get("Mer-kin eyedrops")], [import_kolmafia13.Phylum.get("orc"), import_kolmafia13.Item.get("boot flask")], [import_kolmafia13.Phylum.get("penguin"), import_kolmafia13.Item.get("envelope full of Meat")], [import_kolmafia13.Phylum.get("pirate"), import_kolmafia13.Item.get("Shantix\u2122")], [import_kolmafia13.Phylum.get("plant"), import_kolmafia13.Item.get("goodberry")], [import_kolmafia13.Phylum.get("slime"), import_kolmafia13.Item.get("extra-strength goo")], [import_kolmafia13.Phylum.get("undead"), import_kolmafia13.Item.get("unfinished pleasure")], [import_kolmafia13.Phylum.get("weird"), import_kolmafia13.Item.get("non-Euclidean angle")]]), itemPhylum = new Map(_toConsumableArray6(phylumItem).map(function(_ref) {
  var _ref2 = _slicedToArray5(_ref, 2), phylum = _ref2[0], item5 = _ref2[1];
  return [item5, phylum];
}));
function have5() {
  return (0, import_kolmafia13.haveFamiliar)(familiar2);
}
function getTrackedPhylum() {
  return get("redSnapperPhylum");
}
function trackPhylum(phylum) {
  var currentFamiliar = (0, import_kolmafia13.myFamiliar)();
  try {
    (0, import_kolmafia13.useFamiliar)(familiar2), (0, import_kolmafia13.cliExecute)("snapper ".concat(phylum));
  } finally {
    (0, import_kolmafia13.useFamiliar)(currentFamiliar);
  }
}
function getProgress() {
  return get("redSnapperProgress");
}

// node_modules/libram/dist/resources/2020/Guzzlr.js
var Guzzlr_exports = {};
__export(Guzzlr_exports, {
  Cocktails: function() {
    return Cocktails;
  },
  abandon: function() {
    return abandon;
  },
  acceptBronze: function() {
    return acceptBronze;
  },
  acceptGold: function() {
    return acceptGold;
  },
  acceptPlatinum: function() {
    return acceptPlatinum;
  },
  canAbandon: function() {
    return canAbandon;
  },
  canGold: function() {
    return canGold;
  },
  canPlatinum: function() {
    return canPlatinum;
  },
  expectedReward: function() {
    return expectedReward;
  },
  getBooze: function() {
    return getBooze;
  },
  getBronze: function() {
    return getBronze;
  },
  getCheapestPlatinumCocktail: function() {
    return getCheapestPlatinumCocktail;
  },
  getGold: function() {
    return getGold;
  },
  getGoldToday: function() {
    return getGoldToday;
  },
  getLocation: function() {
    return getLocation2;
  },
  getPlatinum: function() {
    return getPlatinum;
  },
  getPlatinumToday: function() {
    return getPlatinumToday;
  },
  getTier: function() {
    return getTier;
  },
  have: function() {
    return have6;
  },
  haveBooze: function() {
    return haveBooze;
  },
  haveFullBronzeBonus: function() {
    return haveFullBronzeBonus;
  },
  haveFullGoldBonus: function() {
    return haveFullGoldBonus;
  },
  haveFullPlatinumBonus: function() {
    return haveFullPlatinumBonus;
  },
  havePlatinumBooze: function() {
    return havePlatinumBooze;
  },
  ingredientToPlatinumCocktail: function() {
    return ingredientToPlatinumCocktail;
  },
  isQuestActive: function() {
    return isQuestActive;
  },
  platinumCocktailToIngredient: function() {
    return platinumCocktailToIngredient;
  },
  turnsLeftOnQuest: function() {
    return turnsLeftOnQuest;
  }
});
init_kolmafia_polyfill();
var import_kolmafia14 = require("kolmafia");
var _templateObject107, _templateObject218, _templateObject316, _templateObject414, _templateObject513, _templateObject612, _templateObject712, _templateObject812, _templateObject912, _templateObject108, _templateObject116, _templateObject126, _templateObject136;
function _slicedToArray6(arr, i) {
  return _arrayWithHoles6(arr) || _iterableToArrayLimit6(arr, i) || _unsupportedIterableToArray11(arr, i) || _nonIterableRest6();
}
function _nonIterableRest6() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit6(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _arr = [], _n = !0, _d = !1, _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !(i && _arr.length === i)); _n = !0)
        ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        !_n && _i.return != null && _i.return();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles6(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _toConsumableArray7(arr) {
  return _arrayWithoutHoles7(arr) || _iterableToArray7(arr) || _unsupportedIterableToArray11(arr) || _nonIterableSpread7();
}
function _nonIterableSpread7() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray11(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray11(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray11(o, minLen);
  }
}
function _iterableToArray7(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles7(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray11(arr);
}
function _arrayLikeToArray11(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral7(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var item3 = $item(_templateObject107 || (_templateObject107 = _taggedTemplateLiteral7(["Guzzlr tablet"])));
function have6() {
  return have(item3);
}
function useTabletWithChoice(option) {
  withChoice(1412, option, function() {
    return (0, import_kolmafia14.use)(1, item3);
  });
}
function isQuestActive() {
  return get("questGuzzlr") !== "unstarted";
}
function getPlatinum() {
  return get("guzzlrPlatinumDeliveries");
}
function getPlatinumToday() {
  return get("_guzzlrPlatinumDeliveries");
}
function canPlatinum() {
  return !isQuestActive() && getGold() >= 5 && getPlatinumToday() < 1;
}
function haveFullPlatinumBonus() {
  return getPlatinum() >= 30;
}
function acceptPlatinum() {
  return canPlatinum() ? (useTabletWithChoice(4), !0) : !1;
}
function getGold() {
  return get("guzzlrGoldDeliveries");
}
function getGoldToday() {
  return get("_guzzlrGoldDeliveries");
}
function canGold() {
  return !isQuestActive() && getBronze() >= 5 && getGoldToday() < 3;
}
function haveFullGoldBonus() {
  return getGold() >= 150;
}
function acceptGold() {
  return canGold() ? (useTabletWithChoice(3), !0) : !1;
}
function getBronze() {
  return get("guzzlrBronzeDeliveries");
}
function haveFullBronzeBonus() {
  return getBronze() >= 196;
}
function acceptBronze() {
  return isQuestActive() ? !1 : (useTabletWithChoice(2), !0);
}
function canAbandon() {
  return isQuestActive() && !get("_guzzlrQuestAbandoned");
}
function abandon() {
  return canAbandon() ? ((0, import_kolmafia14.visitUrl)("inventory.php?tap=guzzlr", !1), (0, import_kolmafia14.runChoice)(1), (0, import_kolmafia14.runChoice)(5), !0) : !1;
}
function getLocation2() {
  return get("guzzlrQuestLocation");
}
function getTier() {
  var tier = get("guzzlrQuestTier");
  return tier === "" ? null : tier;
}
function getBooze() {
  var booze = get("guzzlrQuestBooze");
  return booze === "" ? null : import_kolmafia14.Item.get(booze);
}
var Cocktails = $items(_templateObject218 || (_templateObject218 = _taggedTemplateLiteral7(["Buttery Boy, Steamboat, Ghiaccio Colada, Nog-on-the-Cob, Sourfinger"])));
function havePlatinumBooze() {
  return Cocktails.some(function(cock) {
    return (0, import_kolmafia14.itemAmount)(cock) > 0;
  });
}
function haveBooze() {
  var booze = getBooze();
  switch (booze) {
    case null:
      return !1;
    case $item(_templateObject316 || (_templateObject316 = _taggedTemplateLiteral7(["Guzzlr cocktail set"]))):
      return havePlatinumBooze();
    default:
      return (0, import_kolmafia14.itemAmount)(booze) > 0;
  }
}
var ingredientToPlatinumCocktail = /* @__PURE__ */ new Map([[$item(_templateObject414 || (_templateObject414 = _taggedTemplateLiteral7(["miniature boiler"]))), $item(_templateObject513 || (_templateObject513 = _taggedTemplateLiteral7(["Steamboat"])))], [$item(_templateObject612 || (_templateObject612 = _taggedTemplateLiteral7(["cold wad"]))), $item(_templateObject712 || (_templateObject712 = _taggedTemplateLiteral7(["Ghiaccio Colada"])))], [$item(_templateObject812 || (_templateObject812 = _taggedTemplateLiteral7(["robin's egg"]))), $item(_templateObject912 || (_templateObject912 = _taggedTemplateLiteral7(["Nog-on-the-Cob"])))], [$item(_templateObject108 || (_templateObject108 = _taggedTemplateLiteral7(["mangled finger"]))), $item(_templateObject116 || (_templateObject116 = _taggedTemplateLiteral7(["Sourfinger"])))], [$item(_templateObject126 || (_templateObject126 = _taggedTemplateLiteral7(["Dish of Clarified Butter"]))), $item(_templateObject136 || (_templateObject136 = _taggedTemplateLiteral7(["Buttery Boy"])))]]), platinumCocktailToIngredient = invertMap(ingredientToPlatinumCocktail);
function getCheapestPlatinumCocktail() {
  var freeCraft = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return freeCraft ? maxBy(Array.from(ingredientToPlatinumCocktail), function(ingredientAndCocktail) {
    return Math.min.apply(Math, _toConsumableArray7(ingredientAndCocktail.map(function(item5) {
      return (0, import_kolmafia14.mallPrice)(item5);
    })));
  }, !0)[1] : maxBy(Array.from(ingredientToPlatinumCocktail), function(_ref) {
    var _ref2 = _slicedToArray6(_ref, 2), cocktail = _ref2[1];
    return (0, import_kolmafia14.mallPrice)(cocktail);
  })[1];
}
function turnsLeftOnQuest() {
  var useShoes = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, progressPerTurn = useShoes ? Math.floor((10 - get("_guzzlrDeliveries")) * 1.5) : 10 - get("_guzzlrDeliveries");
  return Math.ceil((100 - get("guzzlrDeliveryProgress")) / progressPerTurn);
}
function expectedReward() {
  var usePants = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
  switch (getTier()) {
    case "platinum":
      return 22.5 + (usePants ? 5 : 0);
    case "gold":
      return 6 + (usePants ? 3 : 0);
    case "bronze":
      return 3 + (usePants ? 3 : 0);
    default:
      return 0;
  }
}

// node_modules/libram/dist/resources/2021/CrystalBall.js
var CrystalBall_exports = {};
__export(CrystalBall_exports, {
  have: function() {
    return have7;
  },
  orb: function() {
    return orb;
  },
  ponder: function() {
    return ponder;
  }
});
init_kolmafia_polyfill();
var import_kolmafia15 = require("kolmafia");
function _slicedToArray7(arr, i) {
  return _arrayWithHoles7(arr) || _iterableToArrayLimit7(arr, i) || _unsupportedIterableToArray12(arr, i) || _nonIterableRest7();
}
function _nonIterableRest7() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray12(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray12(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray12(o, minLen);
  }
}
function _arrayLikeToArray12(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit7(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _arr = [], _n = !0, _d = !1, _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !(i && _arr.length === i)); _n = !0)
        ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        !_n && _i.return != null && _i.return();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles7(arr) {
  if (Array.isArray(arr))
    return arr;
}
var orb = import_kolmafia15.Item.get("miniature crystal ball");
function have7() {
  return (0, import_kolmafia15.availableAmount)(orb) > 0;
}
var parsedProp = function() {
  return get("crystalBallPredictions").split("|").map(function(element) {
    return element.split(":");
  }).map(function(_ref) {
    var _ref2 = _slicedToArray7(_ref, 3), location4 = _ref2[1], monster = _ref2[2];
    return [(0, import_kolmafia15.toLocation)(location4), (0, import_kolmafia15.toMonster)(monster)];
  });
}, getLastPondered = function() {
  return "".concat((0, import_kolmafia15.myTotalTurnsSpent)(), ";").concat((0, import_kolmafia15.totalTurnsPlayed)(), ";").concat(get("lastAdventure"));
}, lastPondered = "";
function ponder() {
  return have7() ? (lastPondered !== getLastPondered() && (canVisitUrl() ? (logger_default.debug("Now pondering Crystal Ball."), (0, import_kolmafia15.visitUrl)("inventory.php?ponder=1", !1), lastPondered = getLastPondered()) : logger_default.debug("Failed to ponder Crystall Ball.")), new Map(parsedProp())) : /* @__PURE__ */ new Map();
}

// node_modules/libram/dist/resources/2022/AutumnAton.js
var AutumnAton_exports = {};
__export(AutumnAton_exports, {
  available: function() {
    return available;
  },
  availableLocations: function() {
    return availableLocations;
  },
  currentUpgrades: function() {
    return currentUpgrades;
  },
  currentlyIn: function() {
    return currentlyIn;
  },
  getUniques: function() {
    return getUniques;
  },
  have: function() {
    return have8;
  },
  legs: function() {
    return legs;
  },
  possibleUpgrades: function() {
    return possibleUpgrades;
  },
  seasonalItems: function() {
    return seasonalItems;
  },
  sendTo: function() {
    return sendTo;
  },
  turnsForQuest: function() {
    return turnsForQuest;
  },
  turnsLeft: function() {
    return turnsLeft;
  },
  upgrade: function() {
    return upgrade;
  },
  visualAcuity: function() {
    return visualAcuity;
  },
  zoneItems: function() {
    return zoneItems;
  }
});
init_kolmafia_polyfill();
var import_kolmafia16 = require("kolmafia");
var _templateObject109, _templateObject219, _templateObject317, _templateObject415, _templateObject514, _templateObject613, _templateObject713, _templateObject813, _templateObject913;
function _taggedTemplateLiteral8(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var item4 = import_kolmafia16.Item.get("autumn-aton");
function available() {
  return (0, import_kolmafia16.availableAmount)(item4) > 0;
}
function have8() {
  return get("hasAutumnaton") || available();
}
function checkLocations(html) {
  return (0, import_kolmafia16.xpath)(html, '//select[@name="heythereprogrammer"]//option[position()>1]/text()').map(function(name) {
    return (0, import_kolmafia16.toLocation)(name);
  });
}
function currentlyIn() {
  return get("autumnatonQuestLocation");
}
function sendTo(target) {
  var upgrade2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  if (!available())
    return null;
  var pageHtml = directlyUse(item4);
  upgrade2 && (0, import_kolmafia16.availableChoiceOptions)()[1] && (0, import_kolmafia16.runChoice)(1);
  var locationsAvailable = checkLocations(pageHtml), location4 = target instanceof import_kolmafia16.Location ? target : Array.isArray(target) ? target.find(function(l) {
    return locationsAvailable.includes(l);
  }) : target(locationsAvailable);
  return !location4 || !locationsAvailable.includes(location4) ? null : ((0, import_kolmafia16.handlingChoice)() || directlyUse(item4), (0, import_kolmafia16.runChoice)(2, "heythereprogrammer=".concat(location4.id)), (0, import_kolmafia16.handlingChoice)() && (0, import_kolmafia16.visitUrl)("main.php"), location4);
}
function upgrade() {
  directlyUse(item4);
  var canUpgrade = (0, import_kolmafia16.availableChoiceOptions)()[1] !== void 0;
  return canUpgrade && (0, import_kolmafia16.runChoice)(1), (0, import_kolmafia16.visitUrl)("main.php"), canUpgrade;
}
function availableLocations() {
  if (!available())
    return [];
  var pageHtml = directlyUse(item4);
  return (0, import_kolmafia16.visitUrl)("main.php"), checkLocations(pageHtml);
}
var possibleUpgrades = ["leftarm1", "leftleg1", "rightarm1", "rightleg1", "base_blackhat", "cowcatcher", "periscope", "radardish", "dualexhaust"];
function currentUpgrades() {
  return get("autumnatonUpgrades").split(",");
}
function turnsLeft() {
  return get("autumnatonQuestTurn") - (0, import_kolmafia16.totalTurnsPlayed)();
}
function legs() {
  return currentUpgrades().filter(function(u) {
    return u.includes("leg");
  }).length;
}
function turnsForQuest() {
  return 11 * Math.max(1, get("_autumnatonQuests") - legs());
}
function visualAcuity() {
  var visualUpgrades = ["periscope", "radardish"];
  return 1 + currentUpgrades().filter(function(u) {
    return visualUpgrades.includes(u);
  }).length;
}
function zoneItems() {
  return 3 + currentUpgrades().filter(function(u) {
    return u.includes("arm");
  }).length;
}
function seasonalItems() {
  return currentUpgrades().includes("cowcatcher") ? 2 : 1;
}
var difficulties = ["low", "mid", "high"], UNIQUES = {
  outdoor: {
    low: {
      index: 4,
      item: $item(_templateObject109 || (_templateObject109 = _taggedTemplateLiteral8(["autumn leaf"])))
    },
    mid: {
      index: 2,
      item: $item(_templateObject219 || (_templateObject219 = _taggedTemplateLiteral8(["autumn debris shield"])))
    },
    high: {
      index: 6,
      item: $item(_templateObject317 || (_templateObject317 = _taggedTemplateLiteral8(["autumn leaf pendant"])))
    }
  },
  indoor: {
    low: {
      index: 0,
      item: $item(_templateObject415 || (_templateObject415 = _taggedTemplateLiteral8(["AutumnFest ale"])))
    },
    mid: {
      index: 3,
      item: $item(_templateObject514 || (_templateObject514 = _taggedTemplateLiteral8(["autumn-spice donut"])))
    },
    high: {
      index: 7,
      item: $item(_templateObject613 || (_templateObject613 = _taggedTemplateLiteral8(["autumn breeze"])))
    }
  },
  underground: {
    low: {
      index: 1,
      item: $item(_templateObject713 || (_templateObject713 = _taggedTemplateLiteral8(["autumn sweater-weather sweater"])))
    },
    mid: {
      index: 5,
      item: $item(_templateObject813 || (_templateObject813 = _taggedTemplateLiteral8(["autumn dollar"])))
    },
    high: {
      index: 8,
      item: $item(_templateObject913 || (_templateObject913 = _taggedTemplateLiteral8(["autumn years wisdom"])))
    }
  }
};
function getUniques(location4) {
  var env = location4.environment, difficulty = location4.difficultyLevel;
  if (arrayContains(env, ["outdoor", "indoor", "underground"]) && arrayContains(difficulty, difficulties)) {
    var _UNIQUES$env$difficul = UNIQUES[env][difficulty], index = _UNIQUES$env$difficul.index, _item = _UNIQUES$env$difficul.item;
    return {
      upgrade: possibleUpgrades[index],
      item: _item
    };
  }
  return null;
}

// node_modules/libram/dist/resources/2022/JuneCleaver.js
var JuneCleaver_exports = {};
__export(JuneCleaver_exports, {
  choices: function() {
    return choices;
  },
  choicesAvailable: function() {
    return choicesAvailable;
  },
  cleaver: function() {
    return cleaver;
  },
  damage: function() {
    return damage;
  },
  getInterval: function() {
    return getInterval;
  },
  getSkippedInterval: function() {
    return getSkippedInterval;
  },
  have: function() {
    return have9;
  },
  queue: function() {
    return queue;
  },
  skipsRemaining: function() {
    return skipsRemaining;
  }
});
init_kolmafia_polyfill();
var import_kolmafia17 = require("kolmafia");
var cleaver = (0, import_kolmafia17.toItem)("June cleaver");
function have9() {
  return (0, import_kolmafia17.availableAmount)(cleaver) > 0;
}
function getInterval() {
  var _encounters, encounters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : get("_juneCleaverEncounters");
  return (_encounters = [1, 6, 10, 12, 15, 20][encounters]) !== null && _encounters !== void 0 ? _encounters : 30;
}
function getSkippedInterval() {
  var _encounters2, encounters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : get("_juneCleaverEncounters");
  return (_encounters2 = [1, 2, 3, 3, 4, 5][encounters]) !== null && _encounters2 !== void 0 ? _encounters2 : 8;
}
function damage(element) {
  return get("_juneCleaver".concat(element));
}
function skipsRemaining() {
  return 5 - get("_juneCleaverSkips");
}
var choices = [1467, 1468, 1469, 1470, 1471, 1472, 1473, 1474, 1475];
function queue() {
  return get("juneCleaverQueue").split(",").filter(function(x) {
    return x.trim().length > 0;
  }).map(function(x) {
    return parseInt(x);
  });
}
function choicesAvailable() {
  var currentQueue = queue();
  return choices.filter(function(choice) {
    return !currentQueue.includes(choice);
  });
}

// node_modules/libram/dist/since.js
init_kolmafia_polyfill();
var import_kolmafia18 = require("kolmafia");
function _defineProperties8(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass8(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties8(Constructor.prototype, protoProps), staticProps && _defineProperties8(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _classCallCheck8(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _inherits3(subClass, superClass) {
  if (typeof superClass != "function" && superClass !== null)
    throw new TypeError("Super expression must either be null or a function");
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf3(subClass, superClass);
}
function _createSuper3(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct3();
  return function() {
    var Super = _getPrototypeOf3(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf3(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else
      result = Super.apply(this, arguments);
    return _possibleConstructorReturn3(this, result);
  };
}
function _possibleConstructorReturn3(self, call) {
  if (call && (typeof call == "object" || typeof call == "function"))
    return call;
  if (call !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized3(self);
}
function _assertThisInitialized3(self) {
  if (self === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self;
}
function _wrapNativeSuper3(Class5) {
  var _cache = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper3 = function(Class6) {
    if (Class6 === null || !_isNativeFunction3(Class6))
      return Class6;
    if (typeof Class6 != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof _cache != "undefined") {
      if (_cache.has(Class6))
        return _cache.get(Class6);
      _cache.set(Class6, Wrapper);
    }
    function Wrapper() {
      return _construct3(Class6, arguments, _getPrototypeOf3(this).constructor);
    }
    return Wrapper.prototype = Object.create(Class6.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf3(Wrapper, Class6);
  }, _wrapNativeSuper3(Class5);
}
function _construct3(Parent, args2, Class5) {
  return _isNativeReflectConstruct3() ? _construct3 = Reflect.construct.bind() : _construct3 = function(Parent2, args3, Class6) {
    var a = [null];
    a.push.apply(a, args3);
    var Constructor = Function.bind.apply(Parent2, a), instance = new Constructor();
    return Class6 && _setPrototypeOf3(instance, Class6.prototype), instance;
  }, _construct3.apply(null, arguments);
}
function _isNativeReflectConstruct3() {
  if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch (e) {
    return !1;
  }
}
function _isNativeFunction3(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf3(o, p) {
  return _setPrototypeOf3 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf3(o, p);
}
function _getPrototypeOf3(o) {
  return _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  }, _getPrototypeOf3(o);
}
var KolmafiaVersionError = /* @__PURE__ */ function(_Error) {
  _inherits3(KolmafiaVersionError2, _Error);
  var _super = _createSuper3(KolmafiaVersionError2);
  function KolmafiaVersionError2(message) {
    var _this;
    return _classCallCheck8(this, KolmafiaVersionError2), _this = _super.call(this, message), Object.setPrototypeOf(_assertThisInitialized3(_this), KolmafiaVersionError2.prototype), _this;
  }
  return _createClass8(KolmafiaVersionError2);
}(/* @__PURE__ */ _wrapNativeSuper3(Error));
KolmafiaVersionError.prototype.name = "KolmafiaVersionError";
function getScriptName() {
  var _require$main, scriptName = (_require$main = require.main) === null || _require$main === void 0 ? void 0 : _require$main.id;
  return scriptName ? "'".concat(scriptName, "'") : "This script";
}
function sinceKolmafiaRevision(revision) {
  if (!Number.isInteger(revision))
    throw new TypeError("Invalid revision number ".concat(revision, " (must be an integer)"));
  var currentRevision = (0, import_kolmafia18.getRevision)();
  if (currentRevision > 0 && currentRevision < revision)
    throw new KolmafiaVersionError("".concat(getScriptName(), " requires revision r").concat(revision, " of kolmafia or higher (current: ").concat((0, import_kolmafia18.getRevision)(), "). Up-to-date builds can be found at https://ci.kolmafia.us/."));
}

// node_modules/libram/dist/session.js
init_kolmafia_polyfill();
var import_kolmafia19 = require("kolmafia");
var _templateObject110, _templateObject220, _templateObject318, _templateObject416, _templateObject515, _templateObject614, _templateObject714, _templateObject814, _templateObject914, _templateObject1010, _templateObject117, _templateObject127, _templateObject137, _templateObject146, _templateObject156, _templateObject166, _templateObject176, _templateObject186, _templateObject196, _templateObject206, _templateObject2110, _templateObject226, _templateObject236, _templateObject246, _templateObject256, _templateObject266, _templateObject276, _templateObject285, _templateObject295, _templateObject305, _templateObject319, _templateObject325, _templateObject335;
function _classCallCheck9(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties9(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass9(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties9(Constructor.prototype, protoProps), staticProps && _defineProperties9(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _defineProperty8(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _createForOfIteratorHelper6(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray13(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _slicedToArray8(arr, i) {
  return _arrayWithHoles8(arr) || _iterableToArrayLimit8(arr, i) || _unsupportedIterableToArray13(arr, i) || _nonIterableRest8();
}
function _nonIterableRest8() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit8(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _arr = [], _n = !0, _d = !1, _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !(i && _arr.length === i)); _n = !0)
        ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        !_n && _i.return != null && _i.return();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles8(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _taggedTemplateLiteral9(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _toConsumableArray8(arr) {
  return _arrayWithoutHoles8(arr) || _iterableToArray8(arr) || _unsupportedIterableToArray13(arr) || _nonIterableSpread8();
}
function _nonIterableSpread8() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray13(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray13(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray13(o, minLen);
  }
}
function _iterableToArray8(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles8(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray13(arr);
}
function _arrayLikeToArray13(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function mySessionItemsWrapper() {
  for (var sessionOnly = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, manyToOne = function(primary, mapped) {
    return mapped.map(function(target) {
      return [target, primary];
    });
  }, foldable = function(item6) {
    return manyToOne(item6, getFoldGroup(item6));
  }, itemMappings = new Map([].concat(_toConsumableArray8(foldable($item(_templateObject110 || (_templateObject110 = _taggedTemplateLiteral9(["liar's pants"]))))), _toConsumableArray8(foldable($item(_templateObject220 || (_templateObject220 = _taggedTemplateLiteral9(["ice pick"]))))), _toConsumableArray8(manyToOne($item(_templateObject318 || (_templateObject318 = _taggedTemplateLiteral9(["Spooky Putty sheet"]))), [$item(_templateObject416 || (_templateObject416 = _taggedTemplateLiteral9(["Spooky Putty monster"])))].concat(_toConsumableArray8(getFoldGroup($item(_templateObject515 || (_templateObject515 = _taggedTemplateLiteral9(["Spooky Putty sheet"])))))))), _toConsumableArray8(foldable($item(_templateObject614 || (_templateObject614 = _taggedTemplateLiteral9(["stinky cheese sword"]))))), _toConsumableArray8(foldable($item(_templateObject714 || (_templateObject714 = _taggedTemplateLiteral9(["naughty paper shuriken"]))))), _toConsumableArray8(foldable($item(_templateObject814 || (_templateObject814 = _taggedTemplateLiteral9(["Loathing Legion knife"]))))), _toConsumableArray8(foldable($item(_templateObject914 || (_templateObject914 = _taggedTemplateLiteral9(["deceased crimbo tree"]))))), _toConsumableArray8(foldable($item(_templateObject1010 || (_templateObject1010 = _taggedTemplateLiteral9(["makeshift turban"]))))), _toConsumableArray8(foldable($item(_templateObject117 || (_templateObject117 = _taggedTemplateLiteral9(["turtle wax shield"]))))), _toConsumableArray8(foldable($item(_templateObject127 || (_templateObject127 = _taggedTemplateLiteral9(["metallic foil bow"]))))), _toConsumableArray8(foldable($item(_templateObject137 || (_templateObject137 = _taggedTemplateLiteral9(["ironic moustache"]))))), _toConsumableArray8(foldable($item(_templateObject146 || (_templateObject146 = _taggedTemplateLiteral9(["bugged balaclava"]))))), _toConsumableArray8(foldable($item(_templateObject156 || (_templateObject156 = _taggedTemplateLiteral9(["toggle switch (Bartend)"]))))), _toConsumableArray8(foldable($item(_templateObject166 || (_templateObject166 = _taggedTemplateLiteral9(["mushroom cap"]))))), _toConsumableArray8(manyToOne($item(_templateObject176 || (_templateObject176 = _taggedTemplateLiteral9(["can of Rain-Doh"]))), $items(_templateObject186 || (_templateObject186 = _taggedTemplateLiteral9(["empty Rain-Doh can"]))))), _toConsumableArray8(manyToOne($item(_templateObject196 || (_templateObject196 = _taggedTemplateLiteral9(["meteorite fragment"]))), $items(_templateObject206 || (_templateObject206 = _taggedTemplateLiteral9(["meteorite earring, meteorite necklace, meteorite ring"]))))), _toConsumableArray8(manyToOne($item(_templateObject2110 || (_templateObject2110 = _taggedTemplateLiteral9(["Sneaky Pete's leather jacket"]))), $items(_templateObject226 || (_templateObject226 = _taggedTemplateLiteral9(["Sneaky Pete's leather jacket (collar popped)"]))))), _toConsumableArray8(manyToOne($item(_templateObject236 || (_templateObject236 = _taggedTemplateLiteral9(["Boris's Helm"]))), $items(_templateObject246 || (_templateObject246 = _taggedTemplateLiteral9(["Boris's Helm (askew)"]))))), _toConsumableArray8(manyToOne($item(_templateObject256 || (_templateObject256 = _taggedTemplateLiteral9(["Jarlsberg's pan"]))), $items(_templateObject266 || (_templateObject266 = _taggedTemplateLiteral9(["Jarlsberg's pan (Cosmic portal mode)"]))))), _toConsumableArray8(manyToOne($item(_templateObject276 || (_templateObject276 = _taggedTemplateLiteral9(["tiny plastic sword"]))), $items(_templateObject285 || (_templateObject285 = _taggedTemplateLiteral9(["grogtini, bodyslam, dirty martini, vesper, cherry bomb, sangria del diablo"]))))), _toConsumableArray8(manyToOne($item(_templateObject295 || (_templateObject295 = _taggedTemplateLiteral9(["earthenware muffin tin"]))), $items(_templateObject305 || (_templateObject305 = _taggedTemplateLiteral9(["blueberry muffin, bran muffin, chocolate chip muffin"]))))), _toConsumableArray8(manyToOne($item(_templateObject319 || (_templateObject319 = _taggedTemplateLiteral9(["ChibiBuddy\u2122 (on)"]))), $items(_templateObject325 || (_templateObject325 = _taggedTemplateLiteral9(["ChibiBuddy\u2122 (off)"]))))))), inventory = /* @__PURE__ */ new Map(), invLocations = sessionOnly ? [import_kolmafia19.mySessionItems] : [import_kolmafia19.mySessionItems, import_kolmafia19.getCloset, import_kolmafia19.getDisplay, import_kolmafia19.getStorage], _i = 0, _invLocations = invLocations; _i < _invLocations.length; _i++)
    for (var inventoryFunc = _invLocations[_i], _i2 = 0, _Object$entries = Object.entries(inventoryFunc()); _i2 < _Object$entries.length; _i2++) {
      var _itemMappings$get, _inventory$get, _Object$entries$_i = _slicedToArray8(_Object$entries[_i2], 2), itemStr = _Object$entries$_i[0], quantity = _Object$entries$_i[1], item5 = (0, import_kolmafia19.toItem)(itemStr), mappedItem = (_itemMappings$get = itemMappings.get(item5)) !== null && _itemMappings$get !== void 0 ? _itemMappings$get : item5;
      inventory.set(mappedItem, quantity + ((_inventory$get = inventory.get(mappedItem)) !== null && _inventory$get !== void 0 ? _inventory$get : 0));
    }
  for (var _i3 = 0, _Object$entries2 = Object.entries((0, import_kolmafia19.getCampground)()); _i3 < _Object$entries2.length; _i3++) {
    var _itemMappings$get2, _inventory$get2, _Object$entries2$_i = _slicedToArray8(_Object$entries2[_i3], 2), _itemStr = _Object$entries2$_i[0], _quantity = _Object$entries2$_i[1], _item = (0, import_kolmafia19.toItem)(_itemStr);
    if (_item !== $item(_templateObject335 || (_templateObject335 = _taggedTemplateLiteral9(["big rock"])))) {
      var _mappedItem = (_itemMappings$get2 = itemMappings.get(_item)) !== null && _itemMappings$get2 !== void 0 ? _itemMappings$get2 : _item;
      inventory.set(_mappedItem, _quantity + ((_inventory$get2 = inventory.get(_mappedItem)) !== null && _inventory$get2 !== void 0 ? _inventory$get2 : 0));
    }
  }
  return inventory;
}
function inventoryOperation(a, b, op) {
  var difference = /* @__PURE__ */ new Map(), _iterator = _createForOfIteratorHelper6(new Set([].concat(_toConsumableArray8(a.keys()), _toConsumableArray8(b.keys())))), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _a$get, _b$get, item5 = _step.value;
      difference.set(item5, op((_a$get = a.get(item5)) !== null && _a$get !== void 0 ? _a$get : 0, (_b$get = b.get(item5)) !== null && _b$get !== void 0 ? _b$get : 0));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var diffEntries = _toConsumableArray8(difference.entries());
  return new Map(diffEntries.filter(function(value) {
    return value[1] !== 0;
  }));
}
var Session = /* @__PURE__ */ function() {
  function Session2(meat, items, totalTurns) {
    _classCallCheck9(this, Session2), _defineProperty8(this, "meat", void 0), _defineProperty8(this, "items", void 0), _defineProperty8(this, "totalTurns", void 0), this.meat = meat, this.items = items, this.totalTurns = totalTurns;
  }
  return _createClass9(Session2, [{
    key: "register",
    value: function(target, quantity) {
      if (target === "meat")
        this.meat += quantity;
      else {
        var _this$items$get;
        this.items.set(target, ((_this$items$get = this.items.get(target)) !== null && _this$items$get !== void 0 ? _this$items$get : 0) + quantity);
      }
    }
  }, {
    key: "value",
    value: function(itemValue) {
      var turns = this.totalTurns, meat = Math.floor(this.meat), itemDetails = _toConsumableArray8(this.items.entries()).map(function(_ref) {
        var _ref2 = _slicedToArray8(_ref, 2), item5 = _ref2[0], quantity = _ref2[1];
        return {
          item: item5,
          quantity: quantity,
          value: itemValue(item5) * quantity
        };
      }), items = Math.floor(sum(itemDetails, "value"));
      return {
        meat: meat,
        items: items,
        total: meat + items,
        itemDetails: itemDetails,
        turns: turns
      };
    }
  }, {
    key: "diff",
    value: function(other) {
      return new Session2(this.meat - other.meat, inventoryOperation(this.items, other.items, function(a, b) {
        return a - b;
      }), this.totalTurns - other.totalTurns);
    }
  }, {
    key: "add",
    value: function(other) {
      return new Session2(this.meat + other.meat, inventoryOperation(this.items, other.items, function(a, b) {
        return a + b;
      }), this.totalTurns + other.totalTurns);
    }
  }, {
    key: "toFile",
    value: function(filename) {
      var val = {
        meat: this.meat,
        items: Object.fromEntries(this.items),
        totalTurns: this.totalTurns
      };
      (0, import_kolmafia19.bufferToFile)(JSON.stringify(val), Session2.getFilepath(filename));
    }
  }, {
    key: "computeMPA",
    value: function(other, options) {
      return Session2.computeMPA(this, other, options);
    }
  }], [{
    key: "diff",
    value: function(a, b) {
      return a.diff(b);
    }
  }, {
    key: "add",
    value: function() {
      for (var _len = arguments.length, sessions = new Array(_len), _key = 0; _key < _len; _key++)
        sessions[_key] = arguments[_key];
      return sessions.reduce(function(previousSession, currentSession) {
        return previousSession.add(currentSession);
      });
    }
  }, {
    key: "getFilepath",
    value: function(filename) {
      return filename.endsWith(".json") ? filename : "snapshots/".concat((0, import_kolmafia19.myName)(), "/").concat((0, import_kolmafia19.todayToString)(), "_").concat(filename, ".json");
    }
  }, {
    key: "fromFile",
    value: function(filename) {
      var fileValue = (0, import_kolmafia19.fileToBuffer)(Session2.getFilepath(filename));
      if (fileValue.length > 0) {
        var _val$totalTurns, val = JSON.parse(fileValue), parsedItems = Object.entries(val.items).map(function(_ref32) {
          var _ref4 = _slicedToArray8(_ref32, 2), itemStr = _ref4[0], quantity = _ref4[1];
          return [(0, import_kolmafia19.toItem)(itemStr), quantity];
        });
        return new Session2(val.meat, new Map(parsedItems), (_val$totalTurns = val.totalTurns) !== null && _val$totalTurns !== void 0 ? _val$totalTurns : 0);
      } else
        return new Session2(0, /* @__PURE__ */ new Map(), 0);
    }
  }, {
    key: "current",
    value: function() {
      var sessionOnly = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, meat = sessionOnly ? [import_kolmafia19.mySessionMeat] : [import_kolmafia19.mySessionMeat, import_kolmafia19.myClosetMeat, import_kolmafia19.myStorageMeat];
      return new Session2(sum(meat, function(f) {
        return f();
      }), mySessionItemsWrapper(sessionOnly), (0, import_kolmafia19.totalTurnsPlayed)());
    }
  }, {
    key: "computeMPA",
    value: function(baseline, full, options) {
      var _options$excludeValue, _excludeValue$meat, _excludeValue$item, value = options.value, excludeValue = (_options$excludeValue = options.excludeValue) !== null && _options$excludeValue !== void 0 ? _options$excludeValue : {
        meat: 0,
        item: 0
      }, isOutlier = options.isOutlier, result = full.diff(baseline).value(value), meatValue = result.meat - ((_excludeValue$meat = excludeValue.meat) !== null && _excludeValue$meat !== void 0 ? _excludeValue$meat : 0), outlierItems = isOutlier ? result.itemDetails.filter(isOutlier) : [], outliersValue = sum(outlierItems, function(detail) {
        return detail.value;
      }), itemValue = result.items - outliersValue - ((_excludeValue$item = excludeValue.item) !== null && _excludeValue$item !== void 0 ? _excludeValue$item : 0), turns = result.turns;
      return {
        mpa: {
          effective: (meatValue + itemValue) / turns,
          total: (meatValue + itemValue + outliersValue) / turns,
          meat: meatValue / turns,
          items: itemValue / turns
        },
        values: {
          effective: meatValue + itemValue,
          total: meatValue + itemValue + outliersValue,
          meat: meatValue,
          items: itemValue
        },
        outlierItems: outlierItems,
        turns: turns
      };
    }
  }]), Session2;
}();

// node_modules/grimoire-kolmafia/dist/combat.js
function _inherits4(subClass, superClass) {
  if (typeof superClass != "function" && superClass !== null)
    throw new TypeError("Super expression must either be null or a function");
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf4(subClass, superClass);
}
function _setPrototypeOf4(o, p) {
  return _setPrototypeOf4 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf4(o, p);
}
function _createSuper4(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct4();
  return function() {
    var Super = _getPrototypeOf4(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf4(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else
      result = Super.apply(this, arguments);
    return _possibleConstructorReturn4(this, result);
  };
}
function _possibleConstructorReturn4(self, call) {
  if (call && (typeof call == "object" || typeof call == "function"))
    return call;
  if (call !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized4(self);
}
function _assertThisInitialized4(self) {
  if (self === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self;
}
function _isNativeReflectConstruct4() {
  if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch (e) {
    return !1;
  }
}
function _getPrototypeOf4(o) {
  return _getPrototypeOf4 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  }, _getPrototypeOf4(o);
}
function _toConsumableArray9(arr) {
  return _arrayWithoutHoles9(arr) || _iterableToArray9(arr) || _unsupportedIterableToArray14(arr) || _nonIterableSpread9();
}
function _nonIterableSpread9() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray9(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles9(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray14(arr);
}
function _createForOfIteratorHelper7(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray14(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e2) {
    didErr = !0, err = _e2;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray14(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray14(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray14(o, minLen);
  }
}
function _arrayLikeToArray14(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _classCallCheck10(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties10(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass10(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties10(Constructor.prototype, protoProps), staticProps && _defineProperties10(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
var CombatStrategy = /* @__PURE__ */ function() {
  function CombatStrategy2() {
    _classCallCheck10(this, CombatStrategy2), this.macros = /* @__PURE__ */ new Map(), this.autoattacks = /* @__PURE__ */ new Map(), this.actions = /* @__PURE__ */ new Map(), this.ccs_entries = /* @__PURE__ */ new Map();
  }
  return _createClass10(CombatStrategy2, [{
    key: "macro",
    value: function(_macro, monsters, prepend) {
      var _a, _b;
      if (monsters === void 0)
        this.default_macro === void 0 && (this.default_macro = []), prepend ? this.default_macro.unshift(_macro) : this.default_macro.push(_macro);
      else {
        monsters instanceof import_kolmafia20.Monster && (monsters = [monsters]);
        var _iterator = _createForOfIteratorHelper7(monsters), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var monster = _step.value;
            this.macros.has(monster) || this.macros.set(monster, []), prepend ? (_a = this.macros.get(monster)) === null || _a === void 0 || _a.unshift(_macro) : (_b = this.macros.get(monster)) === null || _b === void 0 || _b.push(_macro);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return this;
    }
  }, {
    key: "autoattack",
    value: function(macro, monsters, prepend) {
      var _a, _b;
      if (monsters === void 0)
        this.default_autoattack === void 0 && (this.default_autoattack = []), prepend ? this.default_autoattack.unshift(macro) : this.default_autoattack.push(macro);
      else {
        monsters instanceof import_kolmafia20.Monster && (monsters = [monsters]);
        var _iterator2 = _createForOfIteratorHelper7(monsters), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var monster = _step2.value;
            this.autoattacks.has(monster) || this.autoattacks.set(monster, []), prepend ? (_a = this.autoattacks.get(monster)) === null || _a === void 0 || _a.unshift(macro) : (_b = this.autoattacks.get(monster)) === null || _b === void 0 || _b.push(macro);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return this;
    }
  }, {
    key: "startingMacro",
    value: function(macro, prepend) {
      return this.starting_macro === void 0 && (this.starting_macro = []), prepend ? this.starting_macro.unshift(macro) : this.starting_macro.push(macro), this;
    }
  }, {
    key: "action",
    value: function(_action, monsters) {
      if (monsters === void 0)
        this.default_action = _action;
      else if (monsters instanceof import_kolmafia20.Monster)
        this.actions.set(monsters, _action);
      else {
        var _iterator3 = _createForOfIteratorHelper7(monsters), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var monster = _step3.value;
            this.actions.set(monster, _action);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      return this;
    }
  }, {
    key: "ccs",
    value: function(entry, monsters, prepend) {
      var _a, _b;
      monsters instanceof import_kolmafia20.Monster && (monsters = [monsters]);
      var _iterator4 = _createForOfIteratorHelper7(monsters), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var monster = _step4.value;
          this.ccs_entries.has(monster) || this.ccs_entries.set(monster, []), prepend ? (_a = this.ccs_entries.get(monster)) === null || _a === void 0 || _a.unshift(entry) : (_b = this.ccs_entries.get(monster)) === null || _b === void 0 || _b.push(entry);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return this;
    }
  }, {
    key: "can",
    value: function(action) {
      return action === this.default_action ? !0 : Array.from(this.actions.values()).includes(action);
    }
  }, {
    key: "getDefaultAction",
    value: function() {
      return this.default_action;
    }
  }, {
    key: "where",
    value: function(action) {
      var _this = this;
      return Array.from(this.actions.keys()).filter(function(key) {
        return _this.actions.get(key) === action;
      });
    }
  }, {
    key: "currentStrategy",
    value: function(monster) {
      var _a;
      return (_a = this.actions.get(monster)) !== null && _a !== void 0 ? _a : this.default_action;
    }
  }, {
    key: "clone",
    value: function() {
      var result = new CombatStrategy2();
      this.starting_macro && (result.starting_macro = _toConsumableArray9(this.starting_macro)), this.default_macro && (result.default_macro = _toConsumableArray9(this.default_macro));
      var _iterator5 = _createForOfIteratorHelper7(this.macros), _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          var pair = _step5.value;
          result.macros.set(pair[0], _toConsumableArray9(pair[1]));
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      this.default_autoattack && (result.default_autoattack = _toConsumableArray9(this.default_autoattack));
      var _iterator6 = _createForOfIteratorHelper7(this.autoattacks), _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
          var _pair = _step6.value;
          result.autoattacks.set(_pair[0], _toConsumableArray9(_pair[1]));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      result.default_action = this.default_action;
      var _iterator7 = _createForOfIteratorHelper7(this.actions), _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
          var _pair2 = _step7.value;
          result.actions.set(_pair2[0], _pair2[1]);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      var _iterator8 = _createForOfIteratorHelper7(this.ccs_entries), _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
          var _pair3 = _step8.value;
          result.ccs_entries.set(_pair3[0], _toConsumableArray9(_pair3[1]));
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      return result;
    }
  }, {
    key: "compile",
    value: function(resources, defaults, location4) {
      var _a, _b, result = new Macro();
      this.starting_macro && result.step.apply(result, _toConsumableArray9(this.starting_macro.map(function(macro2) {
        return undelay(macro2);
      })));
      var monster_macros = new CompressedMacro();
      this.macros.forEach(function(value, key) {
        var _Macro;
        monster_macros.add(key, (_Macro = new Macro()).step.apply(_Macro, _toConsumableArray9(value.map(function(macro2) {
          return undelay(macro2);
        }))));
      }), result.step(monster_macros.compile()), this.default_macro && result.step.apply(result, _toConsumableArray9(this.default_macro.map(function(macro2) {
        return undelay(macro2);
      })));
      var monster_actions = new CompressedMacro();
      if (this.actions.forEach(function(action, key) {
        var _a2, _b2, macro2 = (_a2 = resources.getMacro(action)) !== null && _a2 !== void 0 ? _a2 : (_b2 = defaults == null ? void 0 : defaults[action]) === null || _b2 === void 0 ? void 0 : _b2.call(defaults, key);
        macro2 && monster_actions.add(key, new Macro().step(macro2));
      }), result.step(monster_actions.compile()), this.default_action) {
        var macro = (_a = resources.getMacro(this.default_action)) !== null && _a !== void 0 ? _a : (_b = defaults == null ? void 0 : defaults[this.default_action]) === null || _b === void 0 ? void 0 : _b.call(defaults, location4);
        macro && result.step(macro);
      }
      return result;
    }
  }, {
    key: "compileAutoattack",
    value: function() {
      var result = new Macro(), monster_macros = new CompressedMacro();
      return this.autoattacks.forEach(function(value, key) {
        var _Macro2;
        monster_macros.add(key, (_Macro2 = new Macro()).step.apply(_Macro2, _toConsumableArray9(value.map(function(macro) {
          return undelay(macro);
        }))));
      }), result.step(monster_macros.compile()), this.default_autoattack && result.step.apply(result, _toConsumableArray9(this.default_autoattack.map(function(macro) {
        return undelay(macro);
      }))), result;
    }
  }, {
    key: "compileCcs",
    value: function() {
      var result = [], _iterator9 = _createForOfIteratorHelper7(this.ccs_entries), _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
          var ccs_entry = _step9.value;
          result.push.apply(result, ["[".concat(ccs_entry[0].name, "]")].concat(_toConsumableArray9(ccs_entry[1])));
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      return result;
    }
  }], [{
    key: "withActions",
    value: function(actions) {
      var CombatStrategyWithActions = /* @__PURE__ */ function(_this) {
        _inherits4(CombatStrategyWithActions2, _this);
        var _super = _createSuper4(CombatStrategyWithActions2);
        function CombatStrategyWithActions2() {
          return _classCallCheck10(this, CombatStrategyWithActions2), _super.apply(this, arguments);
        }
        return _createClass10(CombatStrategyWithActions2);
      }(this), proto = CombatStrategyWithActions.prototype, _iterator10 = _createForOfIteratorHelper7(actions), _step10;
      try {
        var _loop = function() {
          var action = _step10.value;
          proto[action] = function(monsters) {
            return this.action(action, monsters);
          };
        };
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done; )
          _loop();
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      return CombatStrategyWithActions;
    }
  }]), CombatStrategy2;
}(), CompressedMacro = /* @__PURE__ */ function() {
  function CompressedMacro2() {
    _classCallCheck10(this, CompressedMacro2), this.components = /* @__PURE__ */ new Map();
  }
  return _createClass10(CompressedMacro2, [{
    key: "add",
    value: function(monster, macro) {
      var _a, macro_text = macro.toString();
      macro_text.length !== 0 && (this.components.has(macro_text) ? (_a = this.components.get(macro_text)) === null || _a === void 0 || _a.push(monster) : this.components.set(macro_text, [monster]));
    }
  }, {
    key: "compile",
    value: function() {
      var result = new Macro();
      return this.components.forEach(function(monsters, macro) {
        var condition = monsters.map(function(mon) {
          return "monsterid ".concat(mon.id);
        }).join(" || ");
        result.if_(condition, macro);
      }), result;
    }
  }]), CompressedMacro2;
}(), CombatResources = /* @__PURE__ */ function() {
  function CombatResources2() {
    _classCallCheck10(this, CombatResources2), this.resources = /* @__PURE__ */ new Map();
  }
  return _createClass10(CombatResources2, [{
    key: "provide",
    value: function(action, resource) {
      resource !== void 0 && this.resources.set(action, resource);
    }
  }, {
    key: "has",
    value: function(action) {
      return this.resources.has(action);
    }
  }, {
    key: "all",
    value: function() {
      return Array.from(this.resources.values());
    }
  }, {
    key: "getMacro",
    value: function(action) {
      var resource = this.resources.get(action);
      if (resource !== void 0)
        return resource.do instanceof import_kolmafia20.Item ? new Macro().item(resource.do) : resource.do instanceof import_kolmafia20.Skill ? new Macro().skill(resource.do) : undelay(resource.do);
    }
  }]), CombatResources2;
}();

// node_modules/grimoire-kolmafia/dist/engine.js
init_kolmafia_polyfill();
var import_kolmafia22 = require("kolmafia");

// node_modules/grimoire-kolmafia/dist/outfit.js
init_kolmafia_polyfill();
var import_kolmafia21 = require("kolmafia");
var _templateObject111, _templateObject221, _templateObject320, _templateObject417, _templateObject516, _templateObject615, _templateObject715, _templateObject815, _templateObject915, _templateObject1011, _templateObject118, _templateObject128, _templateObject138, _templateObject147, _templateObject157, _templateObject167, _templateObject177, _templateObject187, _templateObject197, _templateObject207, _templateObject2111, _templateObject227, _templateObject237, _templateObject247, _templateObject257, _templateObject267, _templateObject277, _templateObject286, _templateObject296, _templateObject306, _templateObject3110, _templateObject326, _templateObject336, _templateObject345, _templateObject354, _templateObject364, _templateObject374, _templateObject383, _templateObject393, _templateObject403, _templateObject418, _templateObject423, _templateObject433, _templateObject443, _templateObject453, _templateObject463, _templateObject473, _templateObject483, _templateObject493, _templateObject503, _templateObject517, _templateObject523, _templateObject533, _templateObject542, _templateObject552, _templateObject562, _templateObject572, _templateObject582, _templateObject592, _templateObject602, _templateObject616;
function ownKeys5(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys5(Object(source), !0).forEach(function(key) {
      _defineProperty9(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys5(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty9(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _slicedToArray9(arr, i) {
  return _arrayWithHoles9(arr) || _iterableToArrayLimit9(arr, i) || _unsupportedIterableToArray15(arr, i) || _nonIterableRest9();
}
function _nonIterableRest9() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit9(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _arr = [], _n = !0, _d = !1, _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !(i && _arr.length === i)); _n = !0)
        ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        !_n && _i.return != null && _i.return();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles9(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _createForOfIteratorHelper8(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray15(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _taggedTemplateLiteral10(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _toConsumableArray10(arr) {
  return _arrayWithoutHoles10(arr) || _iterableToArray10(arr) || _unsupportedIterableToArray15(arr) || _nonIterableSpread10();
}
function _nonIterableSpread10() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray15(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray15(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray15(o, minLen);
  }
}
function _iterableToArray10(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles10(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray15(arr);
}
function _arrayLikeToArray15(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _classCallCheck11(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties11(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass11(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties11(Constructor.prototype, protoProps), staticProps && _defineProperties11(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
var FORCE_REFRESH_REQUIREMENT = new Requirement([], {
  forceUpdate: !0
}), outfitSlots = ["hat", "back", "weapon", "offhand", "shirt", "pants", "acc1", "acc2", "acc3", "famequip"];
var weaponHands = function(i) {
  return i ? (0, import_kolmafia21.weaponHands)(i) : 0;
}, modeableCommands2 = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka", "jillcandle"], Outfit = /* @__PURE__ */ function() {
  function Outfit2() {
    _classCallCheck11(this, Outfit2), this.equips = /* @__PURE__ */ new Map(), this.riders = /* @__PURE__ */ new Map(), this.modes = {}, this.skipDefaults = !1, this.modifier = [], this.avoid = [], this.bonuses = /* @__PURE__ */ new Map(), this.postActions = [], this.preActions = [];
  }
  return _createClass11(Outfit2, [{
    key: "equippedAmount",
    value: function(item5) {
      return _toConsumableArray10(this.equips.values()).filter(function(i) {
        return i === item5;
      }).length;
    }
  }, {
    key: "isAvailable",
    value: function(item5) {
      var _a;
      return !(!((_a = this.avoid) === null || _a === void 0) && _a.includes(item5) || !have(item5, this.equippedAmount(item5) + 1) || (0, import_kolmafia21.booleanModifier)(item5, "Single Equip") && this.equippedAmount(item5) > 0);
    }
  }, {
    key: "haveEquipped",
    value: function(item5, slot) {
      return slot === void 0 ? this.equippedAmount(item5) > 0 : this.equips.get(slot) === item5;
    }
  }, {
    key: "equipItemNone",
    value: function(item5, slot) {
      return item5 !== $item.none ? !1 : slot === void 0 ? !0 : this.equips.has(slot) ? !1 : (this.equips.set(slot, item5), !0);
    }
  }, {
    key: "equipNonAccessory",
    value: function(item5, slot) {
      if ($slots(_templateObject111 || (_templateObject111 = _taggedTemplateLiteral10(["acc1, acc2, acc3"]))).includes((0, import_kolmafia21.toSlot)(item5)) || slot !== void 0 && slot !== (0, import_kolmafia21.toSlot)(item5) || this.equips.has((0, import_kolmafia21.toSlot)(item5)))
        return !1;
      switch ((0, import_kolmafia21.toSlot)(item5)) {
        case $slot(_templateObject221 || (_templateObject221 = _taggedTemplateLiteral10(["off-hand"]))):
          if (this.equips.has($slot(_templateObject320 || (_templateObject320 = _taggedTemplateLiteral10(["weapon"])))) && weaponHands(this.equips.get($slot(_templateObject417 || (_templateObject417 = _taggedTemplateLiteral10(["weapon"]))))) !== 1)
            return !1;
          break;
        case $slot(_templateObject516 || (_templateObject516 = _taggedTemplateLiteral10(["familiar"]))):
          if (this.familiar !== void 0 && !(0, import_kolmafia21.canEquip)(this.familiar, item5))
            return !1;
      }
      return (0, import_kolmafia21.toSlot)(item5) !== $slot(_templateObject615 || (_templateObject615 = _taggedTemplateLiteral10(["familiar"]))) && !(0, import_kolmafia21.canEquip)(item5) ? !1 : (this.equips.set((0, import_kolmafia21.toSlot)(item5), item5), !0);
    }
  }, {
    key: "equipAccessory",
    value: function(item5, slot) {
      var _this = this;
      if (![void 0].concat(_toConsumableArray10($slots(_templateObject715 || (_templateObject715 = _taggedTemplateLiteral10(["acc1, acc2, acc3"]))))).includes(slot) || (0, import_kolmafia21.toSlot)(item5) !== $slot(_templateObject815 || (_templateObject815 = _taggedTemplateLiteral10(["acc1"]))) || !(0, import_kolmafia21.canEquip)(item5))
        return !1;
      if (slot === void 0) {
        var empty = $slots(_templateObject915 || (_templateObject915 = _taggedTemplateLiteral10(["acc1, acc2, acc3"]))).find(function(s) {
          return !_this.equips.has(s);
        });
        if (empty === void 0)
          return !1;
        this.equips.set(empty, item5);
      } else {
        if (this.equips.has(slot))
          return !1;
        this.equips.set(slot, item5);
      }
      return !0;
    }
  }, {
    key: "equipUsingDualWield",
    value: function(item5, slot) {
      return ![void 0, $slot(_templateObject1011 || (_templateObject1011 = _taggedTemplateLiteral10(["off-hand"])))].includes(slot) || (0, import_kolmafia21.toSlot)(item5) !== $slot(_templateObject118 || (_templateObject118 = _taggedTemplateLiteral10(["weapon"]))) || this.equips.has($slot(_templateObject128 || (_templateObject128 = _taggedTemplateLiteral10(["weapon"])))) && weaponHands(this.equips.get($slot(_templateObject138 || (_templateObject138 = _taggedTemplateLiteral10(["weapon"]))))) !== 1 || this.equips.has($slot(_templateObject147 || (_templateObject147 = _taggedTemplateLiteral10(["off-hand"])))) || !have($skill(_templateObject157 || (_templateObject157 = _taggedTemplateLiteral10(["Double-Fisted Skull Smashing"])))) || weaponHands(item5) !== 1 || !(0, import_kolmafia21.canEquip)(item5) ? !1 : (this.equips.set($slot(_templateObject167 || (_templateObject167 = _taggedTemplateLiteral10(["off-hand"]))), item5), !0);
    }
  }, {
    key: "getHoldingFamiliar",
    value: function(item5) {
      switch ((0, import_kolmafia21.toSlot)(item5)) {
        case $slot(_templateObject177 || (_templateObject177 = _taggedTemplateLiteral10(["weapon"]))):
          return $familiar(_templateObject187 || (_templateObject187 = _taggedTemplateLiteral10(["Disembodied Hand"])));
        case $slot(_templateObject197 || (_templateObject197 = _taggedTemplateLiteral10(["off-hand"]))):
          return $familiar(_templateObject207 || (_templateObject207 = _taggedTemplateLiteral10(["Left-Hand Man"])));
        default:
          return;
      }
    }
  }, {
    key: "getBonus",
    value: function(item5) {
      var _a;
      return (_a = this.bonuses.get(item5)) !== null && _a !== void 0 ? _a : 0;
    }
  }, {
    key: "applyBonus",
    value: function(item5, value, reducer) {
      var previous = this.getBonus(item5);
      return this.setBonus(item5, reducer(value, previous));
    }
  }, {
    key: "setBonus",
    value: function(item5, value) {
      return this.bonuses.set(item5, value), value;
    }
  }, {
    key: "addBonus",
    value: function(item5, value) {
      return this.applyBonus(item5, value, function(a, b) {
        return a + b;
      });
    }
  }, {
    key: "applyBonuses",
    value: function(items, reducer) {
      var _iterator = _createForOfIteratorHelper8(items), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _step$value = _slicedToArray9(_step.value, 2), item5 = _step$value[0], value = _step$value[1];
          this.applyBonus(item5, value, reducer);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "setBonuses",
    value: function(items) {
      this.applyBonuses(items, function(a) {
        return a;
      });
    }
  }, {
    key: "addBonuses",
    value: function(items) {
      this.applyBonuses(items, function(a, b) {
        return a + b;
      });
    }
  }, {
    key: "equipUsingFamiliar",
    value: function(item5, slot) {
      if (![void 0, $slot(_templateObject2111 || (_templateObject2111 = _taggedTemplateLiteral10(["familiar"])))].includes(slot) || this.equips.has($slot(_templateObject227 || (_templateObject227 = _taggedTemplateLiteral10(["familiar"])))) || (0, import_kolmafia21.booleanModifier)(item5, "Single Equip"))
        return !1;
      var familiar3 = this.getHoldingFamiliar(item5);
      return familiar3 === void 0 || !this.equip(familiar3) ? !1 : (this.equips.set($slot(_templateObject237 || (_templateObject237 = _taggedTemplateLiteral10(["familiar"]))), item5), !0);
    }
  }, {
    key: "equipItem",
    value: function(item5, slot) {
      return this.haveEquipped(item5, slot) || this.equipItemNone(item5, slot) || this.isAvailable(item5) && (this.equipNonAccessory(item5, slot) || this.equipAccessory(item5, slot) || this.equipUsingDualWield(item5, slot) || this.equipUsingFamiliar(item5, slot));
    }
  }, {
    key: "equipFamiliar",
    value: function(familiar3) {
      if (familiar3 === this.familiar)
        return !0;
      if (this.familiar !== void 0 || familiar3 !== $familiar.none && (!have(familiar3) || Array.from(this.riders.values()).includes(familiar3)))
        return !1;
      var item5 = this.equips.get($slot(_templateObject247 || (_templateObject247 = _taggedTemplateLiteral10(["familiar"]))));
      return item5 !== void 0 && item5 !== $item.none && !(0, import_kolmafia21.canEquip)(familiar3, item5) ? !1 : (this.familiar = familiar3, !0);
    }
  }, {
    key: "equipSpec",
    value: function(spec) {
      var _this$avoid, _a, _b, _c, _d, _e, _f, succeeded = !0, _iterator2 = _createForOfIteratorHelper8(outfitSlots), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var slotName = _step2.value, slot = (_a = (/* @__PURE__ */ new Map([["famequip", $slot(_templateObject257 || (_templateObject257 = _taggedTemplateLiteral10(["familiar"])))], ["offhand", $slot(_templateObject267 || (_templateObject267 = _taggedTemplateLiteral10(["off-hand"])))]])).get(slotName)) !== null && _a !== void 0 ? _a : (0, import_kolmafia21.toSlot)(slotName), itemOrItems = spec[slotName];
          itemOrItems !== void 0 && !this.equip(itemOrItems, slot) && (succeeded = !1);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var _iterator3 = _createForOfIteratorHelper8((_b = spec == null ? void 0 : spec.equip) !== null && _b !== void 0 ? _b : []), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          var item5 = _step3.value;
          this.equip(item5) || (succeeded = !1);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      if ((spec == null ? void 0 : spec.familiar) !== void 0 && (this.equip(spec.familiar) || (succeeded = !1)), (_this$avoid = this.avoid).push.apply(_this$avoid, _toConsumableArray10((_c = spec == null ? void 0 : spec.avoid) !== null && _c !== void 0 ? _c : [])), this.skipDefaults = this.skipDefaults || ((_d = spec.skipDefaults) !== null && _d !== void 0 ? _d : !1), spec.modifier) {
        var _this$modifier;
        Array.isArray(spec.modifier) ? (_this$modifier = this.modifier).push.apply(_this$modifier, _toConsumableArray10(spec.modifier)) : this.modifier.push(spec.modifier);
      }
      return spec.modes && (this.setModes(spec.modes) || (succeeded = !1)), spec.riders && (spec.riders["buddy-bjorn"] && !this.bjornify(spec.riders["buddy-bjorn"]) && (succeeded = !1), spec.riders["crown-of-thrones"] && !this.enthrone(spec.riders["crown-of-thrones"]) && (succeeded = !1)), spec.bonuses && this.addBonuses(spec.bonuses), this.beforeDress.apply(this, _toConsumableArray10((_e = spec.beforeDress) !== null && _e !== void 0 ? _e : [])), this.afterDress.apply(this, _toConsumableArray10((_f = spec.afterDress) !== null && _f !== void 0 ? _f : [])), succeeded;
    }
  }, {
    key: "equipFirst",
    value: function(things, slot) {
      var _this = this;
      return things.length === 0 ? !0 : things.some(function(val) {
        return _this.equip(val, slot);
      });
    }
  }, {
    key: "equip",
    value: function(thing, slot) {
      var _this = this;
      return Array.isArray(thing) ? slot !== void 0 ? this.equipFirst(thing, slot) : thing.every(function(val) {
        return _this.equip(val);
      }) : thing instanceof import_kolmafia21.Item ? this.equipItem(thing, slot) : thing instanceof import_kolmafia21.Familiar ? this.equipFamiliar(thing) : thing instanceof Outfit2 ? this.equipSpec(thing.spec()) : this.equipSpec(thing);
    }
  }, {
    key: "equipRider",
    value: function(target, slot) {
      var _this = this;
      var current = this.riders.get(slot), targets = Array.isArray(target) ? target : [target];
      if (current)
        return targets.includes(current);
      var otherRiders = _toConsumableArray10(this.riders.entries()).filter(function(_ref) {
        var _ref2 = _slicedToArray9(_ref, 1), key = _ref2[0];
        return slot !== key;
      }).map(function(_ref32) {
        var _ref4 = _slicedToArray9(_ref32, 2), value = _ref4[1];
        return value;
      }), fam = targets.find(function(f) {
        return have(f) && _this.familiar !== f && !otherRiders.includes(f);
      });
      return fam ? (this.riders.set(slot, fam), !0) : !1;
    }
  }, {
    key: "bjornify",
    value: function(target) {
      return this.equipRider(target, $slot(_templateObject277 || (_templateObject277 = _taggedTemplateLiteral10(["buddy-bjorn"]))));
    }
  }, {
    key: "enthrone",
    value: function(target) {
      return this.equipRider(target, $slot(_templateObject286 || (_templateObject286 = _taggedTemplateLiteral10(["crown-of-thrones"]))));
    }
  }, {
    key: "setModes",
    value: function(modes) {
      var _a, _b, compatible = !0, _iterator4 = _createForOfIteratorHelper8(modeableCommands2), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var mode = _step4.value;
          mode !== "retrocape" && this.modes[mode] && modes[mode] && this.modes[mode] !== modes[mode] && (compatible = !1);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return this.modes.retrocape && modes.retrocape && (this.modes.retrocape[0] && modes.retrocape[0] && this.modes.retrocape[0] !== modes.retrocape[0] && (compatible = !1), this.modes.retrocape[1] && modes.retrocape[1] && this.modes.retrocape[1] !== modes.retrocape[1] && (compatible = !1), this.modes.retrocape[0] = (_a = this.modes.retrocape[0]) !== null && _a !== void 0 ? _a : modes.retrocape[0], this.modes.retrocape[1] = (_b = this.modes.retrocape[1]) !== null && _b !== void 0 ? _b : modes.retrocape[1]), this.modes = _objectSpread5(_objectSpread5({}, modes), this.modes), compatible;
    }
  }, {
    key: "canEquip",
    value: function(thing, slot) {
      var outfit2 = this.clone();
      return outfit2.equip(thing, slot);
    }
  }, {
    key: "tryEquip",
    value: function(thing, slot) {
      return this.canEquip(thing, slot) && this.equip(thing, slot);
    }
  }, {
    key: "afterDress",
    value: function() {
      var _this$postActions;
      (_this$postActions = this.postActions).push.apply(_this$postActions, arguments);
    }
  }, {
    key: "beforeDress",
    value: function() {
      var _this$preActions;
      (_this$preActions = this.preActions).push.apply(_this$preActions, arguments);
    }
  }, {
    key: "_dress",
    value: function(refreshed) {
      var _this = this;
      this.familiar && (0, import_kolmafia21.useFamiliar)(this.familiar);
      var targetEquipment = Array.from(this.equips.values()), usedSlots = /* @__PURE__ */ new Set(), nonaccessorySlots = $slots(_templateObject296 || (_templateObject296 = _taggedTemplateLiteral10(["weapon, off-hand, hat, back, shirt, pants, familiar"]))), bjorn = this.riders.get($slot(_templateObject306 || (_templateObject306 = _taggedTemplateLiteral10(["buddy-bjorn"]))));
      bjorn && (this.equips.get($slot(_templateObject3110 || (_templateObject3110 = _taggedTemplateLiteral10(["back"])))) === $item(_templateObject326 || (_templateObject326 = _taggedTemplateLiteral10(["Buddy Bjorn"]))) || this.getBonus($item(_templateObject336 || (_templateObject336 = _taggedTemplateLiteral10(["Buddy Bjorn"]))))) && (usedSlots.add($slot(_templateObject345 || (_templateObject345 = _taggedTemplateLiteral10(["buddy-bjorn"])))), usedSlots.add($slot(_templateObject354 || (_templateObject354 = _taggedTemplateLiteral10(["crown-of-thrones"])))));
      var crown = this.riders.get($slot(_templateObject364 || (_templateObject364 = _taggedTemplateLiteral10(["crown-of-thrones"]))));
      crown && (this.equips.get($slot(_templateObject374 || (_templateObject374 = _taggedTemplateLiteral10(["hat"])))) === $item(_templateObject383 || (_templateObject383 = _taggedTemplateLiteral10(["Crown of Thrones"]))) || this.getBonus($item(_templateObject393 || (_templateObject393 = _taggedTemplateLiteral10(["Crown of Thrones"]))))) && (usedSlots.add($slot(_templateObject403 || (_templateObject403 = _taggedTemplateLiteral10(["buddy-bjorn"])))), usedSlots.add($slot(_templateObject418 || (_templateObject418 = _taggedTemplateLiteral10(["crown-of-thrones"])))));
      var _iterator5 = _createForOfIteratorHelper8(nonaccessorySlots), _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          var slot = _step5.value;
          (targetEquipment.includes((0, import_kolmafia21.equippedItem)(slot)) && this.equips.get(slot) !== (0, import_kolmafia21.equippedItem)(slot) || this.avoid.includes((0, import_kolmafia21.equippedItem)(slot)) || slot === $slot(_templateObject493 || (_templateObject493 = _taggedTemplateLiteral10(["weapon"]))) && weaponHands((0, import_kolmafia21.equippedItem)(slot)) !== 1 && this.equips.has($slot(_templateObject503 || (_templateObject503 = _taggedTemplateLiteral10(["offhand"])))) && !this.equips.has($slot(_templateObject517 || (_templateObject517 = _taggedTemplateLiteral10(["weapon"]))))) && (0, import_kolmafia21.equip)(slot, $item.none);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      var _iterator6 = _createForOfIteratorHelper8(nonaccessorySlots), _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
          var _slot = _step6.value, equipment = this.equips.get(_slot);
          equipment && ((0, import_kolmafia21.equip)(_slot, equipment), usedSlots.add(_slot));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      var accessorySlots = $slots(_templateObject423 || (_templateObject423 = _taggedTemplateLiteral10(["acc1, acc2, acc3"]))), accessoryEquips = accessorySlots.map(function(slot2) {
        return _this.equips.get(slot2);
      }).filter(function(item5) {
        return item5 !== void 0;
      }), missingAccessories = [], _iterator7 = _createForOfIteratorHelper8(accessoryEquips), _step7;
      try {
        var _loop = function() {
          var accessory2 = _step7.value, alreadyEquipped = accessorySlots.find(function(slot2) {
            return !usedSlots.has(slot2) && (0, import_kolmafia21.equippedItem)(slot2) === accessory2;
          });
          alreadyEquipped ? usedSlots.add(alreadyEquipped) : missingAccessories.push(accessory2);
        };
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done; )
          _loop();
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      for (var _i2 = 0, _missingAccessories = missingAccessories; _i2 < _missingAccessories.length; _i2++) {
        var accessory = _missingAccessories[_i2], unusedSlot = accessorySlots.find(function(slot2) {
          return !usedSlots.has(slot2);
        });
        if (unusedSlot === void 0)
          throw "No accessory slots remaining";
        (0, import_kolmafia21.equip)(unusedSlot, accessory), usedSlots.add(unusedSlot);
      }
      var modes = convertToLibramModes(this.modes);
      if (this.modifier.length > 0 || _toConsumableArray10(this.bonuses).filter(function(_ref52) {
        var _ref62 = _slicedToArray9(_ref52, 2), value = _ref62[1];
        return value;
      }).length > 0) {
        var allRequirements = [new Requirement(this.modifier, {
          preventSlot: _toConsumableArray10(usedSlots),
          preventEquip: this.avoid,
          modes: modes,
          bonusEquip: this.bonuses
        })];
        if (refreshed && allRequirements.push(FORCE_REFRESH_REQUIREMENT), !Requirement.merge(allRequirements).maximize()) {
          if (refreshed)
            throw new Error("Failed to maximize properly!");
          (0, import_kolmafia21.cliExecute)("refresh inventory"), this._dress(!0);
          return;
        }
        (0, import_kolmafia21.logprint)("Maximize: ".concat(this.modifier));
      }
      if (applyModes(modes), bjorn && (0, import_kolmafia21.haveEquipped)($item(_templateObject433 || (_templateObject433 = _taggedTemplateLiteral10(["Buddy Bjorn"])))) && ((0, import_kolmafia21.myEnthronedFamiliar)() === bjorn && (0, import_kolmafia21.enthroneFamiliar)($familiar.none), (0, import_kolmafia21.myBjornedFamiliar)() !== bjorn && (0, import_kolmafia21.bjornifyFamiliar)(bjorn)), crown && (0, import_kolmafia21.haveEquipped)($item(_templateObject443 || (_templateObject443 = _taggedTemplateLiteral10(["Crown of Thrones"])))) && ((0, import_kolmafia21.myBjornedFamiliar)() === crown && (0, import_kolmafia21.bjornifyFamiliar)($familiar.none), (0, import_kolmafia21.myEnthronedFamiliar)() !== crown && (0, import_kolmafia21.enthroneFamiliar)(crown)), this.familiar !== void 0 && (0, import_kolmafia21.myFamiliar)() !== this.familiar)
        throw "Failed to fully dress (expected: familiar ".concat(this.familiar, ")");
      var _iterator8 = _createForOfIteratorHelper8(nonaccessorySlots), _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
          var _slot2 = _step8.value;
          if (this.equips.has(_slot2) && (0, import_kolmafia21.equippedItem)(_slot2) !== this.equips.get(_slot2))
            throw "Failed to fully dress (expected: ".concat(_slot2, " ").concat(this.equips.get(_slot2), ")");
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      var _iterator9 = _createForOfIteratorHelper8(accessoryEquips), _step9;
      try {
        var _loop2 = function() {
          var accessory2 = _step9.value;
          if ((0, import_kolmafia21.equippedAmount)(accessory2) < accessoryEquips.filter(function(acc) {
            return acc === accessory2;
          }).length)
            throw "Failed to fully dress (expected: acc ".concat(accessory2, ")");
        };
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done; )
          _loop2();
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      for (var _i3 = 0, _arr2 = [[$slot(_templateObject453 || (_templateObject453 = _taggedTemplateLiteral10(["buddy-bjorn"]))), $item(_templateObject463 || (_templateObject463 = _taggedTemplateLiteral10(["Buddy Bjorn"]))), import_kolmafia21.myBjornedFamiliar], [$slot(_templateObject473 || (_templateObject473 = _taggedTemplateLiteral10(["crown-of-thrones"]))), $item(_templateObject483 || (_templateObject483 = _taggedTemplateLiteral10(["Crown of Thrones"]))), import_kolmafia21.myEnthronedFamiliar]]; _i3 < _arr2.length; _i3++) {
        var _arr2$_i = _slicedToArray9(_arr2[_i3], 3), rider = _arr2$_i[0], throne = _arr2$_i[1], checkingFunction = _arr2$_i[2], wanted = this.riders.get(rider);
        if (_toConsumableArray10(this.equips.values()).includes(throne) && wanted && checkingFunction() !== wanted)
          throw "Failed to fully dress: (expected ".concat(rider, " ").concat(wanted, ")");
      }
    }
  }, {
    key: "dress",
    value: function() {
      var _iterator10 = _createForOfIteratorHelper8(this.preActions), _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
          var action = _step10.value;
          action();
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      this._dress(!1);
      var _iterator11 = _createForOfIteratorHelper8(this.postActions), _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
          var _action = _step11.value;
          _action();
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
    }
  }, {
    key: "clone",
    value: function() {
      var result = new Outfit2();
      return result.equips = new Map(this.equips), result.skipDefaults = this.skipDefaults, result.familiar = this.familiar, result.modifier = _toConsumableArray10(this.modifier), result.avoid = _toConsumableArray10(this.avoid), result.modes = _objectSpread5({}, this.modes), result.riders = new Map(this.riders), result.bonuses = new Map(this.bonuses), result.beforeDress.apply(result, _toConsumableArray10(this.preActions)), result.afterDress.apply(result, _toConsumableArray10(this.postActions)), result;
    }
  }, {
    key: "spec",
    value: function() {
      var _a, result = {
        modifier: _toConsumableArray10(this.modifier),
        avoid: _toConsumableArray10(this.avoid),
        skipDefaults: this.skipDefaults,
        modes: _objectSpread5({}, this.modes),
        bonuses: new Map(this.bonuses)
      };
      this.familiar && (result.familiar = this.familiar);
      var _iterator12 = _createForOfIteratorHelper8(outfitSlots), _step12;
      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
          var slotName = _step12.value, entry = this.equips.get((_a = (/* @__PURE__ */ new Map([["famequip", $slot(_templateObject542 || (_templateObject542 = _taggedTemplateLiteral10(["familiar"])))], ["offhand", $slot(_templateObject552 || (_templateObject552 = _taggedTemplateLiteral10(["off-hand"])))]])).get(slotName)) !== null && _a !== void 0 ? _a : (0, import_kolmafia21.toSlot)(slotName));
          entry && (result[slotName] = entry);
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
      var riders = {}, buddyRider = this.riders.get($slot(_templateObject523 || (_templateObject523 = _taggedTemplateLiteral10(["buddy-bjorn"]))));
      buddyRider !== void 0 && (riders["buddy-bjorn"] = buddyRider);
      var throneRider = this.riders.get($slot(_templateObject533 || (_templateObject533 = _taggedTemplateLiteral10(["crown-of-thrones"]))));
      return throneRider !== void 0 && (riders["crown-of-thrones"] = throneRider), (buddyRider !== void 0 || throneRider !== void 0) && (result.riders = riders), this.preActions.length && (result.beforeDress = this.preActions), this.postActions.length && (result.afterDress = this.postActions), result;
    }
  }], [{
    key: "current",
    value: function() {
      var _a, outfit2 = new Outfit2(), familiar3 = (0, import_kolmafia21.myFamiliar)();
      if (outfit2.equip(familiar3))
        throw "Failed to create outfit from current state (expected: familiar ".concat(familiar3, ")");
      var _iterator13 = _createForOfIteratorHelper8(outfitSlots), _step13;
      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done; ) {
          var slotName = _step13.value, slot = (_a = (/* @__PURE__ */ new Map([["famequip", $slot(_templateObject602 || (_templateObject602 = _taggedTemplateLiteral10(["familiar"])))], ["offhand", $slot(_templateObject616 || (_templateObject616 = _taggedTemplateLiteral10(["off-hand"])))]])).get(slotName)) !== null && _a !== void 0 ? _a : (0, import_kolmafia21.toSlot)(slotName), item5 = (0, import_kolmafia21.equippedItem)(slot);
          if (!outfit2.equip(item5, slot))
            throw "Failed to create outfit from current state (expected: ".concat(slot, " ").concat(item5, ")");
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
      return (0, import_kolmafia21.haveEquipped)($item(_templateObject562 || (_templateObject562 = _taggedTemplateLiteral10(["Crown of Thrones"])))) && outfit2.riders.set($slot(_templateObject572 || (_templateObject572 = _taggedTemplateLiteral10(["crown-of-thrones"]))), (0, import_kolmafia21.myEnthronedFamiliar)()), (0, import_kolmafia21.haveEquipped)($item(_templateObject582 || (_templateObject582 = _taggedTemplateLiteral10(["Buddy Bjorn"])))) && outfit2.riders.set($slot(_templateObject592 || (_templateObject592 = _taggedTemplateLiteral10(["buddy-bjorn"]))), (0, import_kolmafia21.myBjornedFamiliar)()), outfit2.setModes(getCurrentModes2()), outfit2;
    }
  }, {
    key: "from",
    value: function(spec) {
      var error = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, _a, outfit2 = new Outfit2();
      if (spec instanceof Requirement) {
        var result = {};
        result.modifier = spec.maximizeParameters, !((_a = spec.maximizeOptions.forceEquip) === null || _a === void 0) && _a.length && (result.equip = spec.maximizeOptions.forceEquip), result.avoid = spec.maximizeOptions.preventEquip, result.bonuses = spec.maximizeOptions.bonusEquip, spec.maximizeOptions.modes && (result.modes = convertFromLibramModes(spec.maximizeOptions.modes));
        var cleanedResult = Object.fromEntries(_toConsumableArray10(Object.entries(result)).filter(function(_ref7) {
          var _ref8 = _slicedToArray9(_ref7, 2), v = _ref8[1];
          return v !== void 0;
        }));
        return Outfit2.from(cleanedResult);
      }
      var success = outfit2.equip(spec);
      if (!success && error)
        throw error;
      return success ? outfit2 : null;
    }
  }]), Outfit2;
}();
function convertToLibramModes(modes) {
  var _a;
  return {
    backupcamera: modes.backupcamera,
    umbrella: modes.umbrella,
    snowsuit: modes.snowsuit,
    edpiece: modes.edpiece,
    retrocape: (_a = modes.retrocape) === null || _a === void 0 ? void 0 : _a.filter(function(s) {
      return s !== void 0;
    }).join(" "),
    parka: modes.parka,
    jillcandle: modes.jillcandle
  };
}
function convertFromLibramModes(modes) {
  return modes.retrocape ? _objectSpread5(_objectSpread5({}, modes), {}, {
    retrocape: modes.retrocape.split(" ")
  }) : modes;
}
function getCurrentModes2() {
  return {
    backupcamera: getMode("backupCameraMode", ["ml", "meat", "init"]),
    umbrella: getMode("umbrellaState", ["broken", "forward-facing", "bucket style", "pitchfork style", "constantly twirling", "cocoon"]),
    snowsuit: getMode("snowsuit", ["eyebrows", "smirk", "nose", "goatee", "hat"]),
    edpiece: getMode("edPiece", ["bear", "owl", "puma", "hyena", "mouse", "weasel", "fish"]),
    retrocape: [getMode("retroCapeSuperhero", ["vampire", "heck", "robot"]), getMode("retroCapeWashingInstructions", ["hold", "thrill", "kiss", "kill"])],
    parka: getMode("parkaMode", ["kachungasaur", "dilophosaur", "ghostasaurus", "spikolodon", "pterodactyl"]),
    jillcandle: getMode("jillcandle", ["disco", "ultraviolet", "reading", "red"])
  };
}
function getMode(property, options) {
  var val = get(property, "");
  return options.find(function(s) {
    return s === val;
  });
}

// node_modules/grimoire-kolmafia/dist/engine.js
var _templateObject119, _templateObject228;
function _taggedTemplateLiteral11(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _toConsumableArray11(arr) {
  return _arrayWithoutHoles11(arr) || _iterableToArray11(arr) || _unsupportedIterableToArray16(arr) || _nonIterableSpread11();
}
function _nonIterableSpread11() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray11(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles11(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray16(arr);
}
function _slicedToArray10(arr, i) {
  return _arrayWithHoles10(arr) || _iterableToArrayLimit10(arr, i) || _unsupportedIterableToArray16(arr, i) || _nonIterableRest10();
}
function _nonIterableRest10() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit10(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _arr = [], _n = !0, _d = !1, _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !(i && _arr.length === i)); _n = !0)
        ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        !_n && _i.return != null && _i.return();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles10(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _createForOfIteratorHelper9(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray16(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray16(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray16(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray16(o, minLen);
  }
}
function _arrayLikeToArray16(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function ownKeys6(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys6(Object(source), !0).forEach(function(key) {
      _defineProperty10(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys6(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty10(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _defineProperties12(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass12(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties12(Constructor.prototype, protoProps), staticProps && _defineProperties12(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _classCallCheck12(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
var grimoireCCS = "grimoire_macro", Engine = /* @__PURE__ */ function() {
  function Engine2(tasks, options) {
    var _this = this;
    _classCallCheck12(this, Engine2), this.attempts = {}, this.propertyManager = new PropertiesManager(), this.tasks_by_name = /* @__PURE__ */ new Map(), this.cachedCcsContents = "", this.options = options != null ? options : {}, this.tasks = tasks.map(function(task2) {
      return _objectSpread6(_objectSpread6({}, _this.options.default_task_options), task2);
    });
    var _iterator = _createForOfIteratorHelper9(this.tasks), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var task = _step.value;
        this.tasks_by_name.set(task.name, task);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    this.initPropertiesManager(this.propertyManager);
  }
  return _createClass12(Engine2, [{
    key: "getNextTask",
    value: function() {
      var _this = this;
      return this.tasks.find(function(task) {
        return _this.available(task);
      });
    }
  }, {
    key: "run",
    value: function(actions) {
      for (var i = 0; i < (actions != null ? actions : 1 / 0); i++) {
        var task = this.getNextTask();
        if (!task)
          return;
        this.execute(task);
      }
    }
  }, {
    key: "destruct",
    value: function() {
      this.propertyManager.resetAll(), (0, import_kolmafia22.setAutoAttack)(0);
    }
  }, {
    key: "available",
    value: function(task) {
      var _a, _b;
      if (((_a = task.limit) === null || _a === void 0 ? void 0 : _a.skip) !== void 0 && this.attempts[task.name] >= task.limit.skip)
        return !1;
      var _iterator2 = _createForOfIteratorHelper9((_b = task.after) !== null && _b !== void 0 ? _b : []), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var after = _step2.value, after_task = this.tasks_by_name.get(after);
          if (after_task === void 0)
            throw "Unknown task dependency ".concat(after, " on ").concat(task.name);
          if (!after_task.completed())
            return !1;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return !(task.ready && !task.ready() || task.completed());
    }
  }, {
    key: "execute",
    value: function(task) {
      var _a, _b, _c, _d, _e;
      (0, import_kolmafia22.print)(""), (0, import_kolmafia22.print)("Executing ".concat(task.name), "blue");
      var postcondition = (_b = (_a = task.limit) === null || _a === void 0 ? void 0 : _a.guard) === null || _b === void 0 ? void 0 : _b.call(_a);
      this.acquireItems(task), this.acquireEffects(task);
      var task_combat = (_d = (_c = task.combat) === null || _c === void 0 ? void 0 : _c.clone()) !== null && _d !== void 0 ? _d : new CombatStrategy(), outfit2 = this.createOutfit(task), task_resources = new CombatResources();
      this.customize(task, outfit2, task_combat, task_resources), this.dress(task, outfit2), this.setCombat(task, task_combat, task_resources), this.setChoices(task, this.propertyManager);
      var _iterator3 = _createForOfIteratorHelper9(task_resources.all()), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          var resource = _step3.value;
          (_e = resource.prepare) === null || _e === void 0 || _e.call(resource);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      for (this.prepare(task), this.do(task); this.shouldRepeatAdv(task); )
        _set("lastEncounter", ""), this.do(task);
      this.post(task), this.markAttempt(task), this.checkLimits(task, postcondition);
    }
  }, {
    key: "acquireItems",
    value: function(task) {
      var _a, acquire = undelay(task.acquire), _iterator4 = _createForOfIteratorHelper9(acquire || []), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var to_get = _step4.value, num_needed = (_a = to_get.num) !== null && _a !== void 0 ? _a : 1, num_have = (0, import_kolmafia22.itemAmount)(to_get.item) + (0, import_kolmafia22.equippedAmount)(to_get.item);
          if (!(num_needed <= num_have) && !(to_get.useful !== void 0 && !to_get.useful()) && (to_get.get ? to_get.get() : to_get.price !== void 0 ? (0, import_kolmafia22.buy)(to_get.item, num_needed - num_have, to_get.price) : Object.keys((0, import_kolmafia22.getRelated)(to_get.item, "fold")).length > 0 ? (0, import_kolmafia22.cliExecute)("fold ".concat(to_get.item)) : (0, import_kolmafia22.retrieveItem)(to_get.item, num_needed), (0, import_kolmafia22.itemAmount)(to_get.item) + (0, import_kolmafia22.equippedAmount)(to_get.item) < num_needed && !to_get.optional))
            throw "Task ".concat(task.name, " was unable to acquire ").concat(num_needed, " ").concat(to_get.item);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "acquireEffects",
    value: function(task) {
      var _a, effects = (_a = undelay(task.effects)) !== null && _a !== void 0 ? _a : [], songs = effects.filter(function(effect2) {
        return isSong(effect2);
      });
      if (songs.length > maxSongs())
        throw "Too many AT songs";
      for (var extraSongs = Object.keys((0, import_kolmafia22.myEffects)()).map(function(effectName) {
        return (0, import_kolmafia22.toEffect)(effectName);
      }).filter(function(effect2) {
        return isSong(effect2) && !songs.includes(effect2);
      }); songs.length + extraSongs.length > maxSongs(); ) {
        var toRemove = extraSongs.pop();
        if (toRemove === void 0)
          break;
        uneffect(toRemove);
      }
      var _iterator5 = _createForOfIteratorHelper9(effects), _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          var effect = _step5.value;
          ensureEffect(effect);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }, {
    key: "createOutfit",
    value: function(task) {
      var spec = undelay(task.outfit);
      if (spec instanceof Outfit)
        return spec.clone();
      var outfit2 = new Outfit();
      if (spec !== void 0 && !outfit2.equip(spec) && !this.options.allow_partial_outfits)
        throw "Unable to equip all items for ".concat(task.name);
      return outfit2;
    }
  }, {
    key: "dress",
    value: function(task, outfit2) {
      task.do instanceof import_kolmafia22.Location && (0, import_kolmafia22.setLocation)(task.do), outfit2.dress();
    }
  }, {
    key: "customize",
    value: function(task, outfit2, combat, resources) {
    }
  }, {
    key: "setChoices",
    value: function(task, manager) {
      for (var _a, _i = 0, _Object$entries = Object.entries(undelay((_a = task.choices) !== null && _a !== void 0 ? _a : {})); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray10(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
        value !== void 0 && manager.setChoice(parseInt(key), value);
      }
    }
  }, {
    key: "setCombat",
    value: function(task, task_combat, task_resources) {
      var _a, macro = task_combat.compile(task_resources, (_a = this.options) === null || _a === void 0 ? void 0 : _a.combat_defaults, task.do instanceof import_kolmafia22.Location ? task.do : void 0);
      if (macro.save(), !this.options.ccs) {
        var otherCCSEntries = task_combat.compileCcs(), ccsContents = ["[default]", '"'.concat(macro.toString(), '"')].concat(_toConsumableArray11(otherCCSEntries)).join("\n");
        (0, import_kolmafia22.logprint)("CCS: ".concat(ccsContents.replace("\n", "\\n "))), ccsContents !== this.cachedCcsContents && ((0, import_kolmafia22.writeCcs)(ccsContents, grimoireCCS), (0, import_kolmafia22.cliExecute)("ccs ".concat(grimoireCCS)), this.cachedCcsContents = ccsContents);
      }
      var autoattack = task_combat.compileAutoattack();
      autoattack.toString().length > 1 ? ((0, import_kolmafia22.logprint)("Autoattack macro: ".concat(autoattack.toString())), autoattack.setAutoAttack()) : (0, import_kolmafia22.setAutoAttack)(0);
    }
  }, {
    key: "prepare",
    value: function(task) {
      var _a;
      (_a = task.prepare) === null || _a === void 0 || _a.call(task);
    }
  }, {
    key: "do",
    value: function(task) {
      var result = typeof task.do == "function" ? task.do() : task.do;
      for (result instanceof import_kolmafia22.Location && (0, import_kolmafia22.adv1)(result, -1, ""), (0, import_kolmafia22.runCombat)(); (0, import_kolmafia22.inMultiFight)(); )
        (0, import_kolmafia22.runCombat)();
      (0, import_kolmafia22.choiceFollowsFight)() && (0, import_kolmafia22.runChoice)(-1);
    }
  }, {
    key: "shouldRepeatAdv",
    value: function(task) {
      return task.do instanceof import_kolmafia22.Location && lastEncounterWasWanderingNC();
    }
  }, {
    key: "post",
    value: function(task) {
      var _a;
      (_a = task.post) === null || _a === void 0 || _a.call(task);
    }
  }, {
    key: "markAttempt",
    value: function(task) {
      task.name in this.attempts || (this.attempts[task.name] = 0), this.attempts[task.name]++;
    }
  }, {
    key: "checkLimits",
    value: function(task, postcondition) {
      var _a;
      if (!!task.limit) {
        var failureMessage = task.limit.message ? " ".concat(task.limit.message) : "";
        if (!task.completed()) {
          if (task.limit.tries && this.attempts[task.name] >= task.limit.tries)
            throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.tries, " attempts. Please check what went wrong.").concat(failureMessage);
          if (task.limit.soft && this.attempts[task.name] >= task.limit.soft)
            throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.soft, " attempts. Please check what went wrong (you may just be unlucky).").concat(failureMessage);
          if (task.limit.turns && task.do instanceof import_kolmafia22.Location && task.do.turnsSpent >= task.limit.turns)
            throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.turns, " turns. Please check what went wrong.").concat(failureMessage);
          if (task.limit.unready && ((_a = task.ready) === null || _a === void 0 ? void 0 : _a.call(task)))
            throw "Task ".concat(task.name, " is still ready, but it should not be. Please check what went wrong.").concat(failureMessage);
          if (task.limit.completed)
            throw "Task ".concat(task.name, " is not completed, but it should be. Please check what went wrong.").concat(failureMessage);
        }
        if (postcondition && !postcondition())
          throw "Task ".concat(task.name, " failed its guard. Please check what went wrong.").concat(failureMessage);
      }
    }
  }, {
    key: "getDefaultSettings",
    value: function() {
      return this.constructor.defaultSettings;
    }
  }, {
    key: "initPropertiesManager",
    value: function(manager) {
      var _a;
      manager.set(this.getDefaultSettings()), this.options.ccs !== "" && (this.options.ccs === void 0 && (0, import_kolmafia22.readCcs)(grimoireCCS) === "" && (0, import_kolmafia22.writeCcs)("[ default ]\nabort", grimoireCCS), manager.set({
        customCombatScript: (_a = this.options.ccs) !== null && _a !== void 0 ? _a : grimoireCCS
      }));
    }
  }]), Engine2;
}();
Engine.defaultSettings = {
  logPreferenceChange: !0,
  logPreferenceChangeFilter: _toConsumableArray11(new Set([].concat(_toConsumableArray11(get("logPreferenceChangeFilter").split(",")), ["libram_savedMacro", "maximizerMRUList", "testudinalTeachings", "_lastCombatStarted"]))).sort().filter(function(a) {
    return a;
  }).join(","),
  battleAction: "custom combat script",
  autoSatisfyWithMall: !0,
  autoSatisfyWithNPCs: !0,
  autoSatisfyWithCoinmasters: !0,
  autoSatisfyWithStash: !1,
  dontStopForCounters: !0,
  maximizerFoldables: !0,
  hpAutoRecovery: "-0.05",
  hpAutoRecoveryTarget: "0.0",
  mpAutoRecovery: "-0.05",
  mpAutoRecoveryTarget: "0.0",
  afterAdventureScript: "",
  betweenBattleScript: "",
  choiceAdventureScript: "",
  familiarScript: "",
  currentMood: "apathetic",
  autoTuxedo: !0,
  autoPinkyRing: !0,
  autoGarish: !0,
  allowNonMoodBurning: !1,
  allowSummonBurning: !0,
  libramSkillsSoftcore: "none"
};
function maxSongs() {
  return have($skill(_templateObject119 || (_templateObject119 = _taggedTemplateLiteral11(["Mariachi Memory"])))) ? 4 : 3;
}
var wanderingNCs = /* @__PURE__ */ new Set([
  "Wooof! Wooooooof!",
  "Playing Fetch*",
  "Aunts not Ants",
  "Bath Time",
  "Beware of Aligator",
  "Delicious Sprouts",
  "Hypnotic Master",
  "Lost and Found",
  "Poetic Justice",
  "Summer Days",
  "Teacher's Pet",
  "A Pound of Cure",
  "Nantucket Snapper",
  "Blue Monday",
  "Capital!",
  "Training Day",
  "Boxed In",
  "Duel Nature",
  "Slow Food",
  "A Rolling Turtle Gathers No Moss",
  "Slow Road to Hell",
  "C'mere, Little Fella",
  "The Real Victims",
  "Like That Time in Tortuga",
  "Cleansing your Palette",
  "Harem Scarum",
  "Turtle in peril",
  "No Man, No Hole",
  "Slow and Steady Wins the Brawl",
  "Stormy Weather",
  "Turtles of the Universe",
  "O Turtle Were Art Thou",
  "Allow 6-8 Weeks For Delivery",
  "Kick the Can",
  "Turtles All The Way Around",
  "More eXtreme Than Usual",
  "Jewel in the Rough",
  "The worst kind of drowning",
  "Even Tamer Than Usual",
  "Never Break the Chain",
  "Close, but Yes Cigar",
  "Armchair Quarterback",
  "This Turtle Rocks!",
  "Really Sticking Her Neck Out",
  "It Came from Beneath the Sewer? Great!",
  "Don't Be Alarmed, Now",
  "Puttin' it on Wax",
  "More Like... Hurtle",
  "Musk! Musk! Musk!",
  "Silent Strolling"
]), zoneSpecificNCs = /* @__PURE__ */ new Map([
  ["The Horror...", $locations(_templateObject228 || (_templateObject228 = _taggedTemplateLiteral11(["Frat House"])))]
]);
function lastEncounterWasWanderingNC() {
  var _a, _b, last = get("lastEncounter");
  if (zoneSpecificNCs.has(last)) {
    var zones = (_a = zoneSpecificNCs.get(last)) !== null && _a !== void 0 ? _a : [];
    return zones.includes((_b = get("lastAdventure")) !== null && _b !== void 0 ? _b : $location.none);
  } else
    return wanderingNCs.has(last);
}

// node_modules/grimoire-kolmafia/dist/route.js
init_kolmafia_polyfill();
function ownKeys7(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread7(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys7(Object(source), !0).forEach(function(key) {
      _defineProperty11(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys7(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty11(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _createForOfIteratorHelper10(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray17(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e2) {
    didErr = !0, err = _e2;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray17(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray17(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray17(o, minLen);
  }
}
function _arrayLikeToArray17(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function getTasks(quests) {
  var implicitAfter = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, _a, _b, result = [], _iterator = _createForOfIteratorHelper10(quests), _step;
  try {
    var _loop = function() {
      var quest = _step.value, questCompleted = quest.completed, questReady = quest.ready, _iterator3 = _createForOfIteratorHelper10(quest.tasks), _step3;
      try {
        var _loop22 = function() {
          var task2 = _step3.value, renamedTask = _objectSpread7({}, task2);
          if (renamedTask.name = "".concat(quest.name, "/").concat(task2.name), renamedTask.after = (_a = task2.after) === null || _a === void 0 ? void 0 : _a.map(function(after2) {
            return after2.includes("/") ? after2 : "".concat(quest.name, "/").concat(after2);
          }), implicitAfter && task2.after === void 0 && result.length > 0 && (renamedTask.after = [result[result.length - 1].name]), questCompleted !== void 0) {
            var taskCompleted = task2.completed;
            renamedTask.completed = function() {
              return questCompleted() || taskCompleted();
            };
          }
          var taskReady = renamedTask.ready;
          questReady !== void 0 && taskReady !== void 0 ? renamedTask.ready = function() {
            return questReady() && taskReady();
          } : questReady !== void 0 && (renamedTask.ready = function() {
            return questReady();
          }), result.push(renamedTask);
        };
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; )
          _loop22();
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    };
    for (_iterator.s(); !(_step = _iterator.n()).done; )
      _loop();
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  for (var names = /* @__PURE__ */ new Set(), _i = 0, _result = result; _i < _result.length; _i++) {
    var task = _result[_i];
    names.add(task.name);
  }
  for (var _i2 = 0, _result2 = result; _i2 < _result2.length; _i2++) {
    var _task = _result2[_i2], _iterator2 = _createForOfIteratorHelper10((_b = _task.after) !== null && _b !== void 0 ? _b : []), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var after = _step2.value;
        if (!names.has(after))
          throw "Unknown task dependency ".concat(after, " of ").concat(_task.name);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  return result;
}

// node_modules/grimoire-kolmafia/dist/task.js
init_kolmafia_polyfill();

// node_modules/grimoire-kolmafia/dist/limit.js
init_kolmafia_polyfill();

// src/main.ts
var import_kolmafia41 = require("kolmafia");

// src/engine.ts
init_kolmafia_polyfill();
var import_kolmafia27 = require("kolmafia");

// src/juneCleaver.ts
init_kolmafia_polyfill();
var import_kolmafia24 = require("kolmafia");

// src/garboValue.ts
init_kolmafia_polyfill();
var import_kolmafia23 = require("kolmafia");
var _templateObject120, _templateObject229, _templateObject321, _templateObject419, _templateObject518, _templateObject617, _templateObject716, _templateObject816, _templateObject916, _templateObject1012, _templateObject1110, _templateObject129, _templateObject139, _templateObject148, _templateObject158, _templateObject168, _templateObject178, _templateObject188, _templateObject198, _templateObject208, _templateObject2112, _templateObject2210, _templateObject238, _templateObject248, _templateObject258, _templateObject268, _templateObject278, _templateObject287, _templateObject297, _templateObject307, _templateObject3111, _templateObject327, _templateObject337, _templateObject346, _templateObject355, _templateObject365, _templateObject375, _templateObject384, _templateObject394, _templateObject404, _templateObject4110, _templateObject424, _templateObject434, _templateObject444, _templateObject454;
function _taggedTemplateLiteral12(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _createForOfIteratorHelper11(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray18(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _slicedToArray11(arr, i) {
  return _arrayWithHoles11(arr) || _iterableToArrayLimit11(arr, i) || _unsupportedIterableToArray18(arr, i) || _nonIterableRest11();
}
function _nonIterableRest11() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit11(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _arr = [], _n = !0, _d = !1, _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !(i && _arr.length === i)); _n = !0)
        ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        !_n && _i.return != null && _i.return();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles11(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _toConsumableArray12(arr) {
  return _arrayWithoutHoles12(arr) || _iterableToArray12(arr) || _unsupportedIterableToArray18(arr) || _nonIterableSpread12();
}
function _nonIterableSpread12() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray18(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray18(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray18(o, minLen);
  }
}
function _iterableToArray12(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles12(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray18(arr);
}
function _arrayLikeToArray18(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function currency() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++)
    items[_key] = arguments[_key];
  var unitCost = items.map(function(i) {
    var coinmaster = import_kolmafia23.Coinmaster.all().find(function(c) {
      return (0, import_kolmafia23.sellPrice)(c, i) > 0;
    });
    if (coinmaster)
      return [i, (0, import_kolmafia23.sellPrice)(coinmaster, i)];
    throw "Invalid coinmaster item ".concat(i);
  });
  return function() {
    return Math.max.apply(Math, _toConsumableArray12(unitCost.map(function(_ref) {
      var _ref2 = _slicedToArray11(_ref, 2), item5 = _ref2[0], cost = _ref2[1];
      return garboValue(item5) / cost;
    })));
  };
}
function complexCandy() {
  var candies = import_kolmafia23.Item.all().filter(function(i) {
    return i.candyType === "complex";
  }), candyLookup = [[], [], [], [], []], _iterator = _createForOfIteratorHelper11(candies), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var candy = _step.value, id = (0, import_kolmafia23.toInt)(candy) % 5;
      candy.tradeable && candyLookup[id].push(candy);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var candyIdPrices = candies.filter(function(i) {
    return !i.tradeable;
  }).map(function(i) {
    return [i, function() {
      return Math.min.apply(Math, _toConsumableArray12(candyLookup[(0, import_kolmafia23.toInt)(i) % 5].map(function(i2) {
        return garboValue(i2);
      })));
    }];
  });
  return candyIdPrices;
}
var specialValueLookup = new Map([[$item(_templateObject120 || (_templateObject120 = _taggedTemplateLiteral12(["Freddy Kruegerand"]))), currency.apply(void 0, _toConsumableArray12($items(_templateObject229 || (_templateObject229 = _taggedTemplateLiteral12(["bottle of Bloodweiser, electric Kool-Aid, Dreadsylvanian skeleton key"])))))], [$item(_templateObject321 || (_templateObject321 = _taggedTemplateLiteral12(["Beach Buck"]))), currency($item(_templateObject419 || (_templateObject419 = _taggedTemplateLiteral12(["one-day ticket to Spring Break Beach"]))))], [$item(_templateObject518 || (_templateObject518 = _taggedTemplateLiteral12(["Coinspiracy"]))), currency.apply(void 0, _toConsumableArray12($items(_templateObject617 || (_templateObject617 = _taggedTemplateLiteral12(["Merc Core deployment orders, karma shawarma"])))))], [$item(_templateObject716 || (_templateObject716 = _taggedTemplateLiteral12(["FunFunds\u2122"]))), currency($item(_templateObject816 || (_templateObject816 = _taggedTemplateLiteral12(["one-day ticket to Dinseylandfill"]))))], [$item(_templateObject916 || (_templateObject916 = _taggedTemplateLiteral12(["Volcoino"]))), currency($item(_templateObject1012 || (_templateObject1012 = _taggedTemplateLiteral12(["one-day ticket to That 70s Volcano"]))))], [$item(_templateObject1110 || (_templateObject1110 = _taggedTemplateLiteral12(["Wal-Mart gift certificate"]))), currency($item(_templateObject129 || (_templateObject129 = _taggedTemplateLiteral12(["one-day ticket to The Glaciest"]))))], [$item(_templateObject139 || (_templateObject139 = _taggedTemplateLiteral12(["Rubee\u2122"]))), currency($item(_templateObject148 || (_templateObject148 = _taggedTemplateLiteral12(["FantasyRealm guest pass"]))))], [$item(_templateObject158 || (_templateObject158 = _taggedTemplateLiteral12(["Guzzlrbuck"]))), currency($item(_templateObject168 || (_templateObject168 = _taggedTemplateLiteral12(["Never Don't Stop Not Striving"]))))]].concat(_toConsumableArray12(complexCandy()), [[$item(_templateObject178 || (_templateObject178 = _taggedTemplateLiteral12(["Merc Core deployment orders"]))), function() {
  return garboValue($item(_templateObject188 || (_templateObject188 = _taggedTemplateLiteral12(["one-day ticket to Conspiracy Island"]))));
}], [$item(_templateObject198 || (_templateObject198 = _taggedTemplateLiteral12(["free-range mushroom"]))), function() {
  return 3 * Math.max(garboValue($item(_templateObject208 || (_templateObject208 = _taggedTemplateLiteral12(["mushroom tea"])))) - garboValue($item(_templateObject2112 || (_templateObject2112 = _taggedTemplateLiteral12(["soda water"])))), garboValue($item(_templateObject2210 || (_templateObject2210 = _taggedTemplateLiteral12(["mushroom whiskey"])))) - garboValue($item(_templateObject238 || (_templateObject238 = _taggedTemplateLiteral12(["fermenting powder"])))), garboValue($item(_templateObject248 || (_templateObject248 = _taggedTemplateLiteral12(["mushroom filet"])))));
}], [$item(_templateObject258 || (_templateObject258 = _taggedTemplateLiteral12(["little firkin"]))), function() {
  return garboAverageValue.apply(void 0, _toConsumableArray12($items(_templateObject268 || (_templateObject268 = _taggedTemplateLiteral12(["martini, screwdriver, strawberry daiquiri, margarita, vodka martini, tequila sunrise, bottle of Amontillado, barrel-aged martini, barrel gun"])))));
}], [$item(_templateObject278 || (_templateObject278 = _taggedTemplateLiteral12(["normal barrel"]))), function() {
  return garboAverageValue.apply(void 0, _toConsumableArray12($items(_templateObject287 || (_templateObject287 = _taggedTemplateLiteral12(["a little sump'm sump'm, pink pony, rockin' wagon, roll in the hay, slip 'n' slide, slap and tickle"])))));
}], [$item(_templateObject297 || (_templateObject297 = _taggedTemplateLiteral12(["big tun"]))), function() {
  return garboAverageValue.apply(void 0, _toConsumableArray12($items(_templateObject307 || (_templateObject307 = _taggedTemplateLiteral12(["gibson, gin and tonic, mimosette, tequila sunset, vodka and tonic, zmobie"])))));
}], [$item(_templateObject3111 || (_templateObject3111 = _taggedTemplateLiteral12(["weathered barrel"]))), function() {
  return garboAverageValue.apply(void 0, _toConsumableArray12($items(_templateObject327 || (_templateObject327 = _taggedTemplateLiteral12(["bean burrito, enchanted bean burrito, jumping bean burrito"])))));
}], [$item(_templateObject337 || (_templateObject337 = _taggedTemplateLiteral12(["dusty barrel"]))), function() {
  return garboAverageValue.apply(void 0, _toConsumableArray12($items(_templateObject346 || (_templateObject346 = _taggedTemplateLiteral12(["spicy bean burrito, spicy enchanted bean burrito, spicy jumping bean burrito"])))));
}], [$item(_templateObject355 || (_templateObject355 = _taggedTemplateLiteral12(["disintegrating barrel"]))), function() {
  return garboAverageValue.apply(void 0, _toConsumableArray12($items(_templateObject365 || (_templateObject365 = _taggedTemplateLiteral12(["insanely spicy bean burrito, insanely spicy enchanted bean burrito, insanely spicy jumping bean burrito"])))));
}], [$item(_templateObject375 || (_templateObject375 = _taggedTemplateLiteral12(["moist barrel"]))), function() {
  return garboAverageValue.apply(void 0, _toConsumableArray12($items(_templateObject384 || (_templateObject384 = _taggedTemplateLiteral12(["cast, concentrated magicalness pill, enchanted barbell, giant moxie weed, Mountain Stream soda"])))));
}], [$item(_templateObject394 || (_templateObject394 = _taggedTemplateLiteral12(["rotting barrel"]))), function() {
  return garboAverageValue.apply(void 0, _toConsumableArray12($items(_templateObject404 || (_templateObject404 = _taggedTemplateLiteral12(["Doc Galaktik's Ailment Ointment, extra-strength strongness elixir, jug-o-magicalness, Marquis de Poivre soda, suntan lotion of moxiousness"])))));
}], [$item(_templateObject4110 || (_templateObject4110 = _taggedTemplateLiteral12(["mouldering barrel"]))), function() {
  return garboAverageValue.apply(void 0, _toConsumableArray12($items(_templateObject424 || (_templateObject424 = _taggedTemplateLiteral12(["creepy ginger ale, haunted battery, scroll of drastic healing, synthetic marrow, the funk"])))));
}], [$item(_templateObject434 || (_templateObject434 = _taggedTemplateLiteral12(["barnacled barrel"]))), function() {
  return garboAverageValue.apply(void 0, _toConsumableArray12($items(_templateObject444 || (_templateObject444 = _taggedTemplateLiteral12(["Alewife\u2122 Ale, bazookafish bubble gum, beefy fish meat, eel battery, glistening fish meat, ink bladder, pufferfish spine, shark cartilage, slick fish meat, slug of rum, slug of shochu, slug of vodka, temporary teardrop tattoo"])))));
}], [$item(_templateObject454 || (_templateObject454 = _taggedTemplateLiteral12(["fake hand"]))), function() {
  return 5e4;
}]]));
function garboSaleValue(item5, useHistorical) {
  if (useHistorical && (0, import_kolmafia23.historicalAge)(item5) <= 7 && (0, import_kolmafia23.historicalPrice)(item5) > 0) {
    var isMallMin = (0, import_kolmafia23.historicalPrice)(item5) === Math.max(100, 2 * (0, import_kolmafia23.autosellPrice)(item5));
    return isMallMin ? (0, import_kolmafia23.autosellPrice)(item5) : 0.9 * (0, import_kolmafia23.historicalPrice)(item5);
  }
  return getSaleValue(item5);
}
var garboRegularValueCache = /* @__PURE__ */ new Map(), garboHistoricalValueCache = /* @__PURE__ */ new Map();
function garboValue(item5) {
  var _garboRegularValueCac, useHistorical = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, cachedValue = (_garboRegularValueCac = garboRegularValueCache.get(item5)) !== null && _garboRegularValueCac !== void 0 ? _garboRegularValueCac : useHistorical ? garboHistoricalValueCache.get(item5) : void 0;
  if (cachedValue === void 0) {
    var specialValueCompute = specialValueLookup.get(item5), value = specialValueCompute ? specialValueCompute() : garboSaleValue(item5, useHistorical);
    return (useHistorical ? garboHistoricalValueCache : garboRegularValueCache).set(item5, value), value;
  }
  return cachedValue;
}
function garboAverageValue() {
  for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
    items[_key2] = arguments[_key2];
  return sumNumbers(items.map(function(i) {
    return garboValue(i);
  })) / items.length;
}

// src/juneCleaver.ts
var _templateObject121, _templateObject230, _templateObject328, _templateObject420, _templateObject519, _templateObject618, _templateObject717, _templateObject817;
function _toConsumableArray13(arr) {
  return _arrayWithoutHoles13(arr) || _iterableToArray13(arr) || _unsupportedIterableToArray19(arr) || _nonIterableSpread13();
}
function _nonIterableSpread13() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray19(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray19(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray19(o, minLen);
  }
}
function _iterableToArray13(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles13(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray19(arr);
}
function _arrayLikeToArray19(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral13(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var juneCleaverChoiceValues = {
  1467: {
    1: 0,
    2: 0,
    3: 5 * get("valueOfAdventure")
  },
  1468: {
    1: 0,
    2: 5,
    3: 0
  },
  1469: {
    1: 0,
    2: $item(_templateObject121 || (_templateObject121 = _taggedTemplateLiteral13(["Dad's brandy"]))),
    3: 1500
  },
  1470: {
    1: 0,
    2: $item(_templateObject230 || (_templateObject230 = _taggedTemplateLiteral13(["teacher's pen"]))),
    3: 0
  },
  1471: {
    1: $item(_templateObject328 || (_templateObject328 = _taggedTemplateLiteral13(["savings bond"]))),
    2: 250,
    3: 0
  },
  1472: {
    1: $item(_templateObject420 || (_templateObject420 = _taggedTemplateLiteral13(["trampled ticket stub"]))),
    2: $item(_templateObject519 || (_templateObject519 = _taggedTemplateLiteral13(["fire-roasted lake trout"]))),
    3: 0
  },
  1473: {
    1: $item(_templateObject618 || (_templateObject618 = _taggedTemplateLiteral13(["gob of wet hair"]))),
    2: 0,
    3: 0
  },
  1474: {
    1: 0,
    2: $item(_templateObject717 || (_templateObject717 = _taggedTemplateLiteral13(["guilty sprout"]))),
    3: 0
  },
  1475: {
    1: $item(_templateObject817 || (_templateObject817 = _taggedTemplateLiteral13(["mother's necklace"]))),
    2: 0,
    3: 0
  }
};
function valueJuneCleaverOption(result) {
  return result instanceof import_kolmafia24.Item ? garboValue(result) : result;
}
function bestJuneCleaverOption(id) {
  var options = [1, 2, 3];
  return maxBy(options, function(option) {
    return valueJuneCleaverOption(juneCleaverChoiceValues[id][option]);
  });
}
var juneCleaverSkipChoices;
function skipJuneCleaverChoices() {
  return juneCleaverSkipChoices || (juneCleaverSkipChoices = _toConsumableArray13(JuneCleaver_exports.choices).sort(function(a, b) {
    return valueJuneCleaverOption(juneCleaverChoiceValues[a][bestJuneCleaverOption(a)]) - valueJuneCleaverOption(juneCleaverChoiceValues[b][bestJuneCleaverOption(b)]);
  }).splice(0, 3)), juneCleaverSkipChoices;
}
function shouldSkip(choice) {
  return JuneCleaver_exports.skipsRemaining() > 0 && skipJuneCleaverChoices().includes(choice);
}

// src/lib.ts
init_kolmafia_polyfill();
var import_kolmafia26 = require("kolmafia");

// src/orbmanager.ts
init_kolmafia_polyfill();
var import_kolmafia25 = require("kolmafia");
var _templateObject130, _templateObject231;
function _taggedTemplateLiteral14(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var currentPonder = CrystalBall_exports.ponder(), ponderIsValid = !0;
function updatePonder() {
  currentPonder = CrystalBall_exports.ponder(), ponderIsValid = !0;
}
function ponder2() {
  return ponderIsValid || updatePonder(), currentPonder;
}
function invalidate() {
  ponderIsValid = !1;
}
function toasterGaze() {
  var shore = $location(_templateObject130 || (_templateObject130 = _taggedTemplateLiteral14(["The Shore, Inc. Travel Agency"]))), pass = $item(_templateObject231 || (_templateObject231 = _taggedTemplateLiteral14(["Desert Bus pass"])));
  !(0, import_kolmafia25.canAdventure)(shore) && !have(pass) && (0, import_kolmafia25.retrieveItem)(pass);
  try {
    var store = (0, import_kolmafia25.visitUrl)((0, import_kolmafia25.toUrl)(shore));
    store.includes("Check out the gift shop") || printh("Unable to stare longingly at toast"), (0, import_kolmafia25.runChoice)(4);
  } catch (e) {
    printd("We ran into an issue when gazing at toast: ".concat(e, "."));
  } finally {
    (0, import_kolmafia25.visitUrl)("main.php");
  }
}

// src/lib.ts
var _templateObject131, _templateObject239, _templateObject329, _templateObject421, _templateObject520, _templateObject619, _templateObject718, _templateObject818, _templateObject917, _templateObject1013, _templateObject1111, _templateObject1210, _templateObject1310, _templateObject149, _templateObject159, _templateObject169, _templateObject179, _templateObject189, _templateObject199, _templateObject209, _templateObject2113, _templateObject2211, _templateObject2310, _templateObject249, _templateObject259, _templateObject269, _templateObject279, _templateObject288, _templateObject298, _templateObject308, _templateObject3112, _templateObject3210, _templateObject338, _ref3, _templateObject347, _templateObject356, _ref5, _templateObject366, _ref6, _templateObject376, _templateObject385, _templateObject395, _templateObject405, _templateObject4111, _templateObject425, _ref12, _templateObject435, _templateObject445, _templateObject455, _templateObject464, _ref16, _templateObject474, _ref17, _templateObject484, _templateObject494, _ref19, _templateObject504;
function _defineProperty12(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _slicedToArray12(arr, i) {
  return _arrayWithHoles12(arr) || _iterableToArrayLimit12(arr, i) || _unsupportedIterableToArray20(arr, i) || _nonIterableRest12();
}
function _nonIterableRest12() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit12(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _arr = [], _n = !0, _d = !1, _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !(i && _arr.length === i)); _n = !0)
        ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        !_n && _i.return != null && _i.return();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles12(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _toConsumableArray14(arr) {
  return _arrayWithoutHoles14(arr) || _iterableToArray14(arr) || _unsupportedIterableToArray20(arr) || _nonIterableSpread14();
}
function _nonIterableSpread14() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray20(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray20(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray20(o, minLen);
  }
}
function _iterableToArray14(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles14(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray20(arr);
}
function _arrayLikeToArray20(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral15(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function shouldRedigitize() {
  var digitizesLeft = SourceTerminal_exports.getDigitizeUsesRemaining(), monsterCount = SourceTerminal_exports.getDigitizeMonsterCount() + 1, digitizeAdventuresUsed = monsterCount * (monsterCount + 1) * 5 - 3;
  return SourceTerminal_exports.have() && SourceTerminal_exports.canDigitize() && (0, import_kolmafia26.myAdventures)() / 0.96 < digitizesLeft * digitizeAdventuresUsed;
}
var HIGHLIGHT = (0, import_kolmafia26.isDarkMode)() ? "yellow" : "blue";
function printh(message) {
  (0, import_kolmafia26.print)(message, HIGHLIGHT);
}
function printd(message) {
  args.debug && (0, import_kolmafia26.print)(message, HIGHLIGHT);
}
function sober() {
  return (0, import_kolmafia26.myInebriety)() <= (0, import_kolmafia26.inebrietyLimit)() + ((0, import_kolmafia26.myFamiliar)() === $familiar(_templateObject131 || (_templateObject131 = _taggedTemplateLiteral15(["Stooper"]))) ? -1 : 0);
}
var neutralMonsters = {
  recruit: $monster(_templateObject239 || (_templateObject239 = _taggedTemplateLiteral15(["Crimbuccaneer new recruit"]))),
  privateer: $monster(_templateObject329 || (_templateObject329 = _taggedTemplateLiteral15(["Crimbuccaneer privateer"]))),
  dropout: $monster(_templateObject421 || (_templateObject421 = _taggedTemplateLiteral15(["Crimbuccaneer military school dropout"]))),
  conscript: $monster(_templateObject520 || (_templateObject520 = _taggedTemplateLiteral15(["Elf Guard conscript"]))),
  convict: $monster(_templateObject619 || (_templateObject619 = _taggedTemplateLiteral15(["Elf Guard convict"]))),
  private: $monster(_templateObject718 || (_templateObject718 = _taggedTemplateLiteral15(["Elf Guard private"])))
}, affiliatedZoneMonsters = {
  armory: {
    none: neutralMonsters,
    elves: {
      seal: $monster(_templateObject818 || (_templateObject818 = _taggedTemplateLiteral15(["Elf Guard arctic seal"]))),
      armorer: $monster(_templateObject917 || (_templateObject917 = _taggedTemplateLiteral15(["Elf Guard armorer"]))),
      beret: $monster(_templateObject1013 || (_templateObject1013 = _taggedTemplateLiteral15(["Elf Guard Red and White Beret"])))
    },
    pirates: {
      carpenter: $monster(_templateObject1111 || (_templateObject1111 = _taggedTemplateLiteral15(["Crimbuccaneer carpenter"]))),
      freebooter: $monster(_templateObject1210 || (_templateObject1210 = _taggedTemplateLiteral15(["Crimbuccaneer freebooter"]))),
      scrimshander: $monster(_templateObject1310 || (_templateObject1310 = _taggedTemplateLiteral15(["Crimbuccaneer scrimshander"])))
    }
  },
  bar: {
    none: neutralMonsters,
    elves: {
      specialist: $monster(_templateObject149 || (_templateObject149 = _taggedTemplateLiteral15(["Elf Guard shore leave specialist"]))),
      chemist: $monster(_templateObject159 || (_templateObject159 = _taggedTemplateLiteral15(["Elf Guard Chemist"]))),
      sanitation: $monster(_templateObject169 || (_templateObject169 = _taggedTemplateLiteral15(["Elf Guard sanitation officer"])))
    },
    pirates: {
      barrrback: $monster(_templateObject179 || (_templateObject179 = _taggedTemplateLiteral15(["Crimbuccaneer barrrback"]))),
      grognard: $monster(_templateObject189 || (_templateObject189 = _taggedTemplateLiteral15(["Crimbuccaneer grognard"]))),
      brawler: $monster(_templateObject199 || (_templateObject199 = _taggedTemplateLiteral15(["Crimbuccaneer bar brawler"])))
    }
  },
  cafe: {
    none: neutralMonsters,
    elves: {
      desserter: $monster(_templateObject209 || (_templateObject209 = _taggedTemplateLiteral15(["Elf Guard desserter"]))),
      provisioner: $monster(_templateObject2113 || (_templateObject2113 = _taggedTemplateLiteral15(["Elf Guard provisioner"]))),
      steward: $monster(_templateObject2211 || (_templateObject2211 = _taggedTemplateLiteral15(["Elf Guard steward"])))
    },
    pirates: {
      plunderer: $monster(_templateObject2310 || (_templateObject2310 = _taggedTemplateLiteral15(["Crimbuccaneer fruit plunderer"]))),
      retiree: $monster(_templateObject249 || (_templateObject249 = _taggedTemplateLiteral15(["Crimbuccaneer retiree"]))),
      whalehunter: $monster(_templateObject259 || (_templateObject259 = _taggedTemplateLiteral15(["Crimbuccaneer whalehunter"])))
    }
  },
  cottage: {
    none: neutralMonsters,
    elves: {
      requisitions: $monster(_templateObject269 || (_templateObject269 = _taggedTemplateLiteral15(["Elf Guard requisitions officer"]))),
      strategist: $monster(_templateObject279 || (_templateObject279 = _taggedTemplateLiteral15(["Elf Guard Strategist"]))),
      general: $monster(_templateObject288 || (_templateObject288 = _taggedTemplateLiteral15(["Elf Guard general"])))
    },
    pirates: {
      mudlark: $monster(_templateObject298 || (_templateObject298 = _taggedTemplateLiteral15(["Crimbuccaneer mudlark"]))),
      navigator: $monster(_templateObject308 || (_templateObject308 = _taggedTemplateLiteral15(["Crimbuccaneer navigator"]))),
      captain: $monster(_templateObject3112 || (_templateObject3112 = _taggedTemplateLiteral15(["Crimbuccaneer vice-captain"])))
    }
  },
  foundry: {
    none: neutralMonsters,
    elves: {},
    pirates: {}
  }
}, args = Args.create("crimbo23", "A script for farming elf stuff", {
  turns: Args.number({
    help: "The number of turns to run (use negative numbers for the number of turns remaining)",
    default: 1 / 0
  }),
  zone: Args.string({
    options: [["armory", "Armory"], ["bar", "The Bar"], ["cafe", "Cafe"], ["cottage", "Abuela's Cottage"], ["foundry", "Pirate Foundry"]],
    default: "cottage"
  }),
  affiliation: Args.string({
    options: [["none", "Do not pick a side"], ["elves", "Fight for the elves"], ["pirates", "Fight for the Crimbuccaneers"]],
    help: "The side to fight for.",
    default: "elves"
  }),
  debug: Args.flag({
    help: "Turn on debug printing",
    default: !1
  }),
  orb: Args.string({
    options: [].concat(_toConsumableArray14(Object.entries(Object.assign.apply(Object, [{}].concat(_toConsumableArray14(flat(Object.values(affiliatedZoneMonsters).map(Object.values)))))).map(function(_ref) {
      var _ref2 = _slicedToArray12(_ref, 2), key = _ref2[0], val = _ref2[1];
      return [key, "".concat(val)];
    })), [["none", "Don't use it"]]),
    help: "Monster to target with the orb.",
    default: "none"
  })
});
function chosenAffiliation() {
  switch (args.affiliation) {
    case "none":
      return "none";
    case "elves":
      return "elves";
    case "pirates":
      return "pirates";
    default:
      throw "Unknown affiliation ".concat(args.affiliation);
  }
}
var orbTarget = null;
function validateAndSetOrbTarget(target, zone, affiliation) {
  if (target !== "none" && !!have($item(_templateObject3210 || (_templateObject3210 = _taggedTemplateLiteral15(["miniature crystal ball"]))))) {
    if (!(zone in affiliatedZoneMonsters))
      throw new Error("Invalid zone specified");
    var affiliatedMonsters = affiliatedZoneMonsters[zone];
    if (!(affiliation in affiliatedMonsters))
      throw new Error("Invalid affiliation specified");
    var monsters = affiliatedMonsters[affiliation];
    if (!(target in monsters))
      throw new Error("Invalid target specified");
    orbTarget = monsters[target];
  }
}
function getOrbTarget() {
  return orbTarget;
}
function getCMCChoices() {
  for (var options = (0, import_kolmafia26.visitUrl)("campground.php?action=workshed"), i = 0, match, entries = [], regexp = /descitem\((\d+)\)/g; (match = regexp.exec(options)) !== null; )
    entries.push(["".concat((0, import_kolmafia26.descToItem)(match[1])), ++i]);
  return Object.fromEntries(entries);
}
function tryGetCMCItem(item5) {
  var choice = getCMCChoices()["".concat(item5)];
  choice && (0, import_kolmafia26.runChoice)(choice);
}
function countEnvironment(environment) {
  return get("lastCombatEnvironments").split("").filter(function(e) {
    return e === environment;
  }).length;
}
function realmAvailable(identifier) {
  return identifier === "fantasy" ? get("_frToday") || get("frAlways") : identifier === "pirate" ? get("_prToday") || get("prAlways") : get("_".concat(identifier, "AirportToday"), !1) || get("".concat(identifier, "AirportAlways"), !1);
}
var unsupportedChoices = /* @__PURE__ */ new Map([[$location(_templateObject338 || (_templateObject338 = _taggedTemplateLiteral15(["The Spooky Forest"]))), (_ref3 = {}, _defineProperty12(_ref3, 502, 2), _defineProperty12(_ref3, 505, 2), _ref3)], [$location(_templateObject347 || (_templateObject347 = _taggedTemplateLiteral15(["Guano Junction"]))), _defineProperty12({}, 1427, 1)], [$location(_templateObject356 || (_templateObject356 = _taggedTemplateLiteral15(["The Hidden Apartment Building"]))), (_ref5 = {}, _defineProperty12(_ref5, 780, 6), _defineProperty12(_ref5, 1578, 6), _ref5)], [$location(_templateObject366 || (_templateObject366 = _taggedTemplateLiteral15(["The Black Forest"]))), (_ref6 = {}, _defineProperty12(_ref6, 923, 1), _defineProperty12(_ref6, 924, 1), _ref6)], [$location(_templateObject376 || (_templateObject376 = _taggedTemplateLiteral15(["LavaCo\u2122 Lamp Factory"]))), _defineProperty12({}, 1091, 9)], [$location(_templateObject385 || (_templateObject385 = _taggedTemplateLiteral15(["The Haunted Laboratory"]))), _defineProperty12({}, 884, 6)], [$location(_templateObject395 || (_templateObject395 = _taggedTemplateLiteral15(["The Haunted Nursery"]))), _defineProperty12({}, 885, 6)], [$location(_templateObject405 || (_templateObject405 = _taggedTemplateLiteral15(["The Haunted Storage Room"]))), _defineProperty12({}, 886, 6)], [$location(_templateObject4111 || (_templateObject4111 = _taggedTemplateLiteral15(["The Hidden Park"]))), _defineProperty12({}, 789, 6)], [$location(_templateObject425 || (_templateObject425 = _taggedTemplateLiteral15(["A Mob of Zeppelin Protesters"]))), (_ref12 = {}, _defineProperty12(_ref12, 1432, 1), _defineProperty12(_ref12, 857, 2), _ref12)], [$location(_templateObject435 || (_templateObject435 = _taggedTemplateLiteral15(["A-Boo Peak"]))), _defineProperty12({}, 1430, 2)], [$location(_templateObject445 || (_templateObject445 = _taggedTemplateLiteral15(["Sloppy Seconds Diner"]))), _defineProperty12({}, 919, 6)], [$location(_templateObject455 || (_templateObject455 = _taggedTemplateLiteral15(["VYKEA"]))), _defineProperty12({}, 1115, 6)], [$location(_templateObject464 || (_templateObject464 = _taggedTemplateLiteral15(["The Castle in the Clouds in the Sky (Basement)"]))), (_ref16 = {}, _defineProperty12(_ref16, 670, 4), _defineProperty12(_ref16, 671, 4), _defineProperty12(_ref16, 672, 1), _ref16)], [$location(_templateObject474 || (_templateObject474 = _taggedTemplateLiteral15(["The Haunted Bedroom"]))), (_ref17 = {}, _defineProperty12(_ref17, 876, 1), _defineProperty12(_ref17, 877, 1), _defineProperty12(_ref17, 878, 1), _defineProperty12(_ref17, 879, 2), _defineProperty12(_ref17, 880, 2), _ref17)], [$location(_templateObject484 || (_templateObject484 = _taggedTemplateLiteral15(["The Copperhead Club"]))), _defineProperty12({}, 855, 4)], [$location(_templateObject494 || (_templateObject494 = _taggedTemplateLiteral15(["The Castle in the Clouds in the Sky (Top Floor)"]))), (_ref19 = {}, _defineProperty12(_ref19, 1431, 1), _defineProperty12(_ref19, 677, 2), _ref19)], [$location(_templateObject504 || (_templateObject504 = _taggedTemplateLiteral15(["The Hidden Office Building"]))), _defineProperty12({}, 786, 6)]]);
function untangleDigitizes(turnCount, chunks) {
  var turnsPerChunk = turnCount / chunks, monstersPerChunk = Math.sqrt((turnsPerChunk + 3) / 5 + 1 / 4) - 1 / 2;
  return Math.round(chunks * monstersPerChunk);
}
function digitizedMonstersRemaining() {
  if (!SourceTerminal_exports.have())
    return 0;
  var digitizesLeft = SourceTerminal_exports.getDigitizeUsesRemaining();
  if (digitizesLeft === SourceTerminal_exports.getMaximumDigitizeUses())
    return untangleDigitizes((0, import_kolmafia26.myAdventures)(), SourceTerminal_exports.getMaximumDigitizeUses());
  var monsterCount = SourceTerminal_exports.getDigitizeMonsterCount() + 1, turnsLeftAtNextMonster = (0, import_kolmafia26.myAdventures)() - counter_exports.get("Digitize Monster");
  if (turnsLeftAtNextMonster <= 0)
    return 0;
  var turnsAtLastDigitize = turnsLeftAtNextMonster + ((monsterCount + 1) * monsterCount * 5 - 3);
  return untangleDigitizes(turnsAtLastDigitize, digitizesLeft + 1) - SourceTerminal_exports.getDigitizeMonsterCount();
}
function toasterGazeIfNecessary() {
  getOrbTarget() && (0, import_kolmafia26.haveEquipped)(CrystalBall_exports.orb) && toasterGaze();
}

// src/engine.ts
var _templateObject140, _templateObject240, _templateObject330, _templateObject426, _templateObject521, _templateObject620;
function _taggedTemplateLiteral16(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _createForOfIteratorHelper12(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray21(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e2) {
    didErr = !0, err = _e2;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray21(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray21(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray21(o, minLen);
  }
}
function _arrayLikeToArray21(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _get2() {
  return typeof Reflect != "undefined" && Reflect.get ? _get2 = Reflect.get.bind() : _get2 = function(target, property, receiver) {
    var base = _superPropBase2(target, property);
    if (!!base) {
      var desc = Object.getOwnPropertyDescriptor(base, property);
      return desc.get ? desc.get.call(arguments.length < 3 ? target : receiver) : desc.value;
    }
  }, _get2.apply(this, arguments);
}
function _superPropBase2(object, property) {
  for (; !Object.prototype.hasOwnProperty.call(object, property) && (object = _getPrototypeOf5(object), object !== null); )
    ;
  return object;
}
function _defineProperties13(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass13(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties13(Constructor.prototype, protoProps), staticProps && _defineProperties13(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _classCallCheck13(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _inherits5(subClass, superClass) {
  if (typeof superClass != "function" && superClass !== null)
    throw new TypeError("Super expression must either be null or a function");
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf5(subClass, superClass);
}
function _setPrototypeOf5(o, p) {
  return _setPrototypeOf5 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf5(o, p);
}
function _createSuper5(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct5();
  return function() {
    var Super = _getPrototypeOf5(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf5(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else
      result = Super.apply(this, arguments);
    return _possibleConstructorReturn5(this, result);
  };
}
function _possibleConstructorReturn5(self, call) {
  if (call && (typeof call == "object" || typeof call == "function"))
    return call;
  if (call !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized5(self);
}
function _assertThisInitialized5(self) {
  if (self === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self;
}
function _isNativeReflectConstruct5() {
  if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch (e) {
    return !1;
  }
}
function _getPrototypeOf5(o) {
  return _getPrototypeOf5 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  }, _getPrototypeOf5(o);
}
var introAdventures = [], CrimboStrategy = /* @__PURE__ */ function(_CombatStrategy) {
  _inherits5(CrimboStrategy2, _CombatStrategy);
  var _super = _createSuper5(CrimboStrategy2);
  function CrimboStrategy2(macro) {
    var _this;
    return _classCallCheck13(this, CrimboStrategy2), _this = _super.call(this), _this.macro(macro).autoattack(macro), _this;
  }
  return _createClass13(CrimboStrategy2);
}(CombatStrategy);
function countAvailableNcForces() {
  return (get("_claraBellUsed") ? 0 : 1) + (5 - get("_spikolodonSpikeUses"));
}
var ncForced = !1;
CrownOfThrones_exports.createRiderMode("default", {});
var chooseRider = function() {
  return CrownOfThrones_exports.pickRider("default");
}, CrimboEngine = /* @__PURE__ */ function(_Engine) {
  _inherits5(CrimboEngine2, _Engine);
  var _super2 = _createSuper5(CrimboEngine2);
  function CrimboEngine2() {
    return _classCallCheck13(this, CrimboEngine2), _super2.apply(this, arguments);
  }
  return _createClass13(CrimboEngine2, [{
    key: "do",
    value: function(task) {
      _get2(_getPrototypeOf5(CrimboEngine2.prototype), "do", this).call(this, task), invalidate();
    }
  }, {
    key: "available",
    value: function(task) {
      var sobriety = task.sobriety === "either" || sober() && task.sobriety === "sober" || !sober() && task.sobriety === "drunk";
      return task.forced ? sobriety && ncForced && _get2(_getPrototypeOf5(CrimboEngine2.prototype), "available", this).call(this, task) : sobriety && _get2(_getPrototypeOf5(CrimboEngine2.prototype), "available", this).call(this, task);
    }
  }, {
    key: "initPropertiesManager",
    value: function(manager) {
      _get2(_getPrototypeOf5(CrimboEngine2.prototype), "initPropertiesManager", this).call(this, manager);
      var _iterator = _createForOfIteratorHelper12(unsupportedChoices.values()), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var choices2 = _step.value;
          manager.setChoices(choices2);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "dress",
    value: function(task, outfit2) {
      if (_get2(_getPrototypeOf5(CrimboEngine2.prototype), "dress", this).call(this, task, outfit2), (0, import_kolmafia27.haveEquipped)($item(_templateObject140 || (_templateObject140 = _taggedTemplateLiteral16(["Buddy Bjorn"]))))) {
        var choice = chooseRider();
        choice && (0, import_kolmafia27.bjornifyFamiliar)(choice.familiar);
      } else if ((0, import_kolmafia27.haveEquipped)($item(_templateObject240 || (_templateObject240 = _taggedTemplateLiteral16(["Crown of Thrones"]))))) {
        var _choice = chooseRider();
        _choice && (0, import_kolmafia27.enthroneFamiliar)(_choice.familiar);
      }
      (0, import_kolmafia27.itemAmount)($item(_templateObject330 || (_templateObject330 = _taggedTemplateLiteral16(["tiny stillsuit"])))) && (0, import_kolmafia27.equip)($familiar(_templateObject426 || (_templateObject426 = _taggedTemplateLiteral16(["Mosquito"]))), $item(_templateObject521 || (_templateObject521 = _taggedTemplateLiteral16(["tiny stillsuit"]))));
    }
  }, {
    key: "execute",
    value: function(task) {
      var ncBefore = countAvailableNcForces();
      _get2(_getPrototypeOf5(CrimboEngine2.prototype), "execute", this).call(this, task);
      var ncAfter = countAvailableNcForces();
      ncBefore > ncAfter && (ncForced = !0);
    }
  }, {
    key: "setChoices",
    value: function(task, manager) {
      _get2(_getPrototypeOf5(CrimboEngine2.prototype), "setChoices", this).call(this, task, manager), (0, import_kolmafia27.equippedAmount)($item(_templateObject620 || (_templateObject620 = _taggedTemplateLiteral16(["June cleaver"])))) > 0 && this.propertyManager.setChoices(Object.fromEntries(JuneCleaver_exports.choices.map(function(choice) {
        return [choice, shouldSkip(choice) ? 4 : bestJuneCleaverOption(choice)];
      }))), this.propertyManager.setChoices({
        955: 2
      });
    }
  }, {
    key: "shouldRepeatAdv",
    value: function(task) {
      return ["Poetic Justice", "Lost and Found"].includes(get("lastEncounter")) ? (printd("Skipping repeating Adventure despite free NC (beaten up)"), !1) : introAdventures.includes(get("lastEncounter")) ? (printd("Hit Intro adventure ".concat(get("lastEncounter"), " which is a free NC")), !0) : task.name.includes("June Cleaver") ? !1 : _get2(_getPrototypeOf5(CrimboEngine2.prototype), "shouldRepeatAdv", this).call(this, task);
    }
  }, {
    key: "print",
    value: function() {
      printd("Task List:");
      var _iterator2 = _createForOfIteratorHelper12(this.tasks), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var task = _step2.value;
          printd("".concat(task.name, ": available:").concat(this.available(task)));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "destruct",
    value: function() {
      _get2(_getPrototypeOf5(CrimboEngine2.prototype), "destruct", this).call(this), (0, import_kolmafia27.setAutoAttack)(0);
    }
  }]), CrimboEngine2;
}(Engine);

// src/macro.ts
init_kolmafia_polyfill();
var import_kolmafia32 = require("kolmafia");

// src/familiar/index.ts
init_kolmafia_polyfill();

// src/familiar/freeFightFamiliar.ts
init_kolmafia_polyfill();
var import_kolmafia31 = require("kolmafia");

// src/familiar/constantValueFamiliars.ts
init_kolmafia_polyfill();
var import_kolmafia28 = require("kolmafia");
var _templateObject141, _templateObject241, _templateObject331, _templateObject427, _templateObject524, _templateObject621, _templateObject719, _templateObject819, _templateObject918, _templateObject1014, _templateObject1112, _templateObject1211, _templateObject1311, _templateObject1410, _templateObject1510, _templateObject1610, _templateObject1710, _templateObject1810, _templateObject1910, _templateObject2010;
function _toConsumableArray15(arr) {
  return _arrayWithoutHoles15(arr) || _iterableToArray15(arr) || _unsupportedIterableToArray22(arr) || _nonIterableSpread15();
}
function _nonIterableSpread15() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray22(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray22(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray22(o, minLen);
  }
}
function _iterableToArray15(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles15(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray22(arr);
}
function _arrayLikeToArray22(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral17(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var standardFamiliars = [{
  familiar: $familiar(_templateObject141 || (_templateObject141 = _taggedTemplateLiteral17(["Obtuse Angel"]))),
  value: function() {
    return 0.02 * garboValue($item(_templateObject241 || (_templateObject241 = _taggedTemplateLiteral17(["time's arrow"]))));
  }
}, {
  familiar: $familiar(_templateObject331 || (_templateObject331 = _taggedTemplateLiteral17(["Stocking Mimic"]))),
  value: function(_ref) {
    var allowEquipment = _ref.allowEquipment;
    return (allowEquipment ? garboAverageValue.apply(void 0, _toConsumableArray15($items(_templateObject427 || (_templateObject427 = _taggedTemplateLiteral17(["Polka Pop, BitterSweetTarts, Piddles"]))))) / 6 : 0) + (1 / 3 + (have($effect(_templateObject524 || (_templateObject524 = _taggedTemplateLiteral17(["Jingle Jangle Jingle"])))) ? 0.1 : 0)) * ((0, import_kolmafia28.familiarWeight)($familiar(_templateObject621 || (_templateObject621 = _taggedTemplateLiteral17(["Stocking Mimic"])))) + (0, import_kolmafia28.weightAdjustment)());
  }
}, {
  familiar: $familiar(_templateObject719 || (_templateObject719 = _taggedTemplateLiteral17(["Shorter-Order Cook"]))),
  value: function(_ref2) {
    var allowEquipment = _ref2.allowEquipment;
    return garboAverageValue.apply(void 0, _toConsumableArray15($items(_templateObject819 || (_templateObject819 = _taggedTemplateLiteral17(["short beer, short stack of pancakes, short stick of butter, short glass of water, short white"]))))) / (allowEquipment ? 9 : 11);
  }
}, {
  familiar: $familiar(_templateObject918 || (_templateObject918 = _taggedTemplateLiteral17(["Robortender"]))),
  value: function() {
    return garboValue($item(_templateObject1014 || (_templateObject1014 = _taggedTemplateLiteral17(["elemental sugarcube"])))) / 5 + (Robortender_exports.currentDrinks().includes($item(_templateObject1112 || (_templateObject1112 = _taggedTemplateLiteral17(["Feliz Navidad"])))) ? get("garbo_felizValue", 0) * 0.25 : 0) + (Robortender_exports.currentDrinks().includes($item(_templateObject1211 || (_templateObject1211 = _taggedTemplateLiteral17(["Newark"])))) ? get("garbo_newarkValue", 0) * 0.25 : 0);
  }
}, {
  familiar: $familiar(_templateObject1311 || (_templateObject1311 = _taggedTemplateLiteral17(["Twitching Space Critter"]))),
  value: function() {
    return Math.min(garboValue($item(_templateObject1410 || (_templateObject1410 = _taggedTemplateLiteral17(["twitching space egg"])))) * 2e-4, 690);
  }
}, {
  familiar: $familiar(_templateObject1510 || (_templateObject1510 = _taggedTemplateLiteral17(["Hobo Monkey"]))),
  value: function() {
    return 75;
  }
}, {
  familiar: $familiar(_templateObject1610 || (_templateObject1610 = _taggedTemplateLiteral17(["Red-Nosed Snapper"]))),
  value: function(_ref32) {
    var location4 = _ref32.location;
    return location4 === $location(_templateObject1710 || (_templateObject1710 = _taggedTemplateLiteral17(["Crimbo Train (Caboose)"]))) ? garboValue($item(_templateObject1810 || (_templateObject1810 = _taggedTemplateLiteral17(["industrial lubricant"])))) / 11 : 0;
  }
}, {
  familiar: $familiar(_templateObject1910 || (_templateObject1910 = _taggedTemplateLiteral17(["Cookbookbat"]))),
  value: function() {
    return 3 * garboAverageValue.apply(void 0, _toConsumableArray15($items(_templateObject2010 || (_templateObject2010 = _taggedTemplateLiteral17(["Vegetable of Jarlsberg, Yeast of Boris, St. Sneaky Pete's Whey"]))))) / 11;
  }
}, {
  familiar: maxBy(import_kolmafia28.Familiar.all().filter(have), findLeprechaunMultiplier),
  value: function() {
    return 1;
  }
}];
function getConstantValueFamiliars() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return standardFamiliars.filter(function(_ref4) {
    var familiar3 = _ref4.familiar;
    return have(familiar3);
  }).map(function(_ref52) {
    var familiar3 = _ref52.familiar, value = _ref52.value;
    return {
      familiar: familiar3,
      expectedValue: value(options),
      leprechaunMultiplier: findLeprechaunMultiplier(familiar3),
      limit: "none"
    };
  });
}

// src/familiar/dropFamiliars.ts
init_kolmafia_polyfill();
var import_kolmafia29 = require("kolmafia");
var _templateObject150, _templateObject250, _templateObject339, _templateObject428, _templateObject525, _templateObject623, _templateObject720, _templateObject820, _templateObject919, _templateObject1015, _templateObject1113, _templateObject1212, _templateObject1312, _templateObject1411, _templateObject1511, _templateObject1611, _templateObject1711, _templateObject1811, _templateObject1911, _templateObject2011, _templateObject2114, _templateObject2212, _templateObject2311, _templateObject2410, _templateObject2510, _templateObject2610, _templateObject2710, _templateObject289, _templateObject299, _templateObject309, _templateObject3113, _templateObject3211, _templateObject3310, _templateObject348, _templateObject357, _templateObject367, _templateObject377, _templateObject386, _templateObject396, _templateObject406, _templateObject4112, _templateObject429, _templateObject436, _templateObject446, _templateObject456, _templateObject465, _templateObject475, _templateObject485, _templateObject495, _templateObject505, _templateObject5110, _templateObject526, _templateObject534, _templateObject543, _templateObject553, _templateObject563, _templateObject573;
function _taggedTemplateLiteral18(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _toConsumableArray16(arr) {
  return _arrayWithoutHoles16(arr) || _iterableToArray16(arr) || _unsupportedIterableToArray23(arr) || _nonIterableSpread16();
}
function _nonIterableSpread16() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray23(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray23(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray23(o, minLen);
  }
}
function _iterableToArray16(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles16(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray23(arr);
}
function _arrayLikeToArray23(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function dropValue(drop) {
  return drop instanceof import_kolmafia29.Item ? garboValue(drop) : garboAverageValue.apply(void 0, _toConsumableArray16(drop));
}
function valueStandardDropFamiliar(_ref) {
  var _additionalValue, familiar3 = _ref.familiar, expected = _ref.expected, drop = _ref.drop, additionalValue = _ref.additionalValue, expectedTurns = expected[familiar3.dropsToday] || 1 / 0, expectedValue = dropValue(drop) / expectedTurns + ((_additionalValue = additionalValue == null ? void 0 : additionalValue()) !== null && _additionalValue !== void 0 ? _additionalValue : 0);
  return {
    familiar: familiar3,
    expectedValue: expectedValue,
    leprechaunMultiplier: findLeprechaunMultiplier(familiar3),
    limit: "drops"
  };
}
var rotatingFamiliars = [{
  familiar: $familiar(_templateObject150 || (_templateObject150 = _taggedTemplateLiteral18(["Fist Turkey"]))),
  expected: [3.91, 4.52, 4.52, 5.29, 5.29],
  drop: $item(_templateObject250 || (_templateObject250 = _taggedTemplateLiteral18(["Ambitious Turkey"])))
}, {
  familiar: $familiar(_templateObject339 || (_templateObject339 = _taggedTemplateLiteral18(["Llama Lama"]))),
  expected: [3.42, 3.91, 4.52, 5.29, 5.29],
  drop: $item(_templateObject428 || (_templateObject428 = _taggedTemplateLiteral18(["llama lama gong"])))
}, {
  familiar: $familiar(_templateObject525 || (_templateObject525 = _taggedTemplateLiteral18(["Astral Badger"]))),
  expected: [3.03, 3.42, 3.91, 4.52, 5.29],
  drop: $item(_templateObject623 || (_templateObject623 = _taggedTemplateLiteral18(["astral mushroom"])))
}, {
  familiar: $familiar(_templateObject720 || (_templateObject720 = _taggedTemplateLiteral18(["Li'l Xenomorph"]))),
  expected: [3.03, 3.42, 3.91, 4.52, 5.29],
  drop: $item(_templateObject820 || (_templateObject820 = _taggedTemplateLiteral18(["transporter transponder"])))
}, {
  familiar: $familiar(_templateObject919 || (_templateObject919 = _taggedTemplateLiteral18(["Rogue Program"]))),
  expected: [3.03, 3.42, 3.91, 4.52, 5.29],
  drop: $item(_templateObject1015 || (_templateObject1015 = _taggedTemplateLiteral18(["Game Grid token"])))
}, {
  familiar: $familiar(_templateObject1113 || (_templateObject1113 = _taggedTemplateLiteral18(["Bloovian Groose"]))),
  expected: [3.03, 3.42, 3.91, 4.52, 5.29],
  drop: $item(_templateObject1212 || (_templateObject1212 = _taggedTemplateLiteral18(["groose grease"])))
}, {
  familiar: $familiar(_templateObject1312 || (_templateObject1312 = _taggedTemplateLiteral18(["Baby Sandworm"]))),
  expected: [3.03, 3.42, 3.91, 4.52, 5.29],
  drop: $item(_templateObject1411 || (_templateObject1411 = _taggedTemplateLiteral18(["agua de vida"])))
}, {
  familiar: $familiar(_templateObject1511 || (_templateObject1511 = _taggedTemplateLiteral18(["Green Pixie"]))),
  expected: [3.03, 3.42, 3.91, 4.52, 5.29],
  drop: $item(_templateObject1611 || (_templateObject1611 = _taggedTemplateLiteral18(["tiny bottle of absinthe"])))
}, {
  familiar: $familiar(_templateObject1711 || (_templateObject1711 = _taggedTemplateLiteral18(["Blavious Kloop"]))),
  expected: [3.03, 3.42, 3.91, 4.52, 5.29],
  drop: $item(_templateObject1811 || (_templateObject1811 = _taggedTemplateLiteral18(["devilish folio"])))
}, {
  familiar: $familiar(_templateObject1911 || (_templateObject1911 = _taggedTemplateLiteral18(["Galloping Grill"]))),
  expected: [3.03, 3.42, 3.91, 4.52, 5.29],
  drop: $item(_templateObject2011 || (_templateObject2011 = _taggedTemplateLiteral18(["hot ashes"])))
}, {
  familiar: $familiar(_templateObject2114 || (_templateObject2114 = _taggedTemplateLiteral18(["Grim Brother"]))),
  expected: [3.03, 3.42, 3.91, 4.52, 5.29],
  drop: $item(_templateObject2212 || (_templateObject2212 = _taggedTemplateLiteral18(["grim fairy tale"])))
}, {
  familiar: $familiar(_templateObject2311 || (_templateObject2311 = _taggedTemplateLiteral18(["Golden Monkey"]))),
  expected: [3.03, 3.42, 3.91, 4.52, 5.29],
  drop: $item(_templateObject2410 || (_templateObject2410 = _taggedTemplateLiteral18(["powdered gold"])))
}, {
  familiar: $familiar(_templateObject2510 || (_templateObject2510 = _taggedTemplateLiteral18(["Unconscious Collective"]))),
  expected: [3.03, 3.42, 3.91, 4.52, 5.29],
  drop: $item(_templateObject2610 || (_templateObject2610 = _taggedTemplateLiteral18(["Unconscious Collective Dream Jar"])))
}, {
  familiar: $familiar(_templateObject2710 || (_templateObject2710 = _taggedTemplateLiteral18(["Ms. Puck Man"]))),
  expected: Array($familiar(_templateObject289 || (_templateObject289 = _taggedTemplateLiteral18(["Ms. Puck Man"]))).dropsLimit).fill(12.85),
  drop: $item(_templateObject299 || (_templateObject299 = _taggedTemplateLiteral18(["power pill"]))),
  additionalValue: function() {
    return garboValue($item(_templateObject309 || (_templateObject309 = _taggedTemplateLiteral18(["yellow pixel"]))));
  }
}, {
  familiar: $familiar(_templateObject3113 || (_templateObject3113 = _taggedTemplateLiteral18(["Puck Man"]))),
  expected: Array($familiar(_templateObject3211 || (_templateObject3211 = _taggedTemplateLiteral18(["Puck Man"]))).dropsLimit).fill(12.85),
  drop: $item(_templateObject3310 || (_templateObject3310 = _taggedTemplateLiteral18(["power pill"]))),
  additionalValue: function() {
    return garboValue($item(_templateObject348 || (_templateObject348 = _taggedTemplateLiteral18(["yellow pixel"]))));
  }
}, {
  familiar: $familiar(_templateObject357 || (_templateObject357 = _taggedTemplateLiteral18(["Adventurous Spelunker"]))),
  expected: [7],
  drop: $item(_templateObject367 || (_templateObject367 = _taggedTemplateLiteral18(["Tales of Spelunking"])))
}, {
  familiar: $familiar(_templateObject377 || (_templateObject377 = _taggedTemplateLiteral18(["Angry Jung Man"]))),
  expected: [30],
  drop: $item(_templateObject386 || (_templateObject386 = _taggedTemplateLiteral18(["psychoanalytic jar"])))
}, {
  familiar: $familiar(_templateObject396 || (_templateObject396 = _taggedTemplateLiteral18(["Grimstone Golem"]))),
  expected: [45],
  drop: $item(_templateObject406 || (_templateObject406 = _taggedTemplateLiteral18(["grimstone mask"])))
}, {
  familiar: $familiar(_templateObject4112 || (_templateObject4112 = _taggedTemplateLiteral18(["Cookbookbat"]))),
  expected: [33],
  drop: [$item(_templateObject429 || (_templateObject429 = _taggedTemplateLiteral18(["Recipe of Before Yore: Deep Dish of Legend"]))), $item(_templateObject436 || (_templateObject436 = _taggedTemplateLiteral18(["Recipe of Before Yore: Pizza of Legend"]))), $item(_templateObject446 || (_templateObject446 = _taggedTemplateLiteral18(["Recipe of Before Yore: Calzone of Legend"]))), $item(_templateObject456 || (_templateObject456 = _taggedTemplateLiteral18(["Recipe of Before Yore: plain calzone"]))), $item(_templateObject465 || (_templateObject465 = _taggedTemplateLiteral18(["Recipe of Before Yore: roasted vegetable focaccia"]))), $item(_templateObject475 || (_templateObject475 = _taggedTemplateLiteral18(["Recipe of Before Yore: baked veggie ricotta"]))), $item(_templateObject485 || (_templateObject485 = _taggedTemplateLiteral18(["Recipe of Before Yore: roasted vegetable of J."]))), $item(_templateObject495 || (_templateObject495 = _taggedTemplateLiteral18(["Recipe of Before Yore: Pete's rich ricotta"]))), $item(_templateObject505 || (_templateObject505 = _taggedTemplateLiteral18(["Recipe of Before Yore: Boris's bread"]))), $item(_templateObject5110 || (_templateObject5110 = _taggedTemplateLiteral18(["Recipe of Before Yore: Boris's beer"]))), $item(_templateObject526 || (_templateObject526 = _taggedTemplateLiteral18(["Recipe of Before Yore: honey bun of Boris"]))), $item(_templateObject534 || (_templateObject534 = _taggedTemplateLiteral18(["Recipe of Before Yore: ratatouille de Jarlsberg"]))), $item(_templateObject543 || (_templateObject543 = _taggedTemplateLiteral18(["Recipe of Before Yore: Jarlsberg's vegetable soup"]))), $item(_templateObject553 || (_templateObject553 = _taggedTemplateLiteral18(["Recipe of Before Yore: Pete's wily whey bar"]))), $item(_templateObject563 || (_templateObject563 = _taggedTemplateLiteral18(["Recipe of Before Yore: St. Pete's sneaky smoothie"])))],
  additionalValue: function() {
    return 3 * garboAverageValue.apply(void 0, _toConsumableArray16($items(_templateObject573 || (_templateObject573 = _taggedTemplateLiteral18(["Vegetable of Jarlsberg, Yeast of Boris, St. Sneaky Pete's Whey"]))))) / 11;
  }
}];
function getDropFamiliars() {
  return rotatingFamiliars.map(valueStandardDropFamiliar).filter(function(_ref2) {
    var familiar3 = _ref2.familiar, expectedValue = _ref2.expectedValue, leprechaunMultiplier = _ref2.leprechaunMultiplier;
    return have(familiar3) && (expectedValue || leprechaunMultiplier);
  });
}

// src/familiar/experienceFamiliars.ts
init_kolmafia_polyfill();
var _templateObject151, _templateObject251, _templateObject340;
function _taggedTemplateLiteral19(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var experienceFamiliars = [{
  familiar: $familiar(_templateObject151 || (_templateObject151 = _taggedTemplateLiteral19(["Pocket Professor"]))),
  used: "_thesisDelivered",
  useValue: 11 * get("valueOfAdventure")
}, {
  familiar: $familiar(_templateObject251 || (_templateObject251 = _taggedTemplateLiteral19(["Grey Goose"]))),
  used: "_meatifyMatterUsed",
  useValue: 15 ** 4
}];
function valueExperienceFamiliar(_ref) {
  var familiar3 = _ref.familiar, useValue = _ref.useValue, currentExp = familiar3.experience || (have($familiar(_templateObject340 || (_templateObject340 = _taggedTemplateLiteral19(["Shorter-Order Cook"])))) ? 100 : 0), experienceNeeded = 400 - currentExp, estimatedExperience = 3;
  return {
    familiar: familiar3,
    expectedValue: useValue / (experienceNeeded / estimatedExperience),
    leprechaunMultiplier: findLeprechaunMultiplier(familiar3),
    limit: "experience"
  };
}
function getExperienceFamiliars() {
  return experienceFamiliars.filter(function(_ref2) {
    var used = _ref2.used, familiar3 = _ref2.familiar;
    return have(familiar3) && !get(used) && familiar3.experience < 400;
  }).map(valueExperienceFamiliar);
}

// src/familiar/lib.ts
init_kolmafia_polyfill();
var import_kolmafia30 = require("kolmafia");
var _templateObject160, _templateObject260, _templateObject341, _templateObject430, _templateObject527, _templateObject624, _templateObject721, _templateObject821;
var _templateObject1016, _templateObject1114;
function _taggedTemplateLiteral20(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function timeToMeatify() {
  if (!have($familiar(_templateObject160 || (_templateObject160 = _taggedTemplateLiteral20(["Grey Goose"])))) || get("_meatifyMatterUsed") || !sober())
    return !1;
  if ($familiar(_templateObject260 || (_templateObject260 = _taggedTemplateLiteral20(["Grey Goose"]))).experience >= 400)
    return !0;
  if ((0, import_kolmafia30.myAdventures)() > 50)
    return !1;
  var totalTurns = (0, import_kolmafia30.totalTurnsPlayed)(), baseMeat = have($item(_templateObject341 || (_templateObject341 = _taggedTemplateLiteral20(["SongBoom\u2122 BoomBox"])))) ? 275 : 250, usingLatte = have($item(_templateObject430 || (_templateObject430 = _taggedTemplateLiteral20(["latte lovers member's mug"])))) && get("latteModifier").split(",").includes("Meat Drop: 40"), nextProtonicGhost = have($item(_templateObject527 || (_templateObject527 = _taggedTemplateLiteral20(["protonic accelerator pack"])))) ? Math.max(1, get("nextParanormalActivity") - totalTurns) : 1 / 0, nextVoteMonster = have($item(_templateObject624 || (_templateObject624 = _taggedTemplateLiteral20(['"I Voted!" sticker'])))) && get("_voteFreeFights") < 3 ? Math.max(0, (totalTurns % 11 - 1) % 11) : 1 / 0, nextVoidMonster = have($item(_templateObject721 || (_templateObject721 = _taggedTemplateLiteral20(["cursed magnifying glass"])))) && get("_voidFreeFights") < 5 && get("valueOfFreeFight", 2e3) / 13 > baseMeat * (usingLatte ? 0.75 : 0.6) ? -get("cursedMagnifyingGlassCount") % 13 : 1 / 0, freeFightNow = get("questPAGhost") !== "unstarted" || nextVoteMonster === 0 || nextVoidMonster === 0, delay = Math.min(nextProtonicGhost, nextVoteMonster === 0 ? get("_voteFreeFights") < 2 ? 11 : 1 / 0 : nextVoteMonster, nextVoidMonster === 0 ? 13 : nextVoidMonster);
  return delay < (0, import_kolmafia30.myAdventures)() ? !1 : !!(freeFightNow || $familiar(_templateObject821 || (_templateObject821 = _taggedTemplateLiteral20(["Grey Goose"]))).experience >= 121);
}
function canOpenRedPresent() {
  return have($familiar(_templateObject1016 || (_templateObject1016 = _taggedTemplateLiteral20(["Crimbo Shrub"])))) && !have($effect(_templateObject1114 || (_templateObject1114 = _taggedTemplateLiteral20(["Everything Looks Red"])))) && get("shrubGifts") === "meat" && sober();
}

// src/familiar/freeFightFamiliar.ts
var _templateObject161, _templateObject261, _templateObject349, _templateObject431, _templateObject528, _templateObject625, _templateObject723;
function _toConsumableArray17(arr) {
  return _arrayWithoutHoles17(arr) || _iterableToArray17(arr) || _unsupportedIterableToArray24(arr) || _nonIterableSpread17();
}
function _nonIterableSpread17() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray24(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray24(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray24(o, minLen);
  }
}
function _iterableToArray17(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles17(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray24(arr);
}
function _arrayLikeToArray24(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function ownKeys8(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread8(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys8(Object(source), !0).forEach(function(key) {
      _defineProperty13(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys8(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty13(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _taggedTemplateLiteral21(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var DEFAULT_MENU_OPTIONS = {
  canChooseMacro: !0,
  location: $location(_templateObject161 || (_templateObject161 = _taggedTemplateLiteral21(["none"]))),
  extraFamiliars: [],
  includeExperienceFamiliars: !0,
  allowAttackFamiliars: !0,
  allowEquipment: !0
};
function menu() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, fullOptions = _objectSpread8(_objectSpread8({}, DEFAULT_MENU_OPTIONS), options), includeExperienceFamiliars = fullOptions.includeExperienceFamiliars, canChooseMacro = fullOptions.canChooseMacro, location4 = fullOptions.location, extraFamiliars = fullOptions.extraFamiliars, allowAttackFamiliars = fullOptions.allowAttackFamiliars, familiarMenu = [].concat(_toConsumableArray17(getConstantValueFamiliars(fullOptions)), _toConsumableArray17(getDropFamiliars()), _toConsumableArray17(includeExperienceFamiliars ? getExperienceFamiliars() : []), _toConsumableArray17(extraFamiliars), [{
    familiar: $familiar.none,
    expectedValue: 0,
    leprechaunMultiplier: 0,
    limit: "none"
  }]);
  return canChooseMacro && sober() && (timeToMeatify() && familiarMenu.push({
    familiar: $familiar(_templateObject261 || (_templateObject261 = _taggedTemplateLiteral21(["Grey Goose"]))),
    expectedValue: (Math.max((0, import_kolmafia31.familiarWeight)($familiar(_templateObject349 || (_templateObject349 = _taggedTemplateLiteral21(["Grey Goose"])))) - 5), 0 ** 4),
    leprechaunMultiplier: 0,
    limit: "experience"
  }), canOpenRedPresent() && familiarMenu.push({
    familiar: $familiar(_templateObject431 || (_templateObject431 = _taggedTemplateLiteral21(["Crimbo Shrub"]))),
    expectedValue: 2500,
    leprechaunMultiplier: 0,
    limit: "special"
  }), location4.zone === "Dinseylandfill" && have($familiar(_templateObject528 || (_templateObject528 = _taggedTemplateLiteral21(["Space Jellyfish"])))) && familiarMenu.push({
    familiar: $familiar(_templateObject625 || (_templateObject625 = _taggedTemplateLiteral21(["Space Jellyfish"]))),
    expectedValue: garboValue($item(_templateObject723 || (_templateObject723 = _taggedTemplateLiteral21(["stench jelly"])))) / (get("_spaceJellyfishDrops") < 5 ? get("_spaceJellyfishDrops") + 1 : 20),
    leprechaunMultiplier: 0,
    limit: "special"
  })), allowAttackFamiliars ? familiarMenu : familiarMenu.filter(function(fam) {
    return !(fam.familiar.physicalDamage || fam.familiar.elementalDamage);
  });
}
function freeFightFamiliarData() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, compareFamiliars = function(a, b) {
    return a.expectedValue === b.expectedValue ? a.leprechaunMultiplier > b.leprechaunMultiplier ? a : b : a.expectedValue > b.expectedValue ? a : b;
  };
  return menu(options).reduce(compareFamiliars);
}
function freeFightFamiliar() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return freeFightFamiliarData(options).familiar;
}

// src/macro.ts
var _templateObject170, _templateObject270, _templateObject350, _templateObject437, _templateObject529, _templateObject626, _templateObject724, _templateObject823, _templateObject920, _templateObject1017, _templateObject1115, _templateObject1213, _templateObject1313, _templateObject1412, _templateObject1512, _templateObject1612, _templateObject1712, _templateObject1812, _templateObject1912, _templateObject2012, _templateObject2115, _templateObject2213, _templateObject2312, _templateObject2411, _templateObject2511, _templateObject2611, _templateObject2711, _templateObject2810, _templateObject2910, _templateObject3010, _templateObject3114, _templateObject3212, _templateObject3311, _templateObject3410, _templateObject358, _templateObject368, _templateObject378, _templateObject387;
function _toConsumableArray18(arr) {
  return _arrayWithoutHoles18(arr) || _iterableToArray18(arr) || _unsupportedIterableToArray25(arr) || _nonIterableSpread18();
}
function _nonIterableSpread18() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray18(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles18(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray25(arr);
}
function _createForOfIteratorHelper13(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray25(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e2) {
    didErr = !0, err = _e2;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray25(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray25(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray25(o, minLen);
  }
}
function _arrayLikeToArray25(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _classCallCheck14(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties14(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass14(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties14(Constructor.prototype, protoProps), staticProps && _defineProperties14(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _inherits6(subClass, superClass) {
  if (typeof superClass != "function" && superClass !== null)
    throw new TypeError("Super expression must either be null or a function");
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf6(subClass, superClass);
}
function _setPrototypeOf6(o, p) {
  return _setPrototypeOf6 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf6(o, p);
}
function _createSuper6(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct6();
  return function() {
    var Super = _getPrototypeOf6(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf6(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else
      result = Super.apply(this, arguments);
    return _possibleConstructorReturn6(this, result);
  };
}
function _possibleConstructorReturn6(self, call) {
  if (call && (typeof call == "object" || typeof call == "function"))
    return call;
  if (call !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized6(self);
}
function _assertThisInitialized6(self) {
  if (self === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self;
}
function _isNativeReflectConstruct6() {
  if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch (e) {
    return !1;
  }
}
function _getPrototypeOf6(o) {
  return _getPrototypeOf6 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  }, _getPrototypeOf6(o);
}
function _taggedTemplateLiteral22(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var gooKillSkills = [{
  skill: $skill(_templateObject170 || (_templateObject170 = _taggedTemplateLiteral22(["Nantlers"]))),
  stat: $stat(_templateObject270 || (_templateObject270 = _taggedTemplateLiteral22(["muscle"])))
}, {
  skill: $skill(_templateObject350 || (_templateObject350 = _taggedTemplateLiteral22(["Nanoshock"]))),
  stat: $stat(_templateObject437 || (_templateObject437 = _taggedTemplateLiteral22(["mysticality"])))
}, {
  skill: $skill(_templateObject529 || (_templateObject529 = _taggedTemplateLiteral22(["Audioclasm"]))),
  stat: $stat(_templateObject626 || (_templateObject626 = _taggedTemplateLiteral22(["moxie"])))
}], monsterManuelCached = void 0;
function monsterManuelAvailable() {
  return monsterManuelCached !== void 0 || (monsterManuelCached = (0, import_kolmafia32.visitUrl)("questlog.php?which=3").includes("Monster Manuel")), Boolean(monsterManuelCached);
}
var Macro2 = /* @__PURE__ */ function(_StrictMacro) {
  _inherits6(Macro3, _StrictMacro);
  var _super = _createSuper6(Macro3);
  function Macro3() {
    return _classCallCheck14(this, Macro3), _super.apply(this, arguments);
  }
  return _createClass14(Macro3, [{
    key: "tryHaveSkill",
    value: function(skill) {
      return this.externalIf(have(skill), Macro3.trySkill(skill));
    }
  }, {
    key: "tryHaveItem",
    value: function(item5) {
      return this.externalIf(have(item5), Macro3.tryItem(item5));
    }
  }, {
    key: "redigitize",
    value: function() {
      var _get3;
      return this.externalIf(shouldRedigitize(), Macro3.if_((_get3 = get("_sourceTerminalDigitizeMonster")) !== null && _get3 !== void 0 ? _get3 : $monster.none, Macro3.skill($skill(_templateObject724 || (_templateObject724 = _taggedTemplateLiteral22(["Digitize"]))))));
    }
  }, {
    key: "doItems",
    value: function(wanted) {
      var steps = new Macro3(), items = wanted.filter(function(i2) {
        return have(i2);
      });
      if (items.length)
        if (have($skill(_templateObject823 || (_templateObject823 = _taggedTemplateLiteral22(["Ambidextrous Funkslinging"])))))
          for (var i = 0; i <= items.length; i += 2) {
            var chunk2 = items.slice(i, i + 2);
            chunk2.length === 2 ? steps.tryItem(chunk2) : steps.tryItem.apply(steps, _toConsumableArray18(chunk2));
          }
        else {
          var _iterator = _createForOfIteratorHelper13(items), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var item5 = _step.value;
              steps.tryItem(item5);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      return this.step(steps);
    }
  }, {
    key: "doStandardItems",
    value: function() {
      return this.doItems($items(_templateObject920 || (_templateObject920 = _taggedTemplateLiteral22(["Rain-Doh blue balls, Time-Spinner, Rain-Doh indigo cup, porquoise-handled sixgun"]))));
    }
  }, {
    key: "doHardItems",
    value: function() {
      return this.doItems(
        $items(_templateObject1017 || (_templateObject1017 = _taggedTemplateLiteral22(["train whistle, Time-Spinner, little red book, Rain-Doh indigo cup, porquoise-handled sixgun"])))
      );
    }
  }, {
    key: "familiarActions",
    value: function() {
      return this.externalIf(canOpenRedPresent() && (0, import_kolmafia32.myFamiliar)() === $familiar(_templateObject1115 || (_templateObject1115 = _taggedTemplateLiteral22(["Crimbo Shrub"]))), Macro3.trySkill($skill(_templateObject1213 || (_templateObject1213 = _taggedTemplateLiteral22(["Open a Big Red Present"]))))).externalIf(timeToMeatify() && (0, import_kolmafia32.myFamiliar)() === $familiar(_templateObject1313 || (_templateObject1313 = _taggedTemplateLiteral22(["Grey Goose"]))), Macro3.trySkill($skill(_templateObject1412 || (_templateObject1412 = _taggedTemplateLiteral22(["Meatify Matter"])))));
    }
  }, {
    key: "hardKill",
    value: function() {
      return (0, import_kolmafia32.myClass)() === $class(_templateObject1512 || (_templateObject1512 = _taggedTemplateLiteral22(["Grey Goo"]))) ? this : this.externalIf((0, import_kolmafia32.myPrimestat)() === $stat(_templateObject1612 || (_templateObject1612 = _taggedTemplateLiteral22(["mysticality"]))), Macro3.trySkillRepeat($skill(_templateObject1712 || (_templateObject1712 = _taggedTemplateLiteral22(["Saucegeyser"]))))).externalIf((0, import_kolmafia32.haveSkill)($skill(_templateObject1812 || (_templateObject1812 = _taggedTemplateLiteral22(["Shieldbutt"])))) && (0, import_kolmafia32.itemType)((0, import_kolmafia32.equippedItem)($slot(_templateObject1912 || (_templateObject1912 = _taggedTemplateLiteral22(["offhand"]))))) === "shield" && (0, import_kolmafia32.myClass)() === $class(_templateObject2012 || (_templateObject2012 = _taggedTemplateLiteral22(["Turtle Tamer"]))), Macro3.trySkillRepeat($skill(_templateObject2115 || (_templateObject2115 = _taggedTemplateLiteral22(["Shieldbutt"]))))).trySkillRepeat($skill(_templateObject2213 || (_templateObject2213 = _taggedTemplateLiteral22(["Lunging Thrust-Smack"])))).trySkillRepeat($skill(_templateObject2312 || (_templateObject2312 = _taggedTemplateLiteral22(["Kneebutt"]))));
    }
  }, {
    key: "gooKill",
    value: function() {
      if ((0, import_kolmafia32.myClass)() !== $class(_templateObject2411 || (_templateObject2411 = _taggedTemplateLiteral22(["Grey Goo"]))))
        return this;
      var gooKillSkill = maxBy(gooKillSkills.filter(function(_ref) {
        var skill = _ref.skill;
        return have(skill);
      }), function(_ref2) {
        var stat = _ref2.stat;
        return (0, import_kolmafia32.myBuffedstat)(stat);
      }).skill;
      return this.externalIf(monsterManuelAvailable() && (0, import_kolmafia32.haveSkill)($skill(_templateObject2511 || (_templateObject2511 = _taggedTemplateLiteral22(["Infinite Loop"])))), Macro3.while_("monsterhpabove ".concat((0, import_kolmafia32.myBuffedstat)($stat(_templateObject2611 || (_templateObject2611 = _taggedTemplateLiteral22(["moxie"]))))), Macro3.skill(gooKillSkill)).skill($skill(_templateObject2711 || (_templateObject2711 = _taggedTemplateLiteral22(["Infinite Loop"])))).repeat(), Macro3.skill(gooKillSkill).repeat());
    }
  }, {
    key: "standardCombat",
    value: function() {
      return this.tryHaveSkill($skill(_templateObject2810 || (_templateObject2810 = _taggedTemplateLiteral22(["Curse of Weaksauce"])))).familiarActions().externalIf(SongBoom_exports.song() === "Total Eclipse of Your Meat", Macro3.tryHaveSkill($skill(_templateObject2910 || (_templateObject2910 = _taggedTemplateLiteral22(["Sing Along"]))))).tryHaveSkill($skill(_templateObject3010 || (_templateObject3010 = _taggedTemplateLiteral22(["Extract"])))).externalIf(have($skill(_templateObject3114 || (_templateObject3114 = _taggedTemplateLiteral22(["Meteor Lore"])))), Macro3.trySkill($skill(_templateObject3212 || (_templateObject3212 = _taggedTemplateLiteral22(["Micrometeorite"]))))).trySkill($skill(_templateObject3311 || (_templateObject3311 = _taggedTemplateLiteral22(["Pocket Crumbs"])))).doStandardItems().gooKill().attack().repeat();
    }
  }, {
    key: "hardCombat",
    value: function() {
      return this.tryHaveSkill($skill(_templateObject3410 || (_templateObject3410 = _taggedTemplateLiteral22(["Curse of Weaksauce"])))).familiarActions().externalIf(have($skill(_templateObject358 || (_templateObject358 = _taggedTemplateLiteral22(["Meteor Lore"])))), Macro3.skill($skill(_templateObject368 || (_templateObject368 = _taggedTemplateLiteral22(["Micrometeorite"]))))).tryHaveSkill($skill(_templateObject378 || (_templateObject378 = _taggedTemplateLiteral22(["Pocket Crumbs"])))).doHardItems().trySkill($skill(_templateObject387 || (_templateObject387 = _taggedTemplateLiteral22(["Bowl Sideways"])))).gooKill().hardKill().attack().repeat();
    }
  }], [{
    key: "tryHaveSkill",
    value: function(skill) {
      return new Macro3().tryHaveSkill(skill);
    }
  }, {
    key: "tryHaveItem",
    value: function(item5) {
      return new Macro3().tryHaveItem(item5);
    }
  }, {
    key: "redigitize",
    value: function() {
      return new Macro3().redigitize();
    }
  }, {
    key: "doItems",
    value: function(wanted) {
      return new Macro3().doItems(wanted);
    }
  }, {
    key: "doStandardItems",
    value: function() {
      return new Macro3().doStandardItems();
    }
  }, {
    key: "doHardItems",
    value: function() {
      return new Macro3().doHardItems();
    }
  }, {
    key: "familiarActions",
    value: function() {
      return new Macro3().familiarActions();
    }
  }, {
    key: "hardKill",
    value: function() {
      return new Macro3().hardKill();
    }
  }, {
    key: "gooKill",
    value: function() {
      return new Macro3().gooKill();
    }
  }, {
    key: "standardCombat",
    value: function() {
      return new Macro3().standardCombat();
    }
  }, {
    key: "hardCombat",
    value: function() {
      return new Macro3().hardCombat();
    }
  }]), Macro3;
}(StrictMacro);

// src/outfit.ts
init_kolmafia_polyfill();
var import_kolmafia33 = require("kolmafia");
var _templateObject171, _templateObject271, _templateObject351, _templateObject438, _templateObject530, _templateObject627, _templateObject725, _templateObject824, _templateObject921, _templateObject1018, _templateObject1116, _templateObject1214, _templateObject1314, _templateObject1413, _templateObject1513, _templateObject1613, _templateObject1713, _templateObject1813, _templateObject1913, _templateObject2013, _templateObject2116, _templateObject2214, _templateObject2313, _templateObject2412, _templateObject2512, _templateObject2612, _templateObject2712, _templateObject2811, _templateObject2911, _templateObject3011, _templateObject3115, _templateObject3213, _templateObject3312, _templateObject3411, _templateObject359, _templateObject369, _templateObject379, _templateObject388, _templateObject397, _templateObject407, _templateObject4113, _templateObject4210, _templateObject439, _templateObject447, _templateObject457;
function _toConsumableArray19(arr) {
  return _arrayWithoutHoles19(arr) || _iterableToArray19(arr) || _unsupportedIterableToArray26(arr) || _nonIterableSpread19();
}
function _nonIterableSpread19() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray26(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray26(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray26(o, minLen);
  }
}
function _iterableToArray19(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles19(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray26(arr);
}
function _arrayLikeToArray26(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function ownKeys9(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread9(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys9(Object(source), !0).forEach(function(key) {
      _defineProperty14(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys9(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty14(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _taggedTemplateLiteral23(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function ifHave(slot, item5, condition) {
  var _condition;
  return item5 && have(item5) && (0, import_kolmafia33.canEquip)(item5) && ((_condition = condition == null ? void 0 : condition()) !== null && _condition !== void 0 ? _condition : !0) ? Object.fromEntries([[slot, item5]]) : {};
}
var drunkSpec = sober() ? {} : {
  offhand: $item(_templateObject171 || (_templateObject171 = _taggedTemplateLiteral23(["Drunkula's wineglass"])))
}, affiliationSpec = function() {
  switch (chosenAffiliation()) {
    case "elves":
      return {
        hat: $item(_templateObject271 || (_templateObject271 = _taggedTemplateLiteral23(["Elf Guard patrol cap"]))),
        pants: $item(_templateObject351 || (_templateObject351 = _taggedTemplateLiteral23(["Elf Guard hotpants"])))
      };
    case "pirates":
      return {
        hat: $item(_templateObject438 || (_templateObject438 = _taggedTemplateLiteral23(["Crimbuccaneer tricorn"]))),
        pants: $item(_templateObject530 || (_templateObject530 = _taggedTemplateLiteral23(["Crimbuccaneer breeches"])))
      };
    default:
      return {};
  }
}, orbSpec = function(location4) {
  var prediction = ponder2().get(location4);
  return !!getOrbTarget() && (!prediction || prediction === getOrbTarget()) ? {
    famequip: CrystalBall_exports.orb
  } : {};
};
function mergeSpecs() {
  for (var _len = arguments.length, outfits = new Array(_len), _key = 0; _key < _len; _key++)
    outfits[_key] = arguments[_key];
  return outfits.reduce(function(current, next) {
    return _objectSpread9(_objectSpread9({}, next), current);
  }, {});
}
var adventuresFamiliars = function(allowEquipment) {
  return allowEquipment ? $familiars(_templateObject627 || (_templateObject627 = _taggedTemplateLiteral23(["Temporal Riftlet, Reagnimated Gnome"]))) : $familiars(_templateObject725 || (_templateObject725 = _taggedTemplateLiteral23(["Temporal Riftlet"])));
}, chooseFamiliar = function() {
  var _find, options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return (_find = ((0, import_kolmafia33.canInteract)() && sober() ? adventuresFamiliars(options.allowEquipment) : []).find(function(f) {
    return have(f);
  })) !== null && _find !== void 0 ? _find : freeFightFamiliar(options);
};
function chooseQuestOutfit(_ref) {
  for (var location4 = _ref.location, isFree = _ref.isFree, _len2 = arguments.length, outfits = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)
    outfits[_key2 - 1] = arguments[_key2];
  for (var mergedOutfits = mergeSpecs.apply(void 0, outfits), familiar3 = chooseFamiliar({
    location: location4,
    allowEquipment: !("famequip" in mergedOutfits)
  }), famEquip = mergeSpecs(ifHave("famequip", equipmentFamiliars.get(familiar3)), ifHave("famequip", $item(_templateObject824 || (_templateObject824 = _taggedTemplateLiteral23(["tiny stillsuit"])))), ifHave("famequip", $item(_templateObject921 || (_templateObject921 = _taggedTemplateLiteral23(["amulet coin"]))))), weapons = mergeSpecs(ifHave("weapon", $item(_templateObject1018 || (_templateObject1018 = _taggedTemplateLiteral23(["June cleaver"])))), ifHave("weapon", $item(_templateObject1116 || (_templateObject1116 = _taggedTemplateLiteral23(["Fourth of May Cosplay Saber"]))))), offhands = mergeSpecs(
    ifHave("offhand", $item(_templateObject1214 || (_templateObject1214 = _taggedTemplateLiteral23(["Elf Guard clipboard"]))), function() {
      return location4.zone === "Crimbo23";
    }),
    ifHave("offhand", $item(_templateObject1314 || (_templateObject1314 = _taggedTemplateLiteral23(["Crimbuccaneer Lantern"]))), function() {
      return location4.zone === "Crimbo23";
    }),
    ifHave("offhand", $item(_templateObject1413 || (_templateObject1413 = _taggedTemplateLiteral23(["cursed magnifying glass"]))), function() {
      return !isFree && get("_voidFreeFights") < 5 && get("cursedMagnifyingGlassCount") < 13;
    })
  ), backs = mergeSpecs(ifHave("back", $item(_templateObject1513 || (_templateObject1513 = _taggedTemplateLiteral23(["protonic accelerator pack"]))), function() {
    return get("questPAGhost") === "unstarted" && get("nextParanormalActivity") <= (0, import_kolmafia33.totalTurnsPlayed)() && sober();
  }), ifHave("back", $item(_templateObject1613 || (_templateObject1613 = _taggedTemplateLiteral23(["Buddy Bjorn"]))))), spec = mergeSpecs(ifHave("hat", $item(_templateObject1713 || (_templateObject1713 = _taggedTemplateLiteral23(["Crown of Thrones"]))), function() {
    return !have($item(_templateObject1813 || (_templateObject1813 = _taggedTemplateLiteral23(["Buddy Bjorn"]))));
  }), weapons, offhands, backs, {
    familiar: familiar3
  }, famEquip, ifHave("pants", $item(_templateObject1913 || (_templateObject1913 = _taggedTemplateLiteral23(["designer sweatpants"]))), function() {
    return 25 * get("_sweatOutSomeBoozeUsed") + get("sweat") < 75;
  }), ifHave("pants", $item(_templateObject2013 || (_templateObject2013 = _taggedTemplateLiteral23(["Pantsgiving"]))), function() {
    return get("_pantsgivingCount") < 50 || get("_pantsgivingFullness") < 2 && getRemainingStomach() === 0;
  }), {
    modifier: "Familiar Weight"
  }), bestAccessories = getBestAccessories(location4, isFree), i = 0; i < 3; i++) {
    var accessory = bestAccessories[i];
    if (!accessory)
      break;
    spec["acc".concat(i + 1)] = accessory;
  }
  var mergedSpec = mergeSpecs.apply(void 0, outfits.concat([spec])), goodFammy = $item(_templateObject2116 || (_templateObject2116 = _taggedTemplateLiteral23(["Buddy Bjorn"]))), lessGoodFammy = $item(_templateObject2214 || (_templateObject2214 = _taggedTemplateLiteral23(["Crown of Thrones"]))), lessGoodSlot = (0, import_kolmafia33.toSlot)(lessGoodFammy).toString();
  if (!have(goodFammy) && have(lessGoodFammy) && !(lessGoodSlot in mergedSpec))
    mergedSpec[lessGoodSlot] = lessGoodFammy;
  else {
    var _mergedSpec$avoid;
    mergedSpec.avoid = [].concat(_toConsumableArray19((_mergedSpec$avoid = mergedSpec.avoid) !== null && _mergedSpec$avoid !== void 0 ? _mergedSpec$avoid : []), [lessGoodFammy]);
  }
  return mergedSpec;
}
var equipmentFamiliars = /* @__PURE__ */ new Map([[$familiar(_templateObject2313 || (_templateObject2313 = _taggedTemplateLiteral23(["Reagnimated Gnome"]))), $item(_templateObject2412 || (_templateObject2412 = _taggedTemplateLiteral23(["gnomish housemaid's kgnee"])))], [$familiar(_templateObject2512 || (_templateObject2512 = _taggedTemplateLiteral23(["Shorter-Order Cook"]))), $item(_templateObject2612 || (_templateObject2612 = _taggedTemplateLiteral23(["blue plate"])))], [$familiar(_templateObject2712 || (_templateObject2712 = _taggedTemplateLiteral23(["Stocking Mimic"]))), $item(_templateObject2811 || (_templateObject2811 = _taggedTemplateLiteral23(["bag of many confections"])))]]);
function luckyGoldRing() {
  var dropValues = [100].concat(_toConsumableArray19([
    (0, import_kolmafia33.itemAmount)($item(_templateObject2911 || (_templateObject2911 = _taggedTemplateLiteral23(["hobo nickel"])))) > 0 ? 100 : 0,
    (0, import_kolmafia33.itemAmount)($item(_templateObject3011 || (_templateObject3011 = _taggedTemplateLiteral23(["sand dollar"])))) > 0 ? garboValue($item(_templateObject3115 || (_templateObject3115 = _taggedTemplateLiteral23(["sand dollar"])))) : 0,
    (0, import_kolmafia33.itemAmount)($item(_templateObject3213 || (_templateObject3213 = _taggedTemplateLiteral23(["Freddy Kruegerand"])))) > 0 ? garboValue($item(_templateObject3312 || (_templateObject3312 = _taggedTemplateLiteral23(["Freddy Kruegerand"])))) : 0,
    realmAvailable("sleaze") ? garboValue($item(_templateObject3411 || (_templateObject3411 = _taggedTemplateLiteral23(["Beach Buck"])))) : 0,
    realmAvailable("spooky") ? garboValue($item(_templateObject359 || (_templateObject359 = _taggedTemplateLiteral23(["Coinspiracy"])))) : 0,
    realmAvailable("stench") ? garboValue($item(_templateObject369 || (_templateObject369 = _taggedTemplateLiteral23(["FunFunds\u2122"])))) : 0,
    realmAvailable("hot") && !get("_luckyGoldRingVolcoino") ? garboValue($item(_templateObject379 || (_templateObject379 = _taggedTemplateLiteral23(["Volcoino"])))) : 0,
    realmAvailable("cold") ? garboValue($item(_templateObject388 || (_templateObject388 = _taggedTemplateLiteral23(["Wal-Mart gift certificate"])))) : 0,
    realmAvailable("fantasy") ? garboValue($item(_templateObject397 || (_templateObject397 = _taggedTemplateLiteral23(["Rubee\u2122"])))) : 0
  ].filter(function(value) {
    return value > 0;
  })));
  return sumNumbers(dropValues) / dropValues.length / 10;
}
var accessories = [{
  item: $item(_templateObject407 || (_templateObject407 = _taggedTemplateLiteral23(["mafia thumb ring"]))),
  valueFunction: function(_ref2) {
    var isFree = _ref2.isFree;
    return isFree ? 0 : (1 / 0.96 - 1) * get("valueOfAdventure");
  }
}, {
  item: $item(_templateObject4113 || (_templateObject4113 = _taggedTemplateLiteral23(["lucky gold ring"]))),
  valueFunction: luckyGoldRing
}, {
  item: $item(_templateObject4210 || (_templateObject4210 = _taggedTemplateLiteral23(["Mr. Screege's spectacles"]))),
  valueFunction: function() {
    return 180;
  }
}, {
  item: $item(_templateObject439 || (_templateObject439 = _taggedTemplateLiteral23(["Mr. Cheeng's spectacles"]))),
  valueFunction: function() {
    return 220;
  }
}, {
  item: $item(_templateObject447 || (_templateObject447 = _taggedTemplateLiteral23(["pegfinger"]))),
  valueFunction: function(_ref32) {
    var location4 = _ref32.location;
    return location4.zone === "Crimbo23" && chosenAffiliation() === "pirates" ? 1e4 : 0;
  }
}, {
  item: $item(_templateObject457 || (_templateObject457 = _taggedTemplateLiteral23(["Elf Guard commandeering gloves"]))),
  valueFunction: function(_ref4) {
    var location4 = _ref4.location;
    return location4.zone === "Crimbo23" && chosenAffiliation() === "elves" ? 1e4 : 0;
  }
}];
function getBestAccessories(location4, isFree) {
  return accessories.filter(function(_ref52) {
    var item5 = _ref52.item;
    return have(item5) && (0, import_kolmafia33.canEquip)(item5);
  }).map(function(_ref62) {
    var item5 = _ref62.item, valueFunction = _ref62.valueFunction;
    return {
      item: item5,
      value: valueFunction({
        location: location4,
        isFree: isFree
      })
    };
  }).sort(function(_ref7, _ref8) {
    var a = _ref7.value, b = _ref8.value;
    return b - a;
  }).map(function(_ref9) {
    var item5 = _ref9.item;
    return item5;
  }).splice(0, 3);
}

// src/setup.ts
init_kolmafia_polyfill();
var import_kolmafia34 = require("kolmafia");
var _templateObject180, _templateObject280, _templateObject360, _templateObject440, _templateObject531, _templateObject628, _templateObject726, _templateObject825, _templateObject923, _templateObject1019, _templateObject1117, _templateObject1215, _templateObject1315, _templateObject1414, _templateObject1514, _templateObject1614, _templateObject1714, _templateObject1814, _templateObject1914, _templateObject2014, _templateObject2117, _templateObject2215, _templateObject2314, _templateObject2413, _templateObject2513, _templateObject2613, _templateObject2713, _templateObject2812;
function _taggedTemplateLiteral24(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var poisons = $effects(_templateObject180 || (_templateObject180 = _taggedTemplateLiteral24(["Hardly Poisoned at All, A Little Bit Poisoned, Somewhat Poisoned, Really Quite Poisoned, Majorly Poisoned"])));
function cmcTarget() {
  return {
    item: $item(_templateObject280 || (_templateObject280 = _taggedTemplateLiteral24(["Extrovermectin\u2122"]))),
    environment: "i"
  };
}
var setup = {
  name: "Setup",
  tasks: [{
    name: "Beaten Up",
    completed: function() {
      return !have($effect(_templateObject360 || (_templateObject360 = _taggedTemplateLiteral24(["Beaten Up"]))));
    },
    do: function() {
      if (["Poetic Justice", "Lost and Found"].includes(get("lastEncounter")) && uneffect($effect(_templateObject440 || (_templateObject440 = _taggedTemplateLiteral24(["Beaten Up"])))), have($effect(_templateObject531 || (_templateObject531 = _taggedTemplateLiteral24(["Beaten Up"])))))
        throw "Got beaten up for no discernable reason!";
    },
    sobriety: "either"
  }, {
    name: "Disco Nap",
    ready: function() {
      return have($skill(_templateObject628 || (_templateObject628 = _taggedTemplateLiteral24(["Disco Nap"])))) && have($skill(_templateObject726 || (_templateObject726 = _taggedTemplateLiteral24(["Adventurer of Leisure"]))));
    },
    completed: function() {
      return poisons.every(function(e) {
        return !have(e);
      });
    },
    do: function() {
      return (0, import_kolmafia34.useSkill)($skill(_templateObject825 || (_templateObject825 = _taggedTemplateLiteral24(["Disco Nap"]))));
    },
    sobriety: "either"
  }, {
    name: "Antidote",
    completed: function() {
      return poisons.every(function(e) {
        return !have(e);
      });
    },
    do: function() {
      return poisons.forEach(function(e) {
        return uneffect(e);
      });
    },
    sobriety: "either"
  }, {
    name: "Recover",
    ready: function() {
      return have($skill(_templateObject923 || (_templateObject923 = _taggedTemplateLiteral24(["Cannelloni Cocoon"]))));
    },
    completed: function() {
      return (0, import_kolmafia34.myHp)() / (0, import_kolmafia34.myMaxhp)() >= 0.75;
    },
    do: function() {
      (0, import_kolmafia34.useSkill)($skill(_templateObject1019 || (_templateObject1019 = _taggedTemplateLiteral24(["Cannelloni Cocoon"]))));
    },
    sobriety: "either"
  }, {
    name: "Recover Failed",
    completed: function() {
      return (0, import_kolmafia34.myHp)() / (0, import_kolmafia34.myMaxhp)() >= 0.5;
    },
    do: function() {
      throw "Unable to heal above 50% HP, heal yourself!";
    },
    sobriety: "either"
  }, {
    name: "Recover MP",
    completed: function() {
      return (0, import_kolmafia34.myMp)() >= Math.min(250, (0, import_kolmafia34.myMaxmp)());
    },
    do: function() {
      return (0, import_kolmafia34.restoreMp)(300);
    },
    sobriety: "sober"
  }, {
    name: "Kgnee",
    completed: function() {
      return !have($familiar(_templateObject1117 || (_templateObject1117 = _taggedTemplateLiteral24(["Reagnimated Gnome"])))) || have($item(_templateObject1215 || (_templateObject1215 = _taggedTemplateLiteral24(["gnomish housemaid's kgnee"]))));
    },
    do: function() {
      (0, import_kolmafia34.visitUrl)("arena.php"), (0, import_kolmafia34.runChoice)(4);
    },
    outfit: {
      familiar: $familiar(_templateObject1315 || (_templateObject1315 = _taggedTemplateLiteral24(["Reagnimated Gnome"])))
    },
    sobriety: "sober"
  }, {
    name: "MCD",
    completed: function() {
      return !(0, import_kolmafia34.currentMcd)();
    },
    do: function() {
      return (0, import_kolmafia34.changeMcd)(0);
    },
    sobriety: "either"
  }, {
    name: "The Captain",
    completed: function() {
      return get("_mummeryMods").includes("Meat Drop");
    },
    ready: function() {
      return have($item(_templateObject1414 || (_templateObject1414 = _taggedTemplateLiteral24(["mumming trunk"])))) && $familiars(_templateObject1514 || (_templateObject1514 = _taggedTemplateLiteral24(["Reagnimated Gnome, Temporal Riftlet"]))).some(have);
    },
    sobriety: "either",
    do: function() {
      var fam = $familiars(_templateObject1614 || (_templateObject1614 = _taggedTemplateLiteral24(["Reagnimated Gnome, Temporal Riftlet"]))).find(have);
      fam ? ((0, import_kolmafia34.useFamiliar)(fam), (0, import_kolmafia34.cliExecute)("mummery meat")) : (0, import_kolmafia34.abort)("Something went wrong with the mumming trunk");
    }
  }, {
    name: "Closet Sand Dollars",
    completed: function() {
      return (0, import_kolmafia34.itemAmount)($item(_templateObject1714 || (_templateObject1714 = _taggedTemplateLiteral24(["sand dollar"])))) === 0;
    },
    do: function() {
      return (0, import_kolmafia34.putCloset)((0, import_kolmafia34.itemAmount)($item(_templateObject1814 || (_templateObject1814 = _taggedTemplateLiteral24(["sand dollar"])))), $item(_templateObject1914 || (_templateObject1914 = _taggedTemplateLiteral24(["sand dollar"]))));
    },
    sobriety: "either"
  }, {
    name: "Closet Hobo Nickels",
    completed: function() {
      return (0, import_kolmafia34.itemAmount)($item(_templateObject2014 || (_templateObject2014 = _taggedTemplateLiteral24(["hobo nickel"])))) === 0 || !have($familiar(_templateObject2117 || (_templateObject2117 = _taggedTemplateLiteral24(["Hobo Monkey"])))) && !have($item(_templateObject2215 || (_templateObject2215 = _taggedTemplateLiteral24(["hobo nickel"]))), 1e3);
    },
    do: function() {
      return (0, import_kolmafia34.putCloset)((0, import_kolmafia34.itemAmount)($item(_templateObject2314 || (_templateObject2314 = _taggedTemplateLiteral24(["hobo nickel"])))), $item(_templateObject2413 || (_templateObject2413 = _taggedTemplateLiteral24(["hobo nickel"]))));
    },
    sobriety: "either"
  }, {
    name: "Snapper",
    completed: function() {
      return Snapper_exports.getTrackedPhylum() === $phylum(_templateObject2513 || (_templateObject2513 = _taggedTemplateLiteral24(["construct"])));
    },
    do: function() {
      return Snapper_exports.trackPhylum($phylum(_templateObject2613 || (_templateObject2613 = _taggedTemplateLiteral24(["construct"]))));
    },
    ready: function() {
      return Snapper_exports.have();
    },
    sobriety: "either"
  }, {
    name: "Autumn-Aton",
    completed: function() {
      return AutumnAton_exports.currentlyIn() !== null;
    },
    do: function() {
      AutumnAton_exports.sendTo($locations(_templateObject2713 || (_templateObject2713 = _taggedTemplateLiteral24(["The Toxic Teacups, The Oasis, The Deep Dark Jungle, The Bubblin' Caldera, The Neverending Party, The Sleazy Back Alley"]))));
    },
    ready: function() {
      return AutumnAton_exports.available() && AutumnAton_exports.turnsForQuest() < (0, import_kolmafia34.myAdventures)() + 10;
    },
    sobriety: "either"
  }, {
    name: "Cold Medicine Cabinent",
    completed: function() {
      return (0, import_kolmafia34.getWorkshed)() !== $item(_templateObject2812 || (_templateObject2812 = _taggedTemplateLiteral24(["cold medicine cabinet"]))) || (0, import_kolmafia34.totalTurnsPlayed)() < get("_nextColdMedicineConsult") || get("_coldMedicineConsults") >= 5 || countEnvironment(cmcTarget().environment) <= 10;
    },
    do: function() {
      return tryGetCMCItem(cmcTarget().item);
    },
    sobriety: "either"
  }, {
    name: "Boombox",
    completed: function() {
      return !SongBoom_exports.have() || SongBoom_exports.song() === "Food Vibrations" || SongBoom_exports.songChangesLeft() === 0;
    },
    do: function() {
      return SongBoom_exports.setSong("Food Vibrations");
    },
    sobriety: "either"
  }]
};

// src/wanderer/index.ts
init_kolmafia_polyfill();

// src/wanderer/guzzlr.ts
init_kolmafia_polyfill();
var import_kolmafia36 = require("kolmafia");

// src/wanderer/lib.ts
init_kolmafia_polyfill();
var import_kolmafia35 = require("kolmafia");
var _templateObject181, _templateObject281, _templateObject361, _templateObject441, _templateObject535, _templateObject629, _templateObject727, _templateObject826, _templateObject924, _templateObject1020, _templateObject1118, _templateObject1216, _templateObject1316, _templateObject1415, _templateObject1515, _templateObject1615, _templateObject1715, _templateObject1815, _templateObject1915, _templateObject2015;
function _defineProperties15(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass15(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties15(Constructor.prototype, protoProps), staticProps && _defineProperties15(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _classCallCheck15(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperty15(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toConsumableArray20(arr) {
  return _arrayWithoutHoles20(arr) || _iterableToArray20(arr) || _unsupportedIterableToArray27(arr) || _nonIterableSpread20();
}
function _nonIterableSpread20() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray27(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray27(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray27(o, minLen);
  }
}
function _iterableToArray20(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles20(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray27(arr);
}
function _arrayLikeToArray27(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral25(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var UnlockableZones = [{
  zone: "Spaaace",
  available: function() {
    return have($effect(_templateObject181 || (_templateObject181 = _taggedTemplateLiteral25(["Transpondent"]))));
  },
  unlocker: $item(_templateObject281 || (_templateObject281 = _taggedTemplateLiteral25(["transporter transponder"]))),
  noInv: !1
}, {
  zone: "Rabbit Hole",
  available: function() {
    return have($effect(_templateObject361 || (_templateObject361 = _taggedTemplateLiteral25(["Down the Rabbit Hole"]))));
  },
  unlocker: $item(_templateObject441 || (_templateObject441 = _taggedTemplateLiteral25(['"DRINK ME" potion']))),
  noInv: !1
}, {
  zone: "Conspiracy Island",
  available: function() {
    return realmAvailable("spooky");
  },
  unlocker: $item(_templateObject535 || (_templateObject535 = _taggedTemplateLiteral25(["one-day ticket to Conspiracy Island"]))),
  noInv: !0
}, {
  zone: "Dinseylandfill",
  available: function() {
    return realmAvailable("stench");
  },
  unlocker: $item(_templateObject629 || (_templateObject629 = _taggedTemplateLiteral25(["one-day ticket to Dinseylandfill"]))),
  noInv: !0
}, {
  zone: "The Glaciest",
  available: function() {
    return realmAvailable("cold");
  },
  unlocker: $item(_templateObject727 || (_templateObject727 = _taggedTemplateLiteral25(["one-day ticket to The Glaciest"]))),
  noInv: !0
}, {
  zone: "Spring Break Beach",
  available: function() {
    return realmAvailable("sleaze");
  },
  unlocker: $item(_templateObject826 || (_templateObject826 = _taggedTemplateLiteral25(["one-day ticket to Spring Break Beach"]))),
  noInv: !0
}];
function underwater(location4) {
  return location4.environment === "underwater";
}
var canAdventureOrUnlockSkipList = [].concat(_toConsumableArray20($locations(_templateObject924 || (_templateObject924 = _taggedTemplateLiteral25(["The Oasis, The Bubblin' Caldera, Barrrney's Barrr, The F'c'le, The Poop Deck, Belowdecks, 8-Bit Realm, Madness Bakery, The Secret Government Laboratory, The Dire Warren, Inside the Palindome, The Haiku Dungeon, An Incredibly Strange Place (Bad Trip), An Incredibly Strange Place (Mediocre Trip), An Incredibly Strange Place (Great Trip), The Mouldering Mansion, The Rogue Windmill, The Stately Pleasure Dome"])))), _toConsumableArray20(import_kolmafia35.Location.all().filter(function(l) {
  return l.parent === "Clan Basement";
})));
function canAdventureOrUnlock(loc) {
  var skiplist = _toConsumableArray20(canAdventureOrUnlockSkipList);
  !have($item(_templateObject1020 || (_templateObject1020 = _taggedTemplateLiteral25(["repaid diaper"])))) && have($item(_templateObject1118 || (_templateObject1118 = _taggedTemplateLiteral25(["Great Wolf's beastly trousers"])))) && skiplist.push($location(_templateObject1216 || (_templateObject1216 = _taggedTemplateLiteral25(["The Icy Peak"]))));
  var canUnlock = UnlockableZones.some(function(z) {
    return loc.zone === z.zone && (z.available() || !z.noInv);
  });
  return !underwater(loc) && !skiplist.includes(loc) && ((0, import_kolmafia35.canAdventure)(loc) || canUnlock);
}
function unlock(loc, value) {
  var unlockableZone = UnlockableZones.find(function(z) {
    return z.zone === loc.zone;
  });
  return unlockableZone ? unlockableZone.available() ? !0 : (0, import_kolmafia35.buy)(1, unlockableZone.unlocker, value) === 0 ? !1 : (0, import_kolmafia35.use)(unlockableZone.unlocker) : (0, import_kolmafia35.canAdventure)(loc);
}
var backupSkiplist = $locations(_templateObject1316 || (_templateObject1316 = _taggedTemplateLiteral25(["The Overgrown Lot, The Skeleton Store, The Mansion of Dr. Weirdeaux"])));
function canWanderTypeBackup(location4) {
  return !backupSkiplist.includes(location4) && location4.combatPercent >= 100;
}
function canWanderTypeYellowRay(location4) {
  return location4 === $location(_templateObject1415 || (_templateObject1415 = _taggedTemplateLiteral25(["The Fun-Guy Mansion"]))) && get("funGuyMansionKills", 0) >= 100 ? !1 : canWanderTypeBackup(location4);
}
var wandererSkiplist = $locations(_templateObject1515 || (_templateObject1515 = _taggedTemplateLiteral25(["The Batrat and Ratbat Burrow, Guano Junction, The Beanbat Chamber, A-Boo Peak"])));
function canWanderTypeWander(location4) {
  return !wandererSkiplist.includes(location4) && location4.wanderers;
}
function canWander(location4, type) {
  if (underwater(location4))
    return !1;
  switch (type) {
    case "backup":
      return canWanderTypeBackup(location4);
    case "yellow ray":
      return canWanderTypeYellowRay(location4);
    case "wanderer":
      return canWanderTypeWander(location4);
  }
}
var WandererTarget = /* @__PURE__ */ _createClass15(
  function WandererTarget2(name, location4, value) {
    var prepareTurn = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : function() {
      return !0;
    };
    _classCallCheck15(this, WandererTarget2), _defineProperty15(this, "name", void 0), _defineProperty15(this, "value", void 0), _defineProperty15(this, "location", void 0), _defineProperty15(this, "prepareTurn", void 0), this.name = name, this.value = value, this.location = location4, this.prepareTurn = prepareTurn;
  }
);
function defaultFactory() {
  return [new WandererTarget("Default", $location(_templateObject1615 || (_templateObject1615 = _taggedTemplateLiteral25(["The Haunted Kitchen"]))), 0)];
}
var WanderingSources = [{
  name: "CMG",
  item: $item(_templateObject1715 || (_templateObject1715 = _taggedTemplateLiteral25(["cursed magnifying glass"]))),
  max: 3,
  property: "_voidFreeFights",
  type: "wanderer"
}, {
  name: "Voter",
  item: $item(_templateObject1815 || (_templateObject1815 = _taggedTemplateLiteral25(['"I Voted!" sticker']))),
  max: 3,
  property: "_voteFreeFights",
  type: "wanderer"
}, {
  name: "Voter",
  item: $item(_templateObject1915 || (_templateObject1915 = _taggedTemplateLiteral25(['"I Voted!" sticker']))),
  max: 3,
  property: "_voteFreeFights",
  type: "wanderer"
}, {
  name: "Backup",
  item: $item(_templateObject2015 || (_templateObject2015 = _taggedTemplateLiteral25(["backup camera"]))),
  max: 11,
  property: "_backUpUses",
  type: "backup"
}];
function wandererTurnsAvailableToday(location4) {
  var canWanderCache = {
    backup: canWander(location4, "backup"),
    wanderer: canWander(location4, "wanderer"),
    "yellow ray": canWander(location4, "yellow ray")
  }, digitize = canWanderCache.backup ? digitizedMonstersRemaining() : 0, yellowRay = canWanderCache["yellow ray"] ? Math.floor((0, import_kolmafia35.myAdventures)() / 100) : 0, wanderers = sum(WanderingSources, function(source) {
    return canWanderCache[source.type] && have(source.item) ? clamp(get(source.property), 0, source.max) : 0;
  });
  return digitize + yellowRay + wanderers;
}

// src/wanderer/guzzlr.ts
var _templateObject190, _templateObject290, _templateObject370;
function _taggedTemplateLiteral26(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function freeCrafts() {
  return (have($skill(_templateObject190 || (_templateObject190 = _taggedTemplateLiteral26(["Rapid Prototyping"])))) ? 5 - get("_rapidPrototypingUsed") : 0) + (have($skill(_templateObject290 || (_templateObject290 = _taggedTemplateLiteral26(["Expert Corner-Cutter"])))) ? 5 - get("_expertCornerCutterUsed") : 0);
}
function considerAbandon(locationSkiplist) {
  var location4 = Guzzlr_exports.getLocation(), remaningTurns = Math.ceil((100 - get("guzzlrDeliveryProgress")) / (10 - get("_guzzlrDeliveries")));
  (0, import_kolmafia36.print)("Got guzzlr quest ".concat(Guzzlr_exports.getTier(), " at ").concat(Guzzlr_exports.getLocation(), " with remaining turns ").concat(remaningTurns)), (!location4 || locationSkiplist.includes(location4) || !canAdventureOrUnlock(location4) || wandererTurnsAvailableToday(location4) < remaningTurns) && ((0, import_kolmafia36.print)("Abandoning..."), Guzzlr_exports.abandon());
}
function acceptGuzzlrQuest(locationSkiplist) {
  for (Guzzlr_exports.isQuestActive() && considerAbandon(locationSkiplist); !Guzzlr_exports.isQuestActive(); )
    (0, import_kolmafia36.print)("Picking a guzzlr quest"), Guzzlr_exports.canPlatinum() && !(get("garbo_prioritizeCappingGuzzlr", !1) && Guzzlr_exports.haveFullPlatinumBonus()) ? Guzzlr_exports.acceptPlatinum() : Guzzlr_exports.canGold() && (Guzzlr_exports.haveFullBronzeBonus() || !Guzzlr_exports.haveFullGoldBonus()) ? Guzzlr_exports.acceptGold() : Guzzlr_exports.acceptBronze(), considerAbandon(locationSkiplist);
}
function guzzlrValue(tier) {
  var progressPerTurn = 100 / (10 - get("_guzzlrDeliveries")), buckValue = garboValue($item(_templateObject370 || (_templateObject370 = _taggedTemplateLiteral26(["Guzzlrbuck"]))));
  switch (tier) {
    case null:
      return 0;
    case "bronze":
      return 3 * buckValue / progressPerTurn;
    case "gold":
      return 6 * buckValue / progressPerTurn;
    case "platinum":
      return 21.5 * buckValue / progressPerTurn;
  }
}
function guzzlrFactory(_type, locationSkiplist) {
  if (Guzzlr_exports.have()) {
    acceptGuzzlrQuest(locationSkiplist);
    var location4 = Guzzlr_exports.getLocation();
    if (location4 !== null) {
      var guzzlrBooze = Guzzlr_exports.getTier() === "platinum" ? Guzzlr_exports.getCheapestPlatinumCocktail() : Guzzlr_exports.getBooze();
      return [new WandererTarget("Guzzlr", location4, guzzlrValue(Guzzlr_exports.getTier()), function() {
        if (!guzzlrBooze)
          return !1;
        if (!have(guzzlrBooze)) {
          var fancy = guzzlrBooze && (0, import_kolmafia36.craftType)(guzzlrBooze).includes("fancy");
          guzzlrBooze && (!fancy || fancy && freeCrafts() > 0) ? (0, import_kolmafia36.retrieveItem)(guzzlrBooze) : guzzlrBooze && (0, import_kolmafia36.buy)(1, guzzlrBooze, guzzlrValue(Guzzlr_exports.getTier()));
        }
        return have(guzzlrBooze);
      })];
    }
  }
  return [];
}

// src/wanderer/lovebugs.ts
init_kolmafia_polyfill();
var _templateObject191, _templateObject291, _templateObject371, _templateObject448, _templateObject536, _templateObject630;
function _taggedTemplateLiteral27(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var LovebugTargets = [{
  element: "cold",
  location: $location(_templateObject191 || (_templateObject191 = _taggedTemplateLiteral27(["VYKEA"]))),
  currency: $item(_templateObject291 || (_templateObject291 = _taggedTemplateLiteral27(["Wal-Mart gift certificate"])))
}, {
  element: "sleaze",
  location: $location(_templateObject371 || (_templateObject371 = _taggedTemplateLiteral27(["The Fun-Guy Mansion"]))),
  currency: $item(_templateObject448 || (_templateObject448 = _taggedTemplateLiteral27(["Beach Buck"])))
}, {
  element: "spooky",
  location: $location(_templateObject536 || (_templateObject536 = _taggedTemplateLiteral27(["The Deep Dark Jungle"]))),
  currency: $item(_templateObject630 || (_templateObject630 = _taggedTemplateLiteral27(["Coinspiracy"])))
}];
function lovebugsFactory() {
  return get("lovebugsUnlocked") ? LovebugTargets.filter(function(t) {
    return realmAvailable(t.element);
  }).map(function(t) {
    return new WandererTarget("Lovebugs ".concat(t.location), t.location, garboValue(t.currency) * 0.05);
  }) : [];
}

// src/wanderer/yellowray.ts
init_kolmafia_polyfill();
var import_kolmafia37 = require("kolmafia");
function _toConsumableArray21(arr) {
  return _arrayWithoutHoles21(arr) || _iterableToArray21(arr) || _unsupportedIterableToArray28(arr) || _nonIterableSpread21();
}
function _nonIterableSpread21() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray21(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles21(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray28(arr);
}
function _createForOfIteratorHelper14(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray28(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e2) {
    didErr = !0, err = _e2;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray28(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray28(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray28(o, minLen);
  }
}
function _arrayLikeToArray28(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function averageYrValue(location4) {
  var badAttributes = ["LUCKY", "ULTRARARE", "BOSS"], rates = (0, import_kolmafia37.appearanceRates)(location4), monsters = Object.keys((0, import_kolmafia37.getLocationMonsters)(location4)).map(function(m) {
    return (0, import_kolmafia37.toMonster)(m);
  }).filter(function(m) {
    return !badAttributes.some(function(s) {
      return m.attributes.includes(s);
    }) && rates[m.name] > 0;
  });
  return monsters.length === 0 ? 0 : sum(monsters, function(m) {
    var items = (0, import_kolmafia37.itemDropsArray)(m).filter(function(drop) {
      return ["", "n"].includes(drop.type);
    });
    return sum(items, function(drop) {
      var yrRate = (drop.type === "" ? 100 : drop.rate) / 100;
      return yrRate * garboValue(drop.drop, !0);
    });
  }) / monsters.length;
}
function yrValues() {
  var values = /* @__PURE__ */ new Map(), _iterator = _createForOfIteratorHelper14(import_kolmafia37.Location.all().filter(function(l) {
    return canAdventureOrUnlock(l) && !underwater(l);
  })), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var location4 = _step.value;
      values.set(location4, averageYrValue(location4) + freeFightFamiliarData({
        location: location4
      }).expectedValue);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return values;
}
function yellowRayFactory(type, locationSkiplist) {
  if (type === "yellow ray") {
    var _ret = function() {
      var validLocations = import_kolmafia37.Location.all().filter(function(location4) {
        return canWander(location4, "yellow ray") && canAdventureOrUnlock(location4);
      }), locationValues = yrValues(), bestZones = /* @__PURE__ */ new Set([maxBy(validLocations, function(l) {
        var _locationValues$get;
        return (_locationValues$get = locationValues.get(l)) !== null && _locationValues$get !== void 0 ? _locationValues$get : 0;
      })]), _iterator2 = _createForOfIteratorHelper14(UnlockableZones), _step2;
      try {
        var _loop = function() {
          var unlockableZone = _step2.value, extraLocations = import_kolmafia37.Location.all().filter(function(l) {
            return l.zone === unlockableZone.zone && !locationSkiplist.includes(l);
          });
          bestZones.add(maxBy(extraLocations, function(l) {
            var _locationValues$get3;
            return (_locationValues$get3 = locationValues.get(l)) !== null && _locationValues$get3 !== void 0 ? _locationValues$get3 : 0;
          }));
        };
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; )
          _loop();
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (bestZones.size > 0)
        return {
          v: _toConsumableArray21(bestZones).map(function(l) {
            var _locationValues$get2;
            return new WandererTarget("Yellow Ray ".concat(l), l, (_locationValues$get2 = locationValues.get(l)) !== null && _locationValues$get2 !== void 0 ? _locationValues$get2 : 0);
          })
        };
    }();
    if (typeof _ret == "object")
      return _ret.v;
  }
  return [];
}

// src/wanderer/index.ts
var _templateObject200;
function _taggedTemplateLiteral28(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _toConsumableArray22(arr) {
  return _arrayWithoutHoles22(arr) || _iterableToArray22(arr) || _unsupportedIterableToArray29(arr) || _nonIterableSpread22();
}
function _nonIterableSpread22() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray22(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles22(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray29(arr);
}
function _createForOfIteratorHelper15(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray29(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e2) {
    didErr = !0, err = _e2;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray29(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray29(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray29(o, minLen);
  }
}
function _arrayLikeToArray29(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var wanderFactories = [defaultFactory, yellowRayFactory, lovebugsFactory, guzzlrFactory];
function bestWander(type, locationSkiplist, nameSkiplist) {
  var possibleLocations = /* @__PURE__ */ new Map(), _iterator = _createForOfIteratorHelper15(wanderFactories), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var wanderFactory = _step.value, wanderTargets = wanderFactory(type, locationSkiplist), _iterator2 = _createForOfIteratorHelper15(wanderTargets), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var wanderTarget = _step2.value;
          if (!nameSkiplist.includes(wanderTarget.name) && !locationSkiplist.includes(wanderTarget.location) && canWander(wanderTarget.location, type)) {
            var _possibleLocations$ge, wandererLocation = (_possibleLocations$ge = possibleLocations.get(wanderTarget.location)) !== null && _possibleLocations$ge !== void 0 ? _possibleLocations$ge : {
              location: wanderTarget.location,
              targets: [],
              value: 0
            };
            wandererLocation.targets = [].concat(_toConsumableArray22(wandererLocation.targets), [wanderTarget]), wandererLocation.value += wanderTarget.value, possibleLocations.set(wandererLocation.location, wandererLocation);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (possibleLocations.size === 0)
    throw "Could not determine a wander target!";
  return maxBy(_toConsumableArray22(possibleLocations.values()), "value");
}
function wanderWhere(type) {
  var nameSkiplist = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], locationSkiplist = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], candidate = bestWander(type, locationSkiplist, nameSkiplist), failed = candidate.targets.filter(function(target) {
    return !target.prepareTurn();
  }), badLocation = !canAdventureOrUnlock(candidate.location) || !unlock(candidate.location, candidate.value) || !canWander(candidate.location, type) ? [candidate.location] : [];
  if (failed.length > 0 || badLocation.length > 0)
    return wanderWhere(type, [].concat(_toConsumableArray22(nameSkiplist), _toConsumableArray22(failed.map(function(target) {
      return target.name;
    }))), [].concat(_toConsumableArray22(locationSkiplist), badLocation));
  var targets = candidate.targets.map(function(t) {
    return t.name;
  }).join("; "), value = candidate.value.toFixed(2);
  return printh("Wandering at ".concat(candidate.location, " for expected value ").concat(value, " (").concat(targets, ")")), candidate.location;
}
function drunkSafeWander(type) {
  return sober() ? wanderWhere(type) : $location(_templateObject200 || (_templateObject200 = _taggedTemplateLiteral28(["Drunken Stupor"])));
}

// src/zones/index.ts
var zones_exports = {};
__export(zones_exports, {
  bar: function() {
    return bar_default;
  },
  cottage: function() {
    return cottage_default;
  },
  foundry: function() {
    return foundry_default;
  }
});
init_kolmafia_polyfill();

// src/zones/bar.ts
init_kolmafia_polyfill();
var import_kolmafia38 = require("kolmafia");
var _templateObject201, _templateObject2100;
function _taggedTemplateLiteral29(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var location = $location(_templateObject201 || (_templateObject201 = _taggedTemplateLiteral29(["The Bar at War"]))), bar = {
  name: "Bar",
  location: location,
  tasks: [{
    name: "Crimbo",
    completed: function() {
      return !1;
    },
    do: location,
    outfit: function() {
      return chooseQuestOutfit({
        location: location,
        isFree: !1
      }, drunkSpec, affiliationSpec(), orbSpec(location));
    },
    effects: function() {
      return $effects(_templateObject2100 || (_templateObject2100 = _taggedTemplateLiteral29(["Blood Bond, Empathy, Leash of Linguini"]))).filter(function(effect) {
        return have((0, import_kolmafia38.toSkill)(effect));
      });
    },
    combat: new CrimboStrategy(function() {
      return Macro2.standardCombat();
    }),
    sobriety: "either",
    post: toasterGazeIfNecessary
  }]
}, bar_default = bar;

// src/zones/cottage.ts
init_kolmafia_polyfill();
var import_kolmafia39 = require("kolmafia");
var _templateObject300, _templateObject2101;
function _taggedTemplateLiteral30(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var location2 = $location(_templateObject300 || (_templateObject300 = _taggedTemplateLiteral30(["Abuela's Cottage (Contested)"]))), cottage = {
  name: "Cottage",
  location: location2,
  tasks: [{
    name: "Crimbo",
    completed: function() {
      return !1;
    },
    do: location2,
    outfit: function() {
      return chooseQuestOutfit({
        location: location2,
        isFree: !1
      }, drunkSpec, affiliationSpec(), orbSpec(location2));
    },
    effects: function() {
      return $effects(_templateObject2101 || (_templateObject2101 = _taggedTemplateLiteral30(["Blood Bond, Empathy, Leash of Linguini"]))).filter(function(effect) {
        return have((0, import_kolmafia39.toSkill)(effect));
      });
    },
    combat: new CrimboStrategy(function() {
      return Macro2.standardCombat();
    }),
    sobriety: "either",
    post: toasterGazeIfNecessary
  }]
}, cottage_default = cottage;

// src/zones/foundry.ts
init_kolmafia_polyfill();
var import_kolmafia40 = require("kolmafia");
var _templateObject301, _templateObject2102;
function _taggedTemplateLiteral31(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var location3 = $location(_templateObject301 || (_templateObject301 = _taggedTemplateLiteral31(["The Embattled Factory"]))), foundry = {
  name: "Foundry",
  location: location3,
  tasks: [{
    name: "Crimbo",
    completed: function() {
      return !1;
    },
    do: location3,
    outfit: function() {
      return chooseQuestOutfit({
        location: location3,
        isFree: !1
      }, drunkSpec, affiliationSpec(), orbSpec(location3));
    },
    effects: function() {
      return $effects(_templateObject2102 || (_templateObject2102 = _taggedTemplateLiteral31(["Blood Bond, Empathy, Leash of Linguini"]))).filter(function(effect) {
        return have((0, import_kolmafia40.toSkill)(effect));
      });
    },
    combat: new CrimboStrategy(function() {
      return Macro2.standardCombat();
    }),
    sobriety: "either",
    post: toasterGazeIfNecessary
  }]
}, foundry_default = foundry;

// src/main.ts
var _templateObject380, _templateObject2103, _templateObject381, _templateObject449, _templateObject537, _templateObject631, _templateObject728, _templateObject827, _templateObject925, _templateObject1021, _templateObject1119, _templateObject1217, _templateObject1317, _templateObject1416, _templateObject1516, _templateObject1616, _templateObject1716, _templateObject1816, _templateObject1916, _templateObject2016, _templateObject2118, _templateObject2216, _templateObject2315, _templateObject2414, _templateObject2514, _templateObject2614, _templateObject2714, _templateObject2813, _templateObject2912, _templateObject3012, _templateObject3116, _templateObject3214;
function _slicedToArray13(arr, i) {
  return _arrayWithHoles13(arr) || _iterableToArrayLimit13(arr, i) || _unsupportedIterableToArray30(arr, i) || _nonIterableRest13();
}
function _nonIterableRest13() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit13(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _arr = [], _n = !0, _d = !1, _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !(i && _arr.length === i)); _n = !0)
        ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        !_n && _i.return != null && _i.return();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles13(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _createForOfIteratorHelper16(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray30(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray30(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray30(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray30(o, minLen);
  }
}
function _arrayLikeToArray30(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function ownKeys10(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread10(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys10(Object(source), !0).forEach(function(key) {
      _defineProperty16(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys10(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty16(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _taggedTemplateLiteral32(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function main(command) {
  if (Args.fill(args, command), args.help) {
    Args.showHelp(args);
    return;
  }
  validateAndSetOrbTarget(args.orb, args.zone, args.affiliation), setDefaultMaximizeOptions({
    preventSlot: $slots(_templateObject380 || (_templateObject380 = _taggedTemplateLiteral32(["crown-of-thrones, buddy-bjorn"])))
  }), sinceKolmafiaRevision(27022);
  var turncount = (0, import_kolmafia41.myTurncount)(), completed = args.turns > 0 ? function() {
    return (0, import_kolmafia41.myTurncount)() - turncount >= args.turns || (0, import_kolmafia41.myAdventures)() === 0;
  } : function() {
    return (0, import_kolmafia41.myAdventures)() === -args.turns;
  }, digitizes = get("_sourceTerminalDigitizeMonsterCount"), quest = _objectSpread10(_objectSpread10({}, zones_exports[args.zone]), {}, {
    completed: completed
  }), global = {
    name: "Global",
    completed: completed,
    tasks: [{
      name: "June Cleaver",
      ready: function() {
        return have($item(_templateObject2103 || (_templateObject2103 = _taggedTemplateLiteral32(["June cleaver"])))) && get("_juneCleaverFightsLeft") === 0;
      },
      do: (0, import_kolmafia41.myInebriety)() <= (0, import_kolmafia41.inebrietyLimit)() ? $location(_templateObject381 || (_templateObject381 = _taggedTemplateLiteral32(["Noob Cave"]))) : $location(_templateObject449 || (_templateObject449 = _taggedTemplateLiteral32(["Drunken Stupor"]))),
      outfit: {
        weapon: $item(_templateObject537 || (_templateObject537 = _taggedTemplateLiteral32(["June cleaver"])))
      },
      completed: function() {
        return get("_juneCleaverFightsLeft") > 0;
      },
      sobriety: "either",
      combat: new CrimboStrategy(function() {
        return Macro2.abort();
      })
    }, {
      name: "Proton Ghost",
      ready: function() {
        return have($item(_templateObject631 || (_templateObject631 = _taggedTemplateLiteral32(["protonic accelerator pack"])))) && get("questPAGhost") !== "unstarted" && !!get("ghostLocation");
      },
      do: function() {
        var location4 = get("ghostLocation");
        if (location4)
          (0, import_kolmafia41.adv1)(location4, 0, "");
        else
          throw "Could not determine Proton Ghost location!";
      },
      outfit: function() {
        var _get3;
        return chooseQuestOutfit({
          location: (_get3 = get("ghostLocation")) !== null && _get3 !== void 0 ? _get3 : $location.none,
          isFree: !0
        }, {
          back: $item(_templateObject728 || (_templateObject728 = _taggedTemplateLiteral32(["protonic accelerator pack"]))),
          avoid: get("ghostLocation") === $location(_templateObject827 || (_templateObject827 = _taggedTemplateLiteral32(["The Icy Peak"]))) ? $items(_templateObject925 || (_templateObject925 = _taggedTemplateLiteral32(["Great Wolf's beastly trousers"]))) : []
        });
      },
      completed: function() {
        return get("questPAGhost") === "unstarted";
      },
      combat: new CrimboStrategy(function() {
        return Macro2.trySkill($skill(_templateObject1021 || (_templateObject1021 = _taggedTemplateLiteral32(["Sing Along"])))).trySkill($skill(_templateObject1119 || (_templateObject1119 = _taggedTemplateLiteral32(["Shoot Ghost"])))).trySkill($skill(_templateObject1217 || (_templateObject1217 = _taggedTemplateLiteral32(["Shoot Ghost"])))).trySkill($skill(_templateObject1317 || (_templateObject1317 = _taggedTemplateLiteral32(["Shoot Ghost"])))).trySkill($skill(_templateObject1416 || (_templateObject1416 = _taggedTemplateLiteral32(["Trap Ghost"]))));
      }),
      sobriety: "sober"
    }, {
      name: "Grey You Attack Skill",
      completed: function() {
        return have($skill(_templateObject1516 || (_templateObject1516 = _taggedTemplateLiteral32(["Nantlers"])))) || have($skill(_templateObject1616 || (_templateObject1616 = _taggedTemplateLiteral32(["Nanoshock"])))) || have($skill(_templateObject1716 || (_templateObject1716 = _taggedTemplateLiteral32(["Audioclasm"]))));
      },
      do: $location(_templateObject1816 || (_templateObject1816 = _taggedTemplateLiteral32(["The Haunted Storage Room"]))),
      ready: function() {
        return (0, import_kolmafia41.myClass)() === $class(_templateObject1916 || (_templateObject1916 = _taggedTemplateLiteral32(["Grey Goo"]))) && (0, import_kolmafia41.canAdventure)($location(_templateObject2016 || (_templateObject2016 = _taggedTemplateLiteral32(["The Haunted Storage Room"]))));
      },
      combat: new CrimboStrategy(function() {
        return Macro2.attack().repeat();
      }),
      sobriety: "sober"
    }, {
      name: "Vote Wanderer",
      ready: function() {
        return have($item(_templateObject2118 || (_templateObject2118 = _taggedTemplateLiteral32(['"I Voted!" sticker'])))) && (0, import_kolmafia41.totalTurnsPlayed)() % 11 === 1 && get("lastVoteMonsterTurn") < (0, import_kolmafia41.totalTurnsPlayed)() && get("_voteFreeFights") < 3;
      },
      do: function() {
        (0, import_kolmafia41.adv1)(drunkSafeWander("wanderer"), -1, "");
      },
      outfit: function() {
        return chooseQuestOutfit({
          location: drunkSafeWander("wanderer"),
          isFree: !0
        }, {
          acc3: $item(_templateObject2216 || (_templateObject2216 = _taggedTemplateLiteral32(['"I Voted!" sticker'])))
        });
      },
      completed: function() {
        return get("lastVoteMonsterTurn") === (0, import_kolmafia41.totalTurnsPlayed)();
      },
      combat: new CrimboStrategy(function() {
        return Macro2.redigitize().standardCombat();
      }),
      sobriety: "either"
    }, {
      name: "Digitize Wanderer",
      ready: function() {
        return counter_exports.get("Digitize") <= 0;
      },
      outfit: function() {
        var _get22;
        return chooseQuestOutfit({
          location: drunkSafeWander("wanderer"),
          isFree: (_get22 = get("_sourceTerminalDigitizeMonster")) === null || _get22 === void 0 ? void 0 : _get22.attributes.includes("FREE")
        });
      },
      completed: function() {
        return get("_sourceTerminalDigitizeMonsterCount") !== digitizes;
      },
      do: function() {
        (0, import_kolmafia41.adv1)(drunkSafeWander("wanderer"), -1, ""), digitizes = get("_sourceTerminalDigitizeMonsterCount");
      },
      combat: new CrimboStrategy(function() {
        return Macro2.redigitize().standardCombat();
      }),
      sobriety: "either"
    }, {
      name: "Void Monster",
      ready: function() {
        return have($item(_templateObject2315 || (_templateObject2315 = _taggedTemplateLiteral32(["cursed magnifying glass"])))) && get("cursedMagnifyingGlassCount") === 13;
      },
      completed: function() {
        return get("_voidFreeFights") >= 5;
      },
      outfit: function() {
        return chooseQuestOutfit({
          location: drunkSafeWander("wanderer"),
          isFree: !0
        }, {
          offhand: $item(_templateObject2414 || (_templateObject2414 = _taggedTemplateLiteral32(["cursed magnifying glass"])))
        });
      },
      do: function() {
        return (0, import_kolmafia41.adv1)(drunkSafeWander("wanderer"), -1, "");
      },
      sobriety: "either",
      combat: new CrimboStrategy(function() {
        return Macro2.standardCombat();
      })
    }, {
      name: "Sausage Goblin",
      ready: function() {
        return have($item(_templateObject2514 || (_templateObject2514 = _taggedTemplateLiteral32(["Kramco Sausage-o-Matic\u2122"])))) && getKramcoWandererChance() >= 1;
      },
      completed: function() {
        return getKramcoWandererChance() < 1;
      },
      outfit: function() {
        return chooseQuestOutfit({
          location: drunkSafeWander("wanderer"),
          isFree: !0
        }, {
          offhand: $item(_templateObject2614 || (_templateObject2614 = _taggedTemplateLiteral32(["Kramco Sausage-o-Matic\u2122"])))
        });
      },
      do: function() {
        return (0, import_kolmafia41.adv1)(drunkSafeWander("wanderer"), -1, "");
      },
      sobriety: "either",
      combat: new CrimboStrategy(function() {
        return Macro2.standardCombat();
      })
    }, {
      name: "Spit Jurassic Acid",
      completed: function() {
        return have($effect(_templateObject2714 || (_templateObject2714 = _taggedTemplateLiteral32(["Everything Looks Yellow"]))));
      },
      ready: function() {
        return have($item(_templateObject2813 || (_templateObject2813 = _taggedTemplateLiteral32(["Jurassic Parka"])))) && have($skill(_templateObject2912 || (_templateObject2912 = _taggedTemplateLiteral32(["Torso Awareness"]))));
      },
      outfit: function() {
        return chooseQuestOutfit({
          location: drunkSafeWander("yellow ray"),
          isFree: !0
        }, {
          shirt: $item(_templateObject3012 || (_templateObject3012 = _taggedTemplateLiteral32(["Jurassic Parka"])))
        });
      },
      prepare: function() {
        return (0, import_kolmafia41.cliExecute)("parka dilophosaur");
      },
      do: function() {
        return (0, import_kolmafia41.adv1)(drunkSafeWander("yellow ray"), -1, "");
      },
      combat: new CrimboStrategy(function() {
        var romance = get("romanticTarget"), freeMonsters = $monsters(_templateObject3116 || (_templateObject3116 = _taggedTemplateLiteral32(["sausage goblin"])));
        return romance != null && romance.attributes.includes("FREE") && freeMonsters.push(romance), Macro2.if_(freeMonsters, Macro2.standardCombat()).skill($skill(_templateObject3214 || (_templateObject3214 = _taggedTemplateLiteral32(["Spit jurassic acid"])))).abort();
      }),
      sobriety: "sober"
    }]
  }, engine = new CrimboEngine(getTasks([setup, global, quest]));
  engine.print();
  var sessionStart = Session.current();
  withProperty("recoveryScript", "", function() {
    try {
      engine.run();
    } finally {
      engine.destruct();
    }
  });
  var sessionResults = Session.current().diff(sessionStart);
  printh("SESSION RESULTS:");
  var _iterator = _createForOfIteratorHelper16(sessionResults.items.entries()), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _step$value = _slicedToArray13(_step.value, 2), item5 = _step$value[0], count = _step$value[1];
      printh("ITEM ".concat(item5, " QTY ").concat(count));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  main
});
