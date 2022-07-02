// eslint-disable-next-line no-undef
require('esbuild').build({
    entryPoints: ['./src/sw.js', './src/scripts/scrapping.profile.js', './src/scripts/scrapping.candidates.js'],
    bundle: true,
    target: ['chrome58', 'firefox57', 'safari11'],
    outdir: './dist',
    watch: true,

});