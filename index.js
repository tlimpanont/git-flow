// hotfix
module.exports = function() {
  return {
    start: function() {

    },
    getDate: function() {
      return new Date().toString();
    },
    sayHello: function() {
      return 'hello world!';
    }
  }
}
