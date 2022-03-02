import customBlocks from '@package/components/Blocks/customBlocks'

export default function applyConfig(config) {
  config.blocks = {
    ...config.blocks,
    blocksConfig: {
      ...config.blocks.blocksConfig,
      ...customBlocks},
  }
  return config;
}
