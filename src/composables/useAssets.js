export default function useAssets(name) {
  const path = `/src/assets/images/${name}`
  const modules = import.meta.glob('/src/assets/images/*', { eager: true })
  const mod = modules[path]

  console.log(modules)

  if (mod === undefined) return

  return mod.default
}
