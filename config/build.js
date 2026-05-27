import Mode from 'frontmatter-markdown-loader/mode';
import MarkdownIt from 'markdown-it';
import mila from 'markdown-it-link-attributes';
import path from 'path';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

md.linkify.set({ fuzzyEmail: false }); // disables converting email to link

export default {
  extractCSS: true,
  quiet: false,
  /* eslint-disable-next-line no-unused-vars */
  extend(config, ctx) {
    config.module.rules.push({
      test: /\.md$/,
      include: path.resolve(__dirname, '../content'),
      loader: 'frontmatter-markdown-loader',
      options: {
        mode: [Mode.VUE_COMPONENT],
        markdownIt: md.use(mila, {
          matcher: (href) => /^https?:\/\//.test(href),
          attrs: {
            target: '_blank',
            rel: 'noopener noreferrer',
          },
        }),
        vue: {
          root: 'markdown',
        },
      },
    });
  },
};
