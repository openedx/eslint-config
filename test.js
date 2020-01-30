/* eslint-disable no-unused-vars */

// Tests for custom rules in .eslintrc.js

// arrow-parens
const foo = bar => bar.id;

// class-methods-use-this
class MethodDoesNotUseThis {
  foo() {
    const bar = 'hah';
  }
}
