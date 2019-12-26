define(['dart_sdk', 'packages/source_span/source_span', 'packages/string_scanner/src/eager_span_scanner'], function(dart_sdk, packages__source_span__source_span, packages__string_scanner__src__eager_span_scanner) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const file = packages__source_span__source_span.src__file;
  const span_exception = packages__source_span__source_span.src__span_exception;
  const span_scanner = packages__string_scanner__src__eager_span_scanner.src__span_scanner;
  const impl = Object.create(dart.library);
  const evaluator = Object.create(dart.library);
  const ast = Object.create(dart.library);
  const scanner = Object.create(dart.library);
  const all = Object.create(dart.library);
  const token$ = Object.create(dart.library);
  const boolean_selector = Object.create(dart.library);
  const union_selector = Object.create(dart.library);
  const validator = Object.create(dart.library);
  const intersection_selector = Object.create(dart.library);
  const parser = Object.create(dart.library);
  const visitor = Object.create(dart.library);
  const none = Object.create(dart.library);
  const $toString = dartx.toString;
  const $hashCode = dartx.hashCode;
  const $toSet = dartx.toSet;
  const $toList = dartx.toList;
  const $addAll = dartx.addAll;
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let SyncIterableOfString = () => (SyncIterableOfString = dart.constFn(_js_helper.SyncIterable$(core.String)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], core.String);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: token$.TokenType.prototype,
        name: "left paren"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: token$.TokenType.prototype,
        name: "right paren"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: token$.TokenType.prototype,
        name: "or"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: token$.TokenType.prototype,
        name: "and"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: token$.TokenType.prototype,
        name: "not"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: token$.TokenType.prototype,
        name: "question mark"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: token$.TokenType.prototype,
        name: "colon"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: token$.TokenType.prototype,
        name: "identifier"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: token$.TokenType.prototype,
        name: "end of file"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: all.All.prototype,
        variables: C0 || CT.C0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: none.None.prototype,
        variables: C0 || CT.C0
      });
    }
  });
  const _selector$ = dart.privateName(impl, "_selector");
  impl.BooleanSelectorImpl = class BooleanSelectorImpl extends core.Object {
    get variables() {
      return this[_selector$].variables;
    }
    evaluate(semantics) {
      return core.bool._check(this[_selector$].accept(new evaluator.Evaluator.new(semantics)));
    }
    intersection(other) {
      if (dart.equals(other, boolean_selector.BooleanSelector.all)) return this;
      if (dart.equals(other, boolean_selector.BooleanSelector.none)) return other;
      return impl.BooleanSelectorImpl.is(other) ? new impl.BooleanSelectorImpl.__(new ast.AndNode.new(this[_selector$], other[_selector$])) : new intersection_selector.IntersectionSelector.new(this, other);
    }
    union(other) {
      if (dart.equals(other, boolean_selector.BooleanSelector.all)) return other;
      if (dart.equals(other, boolean_selector.BooleanSelector.none)) return this;
      return impl.BooleanSelectorImpl.is(other) ? new impl.BooleanSelectorImpl.__(new ast.OrNode.new(this[_selector$], other[_selector$])) : new union_selector.UnionSelector.new(this, other);
    }
    validate(isDefined) {
      this[_selector$].accept(new validator.Validator.new(isDefined));
    }
    toString() {
      return dart.toString(this[_selector$]);
    }
    _equals(other) {
      if (other == null) return false;
      return impl.BooleanSelectorImpl.is(other) && dart.equals(this[_selector$], other[_selector$]);
    }
    get hashCode() {
      return dart.hashCode(this[_selector$]);
    }
  };
  (impl.BooleanSelectorImpl.parse = function(selector) {
    this[_selector$] = new parser.Parser.new(selector).parse();
    ;
  }).prototype = impl.BooleanSelectorImpl.prototype;
  (impl.BooleanSelectorImpl.__ = function(_selector) {
    this[_selector$] = _selector;
    ;
  }).prototype = impl.BooleanSelectorImpl.prototype;
  dart.addTypeTests(impl.BooleanSelectorImpl);
  impl.BooleanSelectorImpl[dart.implements] = () => [boolean_selector.BooleanSelector];
  dart.setMethodSignature(impl.BooleanSelectorImpl, () => ({
    __proto__: dart.getMethods(impl.BooleanSelectorImpl.__proto__),
    evaluate: dart.fnType(core.bool, [dart.dynamic]),
    intersection: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    union: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    validate: dart.fnType(dart.void, [dart.fnType(core.bool, [core.String])])
  }));
  dart.setGetterSignature(impl.BooleanSelectorImpl, () => ({
    __proto__: dart.getGetters(impl.BooleanSelectorImpl.__proto__),
    variables: core.Iterable$(core.String)
  }));
  dart.setLibraryUri(impl.BooleanSelectorImpl, "package:boolean_selector/src/impl.dart");
  dart.setFieldSignature(impl.BooleanSelectorImpl, () => ({
    __proto__: dart.getFields(impl.BooleanSelectorImpl.__proto__),
    [_selector$]: dart.finalFieldType(ast.Node)
  }));
  dart.defineExtensionMethods(impl.BooleanSelectorImpl, ['toString', '_equals']);
  dart.defineExtensionAccessors(impl.BooleanSelectorImpl, ['hashCode']);
  const _semantics = dart.privateName(evaluator, "_semantics");
  evaluator.Evaluator = class Evaluator extends core.Object {
    visitVariable(node) {
      return this[_semantics](node.name);
    }
    visitNot(node) {
      return !dart.dtest(node.child.accept(this));
    }
    visitOr(node) {
      return dart.dtest(node.left.accept(this)) || dart.dtest(node.right.accept(this));
    }
    visitAnd(node) {
      return dart.dtest(node.left.accept(this)) && dart.dtest(node.right.accept(this));
    }
    visitConditional(node) {
      return core.bool._check(dart.dtest(node.condition.accept(this)) ? node.whenTrue.accept(this) : node.whenFalse.accept(this));
    }
  };
  (evaluator.Evaluator.new = function(semantics) {
    this[_semantics] = core.Iterable.is(semantics) ? dart.bind(semantics[$toSet](), 'contains') : StringTobool().as(semantics);
    ;
  }).prototype = evaluator.Evaluator.prototype;
  dart.addTypeTests(evaluator.Evaluator);
  evaluator.Evaluator[dart.implements] = () => [visitor.Visitor$(core.bool)];
  dart.setMethodSignature(evaluator.Evaluator, () => ({
    __proto__: dart.getMethods(evaluator.Evaluator.__proto__),
    visitVariable: dart.fnType(core.bool, [ast.VariableNode]),
    visitNot: dart.fnType(core.bool, [ast.NotNode]),
    visitOr: dart.fnType(core.bool, [ast.OrNode]),
    visitAnd: dart.fnType(core.bool, [ast.AndNode]),
    visitConditional: dart.fnType(core.bool, [ast.ConditionalNode])
  }));
  dart.setLibraryUri(evaluator.Evaluator, "package:boolean_selector/src/evaluator.dart");
  dart.setFieldSignature(evaluator.Evaluator, () => ({
    __proto__: dart.getFields(evaluator.Evaluator.__proto__),
    [_semantics]: dart.finalFieldType(dart.fnType(core.bool, [core.String]))
  }));
  ast.Node = class Node extends core.Object {};
  (ast.Node.new = function() {
    ;
  }).prototype = ast.Node.prototype;
  dart.addTypeTests(ast.Node);
  dart.setLibraryUri(ast.Node, "package:boolean_selector/src/ast.dart");
  ast.VariableNode = class VariableNode extends core.Object {
    get span() {
      return this[span$];
    }
    set span(value) {
      super.span = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get variables() {
      return JSArrayOfString().of([this.name]);
    }
    accept(visitor) {
      return visitor.visitVariable(this);
    }
    toString() {
      return this.name;
    }
    _equals(other) {
      if (other == null) return false;
      return ast.VariableNode.is(other) && this.name == other.name;
    }
    get hashCode() {
      return dart.hashCode(this.name);
    }
  };
  (ast.VariableNode.new = function(name, span) {
    if (span === void 0) span = null;
    this[name$] = name;
    this[span$] = span;
    ;
  }).prototype = ast.VariableNode.prototype;
  dart.addTypeTests(ast.VariableNode);
  const span$ = Symbol("VariableNode.span");
  const name$ = Symbol("VariableNode.name");
  ast.VariableNode[dart.implements] = () => [ast.Node];
  dart.setMethodSignature(ast.VariableNode, () => ({
    __proto__: dart.getMethods(ast.VariableNode.__proto__),
    accept: dart.fnType(dart.dynamic, [visitor.Visitor])
  }));
  dart.setGetterSignature(ast.VariableNode, () => ({
    __proto__: dart.getGetters(ast.VariableNode.__proto__),
    variables: core.Iterable$(core.String)
  }));
  dart.setLibraryUri(ast.VariableNode, "package:boolean_selector/src/ast.dart");
  dart.setFieldSignature(ast.VariableNode, () => ({
    __proto__: dart.getFields(ast.VariableNode.__proto__),
    span: dart.finalFieldType(file.FileSpan),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(ast.VariableNode, ['toString', '_equals']);
  dart.defineExtensionAccessors(ast.VariableNode, ['hashCode']);
  ast.NotNode = class NotNode extends core.Object {
    get span() {
      return this[span$0];
    }
    set span(value) {
      super.span = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get variables() {
      return this.child.variables;
    }
    accept(visitor) {
      return visitor.visitNot(this);
    }
    toString() {
      return ast.VariableNode.is(this.child) || ast.NotNode.is(this.child) ? "!" + dart.str(this.child) : "!(" + dart.str(this.child) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      return ast.NotNode.is(other) && dart.equals(this.child, other.child);
    }
    get hashCode() {
      return ~dart.notNull(dart.hashCode(this.child)) >>> 0;
    }
  };
  (ast.NotNode.new = function(child, span) {
    if (span === void 0) span = null;
    this[child$] = child;
    this[span$0] = span;
    ;
  }).prototype = ast.NotNode.prototype;
  dart.addTypeTests(ast.NotNode);
  const span$0 = Symbol("NotNode.span");
  const child$ = Symbol("NotNode.child");
  ast.NotNode[dart.implements] = () => [ast.Node];
  dart.setMethodSignature(ast.NotNode, () => ({
    __proto__: dart.getMethods(ast.NotNode.__proto__),
    accept: dart.fnType(dart.dynamic, [visitor.Visitor])
  }));
  dart.setGetterSignature(ast.NotNode, () => ({
    __proto__: dart.getGetters(ast.NotNode.__proto__),
    variables: core.Iterable$(core.String)
  }));
  dart.setLibraryUri(ast.NotNode, "package:boolean_selector/src/ast.dart");
  dart.setFieldSignature(ast.NotNode, () => ({
    __proto__: dart.getFields(ast.NotNode.__proto__),
    span: dart.finalFieldType(file.FileSpan),
    child: dart.finalFieldType(ast.Node)
  }));
  dart.defineExtensionMethods(ast.NotNode, ['toString', '_equals']);
  dart.defineExtensionAccessors(ast.NotNode, ['hashCode']);
  ast.OrNode = class OrNode extends core.Object {
    get left() {
      return this[left$];
    }
    set left(value) {
      super.left = value;
    }
    get right() {
      return this[right$];
    }
    set right(value) {
      super.right = value;
    }
    get span() {
      return ast._expandSafe(this.left.span, this.right.span);
    }
    get variables() {
      return new (SyncIterableOfString()).new((function* variables() {
        yield* this.left.variables;
        yield* this.right.variables;
      }).bind(this));
    }
    accept(visitor) {
      return visitor.visitOr(this);
    }
    toString() {
      let string1 = ast.AndNode.is(this.left) || ast.ConditionalNode.is(this.left) ? "(" + dart.str(this.left) + ")" : this.left;
      let string2 = ast.AndNode.is(this.right) || ast.ConditionalNode.is(this.right) ? "(" + dart.str(this.right) + ")" : this.right;
      return dart.str(string1) + " || " + dart.str(string2);
    }
    _equals(other) {
      if (other == null) return false;
      return ast.OrNode.is(other) && dart.equals(this.left, other.left) && dart.equals(this.right, other.right);
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.left)) ^ dart.notNull(dart.hashCode(this.right))) >>> 0;
    }
  };
  (ast.OrNode.new = function(left, right) {
    this[left$] = left;
    this[right$] = right;
    ;
  }).prototype = ast.OrNode.prototype;
  dart.addTypeTests(ast.OrNode);
  const left$ = Symbol("OrNode.left");
  const right$ = Symbol("OrNode.right");
  ast.OrNode[dart.implements] = () => [ast.Node];
  dart.setMethodSignature(ast.OrNode, () => ({
    __proto__: dart.getMethods(ast.OrNode.__proto__),
    accept: dart.fnType(dart.dynamic, [visitor.Visitor])
  }));
  dart.setGetterSignature(ast.OrNode, () => ({
    __proto__: dart.getGetters(ast.OrNode.__proto__),
    span: file.FileSpan,
    variables: core.Iterable$(core.String)
  }));
  dart.setLibraryUri(ast.OrNode, "package:boolean_selector/src/ast.dart");
  dart.setFieldSignature(ast.OrNode, () => ({
    __proto__: dart.getFields(ast.OrNode.__proto__),
    left: dart.finalFieldType(ast.Node),
    right: dart.finalFieldType(ast.Node)
  }));
  dart.defineExtensionMethods(ast.OrNode, ['toString', '_equals']);
  dart.defineExtensionAccessors(ast.OrNode, ['hashCode']);
  ast.AndNode = class AndNode extends core.Object {
    get left() {
      return this[left$0];
    }
    set left(value) {
      super.left = value;
    }
    get right() {
      return this[right$0];
    }
    set right(value) {
      super.right = value;
    }
    get span() {
      return ast._expandSafe(this.left.span, this.right.span);
    }
    get variables() {
      return new (SyncIterableOfString()).new((function* variables() {
        yield* this.left.variables;
        yield* this.right.variables;
      }).bind(this));
    }
    accept(visitor) {
      return visitor.visitAnd(this);
    }
    toString() {
      let string1 = ast.OrNode.is(this.left) || ast.ConditionalNode.is(this.left) ? "(" + dart.str(this.left) + ")" : this.left;
      let string2 = ast.OrNode.is(this.right) || ast.ConditionalNode.is(this.right) ? "(" + dart.str(this.right) + ")" : this.right;
      return dart.str(string1) + " && " + dart.str(string2);
    }
    _equals(other) {
      if (other == null) return false;
      return ast.AndNode.is(other) && dart.equals(this.left, other.left) && dart.equals(this.right, other.right);
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.left)) ^ dart.notNull(dart.hashCode(this.right))) >>> 0;
    }
  };
  (ast.AndNode.new = function(left, right) {
    this[left$0] = left;
    this[right$0] = right;
    ;
  }).prototype = ast.AndNode.prototype;
  dart.addTypeTests(ast.AndNode);
  const left$0 = Symbol("AndNode.left");
  const right$0 = Symbol("AndNode.right");
  ast.AndNode[dart.implements] = () => [ast.Node];
  dart.setMethodSignature(ast.AndNode, () => ({
    __proto__: dart.getMethods(ast.AndNode.__proto__),
    accept: dart.fnType(dart.dynamic, [visitor.Visitor])
  }));
  dart.setGetterSignature(ast.AndNode, () => ({
    __proto__: dart.getGetters(ast.AndNode.__proto__),
    span: file.FileSpan,
    variables: core.Iterable$(core.String)
  }));
  dart.setLibraryUri(ast.AndNode, "package:boolean_selector/src/ast.dart");
  dart.setFieldSignature(ast.AndNode, () => ({
    __proto__: dart.getFields(ast.AndNode.__proto__),
    left: dart.finalFieldType(ast.Node),
    right: dart.finalFieldType(ast.Node)
  }));
  dart.defineExtensionMethods(ast.AndNode, ['toString', '_equals']);
  dart.defineExtensionAccessors(ast.AndNode, ['hashCode']);
  ast.ConditionalNode = class ConditionalNode extends core.Object {
    get condition() {
      return this[condition$];
    }
    set condition(value) {
      super.condition = value;
    }
    get whenTrue() {
      return this[whenTrue$];
    }
    set whenTrue(value) {
      super.whenTrue = value;
    }
    get whenFalse() {
      return this[whenFalse$];
    }
    set whenFalse(value) {
      super.whenFalse = value;
    }
    get span() {
      return ast._expandSafe(this.condition.span, this.whenFalse.span);
    }
    get variables() {
      return new (SyncIterableOfString()).new((function* variables() {
        yield* this.condition.variables;
        yield* this.whenTrue.variables;
        yield* this.whenFalse.variables;
      }).bind(this));
    }
    accept(visitor) {
      return visitor.visitConditional(this);
    }
    toString() {
      let conditionString = ast.ConditionalNode.is(this.condition) ? "(" + dart.str(this.condition) + ")" : this.condition;
      let trueString = ast.ConditionalNode.is(this.whenTrue) ? "(" + dart.str(this.whenTrue) + ")" : this.whenTrue;
      return dart.str(conditionString) + " ? " + dart.str(trueString) + " : " + dart.str(this.whenFalse);
    }
    _equals(other) {
      if (other == null) return false;
      return ast.ConditionalNode.is(other) && dart.equals(this.condition, other.condition) && dart.equals(this.whenTrue, other.whenTrue) && dart.equals(this.whenFalse, other.whenFalse);
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.condition)) ^ dart.notNull(dart.hashCode(this.whenTrue)) ^ dart.notNull(dart.hashCode(this.whenFalse))) >>> 0;
    }
  };
  (ast.ConditionalNode.new = function(condition, whenTrue, whenFalse) {
    this[condition$] = condition;
    this[whenTrue$] = whenTrue;
    this[whenFalse$] = whenFalse;
    ;
  }).prototype = ast.ConditionalNode.prototype;
  dart.addTypeTests(ast.ConditionalNode);
  const condition$ = Symbol("ConditionalNode.condition");
  const whenTrue$ = Symbol("ConditionalNode.whenTrue");
  const whenFalse$ = Symbol("ConditionalNode.whenFalse");
  ast.ConditionalNode[dart.implements] = () => [ast.Node];
  dart.setMethodSignature(ast.ConditionalNode, () => ({
    __proto__: dart.getMethods(ast.ConditionalNode.__proto__),
    accept: dart.fnType(dart.dynamic, [visitor.Visitor])
  }));
  dart.setGetterSignature(ast.ConditionalNode, () => ({
    __proto__: dart.getGetters(ast.ConditionalNode.__proto__),
    span: file.FileSpan,
    variables: core.Iterable$(core.String)
  }));
  dart.setLibraryUri(ast.ConditionalNode, "package:boolean_selector/src/ast.dart");
  dart.setFieldSignature(ast.ConditionalNode, () => ({
    __proto__: dart.getFields(ast.ConditionalNode.__proto__),
    condition: dart.finalFieldType(ast.Node),
    whenTrue: dart.finalFieldType(ast.Node),
    whenFalse: dart.finalFieldType(ast.Node)
  }));
  dart.defineExtensionMethods(ast.ConditionalNode, ['toString', '_equals']);
  dart.defineExtensionAccessors(ast.ConditionalNode, ['hashCode']);
  ast._expandSafe = function _expandSafe(start, end) {
    if (start == null || end == null) return null;
    if (!dart.equals(start.file, end.file)) return null;
    return start.expand(end);
  };
  const _next = dart.privateName(scanner, "_next");
  const _endOfFileEmitted = dart.privateName(scanner, "_endOfFileEmitted");
  const _scanner = dart.privateName(scanner, "_scanner");
  const _getNext = dart.privateName(scanner, "_getNext");
  const _consumeWhitespace = dart.privateName(scanner, "_consumeWhitespace");
  const _scanOperator = dart.privateName(scanner, "_scanOperator");
  const _scanOr = dart.privateName(scanner, "_scanOr");
  const _scanAnd = dart.privateName(scanner, "_scanAnd");
  const _scanIdentifier = dart.privateName(scanner, "_scanIdentifier");
  const _multiLineComment = dart.privateName(scanner, "_multiLineComment");
  scanner.Scanner = class Scanner extends core.Object {
    peek() {
      if (this[_next] == null) this[_next] = this[_getNext]();
      return this[_next];
    }
    next() {
      let token = this[_next] == null ? this[_getNext]() : this[_next];
      this[_endOfFileEmitted] = dart.equals(token.type, token$.TokenType.endOfFile);
      this[_next] = null;
      return token;
    }
    scan(type) {
      if (!dart.equals(this.peek().type, type)) return false;
      this.next();
      return true;
    }
    [_getNext]() {
      if (dart.test(this[_endOfFileEmitted])) dart.throw(new core.StateError.new("No more tokens."));
      this[_consumeWhitespace]();
      if (dart.test(this[_scanner].isDone)) {
        return new token$.Token.new(token$.TokenType.endOfFile, this[_scanner].spanFrom(this[_scanner].state));
      }
      switch (this[_scanner].peekChar()) {
        case 40:
        {
          return this[_scanOperator](token$.TokenType.leftParen);
        }
        case 41:
        {
          return this[_scanOperator](token$.TokenType.rightParen);
        }
        case 63:
        {
          return this[_scanOperator](token$.TokenType.questionMark);
        }
        case 58:
        {
          return this[_scanOperator](token$.TokenType.colon);
        }
        case 33:
        {
          return this[_scanOperator](token$.TokenType.not);
        }
        case 124:
        {
          return this[_scanOr]();
        }
        case 38:
        {
          return this[_scanAnd]();
        }
        default:
        {
          return this[_scanIdentifier]();
        }
      }
    }
    [_scanOperator](type) {
      let start = this[_scanner].state;
      this[_scanner].readChar();
      return new token$.Token.new(type, this[_scanner].spanFrom(start));
    }
    [_scanOr]() {
      let start = this[_scanner].state;
      this[_scanner].expect("||");
      return new token$.Token.new(token$.TokenType.or, this[_scanner].spanFrom(start));
    }
    [_scanAnd]() {
      let start = this[_scanner].state;
      this[_scanner].expect("&&");
      return new token$.Token.new(token$.TokenType.and, this[_scanner].spanFrom(start));
    }
    [_scanIdentifier]() {
      this[_scanner].expect(scanner._hyphenatedIdentifier, {name: "expression"});
      return new token$.IdentifierToken.new(this[_scanner].lastMatch._get(0), this[_scanner].lastSpan);
    }
    [_consumeWhitespace]() {
      while (dart.test(this[_scanner].scan(scanner._whitespaceAndSingleLineComments)) || dart.test(this[_multiLineComment]())) {
      }
    }
    [_multiLineComment]() {
      if (!dart.test(this[_scanner].scan("/*"))) return false;
      while (dart.test(this[_scanner].scan(scanner._multiLineCommentBody)) || dart.test(this[_multiLineComment]())) {
      }
      this[_scanner].expect("*/");
      return true;
    }
  };
  (scanner.Scanner.new = function(selector) {
    this[_next] = null;
    this[_endOfFileEmitted] = false;
    this[_scanner] = new span_scanner.SpanScanner.new(selector);
    ;
  }).prototype = scanner.Scanner.prototype;
  dart.addTypeTests(scanner.Scanner);
  dart.setMethodSignature(scanner.Scanner, () => ({
    __proto__: dart.getMethods(scanner.Scanner.__proto__),
    peek: dart.fnType(token$.Token, []),
    next: dart.fnType(token$.Token, []),
    scan: dart.fnType(core.bool, [token$.TokenType]),
    [_getNext]: dart.fnType(token$.Token, []),
    [_scanOperator]: dart.fnType(token$.Token, [token$.TokenType]),
    [_scanOr]: dart.fnType(token$.Token, []),
    [_scanAnd]: dart.fnType(token$.Token, []),
    [_scanIdentifier]: dart.fnType(token$.Token, []),
    [_consumeWhitespace]: dart.fnType(dart.void, []),
    [_multiLineComment]: dart.fnType(core.bool, [])
  }));
  dart.setLibraryUri(scanner.Scanner, "package:boolean_selector/src/scanner.dart");
  dart.setFieldSignature(scanner.Scanner, () => ({
    __proto__: dart.getFields(scanner.Scanner.__proto__),
    [_scanner]: dart.finalFieldType(span_scanner.SpanScanner),
    [_next]: dart.fieldType(token$.Token),
    [_endOfFileEmitted]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(scanner, {
    /*scanner._whitespaceAndSingleLineComments*/get _whitespaceAndSingleLineComments() {
      return core.RegExp.new("([ \\t\\n]+|//[^\\n]*(\\n|$))+");
    },
    /*scanner._multiLineCommentBody*/get _multiLineCommentBody() {
      return core.RegExp.new("([^/*]|/[^*]|\\*[^/])+");
    },
    /*scanner._hyphenatedIdentifier*/get _hyphenatedIdentifier() {
      return core.RegExp.new("[a-zA-Z_-][a-zA-Z0-9_-]*");
    }
  });
  let C0;
  all.All = class All extends core.Object {
    get variables() {
      return this[variables];
    }
    set variables(value) {
      super.variables = value;
    }
    evaluate(semantics) {
      return true;
    }
    intersection(other) {
      return other;
    }
    union(other) {
      return this;
    }
    validate(isDefined) {
    }
    toString() {
      return "<all>";
    }
  };
  (all.All.new = function() {
    this[variables] = C0 || CT.C0;
    ;
  }).prototype = all.All.prototype;
  dart.addTypeTests(all.All);
  const variables = Symbol("All.variables");
  all.All[dart.implements] = () => [boolean_selector.BooleanSelector];
  dart.setMethodSignature(all.All, () => ({
    __proto__: dart.getMethods(all.All.__proto__),
    evaluate: dart.fnType(core.bool, [dart.dynamic]),
    intersection: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    union: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    validate: dart.fnType(dart.void, [dart.fnType(core.bool, [core.String])])
  }));
  dart.setLibraryUri(all.All, "package:boolean_selector/src/all.dart");
  dart.setFieldSignature(all.All, () => ({
    __proto__: dart.getFields(all.All.__proto__),
    variables: dart.finalFieldType(core.Iterable$(core.String))
  }));
  dart.defineExtensionMethods(all.All, ['toString']);
  token$.Token = class Token extends core.Object {
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get span() {
      return this[span$1];
    }
    set span(value) {
      super.span = value;
    }
  };
  (token$.Token.new = function(type, span) {
    this[type$] = type;
    this[span$1] = span;
    ;
  }).prototype = token$.Token.prototype;
  dart.addTypeTests(token$.Token);
  const type$ = Symbol("Token.type");
  const span$1 = Symbol("Token.span");
  dart.setLibraryUri(token$.Token, "package:boolean_selector/src/token.dart");
  dart.setFieldSignature(token$.Token, () => ({
    __proto__: dart.getFields(token$.Token.__proto__),
    type: dart.finalFieldType(token$.TokenType),
    span: dart.finalFieldType(file.FileSpan)
  }));
  token$.IdentifierToken = class IdentifierToken extends core.Object {
    get type() {
      return this[type];
    }
    set type(value) {
      super.type = value;
    }
    get span() {
      return this[span$2];
    }
    set span(value) {
      super.span = value;
    }
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    toString() {
      return "identifier \"" + dart.str(this.name) + "\"";
    }
  };
  (token$.IdentifierToken.new = function(name, span) {
    this[type] = token$.TokenType.identifier;
    this[name$0] = name;
    this[span$2] = span;
    ;
  }).prototype = token$.IdentifierToken.prototype;
  dart.addTypeTests(token$.IdentifierToken);
  const type = Symbol("IdentifierToken.type");
  const span$2 = Symbol("IdentifierToken.span");
  const name$0 = Symbol("IdentifierToken.name");
  token$.IdentifierToken[dart.implements] = () => [token$.Token];
  dart.setLibraryUri(token$.IdentifierToken, "package:boolean_selector/src/token.dart");
  dart.setFieldSignature(token$.IdentifierToken, () => ({
    __proto__: dart.getFields(token$.IdentifierToken.__proto__),
    type: dart.finalFieldType(token$.TokenType),
    span: dart.finalFieldType(file.FileSpan),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(token$.IdentifierToken, ['toString']);
  let C1;
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  token$.TokenType = class TokenType extends core.Object {
    get name() {
      return this[name$1];
    }
    set name(value) {
      super.name = value;
    }
    toString() {
      return this.name;
    }
  };
  (token$.TokenType.__ = function(name) {
    this[name$1] = name;
    ;
  }).prototype = token$.TokenType.prototype;
  dart.addTypeTests(token$.TokenType);
  const name$1 = Symbol("TokenType.name");
  dart.setLibraryUri(token$.TokenType, "package:boolean_selector/src/token.dart");
  dart.setFieldSignature(token$.TokenType, () => ({
    __proto__: dart.getFields(token$.TokenType.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(token$.TokenType, ['toString']);
  dart.defineLazy(token$.TokenType, {
    /*token$.TokenType.leftParen*/get leftParen() {
      return C1 || CT.C1;
    },
    /*token$.TokenType.rightParen*/get rightParen() {
      return C2 || CT.C2;
    },
    /*token$.TokenType.or*/get or() {
      return C3 || CT.C3;
    },
    /*token$.TokenType.and*/get and() {
      return C4 || CT.C4;
    },
    /*token$.TokenType.not*/get not() {
      return C5 || CT.C5;
    },
    /*token$.TokenType.questionMark*/get questionMark() {
      return C6 || CT.C6;
    },
    /*token$.TokenType.colon*/get colon() {
      return C7 || CT.C7;
    },
    /*token$.TokenType.identifier*/get identifier() {
      return C8 || CT.C8;
    },
    /*token$.TokenType.endOfFile*/get endOfFile() {
      return C9 || CT.C9;
    }
  });
  let C10;
  let C11;
  boolean_selector.BooleanSelector = class BooleanSelector extends core.Object {};
  (boolean_selector.BooleanSelector[dart.mixinNew] = function() {
  }).prototype = boolean_selector.BooleanSelector.prototype;
  dart.addTypeTests(boolean_selector.BooleanSelector);
  dart.setLibraryUri(boolean_selector.BooleanSelector, "package:boolean_selector/boolean_selector.dart");
  dart.defineLazy(boolean_selector.BooleanSelector, {
    /*boolean_selector.BooleanSelector.all*/get all() {
      return C10 || CT.C10;
    },
    /*boolean_selector.BooleanSelector.none*/get none() {
      return C11 || CT.C11;
    }
  });
  const _selector1$ = dart.privateName(union_selector, "_selector1");
  const _selector2$ = dart.privateName(union_selector, "_selector2");
  union_selector.UnionSelector = class UnionSelector extends core.Object {
    get variables() {
      let t0;
      t0 = this[_selector1$].variables[$toList]();
      t0[$addAll](this[_selector2$].variables);
      return t0;
    }
    evaluate(semantics) {
      return dart.test(this[_selector1$].evaluate(semantics)) || dart.test(this[_selector2$].evaluate(semantics));
    }
    intersection(other) {
      return new intersection_selector.IntersectionSelector.new(this, other);
    }
    union(other) {
      return new union_selector.UnionSelector.new(this, other);
    }
    validate(isDefined) {
      this[_selector1$].validate(isDefined);
      this[_selector2$].validate(isDefined);
    }
    toString() {
      return "(" + dart.str(this[_selector1$]) + ") && (" + dart.str(this[_selector2$]) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      return union_selector.UnionSelector.is(other) && dart.equals(this[_selector1$], other[_selector1$]) && dart.equals(this[_selector2$], other[_selector2$]);
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this[_selector1$])) ^ dart.notNull(dart.hashCode(this[_selector2$]))) >>> 0;
    }
  };
  (union_selector.UnionSelector.new = function(_selector1, _selector2) {
    this[_selector1$] = _selector1;
    this[_selector2$] = _selector2;
    ;
  }).prototype = union_selector.UnionSelector.prototype;
  dart.addTypeTests(union_selector.UnionSelector);
  union_selector.UnionSelector[dart.implements] = () => [boolean_selector.BooleanSelector];
  dart.setMethodSignature(union_selector.UnionSelector, () => ({
    __proto__: dart.getMethods(union_selector.UnionSelector.__proto__),
    evaluate: dart.fnType(core.bool, [dart.dynamic]),
    intersection: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    union: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    validate: dart.fnType(dart.void, [dart.fnType(core.bool, [core.String])])
  }));
  dart.setGetterSignature(union_selector.UnionSelector, () => ({
    __proto__: dart.getGetters(union_selector.UnionSelector.__proto__),
    variables: core.List$(core.String)
  }));
  dart.setLibraryUri(union_selector.UnionSelector, "package:boolean_selector/src/union_selector.dart");
  dart.setFieldSignature(union_selector.UnionSelector, () => ({
    __proto__: dart.getFields(union_selector.UnionSelector.__proto__),
    [_selector1$]: dart.finalFieldType(boolean_selector.BooleanSelector),
    [_selector2$]: dart.finalFieldType(boolean_selector.BooleanSelector)
  }));
  dart.defineExtensionMethods(union_selector.UnionSelector, ['toString', '_equals']);
  dart.defineExtensionAccessors(union_selector.UnionSelector, ['hashCode']);
  const _isDefined$ = dart.privateName(validator, "_isDefined");
  visitor.RecursiveVisitor = class RecursiveVisitor extends core.Object {
    visitVariable(node) {
    }
    visitNot(node) {
      node.child.accept(this);
    }
    visitOr(node) {
      node.left.accept(this);
      node.right.accept(this);
    }
    visitAnd(node) {
      node.left.accept(this);
      node.right.accept(this);
    }
    visitConditional(node) {
      node.condition.accept(this);
      node.whenTrue.accept(this);
      node.whenFalse.accept(this);
    }
  };
  (visitor.RecursiveVisitor.new = function() {
    ;
  }).prototype = visitor.RecursiveVisitor.prototype;
  dart.addTypeTests(visitor.RecursiveVisitor);
  visitor.RecursiveVisitor[dart.implements] = () => [visitor.Visitor];
  dart.setMethodSignature(visitor.RecursiveVisitor, () => ({
    __proto__: dart.getMethods(visitor.RecursiveVisitor.__proto__),
    visitVariable: dart.fnType(dart.void, [ast.VariableNode]),
    visitNot: dart.fnType(dart.void, [ast.NotNode]),
    visitOr: dart.fnType(dart.void, [ast.OrNode]),
    visitAnd: dart.fnType(dart.void, [ast.AndNode]),
    visitConditional: dart.fnType(dart.void, [ast.ConditionalNode])
  }));
  dart.setLibraryUri(visitor.RecursiveVisitor, "package:boolean_selector/src/visitor.dart");
  validator.Validator = class Validator extends visitor.RecursiveVisitor {
    visitVariable(node) {
      if (dart.test(this[_isDefined$](node.name))) return;
      dart.throw(new span_exception.SourceSpanFormatException.new("Undefined variable.", node.span));
    }
  };
  (validator.Validator.new = function(_isDefined) {
    this[_isDefined$] = _isDefined;
    validator.Validator.__proto__.new.call(this);
    ;
  }).prototype = validator.Validator.prototype;
  dart.addTypeTests(validator.Validator);
  dart.setLibraryUri(validator.Validator, "package:boolean_selector/src/validator.dart");
  dart.setFieldSignature(validator.Validator, () => ({
    __proto__: dart.getFields(validator.Validator.__proto__),
    [_isDefined$]: dart.finalFieldType(dart.fnType(core.bool, [core.String]))
  }));
  const _selector1$0 = dart.privateName(intersection_selector, "_selector1");
  const _selector2$0 = dart.privateName(intersection_selector, "_selector2");
  intersection_selector.IntersectionSelector = class IntersectionSelector extends core.Object {
    get variables() {
      return new (SyncIterableOfString()).new((function* variables() {
        yield* this[_selector1$0].variables;
        yield* this[_selector2$0].variables;
      }).bind(this));
    }
    evaluate(semantics) {
      return dart.test(this[_selector1$0].evaluate(semantics)) && dart.test(this[_selector2$0].evaluate(semantics));
    }
    intersection(other) {
      return new intersection_selector.IntersectionSelector.new(this, other);
    }
    union(other) {
      return new union_selector.UnionSelector.new(this, other);
    }
    validate(isDefined) {
      this[_selector1$0].validate(isDefined);
      this[_selector2$0].validate(isDefined);
    }
    toString() {
      return "(" + dart.str(this[_selector1$0]) + ") && (" + dart.str(this[_selector2$0]) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      return intersection_selector.IntersectionSelector.is(other) && dart.equals(this[_selector1$0], other[_selector1$0]) && dart.equals(this[_selector2$0], other[_selector2$0]);
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this[_selector1$0])) ^ dart.notNull(dart.hashCode(this[_selector2$0]))) >>> 0;
    }
  };
  (intersection_selector.IntersectionSelector.new = function(_selector1, _selector2) {
    this[_selector1$0] = _selector1;
    this[_selector2$0] = _selector2;
    ;
  }).prototype = intersection_selector.IntersectionSelector.prototype;
  dart.addTypeTests(intersection_selector.IntersectionSelector);
  intersection_selector.IntersectionSelector[dart.implements] = () => [boolean_selector.BooleanSelector];
  dart.setMethodSignature(intersection_selector.IntersectionSelector, () => ({
    __proto__: dart.getMethods(intersection_selector.IntersectionSelector.__proto__),
    evaluate: dart.fnType(core.bool, [dart.dynamic]),
    intersection: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    union: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    validate: dart.fnType(dart.void, [dart.fnType(core.bool, [core.String])])
  }));
  dart.setGetterSignature(intersection_selector.IntersectionSelector, () => ({
    __proto__: dart.getGetters(intersection_selector.IntersectionSelector.__proto__),
    variables: core.Iterable$(core.String)
  }));
  dart.setLibraryUri(intersection_selector.IntersectionSelector, "package:boolean_selector/src/intersection_selector.dart");
  dart.setFieldSignature(intersection_selector.IntersectionSelector, () => ({
    __proto__: dart.getFields(intersection_selector.IntersectionSelector.__proto__),
    [_selector1$0]: dart.finalFieldType(boolean_selector.BooleanSelector),
    [_selector2$0]: dart.finalFieldType(boolean_selector.BooleanSelector)
  }));
  dart.defineExtensionMethods(intersection_selector.IntersectionSelector, ['toString', '_equals']);
  dart.defineExtensionAccessors(intersection_selector.IntersectionSelector, ['hashCode']);
  const _scanner$ = dart.privateName(parser, "_scanner");
  const _conditional = dart.privateName(parser, "_conditional");
  const _or = dart.privateName(parser, "_or");
  const _and = dart.privateName(parser, "_and");
  const _simpleExpression = dart.privateName(parser, "_simpleExpression");
  parser.Parser = class Parser extends core.Object {
    parse() {
      let selector = this[_conditional]();
      if (!dart.equals(this[_scanner$].peek().type, token$.TokenType.endOfFile)) {
        dart.throw(new span_exception.SourceSpanFormatException.new("Expected end of input.", this[_scanner$].peek().span));
      }
      return selector;
    }
    [_conditional]() {
      let condition = this[_or]();
      if (!dart.test(this[_scanner$].scan(token$.TokenType.questionMark))) return condition;
      let whenTrue = this[_conditional]();
      if (!dart.test(this[_scanner$].scan(token$.TokenType.colon))) {
        dart.throw(new span_exception.SourceSpanFormatException.new("Expected \":\".", this[_scanner$].peek().span));
      }
      let whenFalse = this[_conditional]();
      return new ast.ConditionalNode.new(condition, whenTrue, whenFalse);
    }
    [_or]() {
      let left = this[_and]();
      if (!dart.test(this[_scanner$].scan(token$.TokenType.or))) return left;
      return new ast.OrNode.new(left, this[_or]());
    }
    [_and]() {
      let left = this[_simpleExpression]();
      if (!dart.test(this[_scanner$].scan(token$.TokenType.and))) return left;
      return new ast.AndNode.new(left, this[_and]());
    }
    [_simpleExpression]() {
      let token = this[_scanner$].next();
      switch (token.type) {
        case C5 || CT.C5:
        {
          let child = this[_simpleExpression]();
          return new ast.NotNode.new(child, token.span.expand(child.span));
        }
        case C1 || CT.C1:
        {
          let child = this[_conditional]();
          if (!dart.test(this[_scanner$].scan(token$.TokenType.rightParen))) {
            dart.throw(new span_exception.SourceSpanFormatException.new("Expected \")\".", this[_scanner$].peek().span));
          }
          return child;
        }
        case C8 || CT.C8:
        {
          return new ast.VariableNode.new(token$.IdentifierToken.as(token).name, token.span);
        }
        default:
        {
          dart.throw(new span_exception.SourceSpanFormatException.new("Expected expression.", token.span));
        }
      }
    }
  };
  (parser.Parser.new = function(selector) {
    this[_scanner$] = new scanner.Scanner.new(selector);
    ;
  }).prototype = parser.Parser.prototype;
  dart.addTypeTests(parser.Parser);
  dart.setMethodSignature(parser.Parser, () => ({
    __proto__: dart.getMethods(parser.Parser.__proto__),
    parse: dart.fnType(ast.Node, []),
    [_conditional]: dart.fnType(ast.Node, []),
    [_or]: dart.fnType(ast.Node, []),
    [_and]: dart.fnType(ast.Node, []),
    [_simpleExpression]: dart.fnType(ast.Node, [])
  }));
  dart.setLibraryUri(parser.Parser, "package:boolean_selector/src/parser.dart");
  dart.setFieldSignature(parser.Parser, () => ({
    __proto__: dart.getFields(parser.Parser.__proto__),
    [_scanner$]: dart.finalFieldType(scanner.Scanner)
  }));
  const _is_Visitor_default = Symbol('_is_Visitor_default');
  visitor.Visitor$ = dart.generic(T => {
    class Visitor extends core.Object {}
    (Visitor.new = function() {
      ;
    }).prototype = Visitor.prototype;
    dart.addTypeTests(Visitor);
    Visitor.prototype[_is_Visitor_default] = true;
    dart.setLibraryUri(Visitor, "package:boolean_selector/src/visitor.dart");
    return Visitor;
  });
  visitor.Visitor = visitor.Visitor$();
  dart.addTypeTests(visitor.Visitor, _is_Visitor_default);
  none.None = class None extends core.Object {
    get variables() {
      return this[variables$];
    }
    set variables(value) {
      super.variables = value;
    }
    evaluate(semantics) {
      return false;
    }
    intersection(other) {
      return this;
    }
    union(other) {
      return other;
    }
    validate(isDefined) {
    }
    toString() {
      return "<none>";
    }
  };
  (none.None.new = function() {
    this[variables$] = C0 || CT.C0;
    ;
  }).prototype = none.None.prototype;
  dart.addTypeTests(none.None);
  const variables$ = Symbol("None.variables");
  none.None[dart.implements] = () => [boolean_selector.BooleanSelector];
  dart.setMethodSignature(none.None, () => ({
    __proto__: dart.getMethods(none.None.__proto__),
    evaluate: dart.fnType(core.bool, [dart.dynamic]),
    intersection: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    union: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    validate: dart.fnType(dart.void, [dart.fnType(core.bool, [core.String])])
  }));
  dart.setLibraryUri(none.None, "package:boolean_selector/src/none.dart");
  dart.setFieldSignature(none.None, () => ({
    __proto__: dart.getFields(none.None.__proto__),
    variables: dart.finalFieldType(core.Iterable$(core.String))
  }));
  dart.defineExtensionMethods(none.None, ['toString']);
  dart.trackLibraries("packages/boolean_selector/boolean_selector", {
    "package:boolean_selector/src/impl.dart": impl,
    "package:boolean_selector/src/evaluator.dart": evaluator,
    "package:boolean_selector/src/ast.dart": ast,
    "package:boolean_selector/src/scanner.dart": scanner,
    "package:boolean_selector/src/all.dart": all,
    "package:boolean_selector/src/token.dart": token$,
    "package:boolean_selector/boolean_selector.dart": boolean_selector,
    "package:boolean_selector/src/union_selector.dart": union_selector,
    "package:boolean_selector/src/validator.dart": validator,
    "package:boolean_selector/src/intersection_selector.dart": intersection_selector,
    "package:boolean_selector/src/parser.dart": parser,
    "package:boolean_selector/src/visitor.dart": visitor,
    "package:boolean_selector/src/none.dart": none
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/impl.dart","src/evaluator.dart","src/ast.dart","src/scanner.dart","src/all.dart","src/token.dart","boolean_selector.dart","src/union_selector.dart","src/visitor.dart","src/validator.dart","src/intersection_selector.dart","src/parser.dart","src/none.dart"],"names":[],"mappings":"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","file":"boolean_selector.ddc.js"}');
  // Exports:
  return {
    src__impl: impl,
    src__evaluator: evaluator,
    src__ast: ast,
    src__scanner: scanner,
    src__all: all,
    src__token: token$,
    boolean_selector: boolean_selector,
    src__union_selector: union_selector,
    src__validator: validator,
    src__intersection_selector: intersection_selector,
    src__parser: parser,
    src__visitor: visitor,
    src__none: none
  };
});

//# sourceMappingURL=boolean_selector.ddc.js.map
