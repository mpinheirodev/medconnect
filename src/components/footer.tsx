
export function Footer() {
  return (
    <footer className="border-t border-slate-400 flex-1 flex items-center justify-center py-2 text-slate-900 font-semibold text-sm max-h-fit">
      &copy; MEGA | {new Date().getFullYear()} 
    </footer>
  )
}