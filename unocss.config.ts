import transformerDirective from '@unocss/transformer-directives'
import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  transformers: [transformerDirective()],
  shortcuts: {
    'color-primary': 'color-[rgb(59, 130, 246)]',
  },
})
