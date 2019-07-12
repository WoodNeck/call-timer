const buildHelper = require('@egjs/build-helper');

const name = "CallTimer";

export default buildHelper([
		{
      name,
			input: "./src/index.umd.ts",
      output: "./lib/call-timer.js",
      format: "umd",
    },
    {
      name,
			input: "./src/index.umd.ts",
      output: "./lib/call-timer.min.js",
      format: "umd",
      uglify: true,
    },
    {
      input: "./src/index.ts",
      output: "./lib/call-timer.esm.js",
      format: "esm",
      exports: "named",
    },
]);

