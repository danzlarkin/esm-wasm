# esm-wasm

An example of ESM + WASM for Cloudflare Workers

<hr>

## Prerequisites

* [wasm-pack](https://github.com/rustwasm/wasm-pack)

## Usage

Clone this repository to get started:

```bash
git clone git@github.com:danzlarkin/esm-wasm.git; cd esm-wasm
```

Now install the required dependencies with npm:

```bash
npm install
```

Run the following command to build then deploy with [@cloudflare/wrangler](https://github.com/cloudflare/wrangler)

```bash
npm build
```

You can also deploy to Cloudflare Workers using the following command:

```bash
npm deploy
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2022-present, Daniel Larkin