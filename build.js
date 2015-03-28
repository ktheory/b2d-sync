var nexe = require('nexe');

nexe.compile(
  {
    input: "./cli.js",
    nodeTempDir: "tmp",
    flags: true
  },
  function (err) {
    if (err) {
      console.log(err);
    }
  }
);
