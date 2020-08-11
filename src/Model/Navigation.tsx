export default interface INavigation {
  Path: string,
  Component: React.ComponentClass
  exact?: boolean
}