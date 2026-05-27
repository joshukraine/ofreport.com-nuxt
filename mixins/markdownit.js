const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true,
});

const mila = require('markdown-it-link-attributes');

md.use(mila, {
  matcher: (href) => /^https?:\/\//.test(href),
  attrs: {
    target: '_blank',
    rel: 'noopener noreferrer',
  },
});

export default {
  methods: {
    renderMd(input) {
      return md.render(input);
    },
    renderInlineMd(input) {
      return md.renderInline(input);
    },
  },
};
