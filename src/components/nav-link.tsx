import { Link, LinkProps } from 'react-router'

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {

  return (
    <Link
      className="flex items-center gap-1.5 text-sm font-medium hover:text-emerald-400"
      {...props}
    />
  )
}