export const convertNameToPathName = (name: string) => {
  const pathName: string = name.toLowerCase().replace(' ', '-')
  return pathName
}
